const bunyan = require('bunyan');

function createLogger(name, logFile) {
  let logger;
  if (logFile) {
    logger = bunyan.createLogger({ name, streams: [{ level: 'info', path: logFile }] });
  } else {
    logger = bunyan.createLogger({ name, stream: process.stdout, level: 'info' });
  }
  return logger;
}

module.exports = {
  createLogger
};
