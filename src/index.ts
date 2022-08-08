import 'dotenv/config';
process.env['NODE_CONFIG_DIR'] = __dirname + '/config';
import config from 'config';
import express from 'express';
import expressWinston from 'express-winston';
import winston from 'winston';
import cors from 'cors';
import helmet from 'helmet';
import routesV1 from './routes/08-2022';
import { initializeScheduledJobs, initializeDatabase } from './loaders/startup';
// import errorMiddleware from '@middlewares/error.middleware';
// import notfoundMiddleware from './middlewares/notfound.middleware';

const app = express();

initializeDatabase();
initializeScheduledJobs();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: config.get('server.cors.origin'), credentials: config.get('server.cors.credentials') }));
app.use(helmet());

app.use(
  expressWinston.logger({
    transports: [new winston.transports.Console()],
    format: winston.format.combine(winston.format.colorize(), winston.format.json()),
  }),
);

// Routes
app.use('/v1', routesV1);

app.use(
  expressWinston.errorLogger({
    transports: [new winston.transports.Console()],
    format: winston.format.combine(winston.format.colorize(), winston.format.json()),
  }),
);

// app.use(errorMiddleware);
// app.use(notfoundMiddleware);

app.listen(process.env.PORT, () => {
  console.log('The application is listening on port 8000!');
});
