import { useEffect, useState } from "react";
import Post from "../Post";


export default function IndexPage(){
    const [posts,setPosts] = useState([]);

    useEffect(() => { //When we mount the particular component then this will run
        fetch('http://localhost:4000/post').then(response => {
            response.json().then(posts =>{
                setPosts(posts);
            });
        })
    }, []);
    return(
        <>
            {posts.length > 0 && posts.map(post => (
                <Post {...post}/>
            ))}
        </>
    );
}