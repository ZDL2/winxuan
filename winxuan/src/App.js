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
import Details from './components/details/details'
import Car from './components/car/car'
import Settle from './components/settle/settle'

import './assets/css/base.css';
import './assets/font/iconfont.css';
import './App.css';
import 'antd/dist/antd.css';

import {Provider} from 'react-redux';
import {createStore} from 'redux';

const store = createStore((state = {
  count: 1
},action) => {
  switch (action.type) {
      case 'minus':
      return Object.assign({}, state, {
          count: action.count,
      });
      case 'addition':
      return Object.assign({}, state, {
          count: action.count,
      });
      
      default:
      return state
  }
});

class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <div className="App clearfix">
          {/* zwy */}
            <Route exact path="/" component={Main}/>
            <Route path="/classify" component={Classify}></Route>
            <Route path="/summer" component={Summer}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/details/:classname/:proId" component={Details}></Route>
            <Route path="/mine" component={Mine}></Route>
            <Route path="/favorite" component={Favorite_footprint}></Route>
          {/* drt */}
            <Route exact path="/goodslist/:classify/:classess" component={Goodslist}></Route>
            <Route path="/details/:tocatch/:bookid" component={Details}></Route>
            <Route path="/car" component={Car}></Route>
            <Route path="/settle" component={Settle}></Route>
          </div>
        </Provider>
      </Router>
    );
  }
}

export default App;
