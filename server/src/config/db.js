const mongoose = require('mongoose');

const connect = async() => {
    return await mongoose.connect("mongodb+srv://moovendhanr:moovendhanr@cluster0.btfpnf7.mongodb.net/fullstack-project?retryWrites=true&w=majority",{useNewUrlParser: true})
} 


module.exports=connect;