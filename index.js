const winston = require('winston')
require('winston-daily-rotate-file')

const consoleLogger = new winston.transports.Console()

class Logger {
  constructor(name, logFile, logToConsole = false) {
    this.name = name
    this.logFile = logFile
    this.logger = null
    this.logger = winston.createLogger({
      transports: []
    })
    const rtransport = new winston.transports.DailyRotateFile({
      filename: logFile,
      datePattern: 'YYYY-MM-DD',
      zippedArchive: false,
      maxSize: '10m',
      maxFiles: '7d',
      symlinkName: logFile,
    })

    if (logFile !== null) {
      this.logger.add(
        winston.createLogger({
          transports: [rtransport],
        })
      )
    }
    if (logToConsole) {
      this.logger.add(consoleLogger)
    }
  }

  error(message, details = {}, tag = null) {
    let msg = message
    if (Object.keys(details).length > 0) {
      msg = { message, details }
    }
    this.logger.error(msg)
  }

  info(message, details = {}, tag = null) {
    let msg = message
    if (Object.keys(details).length > 0) {
      msg = { message, details }
    }
    this.logger.info(msg)
  }

  warn(message, details = {}, tag = null) {
    let msg = message
    if (Object.keys(details).length > 0) {
      msg = { message, details }
    }
    this.logger.warn(msg)
  }
}

module.exports = Logger
