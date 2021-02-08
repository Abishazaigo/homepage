import {Link} from "react-router-dom";
import ColSm1 from './ColSm1';
import ColSm5 from './ColSm5';
import ColSm6 from './ColSm6';
import Row from '../home/Row';
const Posts = (props) => {
  return (
    <div>
      <Row>
      {props.posts.map((post) => {
        return (
            <Row>
              <ColSm5 />
              <ColSm6>
                <div className="card mb-5">
                  <h6 className="card-header h-25" >{post.title}</h6>
                  <p className="card-body">{post.body}</p>
                    <Row>
                      <div className="text-left p-4">
                        <Link to="/post">View More</Link>
                      </div>
                      <div className="text-right p-4">
                        <Link to="/postcomment">Comment</Link>
                      </div>
                    </Row>
                </div>
              </ColSm6>
              <ColSm1 />
            </Row>
        );
      })}
      </Row>
    </div>
  );
};
export default Posts;