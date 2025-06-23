import express from'express'
import dotenv from 'dotenv'
const app=express()
const PORT=process.env.PORT

app.use((req,res)=>{
    res.send("you enter in wrong route")
})
app.listen(PORT,()=>{
    console.log(`server running`)
})