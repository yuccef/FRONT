const express = require("express");
const app = express();
const port = 3000;



function main(){
    app.get("/" , (req,res)=>{
        const currentDate = new Date();
        console.log("page callse at " + currentDate);
        res.send("Hello world! Nous sommes le " + currentDate);
    });

    app.get("/test" , (req,res)=>{
        res.sendFile( __dirname + "/public/page1.html");
    });

    app.get("/test" , (req,res)=>{
        res.sendFile( __dirname + "/public/page2.html");
    });
}
main();