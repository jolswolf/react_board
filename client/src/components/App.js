import Homepage from "./Homepage";
import Login from "./Login";
import Register from "./Register";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import { useState } from "react";

function App(){
    const [user, setLoginUser] = useState({

    });
    return(
        <div className="App">
            <Router>
                <Routes>
                    <Route exact path="/" element={user && user.id ? <Homepage /> : <Login />} />
                    <Route path="/Login" element={<Login setLoginUser={setLoginUser}/>} />
                    <Route path="/Register" element={<Register />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;