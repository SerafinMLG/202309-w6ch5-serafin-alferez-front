import { Hobbie } from '../model/hobbies';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { loadHobbieThunk, updateHobbieThunk } from './hobbies.thunks';

type HobbieState = {
  hobbies: Hobbie[];
  hobbieState: 'idle' | 'loading' | 'error';
};

const initialState: HobbieState = {
  hobbies: [],
  hobbieState: 'idle',
};

const hobbieSlice = createSlice({
  name: 'hobbie',
  initialState,
  reducers: {},
  
  extraReducers: (builder) => {
    builder.addCase(loadHobbieThunk.pending, (state: HobbieState) => {
      state.hobbieState = 'loading';
      return state;
    }),


    builder.addCase(loadHobbieThunk.fulfilled,
      (state: HobbieState, { payload }: PayloadAction<Hobbie[]>) => {
        state.hobbies = payload;
        state.hobbieState = 'idle';
        return state;
      }
    );
    
    builder.addCase(loadHobbieThunk.rejected, (state: HobbieState) => {
      state.hobbieState = 'error';
      return state;
    })

    builder.addCase(
      updateHobbieThunk.fulfilled,
      (state: HobbieState, { payload }: PayloadAction<Hobbie>) => {
        state.hobbies[state.hobbies.findIndex((item) => item.id === payload.id)] =
          payload;
        return state;
      } 
    )

    builder.addCase(updateHobbieThunk.pending, (state: HobbieState) => {
      state.hobbieState = 'loading';
      return state;
    }),

    builder.addCase(updateHobbieThunk.rejected, (state: HobbieState) => {
      state.hobbieState = 'error';
      return state;
    }

    )
    }
  });

  export default hobbieSlice.reducer;
