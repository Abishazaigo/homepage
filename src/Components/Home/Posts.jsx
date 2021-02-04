import {Link} from "react-router-dom";
import ColumnWidth1 from '../ColumnWidth1';
import ColumnWidth5 from '../ColumnWidth5';
import ColumnWidth6 from '../ColumnWidth6';
import '../Styles/Web.css';
const Posts = (props) => {
  return (
    <div className="row">
      {props.posts.map((post) => {
        return (
            <div className="row">
              <ColumnWidth5 />
              <ColumnWidth6>
                <div className="card mb-5">
                  <h6 className="card-header h-25" >{post.title}</h6>
                  <p className="card-body">{post.body}</p>
                    <div className="row">
                      <div className="text-left p-4">
                        <Link to="/Post">View More</Link>
                      </div>
                      <div className="text-right p-4">
                        <Link to="/PostComment">Comment</Link>
                      </div>
                    </div>
                </div>
              </ColumnWidth6>
              <ColumnWidth1 />
            </div>
        );
      })}
    </div>
  );
};
export default Posts;