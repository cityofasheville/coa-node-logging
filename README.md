# coa-node-logging
Common interface to logging for COA node scripts

## Logging Standards

City of Asheville node applications should follow the [logging guidelines](https://www.owasp.org/index.php/Logging_Cheat_Sheet#Which_events_to_log) from [The Open Web Application Security Project](https://www.owasp.org/index.php/About_The_Open_Web_Application_Security_Project) (OWASP).

## Usage

````
  const logFile = 'path-to-log-file';
  const name = 'test-logger'; 
  const Logger = require('coa-node-logging');
  const logger = new Logger(name, logFile);
  const testObject = {
    field1: 123,
    field2: "A string",
  };
  logger.info('This is a message');
  logger.info('This is a message with an object', { name1: 'value1', name2: 2 });
  logger.warn('This is a warning message');
  logger.error('This is an error message + object + tag', testObject, 'Priority1');
````

If ```logFile``` is null, output will go to stdout. 

The standard output format for the logger (which is based on [bunyan](https://github.com/trentm/node-bunyan)) is JSON, however, if the environment variable 'debugging' is set to 'true', logging will be output to stdout in human-readable form.

To view a readable version of the JSON output, specify an output file and then use the bunyan cli tool to read. Thus, if the output is in errors.log, then simply run:
````
  ./node_modules/.bin/bunyan errors.log
````


## Installation
Install with
````
  yarn add bunyan
````
