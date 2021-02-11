import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

function PostComment(){
    const[comments, setComments]=useState({});
    let {id} = useParams();
    const url="https://jsonplaceholder.typicode.com/posts/"+id+"/comments";
    useEffect(() => {
        axios.get(url)
          .then((res) => {
            setComments(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);
    return(
        <>
        {comments && comments.length && comments.map((comment) => {
            return(        
            <div className="row">
                <div className="title">{comment.email}</div>
                <div className="content">{comment.body}</div>
            </div>
            );
            })}
        </>
    )
}
export default PostComment;