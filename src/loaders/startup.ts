import { AppDataSource } from './dataSource';
import CronJob from 'node-cron';
import { logger } from '@utils';

export const initializeScheduledJobs = () => {
  //*/1 * * * * (every minute)
  //0 */1 * * * (every hour)
  const scheduledJobFunction = CronJob.schedule('0 */1 * * *', async () => {
    logger.info('run job');
  });

  scheduledJobFunction.start();
};

export const initializeDatabase = () => {
  AppDataSource.initialize()
    .then(async () => {
      logger.info('initialize database');
    })
    .catch(exception => logger.error(exception));
};
