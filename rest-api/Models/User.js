const mongoose = require ("mongoose");

// model
const UserSchema = mongoose.Schema({ 
    User_name :  { 
        type: String,
        required :true,
        unique :true,
    },

    User_lastname :{
      type:String,
      required:True 
    },
    User_age:  { 
        type: Number,
        required :true,
    },

    User_mail :  { 
        type: String,
        required :true,
    },

});




module.exports= User= mongoose .model ("User",UserSchema);