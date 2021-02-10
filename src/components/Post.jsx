import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
function Post(){
    const[post, setPost]=useState({});
    let {id} = useParams();
    const url="https://jsonplaceholder.typicode.com/posts/"+id;
    useEffect(() => {
        axios.get(url)
          .then((res) => {
            setPost(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);
    return(
        <div className="row">
            <div className="title">{post.title}</div>
            <div className="content">{post.body}</div>
        </div>
    )
}
export default Post;