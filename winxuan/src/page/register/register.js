import React, { Component } from 'react';
import './register.css';
import http from '../../js/httpclient';
// import GVerify from '../../gVerify';

import Lr_top from '../../components/lr_top/lr_top';
import More_menu from '../../components/moreMenu/more-Menu';
import Ishowpwd from '../../components/isShowPwd/isshowpwd'; 


class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            txt:'注册',
            regMethod:false,
            changeType:false,
            phoneNum:'',
            yCode:'',
            jCode:'',
            password:'',
            check:true,
            error:''
        }
    }

    // 选择注册方式 
    changeRegmethod() {
        this.setState({
            regMethod : !this.state.regMethod
        })
    }

    // 是否显示密码
    toggleType() {
        console.log('2');
        this.setState({
            changeType:!this.state.changeType
        })
        this.refs.isshowpwd.togglePwd();
    }

    // 信息验证
    getValue(e) {
        
        this.setState({
            [e.target.name] : e.target.value
        })       
    }

    // 是否同意协议
    isAgree() {
        this.setState({
            check : !this.state.check
        })
    }

    // 注册
    register() {
        let telReg = /^1[3|4|5|7|8][0-9]{9}$/;
        let pwdReg = /^\w{6,16}$/;
        let isTrue1= telReg.test(this.state.phoneNum);
        let isTrue2 = pwdReg.test(this.state.password);
        if(this.state.error === '' && this.state.check === true && this.state.phoneNum !== '' && this.state.password !== ''){
            http.post('register', {phoneNum:this.state.phoneNum,password:this.state.password}).then((res) => {
                console.log(res);
                if(res.status) {
                    alert("注册成功")
                    window.location.href = "http://localhost:3000/login";
                } else {
                    alert(res.data)     
                }
            })
        } else {
            if(this.state.phoneNum === ''){
                this.setState({
                    error: '手机号码不能为空'
                })
            } else if(this.state.password === '') {
                this.setState({
                    error: '密码不能为空'
                })
            } else if(!isTrue1) {
                this.setState({
                    error: '手机号码格式不正确'
                })
            } else if(!isTrue2) {
                this.setState({
                    error: '密码格式不正确'
                })
            } else {
                this.setState({
                    error: ''
                })
            }
        }
    }

    render() {
        return (
            <div className="register_wrapper">
                <Lr_top txt={this.state.txt} />
                <More_menu />
                <div className="register_box">
                    <div className="r_error">{this.state.error}</div>
                    <div className="r_content">
                        <div className="rc_head">
                            <div className="head_item head_left">
                                <span>{this.state.regMethod ? '邮箱注册' : '手机注册'}</span>
                            </div>
                            <div className="head_item head_right" onClick={this.changeRegmethod.bind(this)}>
                                或
                                <span>{this.state.regMethod ? '手机注册' : '邮箱注册'}</span>
                            </div>
                        </div>
                        <form>
                            <div className="import">
                                <input name="phoneNum" value={this.state.phoneNum} type={this.state.regMethod ? 'emil' : 'text'} placeholder={this.state.regMethod ? '请输入您常用的邮箱' : '请输入您常用的手机号码'} onChange={this.getValue.bind(this)}/>
                            </div>
                            {/* <div className="import">
                                <input name="yCode" value={this.state.yCode} type="text" placeholder="请输入图片验证码  点击图片刷新" id="code" />
                                <div className="v_container" id="v_container" style={{display: 'inline-block', width: '81px',height: '100%'}}></div>
                            </div>
                            <div className="import">
                                <input name="jCode" value={this.state.jCode} type="text" placeholder="请输入验证码" />
                                <a href="/#">获取验证码</a>
                            </div> */}
                            <div className="import">
                                <input name="password" value={this.state.password} type={this.state.changeType?"text":"password"} placeholder="请设置6-16位登录密码" onChange={this.getValue.bind(this)} />
                                <Ishowpwd ref="isshowpwd" onClick={this.toggleType.bind(this)}/>
                                <div className="changeType" onClick={this.toggleType.bind(this)}></div>
                            </div>
                            <div className="agree">
                                <label className="isAgree">
                                    <input type="checkbox" checked={this.state.check} onClick={this.isAgree.bind(this)} />
                                </label>
                                我已同意
                                <a href="//m.winxuan.com/cms/provision">《文轩网交易条款》</a>
                            </div>
                            <div className="regBtn" onClick={this.register.bind(this)}>注册</div>
                            <div className="goLogin">
                                <a href="http://localhost:3000/login">已有账号，去登录></a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register
