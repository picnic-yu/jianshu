import React from 'react';
import {HomeWrapper, HomeRight, HomeLeft } from './style';
export default class Home extends React.Component{
    render(){
        return(
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' src="//upload.jianshu.io/admin_banners/web_images/4475/6a211489d63276c789e0318f986e382e2d9c78f7.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
                </HomeLeft>
                <HomeRight>2</HomeRight>
            </HomeWrapper>
        )
    }
}