import {useForm} from 'react-hook-form';
import {Link} from "react-router-dom";
import {useMutation} from 'react-query';
import {useState} from 'react';
import Button from './Button';
import axios from 'axios';
function Email(){
    const {register, handleSubmit, errors}=useForm();
    const [response, setResponse]=useState();
    const mutation=useMutation(async(data) => {
        try{
            const login={email:data.email,msg:data.message}
            const response=await axios.post("http://80.211.233.121/api_mail/apimail1.php",login);
            console.log(response);
            setResponse(response);
        }catch(err){
            console.log(err.response);
            setResponse(err.response);
        }
    });
    const onSubmit = (data) => mutation.mutate(data);
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="user" >
            <div className="form-group">
                <input type="email" className={`form-control form-control-user ${errors && errors.email && "highlight"} ${response && response.data && response.data.data && response.data.data.email && "highlight"}`} ref={register({ required: "required", pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i } })} id="exampleInputEmail" name="email" aria-describedby="emailHelp" placeholder="Enter Email Address..." />
                <div className="text-danger">
                    {errors.email && errors.email.type === "required" && (
                        <span role="alert">Please enter the mail id</span>
                    )}
                    {errors.email && errors.email.type === "pattern" && (
                        <span role="alert">Please enter the proper mail id</span>
                    )}
                    {response && response.data && response.data.data && response.data.data.login &&<p className="text-danger">{response.data.data.login}</p>}
                </div>
            </div>
            <div className="form-group">
                <textarea rows="5" cols="5" className={`form-control form-control-user ${errors && errors.message && "highlight"} ${response && response.data && response.data.data && response.data.data.msg && "highlight"}`} ref={register({ required: "required"})} id="exampleInputMessage" name="message" placeholder="Enter Message..." />
                <div className="text-danger">
                    {errors.message && errors.message.type === "required" && (
                        <span role="alert">Please enter the message</span>
                    )}
                    {response && response.data && response.data.data && response.data.data.message &&<p className="text-danger">{response.data.data.message}</p>}
                </div>
            </div>
            <Button className="btn btn-primary btn-user btn-block" label="SEND" />
        </form>
    )
}
export default Email;