import { Hobbies } from '../entities/hobbies';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { loadHobbiesThunk, updateHobbieThunk } from './hobbies.thunks';

type HobbiesState = {
  hobbies: Hobbies[];
  hobbieLoadState: 'idle' | 'loading' | 'error';
  currentHobbie: Hobbies | null;
};

const initialState: HobbiesState = {
  hobbies: [],
  hobbieLoadState: 'idle',
  currentHobbie: null,
};

const hobbieSlice = createSlice({
  name: 'hobbies',
  initialState,
  reducers: {
    setCurrentHobbie: (
      state: HobbiesState,
      { payload }: PayloadAction<Hobbies | null>
    ) => {
      state.currentHobbie = payload;
      return state;
    },
  },
  
  extraReducers: (builder) => {
    builder.addCase(loadHobbiesThunk.pending, (state: HobbiesState) => {
      state.hobbieLoadState = 'loading';
      return state;
    }),


    builder.addCase(loadHobbiesThunk.fulfilled,
      (state: HobbiesState, { payload }: PayloadAction<Hobbies[]>) => {
        state.hobbies = payload;
        state.hobbieLoadState = 'idle';
        return state;
      }
    );
    
    builder.addCase(loadHobbiesThunk.rejected, (state: HobbiesState) => {
      state.hobbieLoadState = 'error';
      return state;
    })

    builder.addCase(
      updateHobbieThunk.fulfilled,
      (state: HobbiesState, { payload }: PayloadAction<Hobbies>) => {
        state.hobbies[state.hobbies.findIndex((item) => item.id === payload.id)] =
          payload;
        return state;
      } 
    )
  }
  });

  export default hobbieSlice.reducer;
  export const { setCurrentHobbie } = hobbieSlice.actions;
