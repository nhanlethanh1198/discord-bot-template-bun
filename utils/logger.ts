import winston from 'winston';

declare global {
  var logger: winston.Logger;
}

const logColors = {
  error: 'red',
  warn: 'yellow',
  info: 'cyan',
  http: 'magenta',
  verbose: 'blue',
  debug: 'green',
  silly: 'grey',
} as const;

const emoji: Record<string, string> = {
  error: '🚨',
  warn: '⚠️ ',
  info: '👀',
  http: '🚀',
  verbose: '🔬',
  debug: '🐛',
  silly: '🐑',
} as const;

winston.addColors(logColors);

const logger = winston.createLogger({
  level: 'info',
  defaultMeta: '',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.colorize(),
    winston.format.printf((info) => {
      const rawLevel = info[Symbol.for('level')] as string;
      const emojiSymbol = emoji[rawLevel] || 'ℹ️';
      const message =
        typeof info.message === 'object'
          ? JSON.stringify(info.message)
          : info.message;
      return `${info.timestamp}: ${emojiSymbol} ${info.level}: ${message}`;
    })
  ),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
    new winston.transports.Console(),
  ],
});

logger.info('Logger initialized');

global.logger = logger;

export default logger;
