import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiRepo } from '../services/api.repo.hobbies';
import { Hobbie } from '../entities/hobbies';


// Thunck -> funcion devuelve un actionCreator
// Parametros
// - nombre de la accion
// - funcion action creator
// 
// Tipado 
// - retorno de la funciona -> payload de la accion sincrona
// - parametros de la funcion

export const loadHobbiesThunk = createAsyncThunk<Hobbie[],ApiRepo>(
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
