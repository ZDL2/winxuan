import React, { Component } from 'react';
import './basemsg.css';
import axios from 'axios';


class Basemsg extends Component {
    constructor(props) {
        super(props)
        this.state = {
            product: {},
            addPro: {},
            count: 1
        }
        // console.log(this.props.url)
    }

    componentWillMount() {
        axios.get(this.props.url)
        .then((res) => {
            let arr = res.data.data
            console.log(arr[0]);
            this.setState({
                product: arr[0],
                addPro: {
                    id: arr[0].id,
                    classname: arr[0].classname,
                    classify: arr[0].classify,
                    imgsrc: arr[0].imgsrc,
                    name: arr[0].name,
                    price: arr[0].price,
                    delprice: arr[0].delprice,
                    author: arr[0].author,
                    count: this.state.count,
                    checked: true
                }               
            })
        })
        .catch((error) => {
            console.log(error);
        });
    }
    
    changeCount(e) {
        // console.log(e.target);
        if (e.target.name === 'minus') {
            this.setState({
                count: this.state.count -= 1
            })
            if (this.state.count <= 0) {
                this.setState({
                    count: 1
                })
            }
        }
        if (e.target.name === 'addition') {
            this.setState({
                count: this.state.count += 1
            })
        }
    }
    // 加入购物车
    addCart() {
        let cartArr = JSON.parse(localStorage.getItem('car')) || [];
        let isbool = true;
        if (cartArr.length > 0) {
            cartArr.forEach((item) => {
                if (this.state.addPro.id === item.id) {
                    item.count++
                    isbool = false;
                }
            })
        } else {
            isbool = false;
            cartArr.push(this.state.addPro)
        }
        if (isbool) {
            cartArr.push(this.state.addPro);
        }
        localStorage.setItem('car', JSON.stringify(cartArr));
    }

    // 加入收藏夹
    addFavorite() { 
        let favoriteArr = JSON.parse(localStorage.getItem('fav')) || [];
        let isbool = true;
        if (favoriteArr.length > 0) {
            favoriteArr.forEach((item,idx) => {
                if (this.state.addPro.id === item.id) {
                    favoriteArr.splice(idx,1);
                    isbool = false;
                }
            })
        } else {
            isbool = false;
            favoriteArr.push(this.state.addPro);
        }
        if (isbool) {
            favoriteArr.push(this.state.addPro);
        }
        localStorage.setItem('fav', JSON.stringify(favoriteArr));
    }

    render() {
        return (
            <div className="baseMsg">
                <div className="bm_img">
                    <ul className="bm_img_list">
                        <li>
                            <img src={this.state.product.imgsrc} />
                        </li>
                    </ul>
                </div>
                <div className="base_info">
                    <h2 className="title">{this.state.product.name}</h2>
                    <h3 className="sub-title">有史以来对美国营销影响**的观念</h3>
                    <div className="price">
                        <span className="price-n">￥<b>{this.state.product.price}</b></span>
                        <span className="price-o">￥{this.state.product.delprice}</span>

                        <span className="z">5.6折</span>
                        <span className="fenxiang">
                            <i className="iconfont icon-fenxiang"></i>
                        </span>


                    </div>
                    <div className="author">
                        作 者：
                        <b>
                            <a href="/#">{this.state.product.author}</a>
                        </b>
                    </div>

                    <div className="pub">出版社：<a href="/search?keyword=机械工业出版社"><b>机械工业出版社</b></a></div>

                </div>
                {/* 文轩现货 */}
                <div className="status">
                    <div className="status_title">
                        <b>
                            <i className="iconfont icon-zhengpinbaozhangduigou"></i>
                            文轩现货
                        </b>
                        <span>70%的城市次日到达，电子发票</span>
                    </div>
                    <div className="sale_list">
                        <div className="item">
                            <b>限时抢</b>
                            <span>
                                <a href="http://m.winxuan.com/cms/7zp">❤文轩特卖，重点推荐</a>
                            </span>
                        </div>
                        <div className="item">
                            <b>限购</b>
                            <span>
                                ❤大陆非新疆西藏地区包邮，新疆西藏地区运费每单20元<br />❤特惠品超50本无特价可参加网站满省
                            </span>
                        </div>
                    </div>
                </div>
                {/* <Count count={this.state.count} changeCount={this.changeCount} /> */}
                <div className="count_wrapper">
                    <b>数量：</b>
                    <button name="minus" onClick={this.changeCount.bind(this)}>-</button>
                    <input type="number" className="count" value={this.state.count} />
                    <button name="addition" onClick={this.changeCount.bind(this)}>+</button>
                </div>
                {/* 价格说明 */}
                <div className="price_msg">
                    <h4>价格说明</h4>
                    <b>划线价:</b>
                    <p>商品展示的划横线价格为出版社全国统一定价；</p>
                    <b>折扣:</b>
                    <p>页面显示的折扣数（如6.0折），是以定价为基础的价格折扣；</p>
                    <p>受系统缓存影响，商品的最终售价以订单结算页价格为准</p>
                </div>
                {/* 关于新广告法声明 */}
                <div className="ad_msg">
                    <h4>关于新广告法声明</h4>
                    <p>新广告法规定所有页面不得出现绝对化用词和功能性用词。本店非常支持新广告法，但为了不影响消费者正常购买，页面明显区域本店已在排查修改，对于不明显区域也将会逐步排查并修改，我们在此郑重声明：<span style={{ color: "#f41e33" }}>本店所有页面上的绝对化用词与功能性用词在此声明全部失效，不作为赔付理由。</span>因极限用词引起的任何形式的商品赔付，本店不接受且不妥协。希望消费者理解并欢迎联系客服帮助完善，也请职业打假人士高抬贵手。</p>
                </div>
            </div>
        )
    }
}

export default Basemsg