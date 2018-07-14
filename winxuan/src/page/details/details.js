import React, { Component } from 'react';
import './details.css';
import Moremenu from '../../components/moreMenu/more-Menu';
import Basemsg from '../../components/basemsg/basemsg';
import Prodetail from  '../../components/prodetail/prodetail';
import Uaercom from '../../components/usercom/usercom';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;



class Details extends Component {
    constructor(props) {        
        super(props)
        let id = this.props.location.pathname;
        let len = id.length;
        let start = id.lastIndexOf('/');
        id = id.slice(start+1,len);
        this.state = {
            b_url: 'http://10.3.134.248:3000/books' + this.props.location.pathname.slice(8),
            c_url: 'http://10.3.134.248:3000/contents/' + this.props.location.pathname.slice(this.props.location.pathname.lastIndexOf('/')+1,this.props.location.pathname.length),
            cartCount: JSON.parse(localStorage.getItem('car')) ? JSON.parse(localStorage.getItem('car')).length : 0,
            isFavorite:"收藏"
        }
        // console.log(this.state.c_url)
    }

    addCart() {
        this.refs.baseMsg.addCart();
        this.setState ({
            cartCount: JSON.parse(localStorage.getItem('car')).length
        })
    }
   
    addFavorite() {
        this.refs.baseMsg.addFavorite();
        // console.log(this.refs.baseMsg.addFavorite());
    }

    render() {
        return (
            <div className="details_wrapper">
                <Tabs defaultActiveKey="1">
                    <TabPane tab="基本信息" key="1"><Basemsg ref="baseMsg" url={this.state.b_url} /></TabPane>
                    <TabPane tab="商品详情" key="2"><Prodetail api={this.state.c_url} /></TabPane>
                    <TabPane tab="用户评价" key="3"><Uaercom /></TabPane>
                </Tabs>
                <a href="javascript:history.go(-1);" className="back">
                    <span className="iconfont icon-jiantou"></span>
                </a>
                <Moremenu />
                <div className="details_footer">
                    <div className="links">
                        <a href="/">
                            <i className="iconfont icon-shouye"></i>
                            <span>首页</span>
                        </a>
                        <a href="javascript:;" onClick={this.addFavorite.bind(this)}>
                            <i className="iconfont icon-aixin"></i>
                            <span>{this.state.isFavorite}</span>
                        </a>
                        <a href="/car">
                            <i className="iconfont icon-ziyuan"></i>
                            <span>购物车</span>
                            <b className="count">{this.state.cartCount}</b>
                        </a>
                    </div>
                    <div className="btns">
                        <div className="btn addCart" onClick={this.addCart.bind(this)}> 加入购物车 </div>
                        <div className="btn lijiBuy"> 立即购买 </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Details