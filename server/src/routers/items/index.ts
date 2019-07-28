import * as express from 'express';
import ItemsController from '../../controllers/items'

const itemsRouter = express.Router();
itemsRouter.get('/items', ItemsController.index);

itemsRouter.get('/api/items', ItemsController.search);
itemsRouter.get('/api/items/:id', ItemsController.detail);

export default itemsRouter;
