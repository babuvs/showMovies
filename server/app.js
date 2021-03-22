var app = require('./config/express/express.js').app;
require('./config/db.js');
app.listen(3000, console.log('db connected'));