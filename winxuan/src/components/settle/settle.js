
import React, {Component} from 'react'
import './settle.css'
class Settle extends Component{
  constructor(props){
    super(props)
    this.state={
      goods:JSON.parse(localStorage.getItem('car'))||[],
      goodsid:JSON.parse(localStorage.getItem('goodsid')),
      idx:0,
      address:JSON.parse(localStorage.getItem('person'))||[],
    }
  };
  totalPrice(){
  }
  componentDidMount(){
    var goodslist=JSON.parse(localStorage.getItem('car'));
    this.setState({
      address: JSON.parse(localStorage.getItem('person')) || []
    })

  }
  render(){
    return (
        <div className="settle">
          <div className="header shadow">
            <div className="header-box">
              <a href="javascript:history.go(-1);"><i className="iconfont icon-jiantou"></i></a>
              <div className="header-cont">
                <h3>确认订单</h3>
              </div>
            </div>
          </div>
          <div className="settle-main">
            <div className="settle-main-addr">
              <a href="#">
                {(()=>{
                  if(this.state.address.length>0){
                    return this.state.address.map((item)=>{
                      var idx=this.state.address.length-1;
                      return <div className="person">
                        <p className="uname">姓名：<span>{this.state.address[idx].name}</span>电话: <span>{this.state.address[idx].tel}</span></p>
                        <p className="uaddr">地址: <span>{this.state.address[idx].address}</span></p>
                      </div>
                    })
                  }else{
                    return <span>请创建新的收货地址</span>
                  }
                })()
                }
                <s className="xiaotubiao"><i className="iconfont icon-jiantouyou"></i></s>
              </a>
            </div>
            <div className="settle-main-group shadow">
              <a className="item" href="javascript:;" >
                <span>配送方式</span>
                <s className="xiaotubiao">
                  <i className="iconfont icon-jiantouyou"></i>
                </s>
              </a>
              <a className="item" href="javascript:;" >
                <span>支付方式</span>
                <s className="xiaotubiao">
                  <i className="iconfont icon-jiantouyou"></i>
                </s>
              </a>
              <a className="item" href="javascript:;" >
                <span>电子发票</span>
                <s className="xiaotubiao">
                  不需要发票
                  <i className="iconfont icon-jiantouyou"></i>
                </s>
              </a>
            </div>
            <div className="settle-main-group shadow">
              <a className="item" href="javascript:;" >
                <span>礼券</span>
                <s className="xiaotubiao">
                  无可用
                  <i className="iconfont icon-jiantouyou"></i>
                </s>
              </a>
              <a className="item" href="javascript:;" >
                <span>礼品卡/畅读卡</span>
                <s className="xiaotubiao">
                  无可用
                  <i className="iconfont icon-jiantouyou"></i>
                </s>
              </a>
              <a className="item" href="javascript:;" >
                <span>暂存卡</span>
                <s className="xiaotubiao">
                  不需要发票
                  <i className="iconfont icon-jiantouyou"></i>
                </s>
              </a>
            </div>
            <div className="settle-main-goods">
              <h4>
                <span><i className="iconfont icon-xiaoxiong"></i>文轩现货</span>
                <span>共{0}件商品</span>
              </h4>
              <ul>
                {this.state.goods.map((item,idx)=>{
                  return this.state.goodsid.map((ids)=>{
                    if(item.id===ids){
                      return  <li key={item.name+Math.random()*1}>
                        <div className="item item-7">
                          <a href="#" title="">
                            <div className="img">
                              <img src={item.imgsrc}/>
                            </div>
                            <h3 className="title">{item.name}</h3>
                            <div className="price">
                              <span className="price-n">￥{item.price}</span></div>
                            <div className="num">
                              <span>X{item.count}</span>
                            </div>
                          </a>
                        </div>
                      </li>
                    }
                  })
                })
                }
              </ul>
            </div>
            <div className="total shadow-2">
              <div className="item">
                商品金额<span className="J_totalMoney">￥46.40</span>
              </div>
              <div className="item">
                商品优惠<span className="J_totalDisc">-￥0.00</span>
              </div>
              <div className="item">
                运费<span className="J_transFee">+￥0.00</span>
              </div>
            </div>
            <div className="settle-submit-box">
              <div className="cont">
                <div className="all-total">
                  实付款：<span className="price">￥{0}
                </span>
                </div>
                <button className="submit">提交订单</button>
              </div>
            </div>
          </div>
        </div>
    )
  }
}
export default Settle