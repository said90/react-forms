import {combineReducers} from 'redux';
import auditReducer from './audit';

export default combineReducers({
  audit: auditReducer,
});
