var express = require("express");
var app = express();

var middleware = (req,res,next) =>{
    console.log(`Hello i am middleware`);
    next();
};

app.get('/',(req,res)=>{
    res.send("Hello From backend Development")
});

app.get('/about' ,middleware ,(req,res)=>{
    res.send(`hello from about page`);
});

app.get('/contact',(req,res)=>{
    res.send(`hello from contact page`);
});

app.get('/signin',(req,res)=>{
    res.send(`hello from signin page`);
});

app.listen(80,()=>{
    console.log(`Hello From Port`);
});