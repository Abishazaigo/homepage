import '../Styles/Web.css';
import {useState, useEffect} from "react";
import axios from 'axios';
import Posts from './Posts';
import ColumnWidth2 from '../ColumnWidth2';
import ColumnWidth4 from '../ColumnWidth4';
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
        <ColumnWidth2 />
        <ColumnWidth4>
            <p className="recent-topic">RECENT NEWS</p>
            <p className="recent-title">Our Latest News</p>
        </ColumnWidth4>
        <ColumnWidth4 className="p-4">
            <button className="button-view">VIEW MORE</button>
        </ColumnWidth4>
        <ColumnWidth2 />
        </div>
        {posts && posts.length > 0 && <Posts posts={posts} />}
        
    </div>
    )
}

export default Recent;