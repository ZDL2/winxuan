import React from 'react';
import ReactDOM from 'react-dom';
// import Router from './router/router'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import {Provider} from 'react-redux'
import { createStore } from 'redux';
// import axios from 'axios'
import './assent/base.css'
import './assent/font/iconfont.css'
import './index.css';
import Goodslist from './components/goodlist/goodslist'
import Details from './components/details/details'
import Classify from './components/classify/classify'
import Car from './components/car/car'
import Settle from './components/settle/settle'
// import TextList from './components/test'

import registerServiceWorker from './registerServiceWorker';

//redux
const store = createStore((state = {
  toDetails:'',
  toCarGoods:[]
}, action) => {
  const count = state.count
  switch(action.type) {
    //触发动作
    case 'toDetails':
      return Object.assign({}, state, {
        toDetails: action.toDetail,
      });
    case 'toCar':
      console.log(action.toCarGoods)
      return Object.assign({}, state, {
        toCarGoods:action.toCarGoods,
      });
    default:
      return state
  }
});

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <div>
        <Route exact path="/goodslist/:classify/:classess" component={Goodslist}></Route>
        <Route path="/details/:tocatch/:bookid" component={Details}>
          {/*<Route path="goodscont"></Route>*/}
        </Route>
        <Route path="/classify" component={Classify}></Route>
        <Route path="/car" component={Car}></Route>
        {/*<Route path="/tests" component={TextList}></Route>*/}
        <Route path="/settle" component={Settle}></Route>
      </div>
    </Provider>


  </Router>
  , document.getElementById('root'));
registerServiceWorker();
