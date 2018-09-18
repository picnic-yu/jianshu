import React from 'react';
import {HomeWrapper, HomeRight, HomeLeft } from './style';
import Topic from './components/Topic';
import Writer from './components/Writer';
import List from './components/List';
import Recommend from './components/Recommend';
export default class Home extends React.Component{
    render(){
        return(
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' src="//upload.jianshu.io/admin_banners/web_images/4475/6a211489d63276c789e0318f986e382e2d9c78f7.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
                    <Topic></Topic>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    <Recommend></Recommend>
                    <Writer></Writer>
                </HomeRight>
            </HomeWrapper>
        )
    }
}