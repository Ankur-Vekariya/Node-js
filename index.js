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

const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname);
// console.log(dirPath);
// for(i=0;i,i<5;i++){
//   fs.writeFileSync(dirPath+"/hello"+i+".txt","a simple file");
// }
fs.readdir(dirPath, (err, file) => {
  file.forEach((item) => {
    console.log("file name is",item);
  });
});
