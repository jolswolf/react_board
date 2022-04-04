import { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";


const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name:"",
        password:""
    });
    const handleChange = e => {
        const {name, value} = e.target;
        setUser ({
            ...user,
            [name]: value
        });
    }

    const setLoginUser = (loginUser) => {
        sessionStorage.setItem('activeUser', loginUser);
    }

    const login = () => {
        axios.post("http://localhost:3001/login", user)
        .then(res => {alert(res.data.message);
        setLoginUser(res.data.user);
        navigate("/");
        })
    }


    return(
        <div class="container">
            <div class="card">
                <div class="container">
                    <br/>
                    <h3 class="card-title">Login</h3>
                    <br/>
                    <form action="#" autoComplete="off">  
                        <div class="mb-3">
                            <label for="emailInput" class="form-label">Email Address</label>
                            <input id="emailInput" class="form-control" type="text" name="email" value={user.email}  onChange={handleChange} placeholder="Your email"/>                       
                        </div>
                        <div class="mb-3">
                            <label for="passwordInput" class="form-label">Password</label>
                            <input type="password" id="passwordInput" class="form-control" name="password" value={user.password}  onChange={handleChange} placeholder="Your password"/>
                        </div>                
                        <button type="submit" class="btn btn-primary" onClick={login}>
                            Login
                        </button>
                        <br/>
                    </form>      
                    <a class="card-link" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Forgot your password?</a>
                    <a class="card-link" href="/Register">Create account</a>
                    <br/><br/>
                </div> 
            </div>
        </div>
    );
}
export default Login;