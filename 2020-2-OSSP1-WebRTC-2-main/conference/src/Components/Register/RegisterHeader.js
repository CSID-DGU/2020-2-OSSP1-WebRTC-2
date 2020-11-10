import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Container,
  Step,
} from 'semantic-ui-react'

const style = {
    h1: {
      marginTop: '3em',
    },
    h2: {
      margin: '4em 0em 2em',
    },
    h3: {
      marginTop: '0.5em',
      padding: '2em 0em',
    },
    last: {
      marginBottom: '300px',
    },
    comp: {
        margin:'0.5rem',
        padding:'0.5rem'
    },
    base: {
        marginBottom: '2rem',
    }
}

class RegisterHeader extends Component {

    render() {
        return (
            <div>
                <Container style={style.h3}>
                    { <Link to='/'><Button color='orange' content='Back' icon='arrow alternate circle left outline' labelPosition='left' /></Link> }
                    <h1>Join WEB-RTC PROJECT</h1>
                    회원 정보를 입력하세요.
                </Container>
                <Container style={style.base}>
                    <Step.Group fluid>
                        <Step active icon='address card' title='Step 1:' description='Create personal account' />
                    </Step.Group>
                </Container>
            </div>
        );
    };
}

export default RegisterHeader;