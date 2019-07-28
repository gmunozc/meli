"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = require("node-fetch");
class ItemsController {
    constructor() {
        this.index = this.index.bind(this);
        this.search = this.search.bind(this);
        this.getCategories = this.getCategories.bind(this);
        this.getItems = this.getItems.bind(this);
    }
    index(req, res) {
        res.render('items/index');
    }
    async search(req, res) {
        const { query } = req.query;
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
                const response = await node_fetch_1.default(url);
                if (response.ok) {
                    const json = await response.json();
                    data.categories = this.getCategories(json);
                    data.items = this.getItems(json);
                }
            }
            res.json(data);
        }
        catch (error) {
            console.log(error);
            res.status(500).json({
                message: 'server error',
                error
            });
        }
    }
    async detail(req, res) {
        const { id } = req.params;
        const url = `https://api.mercadolibre.com/items/${id}`;
        console.log('url', url);
        try {
            const data = {
                author: {
                    name: "Gonzalo",
                    lastname: "Muñoz"
                },
                item: null
            };
            const responseItem = await node_fetch_1.default(url);
            const responseDescription = await node_fetch_1.default(`${url}/description`);
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
        }
        catch (error) {
            console.log(error);
            res.status(500).json({
                message: 'server error',
                error
            });
        }
    }
    getCategories(json) {
        const { filters, available_filters } = json;
        const search_filter = filters.length ? filters : available_filters;
        const categoriesFilter = search_filter.find(function (filter) {
            return filter.id === "category";
        });
        try {
            return categoriesFilter.values.map(function (cat) {
                return cat.name;
            });
        }
        catch (err) {
            return [];
        }
    }
    getItems(json) {
        const { results } = json;
        return results.slice(0, 4).map((result) => {
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
exports.default = new ItemsController();
//# sourceMappingURL=index.js.map