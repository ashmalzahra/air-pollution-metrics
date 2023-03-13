import { configureStore } from '@reduxjs/toolkit';
import homeReducer from './Home/homeSlice'

store = configureStore({
  reducer: {
    home: homeReducer,
  },
});

export default store