import React , { Component } from 'react';
import { CSSTransition } from 'react-transition-group';//动画库
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition,Button, SearchWrapper } from './style'
export default class Header extends Component {
    constructor(props){
        super(props);
        this.state ={
            focused:false
        }
        this.handleInputFocus = this.handleInputFocus.bind(this);
        this.handleInputBlur = this.handleInputBlur.bind(this);
    }
    handleInputFocus() {
        this.setState({
            focused:true
        });
    }
    handleInputBlur(){
        this.setState({
            focused:false
        });
    }
    render () {
        return (
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
                            in={this.state.focused}
                        >
                            <NavSearch onBlur={this.handleInputBlur}  onFocus={this.handleInputFocus}  className={this.state.focused ? 'focused' : ''}></NavSearch>
                            
                        </CSSTransition>
                        <i className={this.state.focused ? 'focused iconfont' : 'iconfont'} >&#xe60d;</i>
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
                
           
        );
    }
}