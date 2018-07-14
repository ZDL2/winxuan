import React, { Component } from 'react';
import { Carousel } from 'antd';
import './banner.css';

class Banner extends Component {
  render() {
    return (
      <Carousel autoplay className="banner">
        <a href="#">
          <img src="http://static.winxuancdn.com/topic/subject/201807/640-304.jpg?201807061347" />
        </a>
        <a href="#">
          <img src="http://static.winxuancdn.com/topic/subject/201806/dp/640-304.jpg?201807061347" />
        </a>
        <a href="#">
          <img src="&#10;//static.winxuancdn.com/topic/subject/201804/18dsj/640-304-5.jpg" />
        </a>
        <a href="#">
          <img src="&#10;//static.winxuancdn.com/topic/subject/201805/mks/640-304.jpg" />
        </a>
        <a href="#">
          <img src="&#10;//static.winxuancdn.com/topic/subject/201804/17hs/640-304.jpg" />
        </a>
        <a href="#">
          <img src="&#10;//static.winxuancdn.com/topic/subject/201801/qkl/640-304.jpg&#10;" />
        </a>
      </Carousel>
    );
  }
}

export default Banner;
