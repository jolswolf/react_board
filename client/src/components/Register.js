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
            try {
                axios.post("http://localhost:3001/register", user )
                .then(res => console.log(res));
            }catch (error){
                console.error(error.response.data);
            }
            
        }else{
            alert("err: invalid input");
        }
    }
    return(
        <div class="container">
            <div class="card">
                <div class="container">
                    <br/>
                    <h3 class="card-title">Create Account</h3>
                    <br/>
                    <form autocomplete="off">
                        <div class="mb-3">
                            <label for="userInput" class="form-label">Username</label>
                            <input id="userInput" class="form-control" type="text" name="name" value={user.name} onChange={handleChange} placeholder="A username"/>
                        </div>
                        <div class="mb-3">
                            <label for="emailInput" class="form-label">Email Address</label>
                            <input type="text" id="emailInput" class="form-control" name="email" value={user.email} onChange={handleChange} placeholder="Your email"/>
                        </div>
                        <div class="mb-3">
                            <label for="passwordInput" class="form-label">Password</label>
                            <input type="password" id="passwordInput" class="form-control" name="password" value={user.password} onChange={handleChange} placeholder="A password"/>
                        </div>
                        <button type="submit" class="btn btn-primary" onClick={register}>
                            Register
                        </button>
                        <br/>
                    </form>
                    <a class="card-link" href="/Login">Already have an account?</a>
                    <br/><br/>
                </div>
            </div>
        </div>
    );
}
export default Register;