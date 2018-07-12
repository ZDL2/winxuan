import React,{ Component } from 'react'
import './child.css'
import { connect } from 'react-redux';

class Child extends Component{
  constructor(props) {
    super(props);
  }
  //props传参
  // render() {
  //   return <div>
  //     <p>{this.props.parms}</p>
  //     <input type="text" onChange={this.props.onTochild}/>
  //   </div>
  // }
  // export default Child;
  //redux
  render(){
    return(
     <div onClick={this.props.hideMe.bind(this)} style={{display:this.props.showChild?'block':'none'}}  id="child" >
       {/*<div >*/}
         <img  src={this.props.showSrc} />
       {/*</div>*/}

      </div>
    )
  }
}
export default connect((state) => {
  return state
}, (dispatch) => {
  return {
    hideMe:(e)=>{
      dispatch({
        type:'hideMe',
        showChild:false,
        ImgSrc:'',
        cont:0,
      })
    }
  }
})(Child);