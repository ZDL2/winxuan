import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './imglink.css';

class Imglink extends Component {
  render() {
    return (
      <div className="imglink">
        <Link to={this.props.link}>
          <img src={this.props.src} alt=""/>
        </Link>
      </div>
    );
  }
}

export default Imglink;
