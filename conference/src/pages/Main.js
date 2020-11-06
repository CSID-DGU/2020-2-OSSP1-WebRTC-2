import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Mainmenu } from '../Components';

const Main = () => (
    <div>
        <Route>
            <Mainmenu />
        </Route>
    </div>
);

export default Main;