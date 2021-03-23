import first from './first';
import logged from './logged';

import {combineReducers} from 'redux';

const allReducers = combineReducers({
    first ,
    logged


});


export default allReducers;