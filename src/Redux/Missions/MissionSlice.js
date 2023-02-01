import { createAsyncThunk } from '@reduxjs/toolkit';

const getMissions = createAsyncThunk(
  'Missions/getMissions', // Action
  async () => {
    const missions = await fetch('https://api.spacexdata.com/v3/missions');
    const resp = await missions.json();
    return resp;
  },
);

export default getMissions;
