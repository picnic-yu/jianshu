// 合并reducer
import { combineReducers } from 'redux';
import { headerReducer } from '../common/header/store';


export default combineReducers({
    header:headerReducer
})