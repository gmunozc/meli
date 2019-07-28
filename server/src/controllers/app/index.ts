import {Request, Response} from 'express';

class AppController {

  public index(req: Request, res: Response): void {
    res.render('items/index');
  }
}

export default new AppController();
