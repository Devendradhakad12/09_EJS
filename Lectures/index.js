import express from 'express';// express bydefault import ejs
import path from "path";
const app = express()

app.set("view engine","ejs")
app.set("views",path.join(__dirname,"/views"))

app.get("/",(req,res)=>{
res.render("home.ejs")// we will render the res in the case of ejs
})
app.get("/helo",(req,res)=>{
res.send("hellow") 
})

const PORT = 8080
app.listen(PORT,()=>{
    console.log(`server listning on http://localhost:${PORT} `)
})