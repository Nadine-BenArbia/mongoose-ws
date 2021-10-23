const { Router } = require('express');
const express = require ('express');
const User = require('../Models/User');
const router = express.Router ();


//get : find
router.get ("/",async(req,res)=> {
    try {
    const findUser= await User.find();
   
     res.send({findUser,msg:"get all Users"});
    }
     catch (error) { 
    res.status(400).send({msg: "can not get",error});

    }
});


  // post : creat
  router.post("/", async (res,req) => {
    try {
    //add User 
    const newUser= new User({... req.body});
   await newUser.save ();
   // error 
    res.send ({ msg: "add route", newUser });
      }
    catch (error) {
    res.status(400).send({msg: "user not saved ",error});
    }
});


// update 

router.put ("/:id",async(req,res)=> {
    try {
    const {id}= req.params;
     await User.updateOne({_id:id },{ $set:{... req.body} });

    res.send({msg:"updated ",fiendUserID});
     } catch (error) { 

    res.status(400).send({msg: "can not update",error});

     }
 }); 


// delete 

router.delete("/:id ", async (req,res)=> { 
    try { 
        const { id }= req.params;
        await  User.deleteOne({_id});
        res.send({msg: "deleted"});

        
    }catch (error) { 
        res.status(400).send({msg:"can't delete"});

    }
});
module.exports= Router; 