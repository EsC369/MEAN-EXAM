const mongoose = require('mongoose')

const ReviewSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: [3, 'name must have at least 3 characters']},
    stars: {type: Number, required: true, min:1, max:5},
    review: {type: String, required: true, minlength: [3, 'name must have at least 3 characters']}
})

const TableSchema = new mongoose.Schema({
    title: {type: String, required: true, minlength: [3, 'title must have at least 3 characters']},
    review: [ReviewSchema]  
}, {timestamps: true});
module.exports = mongoose.model('Movie', TableSchema);