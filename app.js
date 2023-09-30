const express = require('express');
const app = new express();
const router = require('./src/router/api');
app.use('/api', router);


//undefind router
app.use('*',(req,res)=>{
    res.status(404).json({status:"fail",data:"not Found"})
}) 



module.exports = app;