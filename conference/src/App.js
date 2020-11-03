import React, { Component } from 'react';
import { Home, Signup } from '/Users/rush-k/Desktop/OpenSWProject/2020-2-OSSP1-WebRTC-2/conference/src/pages';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
    render() {      
        return (
            <div>
                <Route exact path="/" component={Home} />
                <Switch>
                    <Route path="/signup/:number" component={Signup} />
                    <Route path="/signup" component={Signup} />
                </Switch>
            </div>
        );
    };
};

export default App;