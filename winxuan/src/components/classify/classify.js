import React, { Component } from 'react';
import Textline from '../textline/textline';
import './classify.css';

class Classify extends Component {
  constructor(props){
    super(props);
    this.state={
      // data:{
        classify:'',
        classess:'',
      // },
    }
  };
  toGoodslist(e){
    this.setState({
      // data:{
        classify:e.target.innerText,
        classess:e.target.parentNode.className
      // }
    })
    console.log(e.target.parentNode.className,this.state.classify)
  };
  render() {
    return (
      <div className="classify">
        <div className="search-bar">
          <div className="search-box">
            <a href="javascript:history.go(-1);" className="back">
              <i className="iconfont icon-jiantou"></i>
            </a>
            <div className="bar">
              <i ></i>
              <input type="text" placeholder="请输入搜索关键词" className="search-input" />
            </div>
            <a className="search-button" href="javascript:;">搜索</a>
          </div>
        </div>
        <div className="menugoods"  onClick={this.toGoodslist.bind(this)}>
          <div className="menugoods-box" >
            <Textline title="少儿"/>
            <ul>
              <li className="classify">
                <a href={`/goodslist/${this.state.classify}/${this.state.classess}`}>0-2岁</a>
              </li>
              <li className="classify">
                <a href={`/goodslist/${this.state.classify}/${this.state.classess}`}>3-6岁</a>
              </li>
              <li className="classify">
                <a href={`/goodslist/${this.state.classify}/${this.state.classess}`}>7-10岁</a>
              </li>
              <li className="classify">
                <a href={`/goodslist/${this.state.classify}/${this.state.classess}`}>11-14岁</a>
              </li>
              <li className="classify">
                <a href={`/goodslist/${this.state.classify}/${this.state.classess}`}>家庭教育</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="menugoods"  onClick={this.toGoodslist.bind(this)}>
          <div className="menugoods-box" >
            <Textline title="文学小说" />
            <ul>
              <li className="classify">
                <a href={`/goodslist/${this.state.classify}/${this.state.classess}`}>当代小说</a>
              </li>
              <li className="classify">
                <a href={`/goodslist/${this.state.classify}/${this.state.classess}`}>世界名著</a>
              </li>
              <li className="classify">
                <a href={`/goodslist/${this.state.classify}/${this.state.classess}`}>传记</a>
              </li>
              <li className="classify">
                <a href={`/goodslist/${this.state.classify}/${this.state.classess}`}>青春与动漫</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="menugoods"  onClick={this.toGoodslist.bind(this)}>
          <div className="menugoods-box" >
            <Textline title="学习考试" />
            <ul>
              <li className="classify">
                <a href={`/goodslist/${this.state.classify}/${this.state.classess}`}>教材教辅</a>
              </li>
              <li className="classify">
                <a href={`/goodslist/${this.state.classify}/${this.state.classess}`}>外语类</a>
              </li>
              <li className="classify">
                <a href={`/goodslist/${this.state.classify}/${this.state.classess}`}>医学类</a>
              </li>
              <li className="classify">
                <a href={`/goodslist/${this.state.classify}/${this.state.classess}`}>建筑类</a>
              </li>
              <li className="classify">
                <a href={`/goodslist/${this.state.classify}/${this.state.classess}`}>工具书</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="menugoods"  onClick={this.toGoodslist.bind(this)}>
          <div className="menugoods-box" >
            <Textline title="经济管理" />
            <ul>
              <li className="classify">
                <a href={`/goodslist/${this.state.classify}/${this.state.classess}`}>管理学</a>
              </li>
              <li className="classify">
                <a href={`/goodslist/${this.state.classify}/${this.state.classess}`}>经济与金融</a>
              </li>
              <li className="classify">
                <a href={`/goodslist/${this.state.classify}/${this.state.classess}`}>投资理财</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="menugoods"  onClick={this.toGoodslist.bind(this)}>
          <div className="menugoods-box" >
            <Textline title="励志与成功" />
            <ul>
              <li className="classify">
                <a href={`/goodslist/${this.state.classify}/${this.state.classess}`}>成功学</a>
              </li>
              <li className="classify">
                <a href={`/goodslist/${this.state.classify}/${this.state.classess}`}>心理学</a>
              </li>
              <li className="classify">
                <a href={`/goodslist/${this.state.classify}/${this.state.classess}`}>心灵励志</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="menugoods"  onClick={this.toGoodslist.bind(this)}>
          <div className="menugoods-box" >
            <Textline title="童书" />
            <ul>
              <li className="classify">
                <a href={`/goodslist/${this.state.classify}/${this.state.classess}`}>儿童文学</a>
              </li>
              <li className="classify">
                <a href={`/goodslist/${this.state.classify}/${this.state.classess}`}>童话故事</a>
              </li>
              <li className="classify">
                <a href={`/goodslist/${this.state.classify}/${this.state.classess}`}>必读名著</a>
              </li>
              <li className="classify">
                <a href={`/goodslist/${this.state.classify}/${this.state.classess}`}>儿童英语</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="menugoods"  onClick={this.toGoodslist.bind(this)}>
          <div className="menugoods-box" >
            <Textline title="生活" />
            <ul>
              <li className="classify">
                <a href={`/goodslist/${this.state.classify}/${this.state.classess}`}>家庭与育儿</a>
              </li>
              <li className="classify">
                <a href={`/goodslist/${this.state.classify}/${this.state.classess}`}>运动健身</a>
              </li>
              <li className="classify">
                <a href={`/goodslist/${this.state.classify}/${this.state.classess}`}>烹饪美食</a>
              </li>
              <li className="classify">
                <a href={`/goodslist/${this.state.classify}/${this.state.classess}`}>时尚美容</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="menugoods"  onClick={this.toGoodslist.bind(this)}>
          <div className="menugoods-box" >
            <Textline title="科技" />
            <ul>
              <li className="classify">
                <a href={`/goodslist/${this.state.classify}/${this.state.classess}`}>计算机</a>
              </li>
              <li className="classify">
                <a href={`/goodslist/${this.state.classify}/${this.state.classess}`}>科普读物</a>
              </li>
              <li className="classify">
                <a href={`/goodslist/${this.state.classify}/${this.state.classess}`}>工业技术</a>
              </li>
              <li className="classify">
                <a href={`/goodslist/${this.state.classify}/${this.state.classess}`}>医学</a>
              </li>
              <li className="classify">
                <a href={`/goodslist/${this.state.classify}/${this.state.classess}`}>建筑</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="menugoods"  onClick={this.toGoodslist.bind(this)}>
          <div className="menugoods-box" >
            <Textline title="艺术与摄影" />
            <ul>
              <li className="classify">
                <a href={`/goodslist/${this.state.classify}/${this.state.classess}`}>摄影</a>
              </li>
              <li className="classify">
                <a href={`/goodslist/${this.state.classify}/${this.state.classess}`}>绘画</a>
              </li>
              <li className="classify">
                <a href={`/goodslist/${this.state.classify}/${this.state.classess}`}>书法与字帖</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="menugoods"  onClick={this.toGoodslist.bind(this)}>
          <div className="menugoods-box bt">
            <Textline title="人文社科" />
            <ul>
              <li className="classify">
                <a href={`/goodslist/${this.state.classify}/${this.state.classess}`}>哲学与宗教</a>
              </li>
              <li className="classify">
                <a href={`/goodslist/${this.state.classify}/${this.state.classess}`}>历史</a>
              </li>
              <li className="classify">
                <a href={`/goodslist/${this.state.classify}/${this.state.classess}`}>政治</a>
              </li>
              <li className="classify">
                <a href={`/goodslist/${this.state.classify}/${this.state.classess}`}>法律</a>
              </li>
              <li className="classify">
                <a href={`/goodslist/${this.state.classify}/${this.state.classess}`}>军事</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Classify;
