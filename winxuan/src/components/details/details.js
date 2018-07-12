import React, {Component} from 'react'
import './details.css'
import { connect } from 'react-redux'
import axios from 'axios'

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goodsid:`/${this.props.match.params.bookid}`,
      baseUrl:'http://10.3.134.248:3000/books',
      classify:`/${this.props.match.params.tocatch}`,
      goods:'',
      goodsCont:'',
      toCarGoods:[],
      catArr:JSON.parse(localStorage.getItem("car"))||[],
    }
  };
  toCat(item){
    var add=true;
      Object.assign(item,{'cont':1});
    Object.assign(item,{'checked':false})
      if(this.state.catArr.length!=0){
        this.state.catArr.forEach((items)=>{
          if(items.id===item.id){
            add=false;
            items.cont++;
            console.log(1)
          }
        })
      }else{
        add=false;
        this.state.catArr.push(item);
      }
      if(add){
        this.state.catArr.push(item)
      }

      localStorage.setItem('car',JSON.stringify(this.state.catArr))
  }
  componentDidMount(){
    console.log(this.state.baseUrl +this.state.classify+ this.state.goodsid)
    axios.get(this.state.baseUrl +this.state.classify+ this.state.goodsid).then((res) => {
      this.setState({
        goods: res.data.data[0] ||{imgsrc:'http://img0.winxuancdn.com/6488/1201546488_11.jpg'},
      },()=>{
        console.log(this.state.goods)
      })
    }).catch(function (error) {
      console.log(error);
    });
    axios.get(`http://10.3.134.248:3000/contents${this.state.goodsid}`).then((res) => {
      this.setState({
        goodsCont: res.data.data[0] ||{},
      })
    }).catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return <div>
      <div className="header">
        <a href="#" className="goBack">
          <span className="iconfont icon-jiantou"></span>
        </a>
        <ul>
          <li><a href="#main1" className="active">基本信息</a></li>
          <li><a href="#main2">商品详情</a></li>
          <li><a href="#">用户评论</a></li>
        </ul>
        <a href="#" className="forMore"><span className="iconfont icon-more"></span></a>
      </div>
      <div className="main mian-active " id="main1">
        <div className="main-t">
          <div className="img">
            <img src={this.state.goods.imgsrc} alt=""/>
          </div>
          <div className="cont">
            <h3 className="title">
              {this.state.goods.name}
            </h3>
            <h3 className="sub-title">
              我是一本超级好看的漫画书，哈哈哈哈哈哈哈哈哈哈哈哈哈哈。
            </h3>
            <p className="price">
                <span className="price-n">
                  ￥{this.state.goods.delprice}
                 </span>
              <span className="price-o">
                  ￥{this.state.goods.price}
                </span>
              <span className="discont">
                  {((this.state.goods.price / this.state.goods.delprice) * 10).toFixed(1)}折
                </span>
              <span className="iconfont icon-fenxiang"></span>
            </p>
            <p className="author">
              作者：<span>{this.state.goods.author}</span>
            </p>
            <p className="pub">
              出版社：<span>{this.state.goods.author}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="main-2" id="main2">
        <div className="main-2-t">
          <ul>
            <li><a href="#tab1">内容详情</a></li>
            <li><a href="#tab2">出版详情</a></li>
          </ul>
        </div>
        <div className="main-2-b" id="tab1">
          {Object.keys(this.state.goodsCont).map((key) => {
            if(key!=='id'&&key!=='_id'&&key!=='目 录'){
              return  <div className="main-2-b-cont">
                        <h3>
                          <b>{key}</b>
                          <i></i>
                        </h3>
                        <p>{this.state.goodsCont[key]}</p>
                      </div>
            } else if(key==='目 录'){
                this.state.goodsCont[key].split(/\s/).map((item,idx)=>{
                  return  <div className="main-2-b-cont">
                            <h3>
                              <b>{key}</b>
                              <i></i>
                            </h3>
                            <p>{idx}、{item}</p>
                          </div>
              })
            }
          })
          }
        </div>
      </div>
      <div className="bottom">
        <ul>
          <li onClick={this.toCat.bind(this, this.state.goods)}><a href="/car">加入购物车</a></li>
          <li>立即购买</li>
        </ul>
      </div>
    </div>
  }
}
export default connect((state) => {
  return state
}, (dispatch) => {
  return {
    toCar:(item)=>{
      dispatch({
        type:'toCar',
        toCarGoods:item,
      })
      // this.state.catArr.push(this.state.toCarGoods)
      // localStorage.setItem('car',this.state.catArr)
    }
  }
})( Details);