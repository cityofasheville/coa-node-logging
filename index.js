const winston = require('winston');

const consoleLogger = new winston.transports.Console();

class Logger {
  constructor(name, logFile, logToConsole=true) {
    this.name = name;
    this.logFile = logFile;
    this.logger = null;
    this.logger = winston.createLogger({
      transports: []
    });
    if (logFile !== null) {
      this.logger.add(new winston.transports.File({ filename: logFile }));
    }
    if (logToConsole) {
      this.logger.add(consoleLogger);
    }
  }

  error(message, details = {}, tag = null) {
    let msg = message;
    if (Object.keys(details).length > 0) {
      msg = { message, details };
    }
    this.logger.error(msg);
  }

  info(message, details = {}, tag = null) {
    let msg = message;
    if (Object.keys(details).length > 0) {
      msg = { message, details };
    }
    this.logger.info(msg);
  }

  warn(message, details = {}, tag = null) {
    let msg = message;
    if (Object.keys(details).length > 0) {
      msg = { message, details };
    }
    this.logger.warn(msg);
  }
}

module.exports = Logger;

