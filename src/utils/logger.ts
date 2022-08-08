import { createLogger, format, transports } from 'winston';
import { LoggingWinston } from '@google-cloud/logging-winston';

const logger = createLogger({
  level: process.env.LOG_LEVEL,
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss.SSS' }),
    format.splat(),
    format.colorize(),
    format.printf(({ level, message, label, timestamp }) => `${timestamp} ${label || '-'} ${level}: ${message}`),
  ),
});

if (process.env.NODE_ENV === 'production') {
  // Google App Engine
  const loggingWinston = new LoggingWinston();
  logger.add(loggingWinston);
} else {
  // Now Zeit
  logger.add(new transports.Console());
}

export { logger };
