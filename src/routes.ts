import { Application } from 'express';
import { exampleRouter } from './api/controllers/examples/router';
import { userRouter } from './api/controllers/users/router';

export default function routes(app:Application) : void {
  app.use('/api/v1/examples', exampleRouter);
  app.use('/api/v1/users', userRouter);
}