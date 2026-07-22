const express=require("express")
const app=express()
app.use(express.json())
const data=[
    {city:"Hyderabad","temperature":30,"humidity":70},
    {city:"Bangalore","temperature":25,"humidity":80},  
    {city:"Chennai","temperature":35,"humidity":60},
    {city:"pune","temperature":28,"humidity":75},
]

app.get("/weather",(req,res)=>{res.json(data)})



app.listen(4000,()=>console.log("Server is running on port 4000"))