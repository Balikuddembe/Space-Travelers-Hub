import { combineReducers, configureStore } from '@reduxjs/toolkit';
import missionsReducer from './Missions/MissionSlice';
import rocketsReducer from './Rockets/RocketsSlice';

const reducer = combineReducers({
  missionsReducer, rocketsReducer,
});

const store = configureStore({
  reducer,
});

export default store;
