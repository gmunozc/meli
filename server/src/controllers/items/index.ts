import {Request, Response} from 'express';
import fetch from 'node-fetch'

class ItemsController {

  constructor() {
    this.index = this.index.bind(this);
    this.search = this.search.bind(this);
    this.getCategories = this.getCategories.bind(this);
    this.getItems = this.getItems.bind(this);
  }

  public index(req: Request, res: Response): void {
    res.render('items/index');
  }

  public async search(req: Request, res: Response) {
    const {query} = req.query;
    try {
      const data = {
        author: {
          name: "Gonzalo",
          lastname: "Muñoz"
        },
        categories: [],
        items: []
      };
      if (query && query.length) {
        const url = encodeURI(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`);
        const response = await fetch(url);
        if (response.ok) {
          const json = await response.json();
          data.categories = this.getCategories(json);
          data.items = this.getItems(json);
        }
      }
      res.json(data);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: 'server error',
        error
      })
    }
  }

  public async detail(req: Request, res: Response) {
    const {id} = req.params;
    const url = `https://api.mercadolibre.com/items/${id}`;
    console.log('url', url);
    try {
      const data: any = {
        author: {
          name: "Gonzalo",
          lastname: "Muñoz"
        },
        item: null
      };
      const responseItem = await fetch(url);
      const responseDescription = await fetch(`${url}/description`);
      if (responseItem.ok && responseDescription.ok) {
        const jsonItem = await responseItem.json();
        const jsonDescription = await responseDescription.json();
        const price = jsonItem.price.toString().split('.');
        data.item = {
          id: jsonItem.id,
          title: jsonItem.title,
          price: {
            currency: jsonItem.currency_id,
            amount: parseInt(price[0]),
            decimals: price.length > 1 ? price[1] : 0
          },
          picture: jsonItem.secure_thumbnail,
          condition: (jsonItem.condition === 'new') ? 'Nuevo' : 'Usado',
          free_shipping: jsonItem.shipping.free_shipping,
          sold_quantity: jsonItem.sold_quantity,
          description: jsonDescription.plain_text
        };
      }
      res.json(data);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: 'server error',
        error
      })
    }
  }

  private getCategories(json: any) {
    const {filters, available_filters} = json;
    const search_filter = filters.length ? filters : available_filters;
    const categoriesFilter = search_filter.find(function (filter: any) {
      return filter.id === "category"
    });
    try {
      return categoriesFilter.values.map(function (cat: any) {
        return cat.name;
      });
    } catch (err) {
      return []
    }
  }

  private getItems(json: any) {
    const {results} = json;
    return results.slice(0, 4).map((result: any) => {
      const price = result.price.toString().split('.');
      return {
        id: result.id,
        title: result.title,
        price: {
          currency: result.currency_id,
          amount: parseInt(price[0]),
          decimals: price.length > 1 ? price[1] : 0
        },
        picture: result.thumbnail,
        condition: (result.condition === 'new') ? 'Nuevo' : 'Usado',
        free_shipping: result.shipping.free_shipping,
        location: `${result.seller_address.state.name}`
      };
    });
  }
}

export default new ItemsController();
