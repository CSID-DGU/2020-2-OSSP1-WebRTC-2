import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Mainmenu } from '../Components';
import useStyles from './useStyles';

const Main = () => (
    <div>
        <Route>
            <Mainmenu classes={useStyles()}/>
        </Route>
    </div>
);

export default Main;