/* eslint-disable import/no-unresolved */
import { configureStore } from "@reduxjs/toolkit";
import homePageSlice from "@/store/home-slice";

export default configureStore({
  reducer: {
    home: homePageSlice,
  },
  devTools: process.env.NEXT_PUBLIC_ENV !== "production",
});
