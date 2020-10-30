import { configureStore } from '@reduxjs/toolkit';
import eventReducer from '../../features/events/eventsSlice';

const reducer = {
  event: eventReducer,
};

const store = configureStore({
  reducer,
});

export default store;
