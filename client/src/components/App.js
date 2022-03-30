import Homepage from "./Homepage";
import Login from "./Login";
import Register from "./Register";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { useState } from "react";

function App(){
    const [user, setLoginUser] = useState({

    });
    return(
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/">
                        {
                            user && user.id ? <Homepage/> : <Login/>
                        }
                        <Homepage/></Route>
                    <Route path="/Login"><Login setLoginUser={setLoginUser}/></Route>
                    <Route path="/Register"><Register/></Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;