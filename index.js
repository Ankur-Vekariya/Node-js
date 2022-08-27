// simple API with static data and basic server creation

// const http = require('http');
// const data = require('./data')
// http.createServer((req,res)=>{
//   res.writeHead(200,{'Content-Type':'application\json'});
//   res.write(JSON.stringify(data));
//   res.end();
// }).listen(5000);

// input from cmd and creatin file with content

// const fs = require('fs');

// const input = process.argv;
// if(input[2]=='add'){
//   fs.writeFileSync(input[3],input[4]);

// }else if(input[2]=='remove'){
//   fs.unlinkSync(input[3]);
// }else{
//   console.log("invalid output");
// }

// file system , path &

// const fs = require("fs");
// const path = require("path");
// const dirPath = path.join(__dirname);
// console.log(dirPath);
// for(i=0;i,i<5;i++){
//   fs.writeFileSync(dirPath+"/hello"+i+".txt","a simple file");
// }
// fs.readdir(dirPath, (err, file) => {
//   file.forEach((item) => {
//     console.log("file name is",item);
//   });
// });

// CRUD with file system

// const fs = require('fs');
// const path = require('path');
// const dirPath = path.join(__dirname,'crud');
// const filePath = `${dirPath}/apple.txt`;
// fs.writeFileSync('apple.txt','this is a simple txt file');
// fs.readFile(filePath,(err,item)=>{
//     console.log(item);
// })
// fs.appendFile(filePath,'and file name is apple.txt',(err)=>{
//     if(!err) console.log(
//         "file is updated"
//     );
// })
// fs.rename(filePath,`${dirPath}/fruit.txt`,(err)=>{
//     if(!err) console.log("file name is updated");
// })

//synchronous and asyncronous programming Node js is asyncronous

// console.log("start exe...");
// setTimeout(()=>{
//     console.log("logic exe...");
// },60000)
// console.log("complete exe...");

// disadvatage of sync

// let a = 10;
// let b = 0;

// let wait = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("logic exe...");
//     b = 20;
//     resolve(30);
//   }, 2000);
// });
// wait.then((data) => {
//   console.log(a + data);
// });

//  How node js works 
// event loop
// call stack
// Node api 
// callback queue

console.log("starting exe...");

setTimeout(() => {
  console.log("2 second log");
}, 2000);

setTimeout(() => {
  console.log("0 second log");
}, 0);

console.log("finishing exe....");
