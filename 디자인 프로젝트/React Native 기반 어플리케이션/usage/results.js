const fs=require("fs");
const path=require("path");
const FILE_NAME="TV2 (방1)_05.csv";
const csvPath=path.join(__dirname,FILE_NAME);
const csv=fs.readFileSync(csvPath,'utf-8');
const rows=csv.split("\n");

let results=[]
for (const i in rows){
    const row=rows[i].split(',')
    results.push(Number(row[1]))
}
console.log(results.slice(1,results.length-1))