var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ProductSchema = new Schema({
    PRODUCT_ID:{
        type: String,
        require:[true,'project id number required'],
        unique:[true,'project id number unique']

        

    },
    PRODUCT_NM:{
        type:String,
        max:[255,'Product name cannot exceed 255 characters'],
        
    },
    PRODUCT_PHONE:{
        type : String,
        require:[true,'User phone number required'],
      
    },
    PRODUCT_EMAIL:{
        type: String,
        require:[true,'User email number required'],
       
    }

});

module.exports = Product = mongoose.model('Product', ProductSchema);

