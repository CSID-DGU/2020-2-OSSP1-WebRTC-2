import { Button, TextField } from '@material-ui/core';
import React, { Component } from 'react';

class Alert extends Component {
    constructor() {
        super();
        this.state = {
            message: ""
        }
    }

    alertmessage = () => {
        alert(this.state.message);
    }

    writeMessage = (event) => {
        this.setState({message: event.target.value});
    }
    render() {
        return (
            <div>
                <TextField onChange={this.writeMessage}></TextField>
                <Button onClick={this.alertmessage}>
                    공지
                </Button>
            </div>
        );
    }
}

export default Alert;