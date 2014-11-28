var Common = require(global.__commonModule);
var routes = require('./lib/routes');

// Load the app and mount it within OpenMRS ID
routes(Common.app);