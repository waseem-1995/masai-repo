 const express=require("express")
 const app=express()
 const fs=require("fs")

 app.use(express.json())  //middleware


 app.get("/",(req,res)=>{
    res.end("Hello world")
 });

 //get alldata from db.json
 app.get("/alldata",(req,res)=>{
    const data=fs.readFileSync("./db.json","utf-8")
    const parsed_data=JSON.parse(data)
    console.log(parsed_data)
    res.send("got data in terminal")
 });

 //get all students data
 app.get("/allstudents",(req,res)=>{
    const data=fs.readFileSync("./db.json","utf-8")
    const parsed_data=JSON.parse(data)
    console.log(parsed_data.students)
    res.send("student data in terminal")
 });

// post in studentdata
app.post("/addstudent",(req,res)=>{
    //read data first
    const data=fs.readFileSync("./db.json","utf-8")
    //parse data
    const parsed_data=JSON.parse(data)
    //add new student
    parsed_data.students.push(req.body)
    //write in db.json
    fs.writeFileSync("./db.json",JSON.stringify(parsed_data))
    console.log(parsed_data)
    res.send("student data added")
})

// delete in studentdata
app.delete("/deletestudent",(req,res)=>{
    //read data first
    const data=fs.readFileSync("./db.json","utf-8")
    //parse data
    const parsed_data=JSON.parse(data)
    //delete student
   let new_student_data=parsed_data.students.filter((el)=>{
    return el.name!="waseem"
   })
    //write in db.json
    fs.writeFileSync("./db.json",JSON.stringify(parsed_data))
    parsed_data.students=new_student_data
    console.log(parsed_data)
    res.send("student data deleted")
 }) 

 app.post("/addData",(req,res)=>{
    console.log(req.body)
    res.send("data has recorded")
 })


 app.listen(3500,()=>{
    console.log("port running at 3500")
 })