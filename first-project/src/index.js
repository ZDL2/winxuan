import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// import Router from './router/router'

//头部组件
import Parent from './components/parent/parent.js'

import {Provider} from 'react-redux'
import { createStore } from 'redux';

import Children from './components/children/children.js'

const store = createStore((state = {
  showChild:0,
  showSrc:''
}, action) => {
  const count = state.count
  switch(action.type) {
    //触发动作
    case 'isShowChld':
      return Object.assign({}, state, {
        showChild: action.isShow,
        showSrc: action.imgSrc
      });
    case 'hideMe':
      return Object.assign({}, state, {
        showChild: action.showChild,
        showSrc: action.ImgSrc,
  });
    default:
      return state
  }
});

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <div>
        {/*<Parent/>*/}
        <Route path="/" component={Parent} />
        <Route path="/children" component={Children} />
      </div>
    </Provider>
  </Router>
   , document.getElementById('demo'));
registerServiceWorker();
