import React, { Component } from 'react';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PasswordList from './components/passwordList';

class App extends Component {
    state = {  } 
    render() { 
        return <React.Fragment>
        <Router>
            <Routes>
                <Route path="/Login" element={<Login/>} />
                <Route path="/PasswordList" element={<PasswordList/>}/>
            </Routes>
        </Router>
        </React.Fragment>;
    }
}
 
export default App;