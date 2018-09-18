import React from 'react';
import {TopicWrapper, TopicItem} from '../style';
export default class Topic extends React.Component{
    render(){
        return(
            <TopicWrapper>
                <TopicItem>
                    <img className='topic-pic' src="//upload.jianshu.io/collections/images/14/6249340_194140034135_2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" alt=""/>
                    社会热点
                </TopicItem>
            </TopicWrapper>
        )
    }
}