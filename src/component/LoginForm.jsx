import { useEffect, useRef, useState} from "react"
import { Login } from './class/Login';
import './CreateRoom.css';
import img1 from '../assets/Namste.jpg';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Cookies from "universal-cookie";
import { setUser } from "../features/login/loginSlice";
const expiryDate = new Date(); 
expiryDate.setTime(expiryDate.getTime() + (2 * 60 * 60 * 1000));

export function LoginForm() {
    let[message,setMessage]=useState("");
    let [login,setLogin] = useState(new Login());
    let dispatch=useDispatch();
    const unameNode = useRef();
    const passNode = useRef(); 
    const navigate = useNavigate();

    function log(username,password){
        setMessage("");
        if(username=="admin" && password=="neosoft"){
            const cookies=new Cookies();
            cookies.set('admin',username,{
                expires:expiryDate
            })
            dispatch(setUser(username));
            navigate('/')
        }else{
            setMessage("Incorrect Username and Password");
        }
    }
    function getData(event){
        setLogin({...login,[event.target.id]:event.target.value})
    }
    function collectData(event){
        event.preventDefault();
        console.log(login);
        log(unameNode.current.value,passNode.current.value);
    }
    return (
        <>
        <blockquote className="blockquote">
        <img src={img1} className="n" alt="emp" />
            <h3>Marriott Welcomes You!!</h3>
        </blockquote>
        
        <article className="d-flex justify-content-center">
        <div className="mt-2 mb-3 p-4 border border-3 custom-form">
        {/* <div className="mb-3">
            <h3>Login</h3>
        </div> */}
            <form onSubmit={collectData}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">User Name</label>
                    <input type="text" className="form-control" id="username" placeholder="xyz" ref={unameNode} defaultValue="" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" ref={passNode} defaultValue=""/>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
        </article>
        </>
    )
}