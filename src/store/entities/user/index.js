import {createSlice} from "@reduxjs/toolkit";
import {LOADING_STATUS} from "@/constants/loading-status";

const initialState = {
  entities: [],
  ids: [],
  loadingStatus: LOADING_STATUS.idle,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loadingStatus = LOADING_STATUS.inProgress;
    },
    finishLoading: (state, { payload }) => {
      console.log(payload)
      state.loadingStatus = LOADING_STATUS.finished;
      state.entities = {
        ...state.entities,
        ...payload.reduce((acc, user) => {
          acc[user.id] = user;

          return acc;
        }, {}),
      };
      state.ids = [...new Set([...state.ids, ...payload.map(({ id }) => id)])];
    },
    failLoading: (state) => {
      state.loadingStatus = LOADING_STATUS.failed;
    },
  },
});
