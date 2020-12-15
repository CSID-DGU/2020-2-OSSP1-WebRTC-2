import React, { Component } from 'react'
import logo from '../../image/logo.png';
import { Link } from 'react-router-dom';

import { Button, Form, Grid, Message, Segment } from 'semantic-ui-react'
import { Dialog } from '@material-ui/core';

class Login extends Component {
  constructor() {
    super();
    this.state={
      userName: "",
      islogin: false,
    }
  }
  tryLogin = () => {
    if (this.state.userName != "") {
      this.setState({islogin: true});
      localStorage.setItem("nickname", this.state.userName);
    } else {
      alert("닉네임을 정확히 입력해주세요.");
    }
  }

  writeName = (event) => {
    this.setState({userName: event.target.value});
  }

  render() {
    return (
      <div style={{display: 'block', alignItems: 'center', textAlign: 'center', justifyContent: 'center'}}>
        
        <Dialog open={this.state.islogin}>
          <Button href='/main'>
            메인 페이지 이동
          </Button>
        </Dialog>

        <div>
          <img style={{marginBottom: '2vh' ,width: '400px', height: '400px'}} src={logo} />
        </div>
      <Grid textAlign='center' style={{height: '100%', justifyContent: 'center'}} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 500 }}>
            <Form size='large'>
              <Segment stacked>
                <Form.Input fluid icon='user' iconPosition='left' placeholder='Nickname'
                onChange={this.writeName} />
​
                <Button color='orange' fluid size='large' onClick={this.tryLogin}> Login </Button>
              </Segment>
            </Form>
 
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default Login;