import * as express from 'express';
import * as compression from 'compression';
import * as path from "path";
import ItemsRouter from "./routers/items";
import appRouter from "./routers/app";

const app = express();

app.use(compression());

const viewDirectory = path.join(__dirname, '../views');
app.set('view engine', 'pug');
app.set('view cache', false);
app.set('views', viewDirectory);

const staticDirectory = path.join(__dirname, '../public');
app.use('/static', express.static(staticDirectory, {maxAge: '30 days'}));

app.use('', appRouter);
app.use('/items', ItemsRouter);

app.listen(3000, () => {
    console.log(
      'Server is running at http://localhost:3000'
    );
    console.log(`Press CTRL-C to stop`);
  }
);
