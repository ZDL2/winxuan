import React, { Component } from 'react';
import './more_menu.css';

class More_menu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isShowMenu:false
        }
    }

    showMenu() {
        this.setState({
            isShowMenu : !this.state.isShowMenu
        })
    }

    render() {
        return (
            <div className="more_menu">
                <div className="moreBtn" onClick={this.showMenu.bind(this)}>
                    <i className="iconfont icon-more"></i>
                </div>
                <ul className="mmenu_list" style={{transform:this.state.isShowMenu ? "translateY(0)" : "translateY(-10px",display:this.state.isShowMenu ? "block" : "none"} }>
                    <i className="arrow"></i>
                    <li><a href="/">
                        <i className="iconfont icon-shouye"></i>
                        <p>首页</p>
                    </a></li>
                    <li><a href="/#">
                        <i className="iconfont icon-iconset0194"></i>
                        <p>分类搜索</p>
                    </a></li>
                    <li><a href="/#">
                        <i className="iconfont icon-wode"></i>
                        <p>我的文轩</p>
                    </a></li>
                </ul>
            </div>
        )
    }
}

export default More_menu