import '../Styles/Web.css';
import {useState, useEffect} from "react";
import axios from 'axios';
import Posts from '../Components/Posts';
function Recent(){
    const [posts, setPosts] = useState([]);
    useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
    return(
        <div>
        <div className="row">
        <div className="col-2">
        </div>
        <div className="col-4">
            <p className="p1">RECENT NEWS</p>
            <p className="p2">Our Latest News</p>
        </div>
        <div className="col-4 p-4">
            <button className="top-end">VIEW MORE</button>
        </div>
        <div className="col-2">
        </div>
    </div>
        {posts && posts.length > 0 && <Posts posts={posts} />}
        
    </div>
    )
}

export default Recent;