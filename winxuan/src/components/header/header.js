import React, { Component } from 'react';
import './header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="head-box">
          <a className="logo">文轩网</a>
          <div className="search">
            <input type="text"/>
          </div>
          <div className="user-login">
            <a href="/login">登录</a>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
