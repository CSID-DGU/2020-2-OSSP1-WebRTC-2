import React, { Component } from 'react';
import { Home, Main, Signup } from './pages';
import { CompleteRegister } from './Components/Register/CompleteRegister';
import { Route } from 'react-router-dom';
import { Cam } from './Components/Cam'

class App extends Component {
    render() {      
        return (
            <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/completeregister" component={CompleteRegister} />
                <Route path="/main" component={Main}/>
                <Route path="/cam" component={Cam}/>
            </div>
        );
    };
};

export default App;