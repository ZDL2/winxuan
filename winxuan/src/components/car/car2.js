import React, { Component } from 'react';
import './car.css'
class Cars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goods: JSON.parse(localStorage.getItem('car')),
      checkedOne: false,
      checkedAll: false,
      totalPrice: 0,
      data: [
        {
          value: '啦啦1',
          checked: false,
        }, {
          value: '啦啦2',
          checked: false,
        }, {
          value: '啦啦3',
          checked: false,
        },
      ]
    }
  };
  checkAll() {
    this.setState({
      checkedAll:!this.state.checkedAll
    })
    this.state.data.forEach((item)=>{
      item.checked=!this.state.checkedAll;
    })
  };

  checkOne(items,i) {
    console.log(items.checked)
    var checkAlls;
    this.state.data.forEach((item,idx)=>{
      if(i===idx){
         item.checked=!items.checked;
      }
    })
    checkAlls=this.state.data.every((item)=>{
      if(items.checked===item.checked){
        return item.checked;
      }
    });
    if(checkAlls){
      this.setState({
        checkedAll:checkAlls
      })
    }else{
      checkAlls=false;
      this.setState({
        checkedAll:checkAlls
      })
    }
  }

  render() {
    return (
      <div>
        <div className="carList">
          <label><input type="checkbox" checked={this.state.checkedAll} onChange={this.checkAll.bind(this)}/>全选</label>
        </div>
        <div className="goodslist">
          <ul>
            {this.state.data.map((item,index) => {
              return <li>
                <label htmlFor=""onChange={this.checkOne.bind(this,item,index)}>
                  <input type="checkbox"  checked={item.checked} />
                  {item.value}
                </label>
              </li>
            })}
          </ul>
        </div>
      </div>
    )
  }
}
export default Cars;
