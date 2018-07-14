import React , {Component} from 'react'
import './contentitem.css';
import axios from 'axios';


class Contentitem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            more:"展开全部",
            isLookMore: false,
            content:'',
            isShow:true
        }
        console.log(this.props.txt)

    }

    componentDidMount() {
        axios.get(this.props.txt.api)
        .then((res) => {
            let data = res.data.data
            console.log(data)
            if(data.length <= 0) {
                this.setState ({
                    isShow : false
                })
                console.log(this.state.isShow)
            }else{
                let content = JSON.stringify(data[0]);
                let len = content.length;
                let idx1 = content.indexOf("内容简介");
                let idx2 = content.indexOf("目 录");
                let idx3 = content.indexOf("精彩内容");
                let oBrief = content.slice(idx1+7,idx2-3);
                let oSplendidness = content.slice(idx3+7,len-2);
                let oCatalog = content.slice(idx2+7,idx3-3);
                
                if(this.props.txt.title === "内容简介") {
                    this.setState ({
                        content : oBrief
                    })
                } else if(this.props.txt.title === "精彩内容") {
                    this.setState ({
                        content : oSplendidness
                    })
                } else if(this.props.txt.title === "目 录") {
                    this.setState ({
                        content : oCatalog
                    })
                }
            }
            

        })
        .catch((error) => {
            console.log(error);
        });
    }

    lookMore() {
        this.setState ({
            isLookMore:!this.state.isLookMore,
            more:this.state.isLookMore ? '收起全部' : '展开全部'
            
        })
    }

    render() {
        return (
            <div className="contentItem" style={{display : this.state.isShow ? 'block' : 'none'}}>
                <div className="ci_title">
                    <b>{this.props.txt.title}</b>
                    <span></span>
                </div>
                <div className="content" style={{height:this.state.isLookMore ? "auto" : "323px"}}>
                    <p>
                        {this.state.content}
                    </p>
                </div>
                <div className="lookMore" onClick={this.lookMore.bind(this)}>
                    <span>{this.state.more}</span>
                    <i className={this.state.isLookMore ? "iconfont icon-jiantouxiangxia" : "iconfont icon-jiantouxiangshang"}></i>
                </div>
            </div>
        )
    }

}

export default Contentitem