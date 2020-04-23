/* test/index.js */
const Logger = require('../index')
const chai = require('chai')
const chaiFiles = require('chai-files')
const fs = require('fs')

chai.use(chaiFiles)

const expect = chai.expect
const file = chaiFiles.file

const today = new Date().toISOString().split('T')[0]
const filename = 'test.log.' + today

describe('#logger()', function () {
  before(function () {
    // write a test log file
    const outputFile = './test.log'
    const logger = new Logger('test', outputFile)

    logger.warn('Hello', { type: 'test', value: 33 })
    logger.error('error', { type: 'error', value: 500 })
    logger.info('Goodbye')
  })

  context('write the days file if  it  doesnt exist', function () {
    it('should write to a file with the output name and todays date', function () {
      expect(file(filename)).to.exist
    })
  })
  context('write an info message', function () {
    it('should have an info level message in the file', function () {
      expect(file(filename)).to.contain('info')
    })
  })
  context('write an warn message', function () {
    it('should have an warning level message in the file', function () {
      expect(file(filename)).to.contain('warn')
    })
  })
  context('write an error message', function () {
    it('should have an error level message in the file', function () {
      expect(file(filename)).to.contain('error')
    })
  })

  after(function () {
    // remove test log file
    try {
      fs.unlinkSync(filename)
    } catch (err) {
      console.error(err)
    }
  })
})
