import {useState, useEffect} from "react";
import axios from 'axios';
import '../Styles/Web.css';
function Post(){
    const [post, setPost] = useState({});
    useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        console.log(res.data);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return(

    <div className="view">
            <p>Title : {post&& post.title&&post.title}</p>
            <p>Content : {post&& post.body&&post.body}</p>
          </div>
  )
};

export default Post;