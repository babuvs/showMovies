const mongoose = require('mongoose');
async function createconnection() {
    await mongoose.connect('mongodb://localhost/movies', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
      });
};
createconnection();
exports.mongoose = mongoose;