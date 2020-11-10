import { Avatar, Button, Container } from '@material-ui/core';
import React, { Component } from 'react';
import BrokenImg from '@material-ui/icons/BrokenImage';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 'k_rush@naver.com',
            name: '김민수'
        }
    }
    render() {
        return (
            <Container style={{display: 'block', justifyContent:'center', alignContent: 'center', alignItems: 'center'}}>
                <Container style={{marginTop: '4vh', display: 'flex', width:'100%', justifyContent: 'center'}}>
                    <Avatar src={BrokenImg} style={{width: '300px', height: '300px'}}/>
                </Container>
                <Container style={{marginTop: '2vh', justifyContent: 'center'}}>
                    <Button>프로필 사진 변경하기</Button>
                </Container>
                <Container style={{marginTop: '2vh'}}>
                    <text style={{fontSize: '40px'}}>{this.state.name} 님</text>
                </Container>
                <Container>
                    <text style={{fontSize: '15px'}}>{this.state.id}</text>
                </Container>
            </Container>
        );
    }
}

export default Profile;