import React, { Component } from 'react';
import './contentdet.css'


import Contentitem from '../contentitem/contentitem'


class Contentdet extends Component {
    constructor(props) {
        super(props)
        this.state = {
            txt1:{
                title: "内容简介",
                api:this.props.api
            },
            txt2:{
                title: "精彩内容",
                api:this.props.api
            },
            txt3:{
                title: "目 录",
                api:this.props.api
            }
        }
    }


    render() {
        return (
            <div className="contentDet">
                <Contentitem txt={this.state.txt1} />
                <Contentitem txt={this.state.txt2} />
                <Contentitem txt={this.state.txt3} />
            </div>
        )
    }
}

export default Contentdet