import * as express from 'express';
import { Application } from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import * as http from 'http';
import * as os from 'os';
import * as cookieParser from 'cookie-parser';
import swaggerify from './swagger';
import l from './logger';
import * as bluebird from 'bluebird';
// import * as mongoose from 'mongoose';
import mongoose = require('mongoose');

const app = express();

export default class ExpressServer {
  constructor() {
    const root = path.normalize(__dirname + '/../..');
    app.set('appPath', root + 'client');
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cookieParser(process.env.SESSION_SECRET));
    app.use(express.static(`${root}/public`));
    mongoose.Promise = bluebird;
    mongoose.connect('mongodb://HuggieDev:HuggieDevPass@huggie_mongo:27017/HuggieDB');
    mongoose.connection.on('connected', () => {
      console.log(`Connected to your HuggieDB`);
    });
  }

  public router(routes:(app:Application) => void) : ExpressServer {
    swaggerify(app, routes);
    return this;
  }

  public listen(port:number = parseInt(process.env.PORT)) : Application {
    const welcome = (port) => () => l.info(`up and running in ${process.env.NODE_ENV || 'development'} @: ${os.hostname() } on port: ${port}}`);
    http.createServer(app).listen(port, welcome(port));
    return app;
  }
}