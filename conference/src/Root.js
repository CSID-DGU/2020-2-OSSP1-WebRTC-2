import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Blackboard } from './Components/Blackboard';

const Root = () => (
    <BrowserRouter>
        <App/>
    </BrowserRouter>
)

export default Root;