import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="bottom-box">
          <Link to="/">
            <i className="iconfont icon-shouye"></i>
            <span>首页</span>
          </Link>
          <Link to="classify">
            <i className="iconfont icon-sousuo1"></i>
            <span>分类搜索</span>
          </Link>
          <a href="#/car">
            <i className="iconfont icon-ziyuan"></i>
            <span>购物车</span>
          </a>
          <a href="#">
            <i className="iconfont icon-ren"></i>
            <span>我的文轩</span>
          </a>
        </div>
      </footer>
    )
  }
}

export default Footer;
