const bunyan = require('bunyan');

class Logger {
  constructor(name, logFile) {
    this.name = name;
    this.logFile = logFile;
    this.logger = null;
    if (logFile) {
      this.logger = bunyan.createLogger({ name, streams: [{ level: 'info', path: logFile }] });
    } else {
      this.logger = bunyan.createLogger({ name, stream: process.stdout, level: 'info' });
    }
  }

  error(message, tag = null, details = {}) {
    if (process.env.debugging === 'true') {
      console.log(`Error ${tag ? '('+tag+')' : ''}: ${message}`);
      if (Object.keys(details).length > 0) {
        console.log(`   Details: ${JSON.stringify(details)}`);
      }
    } else {
      this.logger.error({ details: Object.assign({}, details, { severity: 'error', tag }) }, message);
    }
  }

  info(message, tag = null, details = {}) {
    if (process.env.debugging === 'true') {
      console.log(`Info ${tag ? '('+tag+')' : ''}: ${message}`);
      if (Object.keys(details).length > 0) {
        console.log(`   Details: ${JSON.stringify(details)}`);
      }
    } else {
      this.logger.info({ details: Object.assign({}, details, { severity: 'info', tag }) }, message);
    }
  }

  warn(message, tag = null, details = {}) {
    if (process.env.debugging === 'true') {
      console.log(`Warn ${tag ? '('+tag+')' : ''}: ${message}`);
      if (Object.keys(details).length > 0) {
        console.log(`   Details: ${JSON.stringify(details)}`);
      }
    } else {
      this.logger.warn({ details: Object.assign({}, details, { severity: 'warn', tag }) }, message);
    }
  }
}

module.exports = Logger;

