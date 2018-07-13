import React,{Component} from 'react';
import './favorite_footprint.css'

import Moremenu from '../../components/moreMenu/more-Menu';
import Favorite from '../../components/favorite/favorite';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

class Favorite_footprint extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div className="ff_wrapper">
                {/* 收藏足迹头部 */}
                <Tabs defaultActiveKey="1">
                    <TabPane tab="收藏" key="1"><Favorite /></TabPane>
                    <TabPane tab="足迹" key="2">足迹</TabPane>
                </Tabs>
                <a href="javascript:history.go(-1);" className="back">
                    <span className="iconfont icon-jiantou"></span>
                </a>
                <Moremenu />
                {/* 收藏足迹头部end */}

            </div>
        )
    }
}

export default Favorite_footprint
