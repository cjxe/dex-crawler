/* eslint-disable no-shadow */
// require functions/dependencies for "logging"
const { format, createLogger, transports } = require('winston');

const {
  printf, combine, colorize, timestamp, errors,
} = format;

// set "log format"
const logFormat = printf(({
  level, message, timestamp, stack,
}) => `${timestamp} ${level}: ${stack || message}`);

// initialise `logger`
const logger = createLogger({
  level: 'debug',
  format: combine(
    colorize(),
    timestamp(),
    errors({ stack: true }),
    logFormat,
  ),
  transports: [new transports.Console()],
});

module.exports = logger;
