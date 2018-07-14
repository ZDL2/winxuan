import React, { Component } from 'react';
import './favorite.css';

class Favorite extends Component {
    constructor(props) {
        super(props)
        this.state = {
            favPro:[]
        }

    }

    componentDidMount() {
        let favoriteArr = JSON.parse(localStorage.getItem('fav')) || [];
        console.log(favoriteArr);
        this.setState ({
            favPro: favoriteArr
        })
    }

    // 取消收藏
    delFav(idx) {
        console.log(idx);
        let favoriteArr = JSON.parse(localStorage.getItem('fav')) || [];
        favoriteArr.splice(idx,1);
        console.log(favoriteArr);
        this.setState ({
            favPro: favoriteArr
        })
        localStorage.setItem('fav',JSON.stringify(favoriteArr));
    }

    render() {
        return (
            <div className="favorite_wrapper">
            
                <ul className="fav_list">
                    {this.state.favPro.map((item,idx) => {
                        return (
                            <li key={idx}>
                                <div className="fav_img">
                                    <a href="/#">
                                        <img src={item.imgsrc} alt={item.name} />
                                        
                                    </a>
                                </div>
                                <h3 class="fav_name"><a href="/product/1201584956">{item.name}</a></h3>
                                <div className="fav_price">
                                    <div className="f_price">￥{item.price}</div>
                                    
                                </div>
                                <div className="del_fav" onClick={this.delFav.bind(this,idx)}>取消收藏</div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default Favorite