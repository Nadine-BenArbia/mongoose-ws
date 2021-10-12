const { Router } = require('express');
const express = require ('express');
  const router = express.Router ();
   

 // test
  router.get("/test",(req,res) => {

      res.send ("hello"); 
  });


  // post : creat
  router.post("/", async (res,req) => {
      try {
      //add new person 
      const newperson= new person({... req.body});
     await newperson.save ();
     // error 
      res.send ({ msg: "add route", newperson });
        }
      catch (error) {
      res.status(400).send({msg: "user not saved ",error});
      }
  });
  
//get : find
 router.get ("/",async(req,res)=> {
     try {
     const findpersones= await person.find();
    
      res.send({findpersones,msg:"get all persons"});
     }
      catch (error) { 
     res.status(400).send({msg: "can not get",error});

     }
 });


//find byID
router.get ("/:id",async(req,res)=> {
    try {
    const {id}= req.params;
    const fiendpersonID = await person.findbyeId({_id:id});

    res.send({personlist,msg:"get person id ",fiendpersonID});
     } catch (error) { 

    res.status(400).send({msg: "can not get",error});

     }
 });


// find one 
router.get ("/:_id",async(req,res)=> {
    try {
    const {_id}= req.params;
    const fiendpersonID = await person.findOne({_id});

    res.send({personlist,msg:"get first person id ",fiendpersonID});
     } catch (error) { 

    res.status(400).send({msg: "can not get",error});

     }
 }); 


// delete 

router.delete("/:id ", async (req,res)=> { 
    try { 
        const { id }= req.params;
        await  person.deleteOne({_id});
        res.send({msg: "deleted"});

        
    }catch (error) { 
        res.status(400).send({msg:"cant delete"});

    }
});

// update 

router.put ("/:id",async(req,res)=> {
    try {
    const {id}= req.params;
     await person.updateOne({_id:id },{ $set:{... req.body} });

    res.send({msg:"updated ",fiendpersonID});
     } catch (error) { 

    res.status(400).send({msg: "can not update",error});

     }
 }); 


















  module.exports= Router; 