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

export default Participatemeeting;