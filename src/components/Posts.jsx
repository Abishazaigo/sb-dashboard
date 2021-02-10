import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
function Posts(){
    const[posts, setPosts]=useState([]);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
          .then((res) => {
            setPosts(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);
    return(
        <div className="row">
            {posts.map((post) => {
                return(
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-9">
                            <div className="card mb-5 size-md">
                                <div className="card-header h-25">{post.title}</div>
                                <div className="card-body">{post.body}</div>
                                <div className="row">
                                    <Link to={"/post/"+post.id}>
                                    <div className="text-left p-4">View more</div>
                                    </Link>
                                    <Link to={"/post/comments/"+post.id}>
                                    <div className="text-right p-4">Comment</div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}
export default Posts;