const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema ({
    title: {
        type: String,
        required: true
      },
      isbn: {
        type: String,
        required: true
      },
      author: {
        type: String,
        required: true
      },
      updated_date: {
        type: Date,
        default: Date.now
      }
    });
    
    module.exports = Book = mongoose.model('book', BookSchema);
    