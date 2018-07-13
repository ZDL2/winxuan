import React, {Component} from 'react';
import './banbenmsg.css';

class Banben extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="banben">
                <ul>
                    <li>
                        <b>书名</b>
                        <span></span>
                    </li>
                    <li>
                        <b>作者</b>
                        <span></span>
                    </li>
                    <li>
                        <b>出版社</b>
                        <span><a href="/search?keyword=机械工业出版社">机械工业出版社</a></span>
                    </li>
                    <li>
                        <b>出版时间</b>
                        <span>2017-08-31</span>
                    </li>
                    <li>
                        <b>I S B N</b>
                        <span>9787111577973</span>
                    </li>
                    <li>
                        <b>开本</b>
                        <span>16开</span>
                    </li>
                    <li>
                        <b>页数</b>
                        <span>276</span>
                    </li>
                    <li>
                        <b>字数</b>
                        <span>193</span>
                    </li>
                    <li>
                        <b>装帧</b>
                        <span>平装</span>
                    </li>
                    <li>
                        <b>印刷时间</b>
                        <span>2017-09-01</span>
                    </li>
                    <li>
                        <b>语种</b>
                        <span>1中文</span>
                    </li>
                    <li>
                        <b>版次</b>
                        <span>1</span>
                    </li>
                    <li>
                        <b>印次</b>
                        <span>1</span>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Banben