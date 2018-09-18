
import * as constants from './constants';
import {fromJS} from 'immutable';
// immutable库
// immutable对象
const defaultState =  fromJS({
    focused:false
});

export default (state = defaultState, action) => {
    if (action.type === constants.SEARCH_FOCUS) {
        // immutable set方法结合之前的对象 和现在的数据 生成一个新的对象
        return state.set('focused', true);
    }
    if(action.type === constants.SEARCH_BLUR){
        return  state.set('focused', false);
    }
    return state;
}