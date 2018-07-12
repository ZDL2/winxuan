import React, { Component } from 'react';

class Car extends Component{
  constructor(props){
    super(props);
    this.state={
      value:'',
      numb:0,
      data:[
        {
          cont:3,
          name:'啦啦啦啦'
        }
      ]
    }
  }
  // getInitialState() {
  //   return {value: 'Hello Runoob!',numb:0};
  // };
  handleChange2(item,idx) {
    this.setState({
      value: '数字减 1',
      numb:this.state.numb-1<=0?0:this.state.numb-1
    })

    this.state.data[idx].cont--
    console.log(item)
  };
  handleChange(item,idx) {
    this.setState({
      value: '数字加 1',
      numb:this.state.numb+1
    })


    this.state.data[idx].cont++
    console.log(item)

  };
  render() {
    var value = this.state.value;
    var numb = this.state.numb;
    return <div>
      {this.state.data.map((item,idx)=>{
        return <div>
          <p>{item.name}</p>
          <button onClick={this.handleChange2.bind(this,item,idx)}style={{'marginRight':'20px'}}>点我 - </button>

          <input type="text" value={item.cont} />

          <button onClick={this.handleChange.bind(this,item,idx)}>点我 + </button>
        </div>
      })}
      {/*<button onClick={this.handleChange2.bind(this)}>点我 - </button>*/}
      {/*<button onClick={this.handleChange.bind(this)}>点我 + </button>*/}
      <h4>{value},{numb}</h4>
      <input type="text" value={numb}/>
    </div>;
  }
};
export default Car