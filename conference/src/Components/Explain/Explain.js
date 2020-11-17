import React, { Component } from 'react';
import { Container } from '@material-ui/core';
import Logo from '../../image/logomini.png';

class Explain extends Component {
    render() {
        return(
            <Container style={{display: "flex", flexDirection: "column", alignContent: "center", justifyContent: "center"}}>
                <img src={Logo} style={{width: "300px"}}/>
                <h1 style={{fontSize: '50px',marginTop: '5vh'}}>언제든 미팅에 참여하고 자신의 미팅룸을 만들어보세요!</h1>
                <h3 style={{marginTop: '10vh'}}>좌측의 미팅 개설하기 버튼을 누르고 미팅룸 주소를 입력하여 입장해 보세요.</h3>
                <h3>좌측의 미팅 개설하기 버튼을 누르고 나만의 미팅룸을 만들어 보세요.</h3>
                <h3>좌측의 녹화영상 보기 버튼을 누르고 녹화 영상 주소를 입력하여 놓친 영상도 보실 수 있습니다.</h3>
            </Container>
        );
    }
}

export default Explain;