const express=require("express"),
    app=express()

app.use("/",require("./routes/index"));
app.use("/Notes",require("./routes/notes"));
app.use("/",require("./routes/users"));
app.listen(3001,()=>{
    console.log("i'm listining in the port 3001");
})