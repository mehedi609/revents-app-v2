import { createSlice } from '@reduxjs/toolkit';
import { sampleData } from '../../app/api/sampleData';

const initialState = {
  events: sampleData,
};

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    createEvent(state, action) {
      state.events.push(action.payload);
    },
    updateEvent(state, action) {
      const index = state.events.findIndex(
        (evt) => evt.id === action.payload.id,
      );
      if (index !== -1) {
        state.events.splice(index, 1, action.payload);
      }
    },
    deleteEvent(state, action) {
      const index = state.events.findIndex(
        (event) => event.id === action.payload,
      );
      state.events.splice(index, 1);
    },
  },
});

export const { createEvent, updateEvent, deleteEvent } = eventsSlice.actions;

const eventReducer = eventsSlice.reducer;
export default eventReducer;
