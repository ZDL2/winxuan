import React, { Component } from 'react';
import axios from 'axios';
import './goodslist.css';

class Goodslist1 extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props.api)
    this.state = {
      goodlist1 : []
    }
  }

  componentDidMount() {
    axios.get(this.props.api.url)
    .then((res) => {
      let goodData = res.data.data;
      let arr = [];
      for(let i=0; i < 9; i++){
        arr.push(goodData[i])
      }
      this.setState({
        goodlist1:arr
      })
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="goodsshow1">
        <ul className="clearfix">
          {this.state.goodlist1.map((item1,idx) => {
            return (
              <li key={idx}>
                <div className="item">
                  <a href={'/details/' + this.props.api.classname + '/' + item1.id}>
                    <div className="img">
                      <img src={item1.imgsrc} />
                    </div>
                    <h3 className="name">{item1.name}</h3>
                    <div className="price">
                      <span className="price-yes">￥{item1.price}</span>
                    </div>
                  </a>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

class Goodslist2 extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props.api)
    this.state = {
      goodlist2 : []
    }
  }

  componentDidMount() {
    axios.get(this.props.api.url)
    .then((res) => {
      let goodData = res.data.data;
      let arr = [];
      for(let i=0; i < 18; i++){
        arr.push(goodData[i])
      }
      this.setState({
        goodlist2:arr
      })
    })
    .catch((error) => {
      console.log(error);
    });
  }
  render() {
    return (
      <div className="goodsshow2">
        <ul className="clearfix">
          {this.state.goodlist2.map((item2,idx) => {
            return (
              <li key={idx}>
                <div className="item">
                  <a href={'/details/' + this.props.api.classname + '/' +item2.id}>
                    <div className="img">
                      <img src={item2.imgsrc} />
                    </div>
                    <h3 className="name">{item2.name}</h3>
                    <div className="price">
                      <span className="price-yes">￥{item2.price}</span>
                    </div>
                  </a>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

class Goodslist3 extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props.api)
    this.state = {
      goodlist3 : []
    }
  }

  componentDidMount() {
    axios.get(this.props.api.url)
    .then((res) => {
      let goodData = res.data.data;
      let arr = [];
      for(let i=5; i < 10; i++){
        arr.push(goodData[i])
      }
      this.setState({
        goodlist3:arr
      })
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="goodsshow3">
        <ul className="list">
          {this.state.goodlist3.map((item3,idx) => {
            return (
              <li key={idx}>
                <a href={'/details/' + this.props.api.classname + '/' +item3.id}>
                  <div className="img">
                    <img src={item3.imgsrc} />
                  </div>
                  <h3 className="name">{item3.name}</h3>
                  <p className="author">{item3.author}</p>
                  <div className="price">
                    <span className="price-yes">￥{item3.price}</span>
                    <span className="price-del">￥{item3.delprice}</span>
                  </div>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

class Goodslist4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goodlist4:[]
    }
    // console.log(this.props.api)
  }

  componentDidMount() {
    axios.get(this.props.api.url)
    .then((res) => {
      let goodData = res.data.data;
      let arr = [];
      for(let i=0; i < 4; i++){
        arr.push(goodData[i])
      }
      this.setState({
        goodlist4:arr
      })
    })
    .catch((error) => {
      console.log(error);
    });
  }
  render() {
    return (
      <div className="goodsshow4">
        {this.state.goodlist4.map((item4,idx) => {
          return (
            <a href={'/details/' + this.props.api.classname + '/' +item4.id} key={idx}>
              <div className="img">
                <img src={item4.imgsrc} />
              </div>
              <span className="tag">
                  低价
                  <br/>
                  抢鲜
                </span>
              <div className="price">
                <p className="price-yes">¥{item4.price}</p>
                <p className="price-del">¥{item4.delprice}</p>
              </div>
            </a>
          )
        })}
      </div>
    );
  }
}

class Goodslist5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goodlist5:[]
    }
    // console.log(this.props.api)
  }

  componentDidMount() {
    axios.get(this.props.api.url)
    .then((res) => {
      let goodData = res.data.data;
      let arr = [];
      for(let i=0; i < 4; i++){
        arr.push(goodData[i])
      }
      this.setState({
        goodlist5:arr
      })
    })
    .catch((error) => {
      console.log(error);
    });
  }
  render() {
    return (
      <div className="goodsshow5">
        <ul>
          {this.state.goodlist5.map((item5,idx) => {
            return (
              <li key ={idx}>
                <a href={'/details/' + this.props.api.classname + '/' +item5.id}>
                  <div className="name">
                    {item5.name}
                    <br/>
                    <span>诗人吉狄马加作序推荐！</span>
                  </div>
                  <div className="img">
                    <img src={item5.imgsrc} />
                  </div>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

export {Goodslist1, Goodslist2, Goodslist3, Goodslist4, Goodslist5};
