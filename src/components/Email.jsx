import {useForm} from 'react-hook-form';
import {useMutation} from 'react-query';
import {useState} from 'react';
import axios from 'axios';

import Button from './Button';

import Fast from '../images/rocket.png';

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
            <div className="row">
            <div className="col-1"></div>
            <div className="col-8 container contact-form">
            <div className="contact-image">
                <img src={Fast} alt="rocket_contact" />
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="user">
                <h3>Drop Us a Message</h3>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div className="form-group">
                    <input type="text" className={`form-control form-control-form ${errors && errors.email && "highlight"} ${response && response.data && response.data.data && response.data.data.email && "highlight"}`} ref={register({ required: "required", pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i } })} id="exampleInputEmail" name="email" aria-describedby="emailHelp" placeholder="Enter Email Address..." />
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
                <div className="col-md-3"></div>
                <div className="col-md-2"></div>
                <div className="col-md-12">
                    <div className="form-group">
                    <textarea rows="5" cols="500" className={`form-control form-control-form cols ${errors && errors.message && "highlight"} ${response && response.data && response.data.data && response.data.data.msg && "highlight"}`} ref={register({ required: "required"})} id="exampleInputMessage" name="message" placeholder="Enter Message..." >
                    </textarea>
                    <div className="text-danger">
                    {errors.message && errors.message.type === "required" && (
                        <span role="alert">Please enter the message</span>
                    )}
                    {response && response.data && response.data.data && response.data.data.message &&<p className="text-danger">{response.data.data.message}</p>}
                    </div>
                </div>
                <Button className="btn btn-danger btn-user btn-block" label="SEND" />
            </div>
            </div>
            </div> 
            </form>    
            </div>
            </div>
    )
}
export default Email;