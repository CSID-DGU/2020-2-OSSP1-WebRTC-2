import React, {Component} from 'react';
import {PersonalInput} from '../Components/Register/PersonalInput';
import {RegisterHeader} from '../Components/Register';
import { Container } from 'semantic-ui-react'

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