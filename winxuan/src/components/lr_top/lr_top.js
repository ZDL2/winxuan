import React, { Component } from 'react';
import './lr_top.css';

class Lr_top extends Component {
    constructor(props){
        super(props)
        
    }

    render() {
        return (
            <div className="favorite_top">
                <a href="javascript:history.go(-1);" className="back">
                    <span className="iconfont icon-jiantou"></span>
                </a>
                <div className="cont">
                    <h2>{this.props.txt}</h2>
                </div>
            </div>
        )
    }
}

export default Lr_top