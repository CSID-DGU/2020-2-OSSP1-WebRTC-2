import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { Container, Button } from '@material-ui/core';
class Participatemeeting extends Component {
    appChange = (e) => {
        this.setState({
            linkURL: e.target.value
        });
      }
    appClick = () => {
        const inputURL = document.getElementById("this.state.linkURL").value;
        window.open("inputURL","화상회의")       
      }
    render() {
        const { linkURL } = this.state;
        const { appChange, appClick } = this;
        
        return (
            <Container style={{textAlign: 'center', marginTop:'10vh'}}>
                <h1>미팅 참여하기</h1>
                <h3>아래에 주소를 입력해주세요.</h3>
               
                <input type = "text"
                id="standard-full-width"
                value={linkURL}
                label="Put Address"
                style={{ marginTop: 80 }}
                onChange={appChange}
                placeholder="ex) .......com"
                helperText="주소를 정확히 입력해주세요."
                fullWidth
                margin="normal"
                InputLabelProps={{
                shrink: true,
                }}
                /> <Button 
                id = "link"
                variant="outlined"
                color="secondary"
                style={{width: '100%'}}
                onclick={appClick}
                >
                  Join the Meeting!
                </Button>
            </Container>
        );
    }
}

export default Participatemeeting;