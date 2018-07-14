import React ,{Component} from 'react'
import './account.css'
// import axios from 'axios'

import Data from '../addr.json'
// import { Cascader } from 'antd';

class Account extends Component{
  constructor(props){
    super(props);
    this.state={
      uname:'',
      tel:'',
      uemail:'',
      provinces:'',
      cities:'',
      baseuUrl:'http://res.42du.cn/region/prov/',
      area:'',
      addr:'',
      address:'',
      idx:0,
    }
  }
  getName(e){
    console.log(e.target.value)
    this.setState({
      uname:e.target.value
    })
  };
  getTel(e){
    console.log(e.target.value)
    this.setState({
      tel:e.target.value
    })
  };
  getEmail(e){
    console.log(e.target.value)
    this.setState({
      uemail:e.target.value
    })
  }
  //改变省
  getProv(e){
    Data.forEach((item,index)=>{
      if(item.name===e.target.value){
        this.setState({
          idx:index
        },()=>{
          this.setState({
            cities:Data[this.state.idx].city[0].name,
            area:Data[this.state.idx].city[0].area[0],
          })
        })
      }
    })
    this.setState({
      provinces:e.target.value,
    })
  }
  //改变市
  getCity(e){
    this.setState({
      cities:e.target.value
    })
  }
  //改变区
  getArea(e){
    this.setState({
      area:e.target.value
    })
  }
  //改变详细地址
  getAddr(e){
    this.setState({
      addr:e.target.value
    })
  }
  //保存完整的地址
  save(){
    var person={}
    var persons=[];
    this.setState({
      address:this.state.provinces+'省'+this.state.cities+'市'+this.state.area+this.state.addr
    },()=>{
      person={
        name:this.state.uname,
        tel:this.state.tel,
        email:this.state.uemail,
        address:this.state.address
      }
      persons.push(person)
      console.log(persons)
      localStorage.setItem('person',JSON.stringify(persons))
    })

  }
  componentWillMount(){
    this.setState({
      provinces:Data[this.state.idx].name,
      cities:Data[this.state.idx].city[0].name,
      area:Data[this.state.idx].city[0].area[0],
    })
  }
  render() {
    return (
      <div className="account">
        <div className="header shadow">
          <div className="header-box">
            <a href="javascript:history.go(-1);"><i className="iconfont icon-jiantou"></i></a>
            <div className="header-cont">
              <h3>新建收货地址</h3>
            </div>
            <a href="#"><i className="iconfont icon-more"></i></a>
          </div>
        </div>
        <div className="account-main">
          <form action="#">
            <div className="account-main-addr select-box-form shadow-2">
              <a className="item" href="javascript:;">
                <span>收 货 人：</span>
                <s>
                  <input className="text input" type="text" name="consignee" data-valid="false" value={this.state.uname} onChange={this.getName.bind(this)}/>
                </s>
              </a>
              <a className="item" href="javascript:;">
                <span>手 机：</span>
                <s>
                  <input className="text input" type="number" name="mobile" data-valid="false" value={this.state.tel}onChange={this.getTel.bind(this)}/>
                </s>
              </a>
              <a className="item" href="javascript:;">
                <span>邮 箱：</span>
                <s>
                  <input className="text input" type="email" name="email" data-valid="false" value={this.state.uemail}onChange={this.getEmail.bind(this)}/>
                </s>
              </a>
            </div>
            <div className="account-main-map select-box-form  shadow-2">
              <div className="item">
                <span>国 家：</span>
                <s>
                  <select className="select" arealevel="country" name="">
                    <option value="23" >中国</option>
                  </select>
                </s>
                <b>
                  <i className="iconfont icon-jiantouyou"></i>
                </b>
              </div>
              <div className="item">
                <span>省 份：</span>
                <s>
                  <select className="select" arealevel="country" name="country.id" onChange={this.getProv.bind(this)}>
                    {Data.map((item,idx)=>{
                      return  <option value={item.name} key={item.name} >{item.name}</option>
                    })
                    }
                  </select>
                </s>
                <b>
                  <i className="iconfont icon-jiantouyou"></i>
                </b>
              </div>
              <div className="item">
                <span>城 市：</span>
                <s>
                  <select className="select" arealevel="country" name="country.id"onChange={this.getCity.bind(this)} >
                    {Data.map((item,{city},idx)=>{
                      if(item.name===this.state.provinces){
                        return  item.city.map((a,index)=>{
                          return <option value={a.name} key={a.name}>{a.name}</option>
                        })
                      }
                    })
                    }
                  </select>
                </s>
                <b>
                  <i className="iconfont icon-jiantouyou"></i>
                </b>
              </div>
              <div className="item">
                <span>区 县：</span>
                <s>
                  <select className="select" arealevel="country" name="country.id" onChange={this.getArea.bind(this)}>
                    {Data.map((item,{city},idx)=>{
                      return  item.city.map((a,index)=>{
                        if(a.name===this.state.cities){
                          return a.area.map((b)=>{
                            return <option value={b} key={b}>{b}</option>
                          })
                        }
                      })
                    })}
                  </select>
                </s>
                <b>
                  <i className="iconfont icon-jiantouyou"></i>
                </b>
              </div>
              <div className="item"style={{height: "auto"}}>
                <span>详细地址：</span>
                <s>
                  <textarea className="textarea input" onChange={this. getAddr.bind(this)}></textarea></s>
              </div>
            </div>
            <div className="account-main-bottom">
              <p className="cancel ">取消</p>
              <p className="save" onClick={this.save.bind(this)}><a href="/settle">保存</a></p>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
export default Account