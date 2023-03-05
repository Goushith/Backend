const mongoose = require('mongoose')

// mongoose.connect('mongodb://localhost:27017/Table')


mongoose.connect('mongodb://127.0.0.1:27017/Table')
.then(() => console.log("Mongoose connected successfully"))

const User = mongoose.model('User',{

    fname:String,
    lname:String,
    job:String,
    number:Number
})

module.exports={
    User
}