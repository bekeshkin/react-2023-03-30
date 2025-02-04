import { dishReducer, dishSlice } from "@/store/entities/dish";
import { restaurantReducer } from "@/store/entities/restaurant";
import {reviewReducer, reviewSlice} from "@/store/entities/review";
import {userReducer, userSlice} from "@/store/entities/user";
import { logger } from "@/store/middlewares/logger";
import { cartReducer } from "@/store/ui/cart";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  cart: cartReducer,
  restaurant: restaurantReducer,
  dish: dishSlice.reducer,
  review: reviewSlice.reducer,
  user: userSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger]),
});

// export const store = createStore(rootReducer, applyMiddleware(thunk, logger));
