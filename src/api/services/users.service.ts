// import * as Promise from 'bluebird';
import Logger from '../../common/logger';
import { UserSchema, UserModel } from '../schemas/user';
import { User } from '../interfaces/user';
import { TIMEOUT } from 'dns';

const users:User[] = [
  { email: 'yuze.ma@code.game',
    firstName: 'Yuze',
    lastName: 'Ma',
  },
];

export class UserService {
    constructor() { }
    public async test() {
        await setTimeout(
          () => { Logger.info('You called test function in user.serveice.ts in a settimeout'); },
          3000,
        );
        Logger.info('You called test function in user.serveice.ts');
    }

    public createUser() : any {
      const newUser:User = {
        email: `yuze@123.com`,
        firstName: `yuze`,
        lastName: `ma`,
      };
      const result = new UserModel(newUser).save();
    }

    public findUser() {
      UserModel.find({}, (err:any, res:UserModel[]) => {
        if (err) {
          Logger.info(err);
        }
        Logger.info(res);
      });
    }
}
