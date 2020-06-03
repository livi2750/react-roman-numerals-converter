import statusReducer from './statusReducer';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    output: statusReducer
})

export default allReducers;