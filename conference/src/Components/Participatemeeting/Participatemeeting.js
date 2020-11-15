import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { Container, Button } from '@material-ui/core';
class Participatemeeting extends Component {
    render() {
        return (
            <Container style={{textAlign: 'center', marginTop:'10vh'}}>
                <h1>미팅 참여하기</h1>
                <h3>아래에 주소를 입력해주세요.</h3>
                <TextField
                id="standard-full-width"
                label="Put Address"
                style={{ marginTop: 80 }}
                placeholder="ex) .......com"
                helperText="주소를 정확히 입력해주세요."
                fullWidth
                margin="normal"
                InputLabelProps={{
                shrink: true,
                }}
                />
                <Button 
                variant="outlined"
                color="secondary"
                style={{width: '100%'}}
                >
                  Join the Meeting!
                </Button>
            </Container>
        );
    }
}

export default Participatemeeting;