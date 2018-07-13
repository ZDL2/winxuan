import React,{Component} from 'react';
import './mine.css';
import Footer from '../../components/footer/footer';

class Mine extends Component {

    constructor(props) {
        super(props)
        this.state = {
            favCount:0
        }
    }

    componentDidMount() {
        let favoriteArr = JSON.parse(localStorage.getItem('fav')) || [];
        this.setState({
            favCount:favoriteArr.length
        })
    }

    render() {
        return (
            <div className="mine_wrapper"> 
                {/* 主头部 */}
                <div className="mine_top">
                    <h2 className="user">
                        <div className="u_img">
                            <img src="//static.winxuancdn.com/goods/def_comment.png" />
                        </div>
                        <div className="name">
                            您好！来自文轩网的
                            <span>用户名</span> 
                        </div>
                    </h2>
                    <div className="info">
                        <a href="/favorite">
                            <b>{this.state.favCount}</b>
                            <p>我的收藏</p>
                        </a>
                        <a href="/#">
                            <b>0</b>
                            <p>我的足迹</p>
                        </a>
                    </div>
                    <div className="shezhi">
                        <i className="iconfont icon-Administratorconfig"></i>
                    </div>
                </div>
                {/* 主头部end */}
                {/* 我的订单 */}
                <div className="myOrder mylist">
                    <h3 className="list_title">
                        <div className="left">
                            <i className="iconfont icon-iconset0194" style={{background:"#c28bfa"}}></i>
                            我的订单
                        </div>
                        <div className="right">
                            查看全部订单
                            <i className="iconfont icon-jiantouyou"></i>
                        </div>
                    </h3>
                    <div className="order_wrapper">
                        <a href="/#">
                            <i className="iconfont icon-jijin"></i>
                            <p>待付款</p>
                        </a>
                        <a href="/#">
                            <i className="iconfont icon-xiaoxiong"></i>
                            <p>待收货</p>
                        </a>
                        <a href="/#">
                            <i className="iconfont icon-kefu"></i>
                            <p>退款/售后</p>
                        </a>
                    </div>
                </div>
                {/* 我的订单end */}
                {/* 我的钱包 */}
                <div className="myPurse mylist">
                    <a href="/#" className="list_title">
                        <div className="left">
                            <i className="iconfont icon-iconset0194" style={{background:"#c28bfa"}}></i>
                            我的钱包
                        </div>
                        <div className="right">
                            礼券/礼品等
                            <i className="iconfont icon-jiantouyou"></i>
                        </div>
                    </a>
                    <div className="purse_wrapper">
                        <a href="/#">
                            <b>￥0.00</b>
                            <p>暂存款</p>
                        </a>
                        <a href="/#">
                            <b>0</b>
                            <p>礼品卡</p>
                        </a>
                        <a href="/#">
                            <b>0</b>
                            <p>礼券</p>
                        </a>
                    </div>
                </div>
                {/* 我的钱包end */}
                {/* 客服 */}
                <a href="/#" className="list_title" style={{marginBottom : "6px"}}>
                    <div className="left">
                        <i className="iconfont icon-kefu" style={{background:"#8bd4fa"}}></i>
                        联系客服
                    </div>
                    <div className="right">
                        点击联系在线客服
                        <i className="iconfont icon-jiantouyou"></i>
                    </div>
                </a>
                {/* 帮助中心 */}
                <a href="/#" className="list_title" style={{marginBottom : "6px"}}>
                    <div className="left">
                        <i className="iconfont icon-kefu" style={{background:"#fdc780"}}></i>
                        帮助中心
                    </div>
                    <div className="right">
                        客服电话及常见问题
                        <i className="iconfont icon-jiantouyou"></i>
                    </div>
                </a>
                {/* 猜你喜欢 */}
                <a href="/#" className="list_title" style={{marginBottom : "6px",height:"75px"}}>
                    <div className="left">
                        <i className="iconfont icon-aixin" style={{background:"#fca8cc"}}></i>
                        猜你喜欢
                    </div>
                </a>



                <Footer />
            </div>
        )
    }

}

export default Mine