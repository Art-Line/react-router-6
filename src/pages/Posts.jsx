import { useEffect, useState } from "react";
import CustomLink from "../components/CustomLink";

function Posts() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(resp => resp.json())
            .then(data => setPosts(data))
    }, [])

    return (
        <>
            <h1>Posts page</h1>
            <ul className="posts">
                {posts.map(item => <li key={item.id}><CustomLink to={`/posts/${item.id}`}>{item.title}</CustomLink></li>)}
            </ul>
        </>
    )
}

export default Posts;
