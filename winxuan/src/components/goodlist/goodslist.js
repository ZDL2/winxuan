import './goodlist.css'
import React, {Component} from 'react'
// import { connect } from 'react-redux'
import axios from 'axios'
// import Get from '../../common'



class Goodslist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      container: '',
      goodslist: [],
      baseUrl: 'http://10.3.134.248:3000/',
      classify:'book/',
      toCatch:this.props.match.params.classify,
      bookid:'',
      page: 1,
      toDetail: '',
    }
  } ;
  toDetails(id){
    this.setState({
      bookid:id
    })
  }
  componentDidMount() {
    if(this.state.toCatch=='0-2岁'||this.state.toCatch=='3-6岁'||this.state.toCatch=='7-11岁'||this.state.toCatch=='11-14岁'){
      this.setState({
        toCatch:this.state.toCatch.slice(0,-1),
      })
    }
   if(this.props.match.params.classess=='classify'){
     this.setState({
       classify:'books/'
     },()=>{
       axios.get(this.state.baseUrl +this.state.classify+ this.state.toCatch).then((res) => {
         this.setState({
           goodslist: res.data.data,
         })
         console.log(res.data.data)
       }).catch(function (error) {
         console.log(error);
       });
     })
   } else{
     axios.get(this.state.baseUrl +this.state.classify+ this.state.toCatch).then((res) => {
       this.setState({
         goodslist: res.data.data,
       })
       console.log(res.data.data)
     }).catch(function (error) {
       console.log(error);
     });
   }
  }

  render() {
    return (
      <div id="goodslist">
        <div id="header">
          <a href="javascript:history.go(-1);" className="goBack">
           <span className="iconfont icon-jiantou">
           </span>
          </a>
          <div className="header-search">
            <input type="text" placeholder={this.state.toCatch}/>
            <span className="iconfont icon-sousuo"></span>
          </div>
          <a href="/car" className="toCar fr">
           <span className="iconfont icon-ziyuan">
           </span>
          </a>
        </div>
        <div className="nav">
          <ul>
            <li className="item-0">
              <span>全部分类</span>
            </li>
            <li className="item-0"><span>价格</span></li>
            <li className="item-0"><span>销量</span></li>
            <li className="item-0"><span>筛选</span></li>
          </ul>
        </div>
        <div className="nav-2">
          <ul>
            <li>图书 <span className="iconfont icon-jiantouyou"></span></li>
          </ul>
          <ul>
            <li><a href="javascript;:">小说</a></li>
            <li><a href="javascript;:">文学</a></li>
            <li><a href="javascript;:">经济</a></li>
            <li><a href="javascript;:">管理</a></li>
            <li><a href="javascript;:">少儿</a></li>
            <li><a href="javascript;:">家庭与教育</a></li>
            <li><a href="javascript;:">计算机与互联网</a></li>
            <li><a href="javascript;:">传记</a></li>
            <li><a href="javascript;:">家具休闲 </a></li>
            <li><a href="javascript;:">青春与漫画</a></li>
            <li><a href="javascript;:">科技</a></li>
            <li><a href="javascript;:">宗教与术数</a></li>
          </ul>
        </div>
        <div className="main">
          <ul >
            {this.state.goodslist.splice(0, 30).map((item, idx) => {
              return <li key={idx} >
                <a  onClick={this.toDetails.bind(this,item.id)} href={`/details/${item.classname}/${this.state.bookid}`}>
                  <div className="main-cont">
                    <div className="main-l">
                      <img src={item.imgsrc} alt=""/>
                    </div>
                    <div className="main-r">
                      <h3 className="title">{item.name}</h3>
                      <p className="author">{item.author}</p>
                      <p className="price">
                        <span className="price-o">￥{item.price}</span>
                        <span className="price-n">￥{item.delprice}</span>
                      </p>
                      <span className="addCar">
                       <i className="iconfont icon-ziyuan"></i>
                      </span>
                    </div>
                  </div>
                </a>
              </li>
            })}
          </ul>
        </div>
        <div className="toTop">
          <p className="pages">
            <span>{this.state.page}</span> / <span>{Math.ceil(this.state.goodslist.length / 30)}</span></p>
          <span className="iconfont icon-icon"></span>
        </div>
      </div>
    )
  }
}

export default Goodslist