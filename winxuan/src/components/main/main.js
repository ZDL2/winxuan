import React, { Component } from 'react';
import http from '../../js/httpclient';

// import { Link } from 'react-router-dom';
import Banner from '../banner/banner';
import Header from '../header/header';
import { Goodslist1, Goodslist3, Goodslist4, Goodslist5 } from '../goodslist/goodslist';
import Imglink from '../imglink/imglink';
import Footer from '../footer/footer';
import './main.css';

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      day:'',
      hour:'',
      second:'',
      minute:'',
      api1_1: {
        url:'http://10.3.134.248:3000/books/哲学与宗教',
        classname: '哲学与宗教'
      },
      api1_2: {
        url: 'http://10.3.134.248:3000/books/青春与动漫',
        classname: '青春与动漫'
      },
      api1_3: {
        url: 'http://10.3.134.248:3000/books/科普读物',
        classname: '科普读物'
      },
      api1_4: {
        ulr: 'http://10.3.134.248:3000/books/管理学',
        classname: '管理学'
      },
      api1_5: {
        url: 'http://10.3.134.248:3000/books/儿童文学/',
        classname: 'books儿童文学'
      },
      api1_6: {
        url: 'http://10.3.134.248:3000/books/计算机',
        classname: '计算机'
      },
      api1_7: {
        url: 'http://10.3.134.248:3000/books/运动健身',
        classname: '运动健身'
      },
      api1_8: {
        url: 'http://10.3.134.248:3000/books/家庭与育儿',
        classname: '家庭与育儿'
      },
      api1_9: {
        url: 'http://10.3.134.248:3000/books/摄影',
        classname: '摄影'
      },
      api1_10: {
        url: 'http://10.3.134.248:3000/books/法律',
        classname: '法律'
      },
      api1_11: {
        url: 'http://10.3.134.248:3000/books/军事',
        classname: '军事'
      },
      api3_1: {
        url: 'http://10.3.134.248:3000/books/传记',
        classname: '传记'
      },
      api3_2: {
        url: 'http://10.3.134.248:3000/books/青春与动漫',
        classname: '青春与动漫'
      },
      api4_1: {
        url: 'http://10.3.134.248:3000/books/世界名著',
        classname: '世界名著'
      },
      api5_1: {
        url: 'http://10.3.134.248:3000/books/教材教辅',
        className: '教材教辅'
      }
    }
  }

  componentDidMount() {
    http.get('user').then((res) => {
      console.log(res);
    })
      var date=new Date('2018-7-14');
      var timer =setInterval(()=>{
        var offset = Date.parse(date) - Date.parse(Date());
        // 3）把差值转换成《剩余时间》
        // 毫秒->秒
        offset = parseInt(offset/1000);
        // 5）倒计时结束时
        if(offset <= 0){
          // * 停止定时器
          clearInterval(timer);
        }
        var sec = offset%60;//剩余秒数
        var min = parseInt(offset/60)%60;//剩余分数
        var hour = parseInt(offset/60/60)%24;//剩余小时数
        var day = parseInt(offset/60/60/24);//天数
        // 补0操作
        day = day < '00' ? 0 : (day<10 ? '0'+day : day);
        sec = sec < '00' ? 0 : (sec<10 ? '0'+sec : sec);
        min = min < '00' ? 0 : (min<10 ? '0'+min : min);
        hour = hour < '00' ? 0 : (hour<10 ? '0'+hour : hour);

        this.setState ({
          day:day,
          hour:hour,
          minute:min,
          second:sec
        })
      },1000)

  }

  gotop() {
    document.documentElement.scrollTop = document.body.scrollTop = 0;
  }


  render() {
    return (
      <div className="main">
        <Header />
        <Banner />
        <div className="winxuan-hot">
          <div className="title-img">
            <img src="data:image/png;base64,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" />
          </div>
          <div className="weal">
            <a href="/#">
              <span>今日福利券</span>
              先领券，再下单，优惠更多
            </a>
          </div>
        </div>
        <Imglink link="summer" src="http://static.winxuancdn.com/topic/subject/201807/7zp/640-90.jpg?201807061347" />
        <div className="countdown clearfix">
          <div className="kill_more">
            <i className="line1"></i>
            <div className="time">
              <i className="ico-clock"></i>
              <span>秒杀·00点场</span>
              <div className="timer">
                <span className="count-time">{this.state.hour}</span>
                <span>:</span>
                <span className="count-time">{this.state.minute}</span>
                <span>:</span>
                <span className="count-time">{this.state.second}</span>
              </div>
            </div>
            <i className="line2"></i>
            <div className="more">
              <a href="/#">更多</a>
              <i>></i>
            </div>
          </div>
        </div>
        <Goodslist4 api = {this.state.api4_1}/>
        <Imglink link="#" src="https://static.winxuancdn.com/topic/subject/201806/lsjx/640-90.jpg" />
        <Goodslist3 api = {this.state.api3_1}/>
        <Imglink link="#" src="https://static.winxuancdn.com/topic/winxuan_m/newm/home/product_1/wxjj_4.jpg?wweed" />
        <Goodslist3 api = {this.state.api3_2}/>
        <Imglink link="#" src="https://static.winxuancdn.com/topic/winxuan_m/newm/home/product_1/xpsd_1.jpg?wherdd" />
        <Goodslist5 api = {this.state.api5_1}/>
        <Imglink link="#" src="https://static.winxuancdn.com/topic/subject/201605/m_pl/jxzt1.jpg" />
        <div className="nav-topic">
          <div className="nav-box">
            <a href="/#">
              <i className="iconfont icon-icon--" style={{background:"#EE3863"}}></i>
              <span>2017中国好书</span>
            </a>
            <a href="/#">
              <i className="iconfont icon-xingxing" style={{background:"#0242A2"}}></i>
              <span>2018初会</span>
            </a>
            <a href="/#">
              <i className="iconfont icon-shujiguanli" style={{background:"#FF8400"}}></i>
              <span>2018二建</span>
            </a>
            <a href="/#">
              <i className="iconfont icon-wode" style={{background:"#FF5796"}}></i>
              <span>2018基会</span>
            </a>
            <a href="/#">
              <i className="iconfont icon-shuji" style={{background:"#6DA9FF"}}></i>
              <span>领导书目</span>
            </a>
          </div>
        </div>
        <Imglink link="#" src="https://static.winxuancdn.com/topic/subject/201605/m_pl/plhc1.jpg" />
        <div className="nav-topic">
          <div className="nav-box">
            <a href="/#" style={{width:"25%"}}>
              <i className="iconfont icon-buoumaotubiao18" style={{background:"#21d59b"}}></i>
              <span>幼儿园学习</span>
            </a>
            <a href="/#" style={{width:"25%"}}>
              <i className="iconfont icon-shuye" style={{background:"#ffb139"}}></i>
              <span>小学教辅</span>
            </a>
            <a href="/#" style={{width:"25%"}}>
              <i className="iconfont icon-ren" style={{background:"#2881fa"}}></i>
              <span>初高中教辅</span>
            </a>
            <a href="/#" style={{width:"25%"}}>
              <i className="iconfont icon-xiaoxiong" style={{background:"#98d521"}}></i>
              <span>大学课外阅读</span>
            </a>
            <a href="/#" style={{width:"25%"}}>
              <i className="iconfont icon-fuhao-" style={{background:"#3264DD"}}></i>
              <span>文艺小说</span>
            </a>
            <a href="/#" style={{width:"25%"}}>
              <i className="iconfont icon-kafei" style={{background:"#ff772b"}}></i>
              <span>生活教育</span>
            </a>
            <a href="/#" style={{width:"25%"}}>
              <i className="iconfont icon-taideng" style={{background:"#a962f1"}}></i>
              <span>社科经管</span>
            </a>
            <a href="/#" style={{width:"25%"}}>
              <i className="iconfont icon-huihuaban" style={{background:"#ffb139"}}></i>
              <span>少儿乐园</span>
            </a>
          </div>
        </div>
        <Imglink link="#" src="https://static.winxuancdn.com/topic/subject/201708/10030/0.jpg" />
        <Goodslist1 api = {this.state.api1_1}/>
        <Imglink link="#" src="https://static.winxuancdn.com/topic/subject/201605/m_pl/pl-wxxs.jpg" />
        <Goodslist1 api = {this.state.api1_2}/>
        <Imglink link="#" src="https://static.winxuancdn.com/topic/subject/201605/m_pl/pl-rwsk.jpg" />
        <Goodslist1 api = {this.state.api1_3}/>
        <Imglink link="#" src="https://static.winxuancdn.com/topic/subject/201605/m_pl/pl-jg1.jpg" />
        <Goodslist1 api = {this.state.api1_4}/>
        <Imglink link="#" src="https://static.winxuancdn.com/topic/subject/201605/m_pl/pl-child.jpg" />
        <Goodslist1 api = {this.state.api1_5}/>
        <Imglink link="#" src="https://static.winxuancdn.com/topic/subject/201605/m_pl/pl-net.jpg" />
        <Goodslist1 api = {this.state.api1_6}/>
        <Imglink link="#" src="https://static.winxuancdn.com/topic/subject/201605/m_pl/pl-shys.jpg" />
        <Goodslist1 api = {this.state.api1_7}/>
        <Imglink link="#" src="https://static.winxuancdn.com/topic/subject/201605/m_pl/pl-szjy.jpg" />
        <Goodslist1 api = {this.state.api1_8}/>
        <Imglink link="#" src="https://static.winxuancdn.com/topic/subject/201605/m_pl/pl-ys.jpg" />
        <Goodslist1 api = {this.state.api1_9}/>
        <Imglink link="#" src="https://static.winxuancdn.com/topic/winxuan_m/newm/home/product_1/spcl/cdj.jpg?wegsd" />
        <Goodslist1 api = {this.state.api1_10}/>
        <Imglink link="#" src="https://static.winxuancdn.com/topic/subject/201804/gywx.png" />
        <Goodslist1 api = {this.state.api1_11}/>
        <div className="foot-box">
          <div className="login-bottom">
            <a href="/login">登录</a>
            <a href="/register">注册</a>
          </div>
          <div className="copyright">
            <p><span></span>m.winxuan.com</p>
          </div>
        </div>
        <div className="goTop" onClick={this.gotop.bind(this)}>
          <i className="iconfont icon-icon"></i>
          <p>顶部</p>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Main;
