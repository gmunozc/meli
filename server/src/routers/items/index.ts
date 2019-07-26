import * as express from 'express';
import ItemsController from '../../controllers/items'

const itemsRouter = express.Router();
itemsRouter.get('/', ItemsController.index);

export default itemsRouter;