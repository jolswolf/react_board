import Homepage from "./Homepage";
import Login from "./Login";
import Register from "./Register";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

function App(){
    var activeUser = sessionStorage.getItem('activeUser');
    return(
        <div className="App">
            <Router>
                <Routes>
                    <Route exact path="/" element={activeUser? <Homepage /> : <Login />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Register" element={<Register />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;