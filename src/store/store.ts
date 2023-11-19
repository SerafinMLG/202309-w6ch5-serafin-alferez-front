import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import hobbiesReducer from '../slice/hobbies.slice';

export const store = configureStore({
  reducer: {
    hobbieState: hobbiesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
