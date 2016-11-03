/**
 * Created by Administrator on 2016/11/3.
 */
import {combineReduces} from 'redux';
import counter from './counter';

const rootReducer = combineReducers({
    counter
})

export default rootReducer