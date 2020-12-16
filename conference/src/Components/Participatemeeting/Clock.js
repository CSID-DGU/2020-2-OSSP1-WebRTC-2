import { Container } from '@material-ui/core';
import React, { Component } from 'react';

class Clock extends Component {
    constructor(props) {
        super(props)
        this.state = {date: new Date()}
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }
    
    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }
    
    render() {
        return (
            <Container style={{height: "100%", alignItems: "center"}}>
                <h1 style={{fontSize: "70px"}}>{this.state.date.toLocaleTimeString()}</h1>
            </Container>
        )
    }
}

export default Clock;