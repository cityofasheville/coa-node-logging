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
  logger.error('This is a message');
  logger.info('This is a message with an object', { name1: 'value1', name2: 2 });
  logger.warn('This is a warning message');

````

If ```logFile``` is null, output will go to stdout. 

By default output will also be logged to the console. To suppress this, override the default value of the third parameter, `logToConsole`:

````
  const logger = new Logger(name, logFile, false);
````

## Installation
Install with
````
  npm install --save coa-node-logging
````
