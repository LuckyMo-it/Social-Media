import express from'express'
import dotenv from 'dotenv/config'
import { initDatabase } from './db/db.js'
import postRouter from'./route/posts.js'
const app=express()
const PORT=process.env.PORT

//database part
await initDatabase()



//middleware part
app.use('api/v1/posts',postRouter)

app.use((req,res)=>{
    res.send("you enter in wrong route")
})
app.listen(PORT,()=>{
    console.log(`server running`)
})