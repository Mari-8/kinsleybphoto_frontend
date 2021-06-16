import { combineReducers } from 'redux';
import galleries from './galleries';
import pictures from './pictures'
import photoshoots from './photoshoots'

export default combineReducers({
  galleries: galleries, 
  pictures: pictures,
  photoshoots: photoshoots
});