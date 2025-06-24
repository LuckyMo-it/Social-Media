export function PostCard({post}){
    return(
        <div className="">
            <div className="image">
                <img src={post.url} alt="" />
            </div>
            <div>
                <p>{post.caption}</p>
            </div>
        </div>
    )
}