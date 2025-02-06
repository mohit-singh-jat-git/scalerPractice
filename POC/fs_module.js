// const fs  = require("fs");
// // to transfer the data inti binary to data
// fs.readFile("./f1.txt",'utf-8',(err,data)=>{
//     if (err){
//         console.log(err);
//         return;
//     }
//     console.log(data);
    
// })
// const content = "we have writen this ";
// fs.writeFile("./f1.txt",content,'utf-8',(err)=>{
//     if (err){
//         console.log(err);
//         return;
//     }
//     console.log("file have been updated");
// })
// fs.mkdir
// fs.rmdir
// fs.start()
// fs.readdir("../../POM")

//adding slash in betweween 
const path = require('path');
// const fullpath = path.join("poc","fs_module.js");
// console.log(fullpath);

const absolutePath = path.resolve("poc","fs_module.js");
console.log(absolutePath);;

const dirName = path.basename(absolutePath)
console.log(dirName);
