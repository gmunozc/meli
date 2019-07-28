import * as express from 'express';
import ItemsRouter from "../items";
import AppController from "../../controllers/app";

const appRouter = express.Router();

appRouter.get('/', AppController.index);

appRouter.use('', ItemsRouter);
export default appRouter;
