var Model = require('../models/students');
const chalk = require('chalk');

exports.modelsTest = function (req, res) {
    res.json({ msg: 'Posts Works' })
};

exports.selListModlNm = function(req,res){
    Model.find({})    
    .exec(function (err, students) {
        res.send({
            students
        })
    });
};
exports.createModels = function(req,res){
    const newModel = new Student({
        STUDENT_NM: req.body.STUDENT_NM,
        STUDENT_ADDRESS: req.body.STUDENT_ADDRESS,
        STUDENT_PHONE: req.body.STUDENT_PHONE,
        STUDENT_GMAIL: req.body.STUDENT_GMAIL,
       
      });
      newModel.save().then(students => res.json(students));
};
exports.getListStudent= function(req,res)
{
    Model.find((err,docs)=>{

        if(err){
            Console.log('Error get list student');
        }
        else{
            res.send({
                listStudent:docs,
                

            });
        }
    });
};
exports.getListStudentDtl = (req,res)=>
{
    Model.findById( req.params.id,(err,docs)=>{
      if(err)
      {
          Console.log("Error get list by id");
      }
      else{
          res.send({
              listStudentById:docs,
              
          })
      }
    });
}
exports.deleteStudent = (req,res)=>
{
    Model.findByIdAndDelete( {_id:req.params.id},(err,docs)=>{
        if (err) throw err;
        console.log("1 document deleted");
        res.send({})
        res.json(req.body.inDv);
    });
}
exports.updateStudent = (req,res)=>
{
    let data= req.body;
   Model.updateOne({_id:req.params.id},
    {
    $set:{"STUDENT_NM":data.STUDENT_NM,"STUDENT_ADDRESS":data.STUDENT_ADDRESS,"STUDENT_PHONE":data.STUDENT_PHONE,"STUDENT_GMAIL":data.STUDENT_PHONE}
    },
    
    (err,doc)=>{
    if (!err) 
    {
        console.log("1 document update");
        res.send("1 document update\t" + req.params.id);
        res.json(req.body.inDv);
    }
    
   });
}

