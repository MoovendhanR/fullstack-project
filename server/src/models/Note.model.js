const mongoose = require('mongoose');


const notesSchema =new mongoose.Schema({
       title:{type:String,required:true},
       notes:{type:String,required:true},
       category:{type:String,required:true},
    //    profilePic:[{type:String,required:false}],
       userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
       }

},{
    versionKey:false,
    timestamps:true
})

const Notes = mongoose.model('note',notesSchema);

module.exports = Notes;