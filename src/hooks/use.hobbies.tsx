import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { ApiRepo } from '../services/api.repo';
import { useCallback, useMemo } from 'react';
import { Hobbie } from '../model/hobbies';
import { loadHobbieThunk, updateHobbieThunk } from '../slice/hobbies.thunks';

export function useHobbies() {
  const { hobbies: hobbies } = useSelector(
    (state: RootState) => state.hobbieState
  );
  const dispatch = useDispatch<AppDispatch>();

  const repo = useMemo(() => new ApiRepo(), []);

  const loadHobbies = useCallback(async () => {
    try {
      dispatch(loadHobbieThunk(repo));
    } catch (error) {
      console.log((error as Error).message);
    }
  }, [dispatch, repo]);

  const updateHobbie = async (
    id: Hobbie['id'],
    updatedHobbie: Partial<Hobbie>
  ) => {
    try {

      dispatch(updateHobbieThunk({
        id,
        repo,
        updatedHobbie,
      })
    );
  } catch (error) {
      console.log((error as Error).message);
  }
};

  return {
    loadHobbies: loadHobbies,
    hobbies,
    updateHobbie,
  };
}
