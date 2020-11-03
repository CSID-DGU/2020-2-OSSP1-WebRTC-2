import React, { Component } from 'react';
import { Home, Signup } from '/Users/rush-k/Desktop/OpenSWProject/2020-2-OSSP1-WebRTC-2/conference/src/pages';
import { CompleteRegister } from '/Users/rush-k/Desktop/OpenSWProject/2020-2-OSSP1-WebRTC-2/conference/src/Components/Register';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
    render() {      
        return (
            <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/completeregister" component={CompleteRegister} />
            </div>
        );
    };
};

export default App;