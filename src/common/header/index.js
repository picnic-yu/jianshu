import React from 'react';
import { CSSTransition } from 'react-transition-group';//动画库
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition,Button, SearchWrapper } from './style'
import { connect } from 'react-redux';
import { actionCreaters } from './store';

const Header = (props) => {
    return(
        <HeaderWrapper>
            <Logo/>
            <Nav>
                <NavItem className='left active'>首页</NavItem>
                <NavItem className='left'>下载App</NavItem>
                <NavItem className='right'>登陆</NavItem>
                <NavItem className='right'>
                    <i className='iconfont'>&#xe636;</i>
                </NavItem>
                <SearchWrapper>
                    <CSSTransition 
                        timeout={200}
                        classNames='slide'
                        in={props.focused}
                    >
                        <NavSearch onBlur={props.handleInputBlur}  onFocus={props.handleInputFocus}  className={props.focused ? 'focused' : ''}></NavSearch>
                        
                    </CSSTransition>
                    <i className={props.focused ? 'focused iconfont' : 'iconfont'} >&#xe60d;</i>
                </SearchWrapper>
            </Nav>  
            <Addition>
                <Button className='writting'>
                <i className='iconfont'>&#xe615;</i>
                    写文章
                </Button>
                <Button className='reg'>注册</Button>
                
            </Addition>
        </HeaderWrapper>
    )
    
    
}

const mapStateToProps = (state) => {
    return {
        focused: state.header.focused
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputBlur(){
            dispatch(actionCreaters.searchBlur());
        },
        handleInputFocus(){
            dispatch(actionCreaters.searchFocus());
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);