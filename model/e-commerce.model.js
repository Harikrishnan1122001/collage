const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const ecommerceSchema=new Schema({
    ecommerceName:String,
    ecommerceSize:String,
    ecommerceColor:String,
    ecommercePrice:Number,
    ecommerceBuynow:String,
    ecommerceDeliverdate:Number,
    ecommerceCancellation:String,
    ecommercePicture:String,
});
module.exports=mongoose.model("ecommerce",ecommerceSchema)