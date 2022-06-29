import PostsServices from "../services/PostsServices";
import { useState,useEffect, useParams } from "react";
import { Link } from "react-router-dom";

function SinglePost(id, title,text) {

    useEffect(() => {
        const fetchPost = async () => {
        const post = await PostsServices.get(id);
        }
        if (id) {
          fetchPost();
      }
      }, [id]);


    return(

        <div>
            <h1>Title:{title}</h1><Link to={`/post/${id}`}>View Post</Link>
            <h1>Text:{text}</h1>
      </div>

    )

}

export default SinglePost;