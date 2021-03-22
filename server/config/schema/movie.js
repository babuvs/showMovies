'use strict';
var mongoose = require('../db.js').mongoose;
var Schema = mongoose.Schema;

var movieSchema = new Schema({
  title: { type: String },
  yearOfRelease: { type: String },
  genre: String,
  storyline: String,
  createdDate: Date,
  isActive: {
    type: Boolean,
    default: true
  },
  cast: [
    {
      filetype: {
        type: String,
      },
      filename: {
        type: String,
      },

      filesize: {
        type: String,
      },
      name: String,
      base64: {
        type: String,
      }
    }
  ],
  bannerImage: {
    base64: String,
    filesize: String,
    filename: String,
    filetype: String,
  }

}, {
  usePushEach: true,
});

var movie = mongoose.model('movie', movieSchema, 'movie');

exports.model = movie;