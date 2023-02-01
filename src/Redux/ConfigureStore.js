import { combineReducers, configureStore } from '@reduxjs/toolkit';
import missionsReducer from './Missions/MissionSlice';
import rocketsReducer from './Rockets/RocketsSlice';

const spaceReducers = combineReducers({
  mission: missionsReducer, rocketsReducer,
});

const store = configureStore({
  reducer: spaceReducers,
});

export default store;
