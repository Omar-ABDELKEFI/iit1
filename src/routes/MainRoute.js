import React from 'react';
import {BrowserRouter, Route , Routes , Link} from 'react-router-dom'
import Login from '../components/Login'      
import Dashboard from '../components/Dashboard'      
import PrivateRoute from './PrivateRoute';

function MainRoute(props) {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/login" component={Login}/>
            <Route path="/" component={<PrivateRoute><Dashboard/></PrivateRoute>}/>
            <Route path="/Dashboard" component={<PrivateRoute><Dashboard/></PrivateRoute>}/>

        </Routes>
        </BrowserRouter>
    );
}

export default MainRoute;
