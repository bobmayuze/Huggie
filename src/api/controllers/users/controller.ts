import { UserService } from '../../services/users.service';
import { Request, Response } from 'express';
import Logger from '../../../common/logger';

const userService = new UserService();

async function wait(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

export class UserController {

    public async demo(req:Request, res:Response) {
        Logger.info('before wait', new Date());
        await wait(1000);
        Logger.info('after wait', new Date());
        let result = '"2333"';
        result = await userService.createUser();
        Logger.info(result);
        userService.findUser();
        res.json({msg:'success'});
    }

}