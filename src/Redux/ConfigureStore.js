import { combineReducers, configureStore } from '@reduxjs/toolkit';
import missionsReducer from './Missions/MissionSlice';
import rocketsReducer from './Rockets/RocketsSlice';

const spaceReducers = combineReducers({
  Missions: missionsReducer, rocketsReducer,
});

const store = configureStore({
  reducer,
});

export default store;
