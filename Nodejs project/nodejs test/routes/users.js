const express=require("express"),
    router=express.Router();
router.get("/login",(req,res)=>{
    res.send("Welcome to login");
})
router.get("/signup",(req,res)=>{
    res.send("Welcome to signup");
})
module.exports=router;