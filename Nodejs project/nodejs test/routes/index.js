const express=require("express"),
    router=express.Router();
router.get("/",(req,res)=>{
    res.send("Welcome to our application");
})
module.exports=router;