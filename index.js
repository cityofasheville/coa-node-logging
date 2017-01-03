const bunyan = require('bunyan');

function createLogger(name, logFile) {
  let logger;
  if (logFile) {
    logger = bunyan.createLogger({ name: 'COAProcessing', streams: [{ level: 'info', path: args.options.log }] });
  } else {
    logger = bunyan.createLogger({ name: 'COAProcessing', stream: process.stdout, level: 'info' });
  }
  return logger;
}

module.exports = {
  createLogger
};
