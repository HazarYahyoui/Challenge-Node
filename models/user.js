const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const userSchema= new mongoose.Schema({
    firstName : {type: String, required: true},
    lastName : {type: String, required: true},
    email : {type: String, required: true},
    password : {type: String, required: true},
    age : {type: String, required: true},
    todos: [{type: mongoose.Schema.Types.ObjectId, ref: 'ToDo'}]

})

module.exports = mongoose.model('User', userSchema);