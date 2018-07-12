import React, { Component } from 'react';
import './textline.css';

class Textline extends Component {
  render() {
    return (
      <div className="textline">
        <h3>
          <a href={`/goodslist/${this.props.title}/null`}>
            <span>{this.props.title}</span>
            <i className="line"></i>
          </a>
        </h3>
      </div>
    );
  }
}

export default Textline;
