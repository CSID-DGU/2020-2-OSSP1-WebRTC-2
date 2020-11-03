import React, {Component} from 'react';
import {PersonalInput} from '/Users/rush-k/Desktop/OpenSWProject/2020-2-OSSP1-WebRTC-2/conference/src/Components/Register';
import {CompleteRegister} from '/Users/rush-k/Desktop/OpenSWProject/2020-2-OSSP1-WebRTC-2/conference/src/Components/Register';
import {RegisterHeader} from '/Users/rush-k/Desktop/OpenSWProject/2020-2-OSSP1-WebRTC-2/conference/src/Components/Register';
import {
    Container,
  } from 'semantic-ui-react'

class Signup extends Component {
    render() {
        return (
            <div>
                <RegisterHeader />
                <Container style={{marginBottom: '2rem'}}>
                    <PersonalInput />
                </Container>
            </div>
        )
    }
};

export default Signup;