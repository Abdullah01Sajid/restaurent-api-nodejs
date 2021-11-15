const express = require('express');
const mongoose= require('mongoose')
const router = express.Router();
const Persons = require('../schema/scheema');


router.get('/',async (req,res)=>{
    const people= await Persons.find();
    res.json(people); 
})
router.get('/:userId',async (req,res)=> {
   const single= await Persons.findById(req.params.userId);
   res.json(single);
})
router.delete('/:userId',async (req,res)=> {
   const singleRemove= await Persons.deleteOne({_id:req.params.userId});
   res.json(singleRemove);
})
router.post('/',async (req,res)=> {
    const person= await new Persons({
        name:req.body.name,
        direction:req.body.direction,
    })
    try {
        const savedPerson= await person.save();
        res.json(savedPerson);
    } catch (error) {
        {message :error}
    }


})


module.exports=router;