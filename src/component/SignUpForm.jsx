import { useEffect, useState} from "react"
import { SignUp } from './class/SignUp';
import './CreateRoom.css';

export function SignUpForm() {
    let [sign,setSign] = useState(new SignUp());
    let [errors,setErrors]=useState({});
    function getData(event){
        setSign({...sign,[event.target.id]:event.target.value})
    }
    
    function validateFields(id,value){
        let error ='';
        switch(id){
            case 'username':
                if(value.trim() === ""){
                    error= 'Username is required'
                }else if(value.length<4){
                    error = 'username must be at least 4 character long';
                }
                break;
            case 'password':
                if(value.trim() === ""){
                    error= 'password is required'
                }else if(value.length<5){
                    error = 'password must be at least 5 character long.';
                }
                break;
             case 'email':
                if (value.trim() === '') {
                    error = 'Email is required';
                } else if (!validateEmail(value.trim())) {
                    error = 'Email is invalid';
                }
                break;
            default:
                break;
        }
        setErrors((prevErrors) => ({...prevErrors,[id]:error}));
    }
    
    function handleBlur(event){
        const {id, value}= event.target;
        validateFields(id ,value);
    }
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    function collectData(event){
        event.preventDefault();
        let isValid = true;
        for(const key in sign){
            if(Object.hasOwnProperty.call(sign,key)){
                validateFields(key, sign[key]);
                if(errors[key]){
                    isValid=false;
                }
            }
        }
        if(isValid){
        console.log(sign);
        }
    }
    return (
        <article className="d-flex justify-content-center">
            
        <div className="mt-3 mb-3 p-4 border border-3 custom-form">
        <div className="mb-3">
            <h3>Registration</h3>
        </div>
            <form onSubmit={collectData}>
                <div className="mb-3">
                    <label htmlFor="user_id" className="form-label">User Id</label>
                    <input type="number" className="form-control" id="user_id" value={sign.user_id} onChange={getData} />
                </div>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">User Name</label>
                    <input type="text" className="form-control" id="username" placeholder="xyz" value={sign.username} onChange={getData} onBlur={handleBlur} />
                    {errors.username && <div className="text-danger">{errors.username}</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="xyz@gmail.com" value={sign.email} onChange={getData}/>
                    {errors.email && <div className="text-danger">{errors.email}</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" value={sign.password} onChange={getData} onBlur={handleBlur}/>
                    {errors.password && <div className="text-danger">{errors.password}</div>}
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
        </article>
    )
}