import { createAsyncThunk } from '@reduxjs/toolkit';

const getMissions = createAsyncThunk(
  'Missions/getMissions', // Action
  async () => {
    const missions = await fetch('https://api.spacexdata.com/v3/missions');
    const data = await missions.json();
    return data;
  },
);

export default getMissions;
