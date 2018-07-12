import React ,{Component}from 'react';
// import ReactDOM from 'react-dom';

import Goodslist from './components/goodlist/goodslist'
class Home extends Component{
  constructor(props){
    super(props);
    this.state={
    }
  };
  render(){
    return(
      <div>
        <Goodslist/>
      </div>
    )
  }
}
export default Home