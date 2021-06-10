import { combineReducers } from 'redux';
import galleries from './galleries';
import pictures from './pictures'

export default combineReducers({
  galleries: galleries, 
  pictures: pictures
});