'use strict';

const server = require('http').createServer();
const startDB = require('./server/db');
const chalk = require('chalk');
const _Port = 3001;
const Promise = require('bluebird');
let io = null;

const doISync = require('cli-interact').getYesNo;
let syncTruth = doISync(chalk.cyan('Rick, do you wanna get savage on this database? (Force Sync)'));

startDB(syncTruth)
  .then(() => server.on('request', require('./server')))
  .then(() => io = require('./server/sockets')(server))
  .catch(err => console.error(err))
  .finally(() => server.listen(_Port, () => console.log(chalk.magenta(`Meme magic has begun on Port ${_Port}`)))
);