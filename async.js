const fs = require("fs");
const https = require("https");
console.log("Hello word");

var a=1078698;
var b=20296;
// fs.readFileSync("./file.txt","utf8");
// console.log("This will print after fetch data")
// https.get("https://dummyjson.com/products/1",(res)=>{
// console.log("Fetched Data Succesfull");
// });
setImmediate(()=>{console.log("set Intermideate")});
setTimeout(()=>{
    console.log("Set Time out is after 5 sec");
},10);
fs.readFile("./file.txt","utf8",(err,data)=>{
    console.log("File Data",data);
});
process.nextTick(()=>{
    console.log("Sachin")
})

function multiply(x,y)
{
const result=x*y;
return result;
}
const product =multiply(a,b);
console.log(product)