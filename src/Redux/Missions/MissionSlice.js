import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getMissions = createAsyncThunk(
  'Missions/getMissions', // Action
  async () => {
    const response = await fetch('https://api.spacexdata.com/v3/missions').then((resp) => resp.json());

    const missionsData = response.map((mission) => {
      const missions = {
        mission_id: mission.mission_id,
        mission_name: mission.mission_name,
        mission_description: mission.description,
      };
      return missions;
    });
    return missionsData;
  },
);

const initialState = { loading: false, data: [], error: null };

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {},
  extraReducers: (Builder) => {
    Builder.addCase(getMissions.fulfilled, (state, action) => {
      const x = state;
      x.data = action.payload;
    });
  },
});

export default missionsSlice.reducer;
