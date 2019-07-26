import * as express from 'express';
import AppController from '../../controllers/app'

const appRouter = express.Router();
appRouter.get('/', AppController.index);

export default appRouter;
