import React, { Component } from 'react';
import './prodetail.css';


import Contentdet from '../../components/contentDet/conentdet';
import Banben from '../../components/banbenmsg/banbenmsg';

import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;


class Prodetail extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }


    render() {
        return (
            <div className="proDetails">
                <Tabs defaultActiveKey="1">
                    <TabPane tab="内容详情" key="1"><Contentdet api={this.props.api} /></TabPane>
                    <TabPane tab="出版信息" key="2"><Banben /></TabPane>
                </Tabs>
            </div>
        )
    }
}

export default Prodetail