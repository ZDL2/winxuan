import React, { Component } from 'react';
import Fotter from '../footer/footer'
import './car.css'
// import {connect} from "react-redux";
class Car extends Component {
  constructor(props){
    super(props);
    this.state={
      goods:JSON.parse(localStorage.getItem('car'))||[],
      conter:2,
      checkedOne:false,
      checkedAll:false,
      totalPrice:0,
      checked:false,
      goodsid:[]
    }
  }
  //加数量
  add(item,idx){
   this.state.goods[idx].cont++;
   console.log(JSON.parse(localStorage.getItem('car'))[idx])
    this.totalPrice();
  }
  //减数量
  min(item,idx){
   this.state.goods[idx].cont--;
   if(this.state.goods[idx].cont<1){
     this.state.goods[idx].cont=1
   }
    this.totalPrice();
  }
  //总价
  totalPrice(){
    var total=0;
    var price=0;
      this.state.goods.forEach((item)=>{
        if(item.checked){
          price=(item.price*item.count)*1
          total+=price;
          this.setState({
            totalPrice:total
          })
        }
        else{
          this.setState({
            totalPrice:0
          })
        }
      })

  }
  //全选
  checkAll() {
    this.setState({
      checkedAll:!this.state.checkedAll
    })
    this.state.goods.forEach((item)=>{
      item.checked=!this.state.checkedAll;
    })
    this.totalPrice();
  };
  //单选->全选
  checkOne(items,i) {
    console.log(items.checked)
    var checkAlls;
    var goodsidArr=JSON.parse(localStorage.getItem("goodsid"))||[];
    var isadd=true;
    this.state.goods.forEach((item,idx)=>{
      if(i===idx){
        item.checked=!items.checked;
      }
    })
      if(!items.checked){
        goodsidArr.forEach((ite,idx)=>{
          if(ite===items.id){
            isadd=false;
            goodsidArr.splice(idx,1)
          }
        })
      }
        if(isadd){
        goodsidArr.push(items.id)
        }
      else if(!isadd){

        }
    checkAlls=this.state.goods.every((item)=>{
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
    localStorage.setItem('goodsid',JSON.stringify(goodsidArr))
    this.totalPrice();
  }
  // toSettle(){
  //
  // }
  render() {
    const checked=this.state
    return (
      <div id="car">
        <div className="header">
          <div className="header-cont">
            <a href="javascript:history.go(-1);" className="goBack">
              <span className="iconfont icon-jiantou"></span>
            </a>
            <h3>购物车({this.state.goods.length})</h3>
            <a href="#"className='change'><span >编辑</span></a>
            <a href="#" className="kefu"><span >客服</span></a>
          </div>
        </div>
        <div className="main">
          <div className="main-head">
            <label className="form-checkbox" >
              <input type="checkbox" checked={this.state.checkedAll} onChange={this.checkAll.bind(this)}/>
                <i className="iconfont"></i>
            </label>
            <div className="txt"><i className="iconfont"></i><b>文轩现货</b></div>
          </div>
          <div className="prom-bar">
            <a href="#"><i>满减</i><b className="J_promsg">以下商品 再购买活动商品52.60元,可减10元现金</b></a>
          </div>
          <ul>
            {this.state.goods.map((item,index)=>{
                return <li >
                          <div className="main-box">
                    <label className="form-checkbox">
                      <input type="checkbox" checked={item.checked} onClick={this.checkOne.bind(this,item,index)} data-check={item.checked}/>
                      <i className="iconfont"></i>
                    </label>
                      <div className="main-cont">
                        <div className="img">
                          <a href="#"><img src={item.imgsrc} alt=""/></a>
                        </div>
                        <div className="main-r">
                          <a  href="#" >
                            <h3 className="title">{item.name}</h3>
                          </a>
                          <p className="price">
                            <span className="price-n">￥{item.price}</span>
                            <span className="price-o">￥{item.delprice}</span>
                          </p>
                          <p className="conter">
                            <span onClick={this.min.bind(this,item,index)}>-</span>
                            <input type="text" value={item.count}/>
                            <span onClick={this.add.bind(this,item,index)}>+</span>
                          </p>
                        </div>
                      </div>
                  </div>
                </li>
              })}
          </ul>
        </div>
        <div className="bottom-total">
          <div className="right">
            <div className="bottom-cont">
              <span>合计：<i>￥{this.state.totalPrice}</i></span>
            </div>
            <p><a href="/settle">结算 <span>({0})</span></a></p>
          </div>
        </div>
        <Fotter></Fotter>
      </div>
    );
  }
}
// export default Car;
export default Car