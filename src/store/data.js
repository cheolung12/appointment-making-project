import { createSlice } from '@reduxjs/toolkit';

const initData = {
  title: '',
  count: 2,
  date: [],
  people: Array.from({ length: 2 }, (_, idx) => `person ${idx}`),
  possibleTime: Array.from({ length: 2 }, () => []),
  result: [],
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
    setOverWrappingTime(state) {
      const map = new Map();
      const people = state.people;
      const possibleTime = state.possibleTime;

      // 자료형 변경
      for (let i = 0; i < possibleTime.length; i++) {
        for (let j = 0; j < possibleTime[i].length; j++) {
          let temp = possibleTime[i][j];
          let startHour = parseInt(temp.startTime, 10);
          let endHour = parseInt(temp.endTime, 10);
          if (!map.has(temp.day)) {
            map.set(temp.day, []);
          }
          map.get(temp.day).push([people[i], [startHour, endHour]]);
        }
      }

      const data = [];
      map.forEach((value, key) => data.push({ [key]: value }));
      console.log(data);

      // 각 사람의 시간대를 종합
      data.forEach((el) => {
        let key = Object.keys(el)[0];
        let data = el[key];

        // 모든 시간대를 종합하기 위한 배열을 생성
        const timeSlots = new Array(24).fill(0);

        // 각 사람의 시간대를 총합
        data.forEach(([_, [start, end]]) => {
          for (let i = start; i <= end; i++) {
            timeSlots[i]++;
          }
        });

        // 가장 많이 겹치는 시간대 찾기
        let maxOverlap = 0;
        let overlappingTimeSlots = [];
        for (let i = 0; i < timeSlots.length; i++) {
          if (timeSlots[i] > maxOverlap) {
            maxOverlap = timeSlots[i];
            overlappingTimeSlots = [i];
          } else if (timeSlots[i] === maxOverlap) {
            overlappingTimeSlots.push(i);
          }
        }

        // 겹치는 시간대 출력
        if (overlappingTimeSlots.length > 0) {
          const startTime = overlappingTimeSlots[0];
          const endTime = overlappingTimeSlots[overlappingTimeSlots.length - 1];
          const overlappingPersons = data
            .map(([name, [start, end]]) => {
              if (start <= endTime && end >= startTime) {
                return name;
              }
            })
            .filter(Boolean);

          state.result.push(
            `${key} 인원이 가장 많이 겹치는 시간대 ${startTime}시~${endTime}시, 인원: ${overlappingPersons.join(
              ', '
            )}`);
        } else {
           state.result.push('겹치는 시간대가 없습니다.');
        }
      });
    },
  },
});

export const dataAction = dataSlice.actions;
export default dataSlice.reducer;
