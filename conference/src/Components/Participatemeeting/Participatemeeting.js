//민수오빠가 하신 부분
import React, { Component } from 'react';
import { Container, Divider , Paper, Button } from '@material-ui/core';
import Clock from './Clock';

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
        const inputURL = "https://" + roomNum + ".ngrok.io/room";
        window.open(inputURL,"화상회의")       
    }

    render() {    
        console.log(this.props);    
        return (
            <div style={{width: "100%", textAlign: 'center', marginTop:'10vh'}}>
                <h1>미팅 참여하기</h1>
                <h3>아래에 주소를 입력해주세요.</h3>
                <Container style={{display: "inline-flex", width: "100%", overflowX: "scroll"}}>
                    <Paper variant="outlined" style={{display: "block", marginTop: "1vh", 
                    marginBottom: "1vh", flexGrow: "0", flexShrink: "0",
                    marginRight: "2vh", width: "400px", height: "200px"}}>
                    <h1>공개SW프로젝트</h1>
                    <Divider/>
                    <text>손윤식 교수님</text>
                    <Divider/>
                    <h2>참여 인원 : 2명</h2>
                    <Button variant="contained" color="primary" style={{width: "95%", marginTop: "2vh"}} href='/room'>화상회의 참여하기</Button>
                    </Paper>
                    <Paper variant="outlined" style={{display: "block", marginTop: "1vh", 
                    marginBottom: "1vh", flexGrow: "0", flexShrink: "0",
                    marginRight: "2vh", width: "400px", height: "200px"}}>
                    <h1>컴퓨터공학종합설계1</h1>
                    <Divider/>
                    <text>손윤식 교수님</text>
                    <Divider/>
                    <h2>참여 인원 : 0명</h2>
                    <Button variant="contained" color="default" style={{width: "95%", marginTop: "2vh"}}>준비중...</Button>
                    </Paper>
                    <Paper variant="outlined" style={{display: "block", marginTop: "1vh", 
                    marginBottom: "1vh", flexGrow: "0", flexShrink: "0",
                    marginRight: "2vh", width: "400px", height: "200px"}}>
                    <h1>컴퓨터공학종합설계2</h1>
                    <Divider/>
                    <text>손윤식 교수님</text>
                    <Divider/>
                    <h2>참여 인원 : 0명</h2>
                    <Button variant="contained" color="default" style={{width: "95%", marginTop: "2vh"}}>준비중...</Button>
                    </Paper>
                    <Paper variant="outlined" style={{display: "block", marginTop: "1vh", 
                    marginBottom: "1vh", flexGrow: "0", flexShrink: "0",
                    marginRight: "2vh", width: "400px", height: "200px"}}>
                    <h1>기업사회맞춤형프로젝트</h1>
                    <Divider/>
                    <text>손윤식 교수님</text>
                    <Divider/>
                    <h2>참여 인원 : 0명</h2>
                    <Button variant="contained" color="default" style={{width: "95%", marginTop: "2vh"}}>준비중...</Button>
                    </Paper>
                    <Paper variant="outlined" style={{display: "block", marginTop: "1vh", 
                    marginBottom: "1vh", flexGrow: "0", flexShrink: "0",
                    marginRight: "2vh", width: "400px", height: "200px"}}>
                    <h1>컴파일러구성</h1>
                    <Divider/>
                    <text>손윤식 교수님</text>
                    <Divider/>
                    <h2>참여 인원 : 0명</h2>
                    <Button variant="contained" color="default" style={{width: "95%", marginTop: "2vh"}}>준비중...</Button>
                    </Paper>
                </Container>
                <Container style={{display:"flex", justifyContent: "center", marginTop: "5vh"}}>
                    <Paper variant="outlined" style={{width: "400px", height: "200px",backgroundColor: "rgba(0,0,0,0.1)"}}>
                        <Clock/>

                    </Paper>

                </Container>

            </div>
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