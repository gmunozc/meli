import {Request, Response} from 'express';

class AppController {

  public index(req: Request, res: Response): void {
    res.redirect('/items/')
  }
}

export default new AppController();
