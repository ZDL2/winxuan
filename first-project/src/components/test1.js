import React, {Component} from 'react'
import Test2 from './test2'

import {Provider} from 'react-redux'
import {createStore} from 'redux'

class Test1 extends Component{
  constructor(props){
    super(props);
    this.state={

    }
  };
  render() {
    return(
      <div>
        <label>父组件</label>
        <input type="text"/>
        <p></p>
        <Test2/>
      </div>
    )
  }
}