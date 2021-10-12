const mongoose = require ("mongoose");

// model
const personSchema = mongoose.Schema({ 
    name :  { 
        type: String,
        required :true,
        unique :true,
    },

    lastname :{
      type:String,
      required:True 
    },
    age:  { 
        type: Number,
        required :true,
    },

    favoriteFoods :  { 
        type: String,
        required :true,
    },

});




module.exports= person= mongoose .model ("person",personSchema);