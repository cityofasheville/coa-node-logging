const Logger = require('./index')

console.log('Starting')

const outputFile = './output.log'

const logger = new Logger('test', outputFile)

logger.warn('Hello', { type: 'test', value: 33 })
logger.error('error', { type: 'error', value: 500 })
logger.info('Goodbye')
