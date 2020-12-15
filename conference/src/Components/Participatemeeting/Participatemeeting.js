//민수오빠가 하신 부분
import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { Container, Button } from '@material-ui/core';

class Participatemeeting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            linkURL: null,
        }
    }
    appChange = (e) => {
        this.setState({
            linkURL: e.target.value
        });
      }
    appClick = () => {
        
        const roomNum = this.state.linkURL;
        const inputURL = "https://" + roomNum + ".ngrok.io/Cam";
        window.open(inputURL,"화상회의")       
    }

    render() {        
        return (
            <Container style={{textAlign: 'center', marginTop:'10vh'}}>
                <h1>미팅 참여하기</h1>
                <h3>아래에 주소를 입력해주세요.</h3>
               
                <TextField type = "text"
                id="standard-full-width"
                label="Put Address"
                style={{ marginTop: 80 }}
                onChange={this.appChange}
                placeholder="Put room code!"
                helperText="주소를 정확히 입력해주세요."
                fullWidth
                margin="normal"
                InputLabelProps={{
                shrink: true,
                }}
                /> 
                <Button 
                id = "link"
                variant="outlined"
                color="secondary"
                style={{width: '100%'}}
                onClick={this.appClick}
                >
                  Join the Meeting!
                </Button>
            </Container>
        );
    }
}

export default Participatemeeting;
/* 새창 띄우는 부분까지 했음 리턴값 입력값으로 넣기
import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { Container, Button } from '@material-ui/core';
class Participatemeeting extends Component {
        construtor(props) {
           
            this.goSurf = this.goSurf.bind(this);
        }
        goSurf () {
            var urlData = document.linkto.input_text.value;
            window.location.href=urlData;
            return 
            }
        
        viewData = () => {
            window.open('goSurf','Data','height=1000,width=1000');
        }
               
    render() {
    
        return (
            <Container style={{textAlign: 'center', marginTop:'10vh'}} name = "linkto">
                <h1>미팅 참여하기</h1>
                <h3>아래에 주소를 입력해주세요.</h3>
               
                <input type = "text"
                id="standard-full-width"
                value={linkURL}
                label="Put Address"
                type="text"
                style={{ marginTop: 80 }}
                name="input_text"
                placeholder="ex) .......com"
                helperText="주소를 정확히 입력해주세요."
                fullWidth
                margin="normal"
                InputLabelProps={{
                shrink: true,
                }}
                />
                <Button 
                id = "link"
                variant="outlined"
                color="secondary"
                style={{width: '100%'}}
                onClick={this.viewData}
                >
                  Join the Meeting!
                </Button>
            </Container>
        );
    }
}

export default Participatemeeting;*/