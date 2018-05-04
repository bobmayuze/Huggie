import * as express from 'express';
import { UserController } from './controller';
import { UserService } from '../../services/users.service';
const controller = new UserController();
export const userRouter = express.Router()
    .get('/', controller.demo);