import 'dotenv/config';
process.env['NODE_CONFIG_DIR'] = __dirname + '/config';
import config from 'config';
import express from 'express';
import expressWinston from 'express-winston';
import winston from 'winston';
import cors from 'cors';
import helmet from 'helmet';
import routes082022 from './routes/08-2022';
import { initializeScheduledJobs, initializeDatabase } from './loaders/startup';
// import errorMiddleware from '@middlewares/error.middleware';
// import notfoundMiddleware from './middlewares/notfound.middleware';

const port = process.env.PORT || config.get('server.port') || 8000;

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
    format: winston.format.combine(winston.format.json()),
  }),
);

// Routes
app.use('/08-2022', routes082022);

app.use(
  expressWinston.errorLogger({
    transports: [new winston.transports.Console()],
    format: winston.format.combine(winston.format.json()),
  }),
);

// app.use(errorMiddleware);
// app.use(notfoundMiddleware);

app.listen(port, () => {
  console.log(`The application is listening on port ${port}!`);
});
