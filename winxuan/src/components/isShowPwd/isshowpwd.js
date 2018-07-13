import React, { Component } from 'react';
import './isshowpwd.css';

class Ishowpwd extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isShowPwd:false
        }
    }
    togglePwd(){
        console.log('1');
        this.setState({
            isShowPwd:!this.state.isShowPwd
        })
    }
    render() {
        return (
            <div className="isShowPwd" style={{background:this.state.isShowPwd?"#f41e33":"#dddddd"}}>                                
                <i>11</i>
                <span className="dot" style={{left:this.state.isShowPwd?'18px':'2px'}}></span>
                <i>··</i>
            </div>
        )
        
    }
}

export default Ishowpwd;