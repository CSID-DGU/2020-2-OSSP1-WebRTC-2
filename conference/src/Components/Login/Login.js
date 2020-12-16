import React, { Component } from 'react'
import logo from '../../image/logo.png';
import { Grid, Container, CssBaseline,TextField, Link, Button, Dialog } from '@material-ui/core';
import axios from 'axios';

class Login extends Component {
  constructor() {
    super();
    this.state={
      userid: "",
      userpassword: "",
      islogin: false,
    }
  }
  tryLogin = async () => {
    sessionStorage.setItem("userid", this.state.userid);
    if (this.state.userpassword === "1") {
      sessionStorage.setItem("userstatus", 1);
    } else {
      sessionStorage.setItem("userstatus", 0);
    }
    /*
    let dat= await axios.post('http://ec2-15-165-236-0.ap-northeast-2.compute.amazonaws.com:4000/api/users/login', {
      email: this.state.userid,
      password: this.state.userpassword
    })
    .then(function (response) {
        if (response.data.loginSuccess === true) {
          console.log(response.data);
          sessionStorage.setItem(
              "loginUserInfo",
              JSON.stringify({
                userid: response.data.userId,
                email: response.data.email,
                name: response.data.name,
                status: response.data.status
              })
          );
          alert("로그인이 성공적으로 완료되었습니다.")
        } else {
          console.log(response.data);
          alert(response.data.message)
          return 1;
        }
    })
    .catch(function (error) {
      console.log(error);
    });

    if (dat != 1) {
      this.setState({islogin: !this.state.islogin}, () => console.log(this.state.islogin));
    }
    */
  }

  writeId = (event) => {
    this.setState({userid: event.target.value});
  }

  writePw = (event) => {
    this.setState({userpassword: event.target.value});
  }

  render() {
    console.log(this.state);
    if (this.state.islogin == true) {
      return (
        <Dialog open={this.state.islogin}>
          <Button href="/main">페이지 이동</Button>
        </Dialog>
      )
    }
    return (
      <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div>
        <Container style={{marginTop: "25vh", display:"flex", justifyContent: "center"}}>
          <img src={logo}></img>
        </Container>
        <form noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="이름"
            name="이름 입력"
            autoComplete="email"
            autoFocus
            onChange={this.writeId}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="직위 입력"
            label="강의자 : 0 , 학생 : 1 입력"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={this.writePw}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={this.tryLogin}
            href="/main"
          >
            Sign In
          </Button>
        </form>
      </div>
    </Container>
    )
  }
}

export default Login;