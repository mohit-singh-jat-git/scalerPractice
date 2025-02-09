const express = require("express");
//create express application 
const app = express();
//midelware when clinet make a req and res then it firest comes to midelware wich checks the materal or autoritation 
app.use(express.json());
//define a route
app.get("/about",(req,res)=>{
    res.send("hellow world hai ");
    
});
app.get("/home",(req,res)=>{
    console.log(req.url);
    console.log(req.method);
    res.send("this is home page")
        
});
app.post("/submit",(req,res)=>{

    console.log(res.body);
    
    res.send("this is submit page")
        
});

let users =[
    {id:1,name:"user 1"},
    {id:2,name:"user 2"}
];
app.delete('/user/:id',(req,res)=>{
    const userId = parseInt(req.params.id);
    console.log(userId);
    console.log(typeof userId);
    
    //find the user by id 
    const userIdx = users.findIndex((users)=>user.id==userId);
    console.log("userIdx",userIdx);
    if(userIdx ===-1){
        return res.status(400).json({message: "user not found"});
    }
    users.splice(userIdx,1);
    console.log(users);
    res.json({message : "user deletred"})
    
})
const port = 3000;
app.listen(port,()=>{
    console.log('server is running at port" ${port}');
})