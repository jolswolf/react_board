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
        <>
            <div>
                <div>
                    Login
                </div>
            </div>
            <div>
                <form action="#" autoComplete="off">
                    <div>
                        <div>
                            <input type="text" name="email" value={user.email}  onChange={handleChange} placeholder="Your email"/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <input type="password" name="password" value={user.password}  onChange={handleChange} placeholder="Your password"/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                                Forgot your password?
                            </a>
                        </div>
                    </div>
                    <div>
                        <button type="submit" onClick={login}>
                            Login
                        </button>
                    </div>
                </form>
            </div>
            <div>
                <a href="/Register">
                    <span>
                        Create account
                    </span>
                </a>
            </div>
        </>
    );
}
export default Login;