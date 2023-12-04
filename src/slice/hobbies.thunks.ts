import { createAsyncThunk } from '@reduxjs/toolkit';
import { HobbiesRepo } from '../services/api.repo.hobbies';
import { Hobbies } from '../entities/hobbies';


export const loadHobbiesThunk = createAsyncThunk<Hobbies[], HobbiesRepo>(
  'hobbies/load', 
  async (repo) => {
    const hobbies = await repo.getHobbies();
    return hobbies;
  }
);

export const updateHobbieThunk = createAsyncThunk<Hobbies,{
repo: HobbiesRepo;
id: Hobbies['id'];
updatedHobbie: Partial<Hobbies>;
}
>('hobbies/update', async ({repo, id, updatedHobbie})=> {
  const finalHobbie = await repo.updateHobbie(id, updatedHobbie);
  return finalHobbie;
});
