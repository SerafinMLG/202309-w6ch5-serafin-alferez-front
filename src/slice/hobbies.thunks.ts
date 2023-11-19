import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiRepo } from '../services/api.repo';
import { Hobbie } from '../model/hobbies';


export const loadHobbieThunk = createAsyncThunk<Hobbie[],ApiRepo>(
  'hobbies/load', 
  async (repo) => {
    const hobbies = await repo.getHobbies();
    return hobbies
  }
);

export const updateHobbieThunk = createAsyncThunk<Hobbie,{repo: ApiRepo;
id: Hobbie['id'];
updatedHobbie: Partial<Hobbie>;
}
>('hobbie/update', async ({repo, id, updatedHobbie})=> {
  const finalHobbie = await repo.setHobbies(id, updatedHobbie);
  return finalHobbie;
});
