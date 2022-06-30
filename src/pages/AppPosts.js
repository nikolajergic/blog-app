
import { useState,useEffect } from "react";
import Post from "../components/Post";
import PostsServices from "../services/PostsServices";

function AppPosts() {

    const[posts,setPosts] = useState([]);

    useEffect(() => {
        async function getPosts() {
        
            const posts = await PostsServices.getAll()

            setPosts(posts)
          
        } 

        getPosts()
      }, [])

      const handleEdit = () => {
       

        history.push('/edit/${id}')

      };

      return (
      posts.map((post, id) => 
      <Post
        key={post.id}
        id={post.id}
        title={post.title}
        text={post.text}
        handleEdit={handleEdit}
      />
      )
      )

    

}

export default AppPosts;