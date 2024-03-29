import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Activity } from "../../../utils/Activity";

interface ActivityListState {
  activityList: Activity[];
}

const initialState: ActivityListState = {
  activityList: [],
};

/**
 * 1. Tanto initialState como state,
 * representa el estado del activityListSlice no del rootState
 * 2. Tanto initialState como state son objetos.
 */
const activityListSlice = createSlice({
  name: "activityList",
  initialState,
  reducers: {
    createList: (state, action: PayloadAction<Activity[]>) => {
      state.activityList = action.payload;
    },
  },
});

export const { createList } = activityListSlice.actions;
export default activityListSlice.reducer;
