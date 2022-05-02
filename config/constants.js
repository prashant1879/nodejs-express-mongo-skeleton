'use strict';

module.exports = {
  secret: 'THIS-SECRET-NEEDS-TO-BE-CHANGE',
  baseDomain: 'https://SAMPLE-PROJECT-WEBSITE.COM/',
  apiDomain: 'https://api.SAMPLE-PROJECT-WEBSITE.COM/',
  dateFormat: 'YYYY-MM-DD',
  timeFormat: 'h:mm:s a',
  dateTimeFormat: 'YYYY-MM-DD h:mm:s a',
  timeZone: 'Asia/Calcutta',
  secretKey: 'THIS-SECRET-NEEDS-TO-BE-CHANGE',
  redisconf: { 
      dbPort: 6379,
      debug: false,
      dbHost: '127.0.0.1',
      dbOptions: {
          auth_pass: 'SAMPLE-AUTH-KEY',
          no_ready_check: true,
      }
  },
};