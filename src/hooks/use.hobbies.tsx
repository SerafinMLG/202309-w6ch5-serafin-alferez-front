import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';

import { useCallback, useMemo } from 'react';
import { Hobbies } from '../entities/hobbies';
import { loadHobbiesThunk, updateHobbieThunk } from '../slice/hobbies.thunks';
import { HobbiesRepo } from '../services/api.repo.hobbies';

export function useHobbies() {

  const dispatch = useDispatch<AppDispatch>();

  const repo = useMemo(() => new HobbiesRepo(), []);

  const loadHobbies = useCallback(async () => {
    try {
      dispatch(loadHobbiesThunk(repo));
    } catch (error) {
      console.log((error as Error).message);
    }
  }, [repo]);

  const updateHobbie = async (
    id: Hobbies['id'],
    hobbie: Partial<Hobbies>
  ) => {
    try {

      dispatch(updateHobbiesThunk({
        id,
        repo,
        updatedHobbie: hobbie,
      })
    );
  } catch (error) {
      console.log((error as Error).message);
  }
};

const handleDetailsPage = async (hobbie: Hobbies) => {
  dispatch(setCurrentHobbie(hobbie));
}

  return {
    loadHobbies,
    updateHobbie,
    handleDetailsPage,
  };
}
