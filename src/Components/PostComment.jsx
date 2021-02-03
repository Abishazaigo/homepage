import {useState, useEffect} from "react";
import axios from 'axios';

function PostComment(){
    const [postcomments, setPostComments] = useState([]);
    useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1/comments")
      .then((res) => {
        console.log(res.data);
        setPostComments(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return(
    postcomments.map((postcomment) => {
      return (
        <div className="comment">
        <div className="comments p-3">
          <p>{postcomment.title}</p>
          <p>{postcomment.body}</p>
        </div>
        </div>
      );
    })
  )
}
export default PostComment;