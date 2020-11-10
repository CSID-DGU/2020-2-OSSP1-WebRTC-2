import { Avatar, Button, Container } from '@material-ui/core';
import React, { Component } from 'react';
import BrokenImg from '@material-ui/icons/BrokenImage';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 'k_rush@naver.com',
            name: '김민수',
            file: '',
            previewURL: ''
        }
    }
    handleFileOnChange = (event) => {
        event.preventDefault();
        let reader = new FileReader();
        let file = event.target.files[0];
        reader.onloadend = () => {
            this.setState({
                file: file,
                previewURL: reader.result
            })
        }
        reader.readAsDataURL(file);
    }
    render() {
        let profile_preview = null;
        if (this.state.file !== '') {
            profile_preview = <img className='profile_preview' src={this.state.previewURL} ></img>
        }else{
            profile_preview = <Avatar src={BrokenImg} style={{ width: '300px', height: '300px', justifyContent: 'center'}} />
        }
        return (
            <Container style={{ display: 'block', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                <Container style={{ marginTop: '4vh', display: 'flex', width: '100%', justifyContent: 'center' }}>
                <div>
                    <Container style = {{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', width: '300px', height: '300px'}}>
                    <input type='file'
                        accept='image/jpg,impge/png,image/jpeg,image/gif'
                        name='profile_img'
                        onChange={this.handleFileOnChange}>
                    </input>
                    {profile_preview}
                    </Container>
                </div>
                     </Container>
                <Container style={{ marginTop: '2vh', justifyContent: 'center' }}>
               
                </Container>
                
                <Container style={{ marginTop: '2vh' }}>
                    <text style={{ fontSize: '40px' }}>{this.state.name} 님</text>
                </Container>
                <Container>
                    <text style={{ fontSize: '15px' }}>{this.state.id}</text>
                </Container>
            </Container>
        );
    }
}

export default Profile;