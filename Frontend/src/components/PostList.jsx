import { PostCard } from "./PostCard"

export function PostList(props){
    const {posts}=props

    return (
        <div>

        {
            posts.map((post,key)=>{
                return <PostCard key={key} post={post}/>
            })
        }
        </div>
    )
}