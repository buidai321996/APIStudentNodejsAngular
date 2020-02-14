var Model = require('../models/product');
const chalk = require('chalk');

exports.modelsTest = function (req, res) {
    res.json({ msg: 'Posts Works' })
};

exports.selListModlNm = function(req,res){
    Model.find({})    
    .exec(function (err, products) {
        res.send({
            products
        })
    });
};
exports.createProducts = function(req,res){
    const newModel = new Product({
        PRODUCT_ID: req.body.PRODUCT_ID,
        PRODUCT_NM: req.body.PRODUCT_NM,
        PRODUCT_PHONE: req.body.PRODUCT_PHONE,
        PRODUCT_EMAIL: req.body.PRODUCT_EMAIL
      });
      newModel.save().then(products=> res.json(products));
};  
exports.deleteProduct = function(req,res)
{
    Model.deleteOne({ PRODUCT_ID: req.body.PRODUCT_ID}, function(err, obj) {
        if (err) throw err;
        console.log("1 document deleted");
        res.json(req.body.inDv)
      });
}
exports.updateProduct = function(req,res)
{
  oop=req.body.inDv;
  switch(oop)
  {
      case 1:
        const newModel = new Product({
            PRODUCT_ID: req.body.PRODUCT_ID,
            PRODUCT_NM: req.body.PRODUCT_NM,
            PRODUCT_PHONE: req.body.PRODUCT_PHONE,
            PRODUCT_EMAIL: req.body.PRODUCT_EMAIL
          });
          newModel.save().then(products=> res.json(products));
      break;
      
          
  }
}
exports.selListProductDtl = function (req, res) {
    Model.find({ PRODUCT_ID: req.params.PRODUCT_ID }, function (error, models) {
        if (error) {
            console.error(error)
        }       
        console.log("Model: " + models) 
        res.send(models)        
    })
};
