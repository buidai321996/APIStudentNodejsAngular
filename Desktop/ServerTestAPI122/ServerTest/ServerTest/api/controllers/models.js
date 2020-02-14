var Models = require('../models/models');
const chalk = require('chalk');

exports.modelsTest = function (req, res) {
    res.json({ msg: 'Posts Works' })
};

exports.selListModlNm = function(req,res){
    Models.find({})    
    .exec(function (err, products) {
        res.send({
            products
        })
    });
};
exports.createModels = function(req,res){
    const newModel = new Models({
        MODL_ID: req.body.MODL_ID,
        MODL_NM: req.body.MODL_NM,
        MIN: req.body.MIN,
        MAX: req.body.MAX,
        MN_STS:  req.body.MN_STS,
        MN_STS_T:  req.body.MN_STS_T,
      });
      newModel.save().then(models => res.json(models));
};

exports.updModlDtl = function(req,res){

    console.log("REQ" + req);
    var opp = req.body.inDv;

    switch(opp) {
        case 1: // Create
            const newModel = new Models({
                MODL_ID: req.body.modl_id,
                MODL_NM: req.body.modl_nm,
                MIN: req.body.min,
                MAX: req.body.max,
                MN_STS:  req.body.mn_sts,
                MN_STS_T:  req.body.mn_sts_t,
              });
              newModel.save().then(models => res.json(models));
          break;
        case 2:
          // code block
          break;
        default:
           Models.deleteOne({ MODL_ID: req.body.modl_id}, function(err, obj) {
                if (err) throw err;
                console.log("1 document deleted");
                res.json(req.body.inDv)
              });
      }
};

exports.selListModlDtl = function (req, res) {
    Models.find({ MODL_NM: req.params.id }, function (error, models) {
        if (error) {
            console.error(error)
        }       
        console.log("Model: " + models) 
        res.send(models)        
    })
};