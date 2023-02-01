import { configureStore, combineReducers } from '@reduxjs/toolkit';
import missionsSlice from './Missions/MissionSlice';

const spaceReducers = combineReducers({
  Missions: missionsSlice,
});

const store = configureStore({
  reducer: spaceReducers,
});

export default store;
