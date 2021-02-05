import {useForm} from 'react-hook-form';
import {useMutation} from 'react-query';
import {useState} from 'react';
import {useAlert} from 'react-alert';
import Button from './Button';
import axios from 'axios';
function Form() {
    const {register, handleSubmit, errors}=useForm();
    const [response, setResponse]=useState();
    const mutation=useMutation(async(data) => {
        try{
            const login={login:data.email,password:data.password}
            const response=await axios .post("http://devapi.zaicrm.com/api/auth/login",login);
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
                <input type="email" className={`form-control form-control-user ${errors && errors.email && "highlight"} ${response && response.data && response.data.data && response.data.data.login && "highlight"}`} ref={register({ required: "required", pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i } })} id="exampleInputEmail" name="email" aria-describedby="emailHelp" placeholder="Enter Email Address..." />
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
                <input type="password" className={`form-control form-control-user ${errors && errors.password && "highlight"} ${response && response.data && response.data.data && response.data.data.password && "highlight"}`} ref={register({ required: "required" })} id="exampleInputPassword" name="password" placeholder="Enter Password..." />
                <div className="text-danger">
                    {errors.password && errors.password.type === "required" && (
                        <span role="alert">Please enter the password</span>
                    )}
                    {response && response.data && response.data.data && response.data.data.password &&<p className="text-danger">{response.data.data.password}</p>}
                </div>
            </div>
            <div className="form-group">
                <div className="custom-control custom-checkbox small">
                    <input type="checkbox" className="custom-control-input" id="customCheck" />
                    <label className="custom-control-label" for="customCheck">Remember Me</label>
                </div>
            </div>
            <Button className="btn btn-primary btn-user btn-block" label="Login" />
            <hr />
            <Button className="btn btn-google btn-user btn-block " icon="fa fa-google fa-fw" label="Login with Google" />
            <Button className="btn btn-facebook btn-user btn-block" icon="fa fa-facebook-f fa-fw" label="Login with Facebook" />
        </form>
    )
}
export default Form;