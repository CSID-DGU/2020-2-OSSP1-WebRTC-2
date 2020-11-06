import React from 'react';
import { Route } from 'react-router-dom';
import { Login } from '../Components/Login';
import { Cam } from '../Components/Cam';

const Home = () => (
    <div>
        <Route>
            <Login />
        </Route>
    </div>
);

export default Home;