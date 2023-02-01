import { createAsyncThunk } from '@reduxjs/toolkit';

const GET = 'space-travelers-hub/rocketsReducer/GET';

//  Reducer
const rocketsReducer = (state = [], action) => {
  switch (action.type) {
    case `${GET}/fulfilled`:
      return action.payload;
    default: return state;
  }
};

// Action creator
export const getRockets = (payload) => ({
  type: GET,
  payload,
});

// API
export const fetchRockets = createAsyncThunk(GET, async () => {
  const respose = await fetch('https://api.spacexdata.com/v3/rockets');
  const data = await respose.json();
  return data;
});

export default rocketsReducer;
