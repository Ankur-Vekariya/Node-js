// simple API with static data and basic server creation

// const http = require('http');
// const data = require('./data')
// http.createServer((req,res)=>{
//   res.writeHead(200,{'Content-Type':'application\json'});
//   res.write(JSON.stringify(data));
//   res.end();
// }).listen(5000);

// input from cmd and creation of file with content

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

// console.log("starting exe...");

// setTimeout(() => {
//   console.log("2 second log");
// }, 2000);

// setTimeout(() => {
//   console.log("0 second log");
// }, 0);

// console.log("finishing exe....");

// express js

// const express = require('express');
// const app = express();

// app.get('',(req,res)=>{
//     console.log("data sent by browser",req.query);
//     res.send("Welcome,this is home page")
// })

// app.get('/about',(req,res)=>{
//     res.send("Hello,this is about page")
// })

// app.listen(5000);

// Render HTML and JSON data

// const express = require("express");
// const app = express();

// app.get("", (req, res) => {
//   console.log("data sent by browser", req.query);
//   res.send([
//     {
//       name: "ankur",
//       email: "ankur@gmail.com",
//     },
//     {
//       name: "ankur",
//       email: "ankur@gmail.com",
//     },
//         {
//       name: "ankur",
//       email: "ankur@gmail.com",
//     },
//   ]);
// });

// app.get("/about", (req, res) => {
//   res.send(`
//     <input type=""></input>
//     `);
// });

// app.listen(5000);

// Render seprate HTML file

// const express = require("express");
// const path = require("path");

// const app = express();
// const publicPath = path.join(__dirname, "public");

// app.use(express.static(publicPath));

// app.listen(5000);

// 404 page and remove exxtension from url

// const express = require("express");
// const path = require("path");

// const app = express();
// const publicPath = path.join(__dirname, "public");
// console.log(publicPath);

// app.get('/about',(req,res)=>{
//     res.sendFile(`${publicPath}/about.html`)
// })
// app.get('*',(req,res)=>{
//     res.sendFile(`${publicPath}/help.html`)
// })

// app.listen(5000);

// templete Engine

// const express = require("express");
// const path = require("path");

// const app = express();
// const publicPath = path.join(__dirname, "public");
// console.log(publicPath);

// app.set("view engine", "ejs");
// app.get("/profile", (req, res) => {
//   const user = {
//     name: "ankur",
//     email: "ankur@gmail.com",
//   };
//   res.render("profile", { user });
// });
// app.get("*", (req, res) => {
//   res.sendFile(`${publicPath}/help.html`);
// });

// app.listen(5000);

// Dynamic pages

// const express = require("express");
// const path = require("path");

// const app = express();
// const publicPath = path.join(__dirname, "public");
// console.log(publicPath);

// app.set("view engine", "ejs");
// app.get("/profile", (req, res) => {
//   const user = {
//     name: "ankur",
//     email: "ankur@gmail.com",
//     skills: ["sql", "php", "js"],
//   };
//   res.render("profile", { user });
// });
// app.get("/login", (req, res) => {
//   res.render("login");
// });
// app.get("*", (req, res) => {
//   res.sendFile(`${publicPath}/help.html`);
// });

// app.listen(5000);

//use of middleware(basic authentication)
// middleware types
// application level middleware
// Router level middleware
// Error handling middleware
// Built in middleware
// Third party middleware

// application level middleware example

// const express = require("express");
// const app = express();

// const reqFilter = (req, res, next) => {
//   if (!req.query.age) {
//     res.send("pls provide age");
//   } else if (req.query.age < 18) {
//     res.send("you can not acces this page");
//   } else {
//     next();
//   }
// };

// app.use(reqFilter);

// app.get("/", (req, res) => {
//   res.send("welcome to home page");
// });

// app.get("/users", (req, res) => {
//   res.send("welcome to users page");
// });

// app.listen(5000);

// Route level middleware

// const express = require("express");
// const app = express();

// const reqFilter = (req, res, next) => {
//   if (!req.query.age) {
//     res.send("pls provide age");
//   } else if (req.query.age < 18) {
//     res.send("you can not acces this page");
//   } else {
//     next();
//   }
// };

// app.get("/", (req, res) => {
//   res.send("welcome to home page");
// });

// app.get("/users",reqFilter, (req, res) => {
//   res.send("welcome to users page");
// });

// app.get("/about", (req, res) => {
//     res.send("welcome to about page");
//   });

// app.listen(5000);

// middleware in separate file

// const express = require("express");
// const app = express();
// const reqFilter = require('./middleware')

// app.get("/", (req, res) => {
//   res.send("welcome to home page");
// });

// app.get("/users",reqFilter, (req, res) => {
//   res.send("welcome to users page");
// });

// app.get("/about", (req, res) => {
//     res.send("welcome to about page");
//   });

// app.listen(5000);

// apply middleware to group of routes

// const express = require("express");
// const app = express();
// const reqFilter = require("./middleware");
// const route = express.Router();

// route.use(reqFilter);

// app.get("/", (req, res) => {
//   res.send("welcome to home page");
// });

// app.get("/users", (req, res) => {
//   res.send("welcome to users page");
// });

// route.get("/about", (req, res) => {
//   res.send("welcome to about page");
// });

// route.get("/contact", (req, res) => {
//   res.send("welcome to contact page");
// });

// app.use('/',route)

// app.listen(5000);

// use of database mongoDb

// mongoDB is a NoSQL database'
// the data stored in collection
// Collection dont have row and columns
// data is stored in the form of objects


// connection with database(MongoDB)
// Getting data from database
// lengthy process

// const {MongoClient} = require('mongodb');
// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);

// async function getData(){
//     let result = await client.connect();
//     let db = result.db('e-comm');
//     let collection = db.collection('product');
//     let res = await collection.find({}).toArray();
//     console.log(res);
// }

// getData()

// data Featch and use seperate file for database connection

// const dbConnect = require('./mongodb')
// const {MongoClient} = require('mongodb');
// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);

// async function dbConnection(){
//     let result = await client.connect();
//     db = result.db('e-comm');
//     return db.collection('product');
// }
// method 1

// dbConnect().then((res)=>{
//    res.find({name:'m31s'}).toArray().then((data)=>{
//     console.log(data);
//    })
// })

//  method 2
// const main = async () => {
//     let data = await dbConnection();
//     data = await data.find().toArray();
//     console.warn(data);
// }
// main();





