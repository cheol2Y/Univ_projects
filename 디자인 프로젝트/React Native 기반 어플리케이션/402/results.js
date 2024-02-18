const fs=require("fs");
const path=require("path");
const FILE_NAME="hour_01.csv";
const csvPath=path.join(__dirname,FILE_NAME);
const csv=fs.readFileSync(csvPath,'utf-8');
const rows=csv.split("\n");

let results=[]
for (const i in rows){
    const row=rows[i].split(',')
    results.push(Number(row[0]))
}
console.log(results.slice(0,results.length-1))