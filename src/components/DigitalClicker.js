// Code DigitalClicker Component Here
import React, { Component } from 'react'

class DigitalClicker extends Component{

    state = {
        timesClicked: 0
    }

    handleClick = () => {
        let newClick = this.state.timesClicked
        newClick += 1
        this.setState({
            timesClicked: newClick
        })
    }

    render(){

        return(
            <button onClick={() => this.handleClick()} >{this.state.timesClicked}</button>
        )
    }
}

export default DigitalClicker