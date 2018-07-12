import React,{ Component } from 'react'
import './parent.css'
import Child from '../children/children.js'
import { connect } from 'react-redux';
class Parent extends Component{
  //redux通信
  render(){
    return(
      <div>
        <a >
      <div onClick={this.props.isShowChild.bind(this)} data-id="true">
        <img src="https://s11.mogucdn.com/mlcdn/c45406/180604_08l2i93l5b17keeigikk9ll1j3bb0_640x960.jpg_640x854.v1cAC.40.webp" alt=""/>
      </div>
        </a>
        <Child/>
      </div>
    )
  }
}

export default connect((state) => {
  return state
}, (dispatch) => {
  return {
    isShowChild:(e)=>{
      dispatch({
        type:'isShowChld',
        isShow:true,
        imgSrc:e.target.src
      })
    }
  }
})(Parent);
