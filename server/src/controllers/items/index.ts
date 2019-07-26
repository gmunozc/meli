import {Request, Response} from 'express';

class ItemsController {

  public index(req: Request, res: Response): void {
    res.render('items/index');
  }
}

export default new ItemsController();
