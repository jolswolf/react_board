import { useState } from "react";
import axios from "axios";

const Register = () => {
    const [user, setUser] = useState({
        name:"",
        email:"",
        password:""
    });
    const handleChange = e => {
        const {name, value} = e.target;
        setUser({
            ...user,
            [name]:value
        });
    }

    //register func
    const register = () => {
        const {name, email, password} = user;
        if (name && email && password){
            axios.post("http://localhost:3001/register", user )
            .then(res => console.log(res));
        }else{
            alert("err: invalid input");
        }
        return(
            <>
                <div>
                    <div>
                        Create New Account
                    </div>
                    <span>
                        Already have an account?
                        <a href="#" target="_blank">
                            Log in
                        </a>
                    </span>
                    <div>
                        <form action="#">
                            <div>
                                <div>
                                    <input type="text" id="create-account-pseudo" name="name" value={user.name} onChange={handleChange} placeholder="Name"/>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <input type="text" id="create-account-first-name" name="email" value={user.email} onChange={handleChange} placeholder="Email"/>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <input type="password" id="create-account-email" name="password" value={user.password} onChange={handleChange}    placeholder="password"/>
                                </div>
                            </div>
                            <div>
                                <button type="submit" onClick={register}>
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        );
    }
}
export default Register;