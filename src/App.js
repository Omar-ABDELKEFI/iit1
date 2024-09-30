import React from 'react';
import {BrowserRouter, Route , Routes , Link} from 'react-router-dom'
import Login from './components/Login'      
import Dashboard from './components/Dashboard'      
import PrivateRoute from './routes/PrivateRoute';

function MainRoute() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/" element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
            <Route path="/Dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>}/>

        </Routes>
        </BrowserRouter>
    );
}

export default MainRoute;
