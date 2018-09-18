// 合并reducer
import { combineReducers } from 'redux';
import { headerReducer } from '../common/header/store/index';


export default combineReducers({
    header:headerReducer
})