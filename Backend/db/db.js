import mongoose, { Schema } from'mongoose'

export async function initDatabase(){
    
    try{
        if(!process.env.DB_URL)return new Error('connnection string not found')
        await mongoose.connect(`${process.env.DB_URL}`)
        console.log(`connected to mongodb`)
    }catch(err){
        console.log(err.message)
    }
}

const Posts=()=>{
    const postScema=new Schema({
        image:{type:String,required:true},
        caption:String,
        tags:[String]
    })
    return mongoose.model('posts',post)
}
export function createPost({title="Untitled",caption=""}={},postModel=Posts){
    const newPost=new postModel({title,caption})
    newPost.save()
}


export{Posts}
