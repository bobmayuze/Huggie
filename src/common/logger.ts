import * as pino from 'pino';

const Logger = pino({
  name: process.env.APP_ID,
  level: process.env.LOG_LEVEL,
});

export default Logger;
