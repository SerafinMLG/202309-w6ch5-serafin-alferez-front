import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { ApiRepo } from '../services/api.repo';
import { useCallback, useMemo } from 'react';
import { Hobbie } from '../model/hobbies';
import { loadHobbieThunk, updateHobbieThunk } from '../slice/hobbies.thunks';
import { setCurrentHobbie } from '../slice/hobbies.slice';

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
  }, [repo]);

  const updateHobbie = async (
    id: Hobbie['id'],
    hobbie: Partial<Hobbie>
  ) => {
    try {
      dispatch(updateHobbieThunk({
        id,
        repo,
        updatedHobbie: hobbie,
      })
    );
  } catch (error) {
      console.log((error as Error).message);
  }
};

const handleDetailsPage = async (hobbie:Hobbie) => {
  dispatch(setCurrentHobbie(hobbie));
};
  return {
    loadHobbies,
    hobbies,
    updateHobbie,
    handleDetailsPage,
  };
}
