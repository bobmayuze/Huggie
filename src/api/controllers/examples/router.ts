import * as express from 'express';
import { Controller } from './controller';
const controller = new Controller();
export const router = express.Router()
    .post('/', controller.create)
    .get('/', controller.all)
    .get('/:id', controller.byId);