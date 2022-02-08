const express= require('express');
const app=express();
const hbs=require('hbs');
const path=require('path');
const port=process.env.PORT||8000;

//static path
const dirPath=path.join(__dirname,"../public");

//views folder path
const hbsPath=path.join(__dirname,"../views");
const partPath=path.join(__dirname,"../views/partials");
app.use(express.static(dirPath));

//setting tempelate engine
app.set('view engine','hbs');

//app.set('views',hbsPath);

//to call css static page from public
app.use(express.static(dirPath));
hbs.registerPartials("../tempelates/views/partials",()=>{
    console.log("partials regisetred at ",partPath);
});

//routing
app.get("/",(req,res)=>{
    res.render("index");
})
app.get("/about",(req,res)=>{
    res.render("about");
})
app.get("/weather",(req,res)=>{
    res.render("weather");
})
app.get("*",(req,res)=>{
    res.render("404",{
        errmsg:"TF YOU SEARCHING FOR BRO?"
    });
})

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
});