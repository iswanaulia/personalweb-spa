var logger = require("./utils/logger");
var app = require("./apps");
const port = process.env['PORT'] || 3003
app.listen(port, () => logger.info('Magic happens on port '+port+' !!!'))