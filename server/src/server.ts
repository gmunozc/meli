import * as express from "express";
import * as compression from "compression";
import * as favicon from "serve-favicon";
import * as path from "path";
import * as morgan from "morgan";
import appRouter from "./routers/app";

const app = express();

app.use(compression());

const viewDirectory = path.join(__dirname, '../views');
app.set('view engine', 'pug');
app.set('view cache', false);
app.set('views', viewDirectory);

const staticDirectory = path.join(__dirname, '../public');
app.use('/static', express.static(staticDirectory, {
  maxAge: '30 days'
}));

app.use(favicon(path.join(__dirname, '../public/favicon.ico')));

morgan.token('remote-addr', (req: express.Request): string => {
  return (req.headers['x-real-ip'] as string) || (req.headers['x-forwarded-for'] as string) || req.connection.remoteAddress || '';
});
app.use(morgan('[:date[clf]] [INFO]: :remote-addr :method :url :status :response-time ms - :res[content-length]'));
app.use('', appRouter);

app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.status(404).json({
    message: 'Not Found',
    status: 404
  });
});

app.listen(3000, () => {
  console.log(
    'Server is running at http://localhost:3000'
  );
  console.log(`Press CTRL-C to stop`);
});
