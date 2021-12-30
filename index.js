const GUN = require('gun');
const server = require('http').createServer().listen(9090);
const gun = GUN({web: server});
