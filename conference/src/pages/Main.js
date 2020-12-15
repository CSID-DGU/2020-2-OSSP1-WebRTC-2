import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Mainmenu } from '../Components';
import useStyles from './useStyles';

const nickname = sessionStorage.getItem("nickname");

const Main = () => (
    <div>
        <Route>
            <Mainmenu nickname={nickname} classes={useStyles()}/>
        </Route>
    </div>
);

export default Main;