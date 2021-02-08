import {useState, useEffect} from "react";
import axios from 'axios';
import Posts from './Posts';
import ColSm2 from './ColSm2';
import ColSm4 from './ColSm4';
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
        <ColSm2 />
        <ColSm4>
            <p className="recent-topic">RECENT NEWS</p>
            <p className="recent-title">Our Latest News</p>
        </ColSm4>
        <ColSm4 className="p-4">
            <button className="button-view">VIEW MORE</button>
        </ColSm4>
        <ColSm2 />
        </div>
        {posts && posts.length > 0 && <Posts posts={posts} />}
        
    </div>
    )
}

export default Recent;