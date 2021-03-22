'use strict';

module.exports = function (app) {

    app.use('/api/movies', require('../api/controller'));
};