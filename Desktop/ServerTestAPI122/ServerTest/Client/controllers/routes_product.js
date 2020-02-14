const express=require('express');
var route=express.Router();


route.get('/',(req,res)=>{
res.render("products/AddOrEdit",{
 viewTitle:"Insert Product"
});
});

module.exports=route;