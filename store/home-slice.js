/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSidebarVisible: true,
};

const homePageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    updateHomepageData: (state, action) => {
      // eslint-disable-next-line array-callback-return
      action.payload.map((ele) => {
        state[ele.key] = ele.value;
      });
    },
  },
});

export const { updateHomepageData } = homePageSlice.actions;

export default homePageSlice.reducer;
