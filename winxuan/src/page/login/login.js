import React, { Component } from 'react';
import http from '../../js/httpclient';
import './login.css';

import Lr_top from '../../components/lr_top/lr_top';
import Ishowpwd from '../../components/isShowPwd/isshowpwd';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            txt:'文轩登录',
            changeType:false,
            phoneNum:'',
            password:'',
            error:'',
            idHide:false
        }
    }
    
    toggleType(){
        console.log('2');
        this.setState({
            changeType:!this.state.changeType
        })
        this.refs.isshowpwd.togglePwd();
    }

    getValue(e){
        console.log(e.target.name);
        this.setState({
            [e.target.name]:e.target.value,
            idHide: false
        })
        if(e.target.value == ''){          
            this.setState({  
                error: e.target.name === 'phoneNum' ? '用户名不能为空' : '密码不能为空',
                idHide: true
            })            
        }
    }

    login(){
        if(this.state.phoneNum == '' || this.state.password == '' || (this.state.phoneNum == '' && this.state.password == '')) {
            this.setState({
                error:'用户名和密码都不能为空！',
                idHide: true
            })
        } else {
            http.post('login', {phoneNum:this.state.phoneNum,password:this.state.password}).then((res) => {
                console.log(res);
                if(res.status) {
                    window.localStorage.setItem('token', res.data);
                    document.cookie = "username="+ this.state.phoneNum + ";expires=5000";
                    window.history.go(-1);
                } else {
                    this.setState({
                        error:'用户名或密码有误！',
                        idHide: true
                    })
                    
                }
            }) 
        }
        
    }

    render() {
        return (
            <div className="login_wrapper">
                <Lr_top txt={this.state.txt} />
                <div className="cont_box">
                    <div className="login_form">
                        <div className="error" style={{display:this.state.idHide ? "block":"none"}}>{this.state.error}</div>
                        <div className="input_box">
                            <input type="text" name="phoneNum" onChange={this.getValue.bind(this)} value={this.state.phoneNum} placeholder="用户名/邮箱/手机号" />
                        </div>
                        <div className="input_box">
                            <input name="password" type={this.state.changeType?"text":"password"} onChange={this.getValue.bind(this)} value={this.state.password} placeholder="请输入密码" />
                            <Ishowpwd ref="isshowpwd" onClick={this.toggleType.bind(this)}/>
                            <div className="changeType" onClick={this.toggleType.bind(this)}></div>
                        </div>
                        <div className="submit">
                            <input onClick={this.login.bind(this)} type="button" id="submitBtn" value="登录" />
                        </div>
                    </div>
                    <div className="form_end">
                        <a href="/register">立即注册</a>
                        <a href="javascript:;">忘记密码</a>
                    </div>
                    <div className="other-login">
                        <p>-----------------其他方式------------------</p>
                        <div className="method">         
                            <a href="//m.winxuan.com/oauth/weibo?state=" className="xl"></a>                   
                            <a href="//m.winxuan.com/oauth/qq?state=" className="qq"></a>
                        </div>
                    </div>
                    <div className="service">
                        <div>
                            <img src={require('../../assent/images/service_01.jpg')}/>
                            <p>100%正品保证</p>
                        </div>
                        <div>
                            <img src={require('../../assent/images/service_02.jpg')}/>
                            <p>7天无理由退了货</p>
                        </div>
                        <div>
                            <img src={require('../../assent/images/service_03.jpg')}/>
                            <p>多仓直发快速配货</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login