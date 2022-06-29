import React from "react"
function Post({id, title, text}) {

    return (
        <div
          style={{
            border: '1px solid black',
            marginBottom: 10,
            padding: 5,
            width: 200,
            marginLeft: 5
          }}>

          <p>Title: {title}</p>
          <p>Text: {text}</p>
        
        </div>

    )
}

export default Post;