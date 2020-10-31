const express=require("express"),
    router=express.Router();
router.get("/",(req,res)=>{
    res.send("Welcome to Notes");
})
router.get("/create",(req,res)=>{
    res.send("Welcome to create Notes");
})
module.exports=router;