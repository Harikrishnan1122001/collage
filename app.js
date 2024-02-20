const express = require('express');
const bodyparser=require('body-parser');
const cors=require('cors');
const userRouter = require("./routes/user.route");
const db=require('./db/db');
db.databaseConnect();  
const app=express();
app.use(cors()); 
app.options('*',cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static('public'));
app.use('/user', ecommerceRouter);
app.use((req,res,next)=>{
    next(new Error("Not found"))
})

var port=8000
app.listen(port,function(){
    console.log('server listening to port:' +port);
})