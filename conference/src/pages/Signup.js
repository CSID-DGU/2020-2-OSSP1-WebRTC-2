import React, {Component} from 'react';
import {PersonalInput} from '/Users/rush-k/Desktop/OpenSWProject/2020-2-OSSP1-WebRTC-2/conference/src/Components/Register';
import {CompleteRegister} from '/Users/rush-k/Desktop/OpenSWProject/2020-2-OSSP1-WebRTC-2/conference/src/Components/Register';
import {RegisterHeader} from '/Users/rush-k/Desktop/OpenSWProject/2020-2-OSSP1-WebRTC-2/conference/src/Components/Register';
import {
    Container,
  } from 'semantic-ui-react'

class Signup extends Component {
    render() {
        const { match } = this.props;
        const number = match.params.number;
        return (
            <div>
                <RegisterHeader number={number} />
                <Container style={{marginBottom: '2rem'}}>
                    { (number === '1' || number === undefined) && <PersonalInput />}
                    { (number === '2') && <CompleteRegister/>}
                </Container>
            </div>
        )
    }
};

export default Signup;