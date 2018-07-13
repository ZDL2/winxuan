import React, { Component } from 'react';
import './count.css';
import {connect} from 'react-redux';

class Count extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count:this.props.count
        }
        console.log(this.props.count)
    }

    // componentDidUpdate() {
    //     this.setState({

    //     })
    // }

    changeCount(e) {
        this.props.changeCount(e);
    }

    render() {
        return (
            <div className="count_wrapper">
                <b>数量：</b>
                <button name="minus" onClick={this.changeCount.bind(this)}>-</button>
                <input type="number" className="count" value={this.state.count} />
                <button name="addition" onClick={this.changeCount.bind(this)}>+</button>
            </div>
        )
    }
}

export default connect((state) => {
    // 此函数把store中的state返回，并并放在该组件的props中
    return state;
  }, (dispatch) => {
    //  此函数是编写触发改变store中变量的方法
    return {
    //     minus: () => {
    //     //可以触发多个
    //     dispatch({
    //         type: 'minus',
    //         count: count ===1 ? 1 : count -=1,
    //     })
    //     // dispatch(multiAction)
    //   },
    //   addition: () => {
    //     //可以触发多个
    //     dispatch({
    //         type: 'addition',
    //         count: count +=1,
    //     })
    //     // dispatch(multiAction)
    //   }
    }
  })(Count);