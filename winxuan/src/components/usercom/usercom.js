import React, { Component } from 'react';
import './usercom.css'


class Usercom extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="usercom">
                <div className="comment">
                    <div className="empty_comment">
                        <i className="iconfont icon-buoumaotubiao14"></i>
                        <h3>暂无评论</h3>
                        <h4>购买后快来发表评论吧！</h4>
                    </div>
                </div>
            </div>
        )
    }
}

export default Usercom