import React, { Component } from 'react'
import logo from 'C:/Users/emili/Documents/2020-2-OSSP1-WebRTC-2/conference/src/image/logo.png';
import { Link } from 'react-router-dom';

import { Button, Form, Grid, Message, Segment } from 'semantic-ui-react'

class Login extends Component {
  render() {
    return (
      <div style={{display: 'block', alignItems: 'center', textAlign: 'center', justifyContent: 'center'}}>
        <div>
          <img style={{marginBottom: '2vh' ,width: '400px', height: '400px'}} src={logo} />
        </div>
      <Grid textAlign='center' style={{height: '100%', justifyContent: 'center'}} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 500 }}>
            <Form size='large'>
              <Segment stacked>
                <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                />
​
                <Link to="/main"><Button color='orange' fluid size='large'> Login </Button></Link>
              </Segment>
            </Form>
            <Message>
              Join or Create your Project!<br />
              <Link to="/signup">Sign Up</Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default Login;