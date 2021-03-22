'use strict';
var movie = require('../../schema/movie.js').model;
exports.getMovies = async function (req, res) {
    try {

        let data = await movie.find({ isActive: true });
        returnResponse(res, 200, true, "get Records successfuly", data);

    } catch (e) {
        returnResponse(res, 500, false, "Error While Saving", e);
    }
}

exports.createRecord = async function (req, res) {
    try {
        let Options = req.body || {};
        Options.createdDate = new Date();
        let movies = new movie(Options);
         const data = await movies.save();
        returnResponse(res, 200, true, "created Records successfuly", data);

    } catch (e) {
        returnResponse(res, 500, false, "Error While Saving", e);
    }
}
exports.UpdateRecords = async function (req, res) {
    try {
        let Options = req.body;
        let id = Options._id;
        Options.createdDate = new Date();

        
         const data = await movie.updateOne({_id: id}, {$set: req.body.data});
        returnResponse(res, 200, true, "created Records successfuly", data);

    } catch (e) {
        returnResponse(res, 500, false, "Error While Saving", e);
    }
}


function returnResponse(res, statusHttp, statusBool, message, data) {
    res.status(statusHttp);
    new Promise((resolve, reject) => {
        resolve(res.json({
            statusHttp: statusHttp,
            statusBool: statusBool,
            message: message,
            data: data
        }))
    });
}