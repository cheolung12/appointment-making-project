import { createSlice } from '@reduxjs/toolkit';

const initData = {
  title: '',
  count: 2,
  date: [],
  people: Array.from({ length: 2 }, (_, idx) => `person ${idx}`),
  possibleTime: Array.from({ length: 2 }, () => []),
};

const dataSlice = createSlice({
  name: 'appointment',
  initialState: initData,
  reducers: {
    setTitle(state, action) {
      state.title = action.payload.title;
    },
    increment(state) {
      state.count++;
      state.people = Array.from(
        { length: state.count },
        (_, idx) => `person ${idx}`
      );
      state.possibleTime = Array.from({ length: state.count }, () => []);
    },
    decrement(state) {
      state.count--;
      state.people = Array.from(
        { length: state.count },
        (_, idx) => `person ${idx}`
      );
      state.possibleTime = Array.from({ length: state.count }, () => []);
    },
    setDate(state, action) {
      state.date = [action.payload.startDay, action.payload.endDay];
    },
    setName(state, action) {
      const { idx, name } = action.payload;
      state.people[idx] = name;
    },
    setPossible(state, action) {
      const { idx, time } = action.payload;
      state.possibleTime[idx].push(time);
    },
    setDay(state, action) {
      const { parentIndex, childIndex, newDay } = action.payload;
      state.possibleTime[parentIndex][childIndex].day = newDay;
    },
    setStartTime(state, action) {
      const { parentIndex, childIndex, newTime } = action.payload;
      state.possibleTime[parentIndex][childIndex].startTime = newTime;
    },
    setEndTime(state, action) {
      const { parentIndex, childIndex, newTime } = action.payload;
      state.possibleTime[parentIndex][childIndex].endTime = newTime;
    },
  },
});

export const dataAction = dataSlice.actions;
export default dataSlice.reducer;
