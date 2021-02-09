// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

class YouTubeDebugger extends Component{

    state = {
        errors: [],
        user: null,
        settings: {
            bitrate: 8,
            video: {
                resolution: '1080p'
            }
        }
    } 
      
    changeBitRate = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    changeResolution = () => {
        this.setState({
            settings: {
                video: {
                    resolution: "720p"
                }
            }
        })
    }


    render(){

        return(
            <div>
                <button onClick={() => this.changeBitRate()} className="bitrate">Bitrate</button>
                <button onClick={() => this.changeResolution()} className='resolution'>Resolution</button>
            </div>
        )
    }
}

export default YouTubeDebugger