const mongoose= require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/eloque")

const ownerSchema = mongoose.Schema({
    fullname:String,
    email: String,
    password:String,
    
    products:{
    type: Array,
    default:[],
},
    contact: Number,
    picture: String,
    gstin: String
})


module.exports= mongoose.model("owner", ownerSchema);