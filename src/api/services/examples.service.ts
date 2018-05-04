import * as Promise from 'bluebird';
import Logger from '../../common/logger';
import { UserSchema, UserModel } from '../schemas/user';
import { User } from '../interfaces/user';

let id = 0;
interface Example {
  id:number;
  name:string;
}

const examples:Example[] = [
  { id: id++, name: 'example 0' },
  { id: id++, name: 'example 1' },
  { id: id++, name: 'example 2' },
];

export class ExamplesService {
  public all() : Promise<Example[]> {
    Logger.info(examples, 'fetch all examples');
    return Promise.resolve(examples);
  }

  public byId(id:number) : Promise<Example> {
    Logger.info(`fetch example with id ${id}`);
    return this.all().then((r) => r[id]);
  }

  public create(name:string) : Promise<Example> {
    Logger.info(`create example with name ${name}`);
    const example:Example = {
      id: id++,
      name,
    };
    examples.push(example);
    return Promise.resolve(example);
  }

  // public createUser() : any {
  //   const newUser:User = {
  //     email: `yuze@123.com`,
  //     firstName: `yuze`,
  //     lastName: `ma`,
  //   };
  //   const result = new UserModel(newUser).save();
  // }

  // public getAlluser() : any {
  //   UserModel.find({}, (result) => {
  //     console.log(result);
  //   });
  //   return {msg:'success'};
  // }
}

export default new ExamplesService();