
import { useState,useEffect } from "react";
import Post from "../components/Post";
import PostsServices from "../services/PostsServices";

function AppPosts() {

    const[posts,setPosts] = useState([]);

    useEffect(() => {
        async function getPosts() {
          try {
            const post = await PostsServices.getAll()

            setPosts(post)
          } catch (error) {
            console.log(error)
          }
        } 

        getPosts()
      }, [])

      return (
      posts.map((post, id) => 
      <Post
        key={post.id}
        id={post.id}
        title={post.title}
        text={post.title}
      />
      )
      )

    

}

export default AppPosts;