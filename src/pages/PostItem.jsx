import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"

export default function PostItem() {

    const { id } = useParams();
    const [postInfo, setPostInfo] = useState({})

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(resp => resp.json())
            .then(data => setPostInfo(data))
    }, [id])


    return (
        <>
            {postInfo &&
                <div className="post-item">
                    <h2>{postInfo.title}</h2>
                    <p>{postInfo.body}</p>
                </div>
            }
        </>
    )
}
