const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema ({
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
      },
      img: {
        type: String,
        default: "https://bitsofco.de/content/images/2018/12/broken-1.png"
      }
    });
    
module.exports = Book = mongoose.model('book', BookSchema);
    