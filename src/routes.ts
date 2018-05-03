import { Application } from 'express';
// import examplesRouter from './api/controllers/examples/router';
import { router } from './api/controllers/examples/router';
export default function routes(app:Application) : void {
  app.use('/api/v1/examples', router);
}