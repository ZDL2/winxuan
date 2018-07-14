import React, { Component } from 'react';

import { BrowserRouter as Router, Route} from 'react-router-dom';
// zwy
import Main from './components/main/main';
import Classify from './components/classify/classify';
import Summer from './components/summer/summer';
import Login from './page/login/login';
import Register from './page/register/register';
import Details from './page/details/details';
import Mine from './page/mine/mine';
import Favorite_footprint from './page/favorite_footprint/favorite_footprint';
// drt
import Goodslist from './components/goodlist/goodslist'
import Car from './components/car/car'
import Settle from './components/settle/settle'
import Account from './components/account/account'

import './assent/css/base.css';
import './assent/font/iconfont.css';
import './App.css';
import 'antd/dist/antd.css';
class App extends Component {
  render() {
    return (
      <Router>
          <div className="App clearfix">
          {/* zwy */}
            <Route exact path="/" component={Main}/>
            <Route path="/classify" component={Classify}></Route>
            <Route path="/summer" component={Summer}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/details" component={Details}></Route>
            <Route path="/mine" component={Mine}></Route>
            <Route path="/favorite" component={Favorite_footprint}></Route>
          {/* drt */}
            <Route exact path="/goodslist/:classify/:classess" component={Goodslist}></Route>
            <Route path="/car" component={Car}></Route>
            <Route path="/settle" component={Settle}></Route>
            <Route path="/account" component={Account}></Route>
          </div>
      </Router>
    );
  }
}

export default App;
