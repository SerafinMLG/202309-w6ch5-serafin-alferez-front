import { useEffect } from 'react';

import { Card } from '../card/card';

import { useHobbies } from '../../hooks/use.hobbies';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export function List() {
  const { loadHobbies } = useHobbies();

  const { hobbies } = useSelector(
    (state: RootState) => state.hobbieState
    );
    
  useEffect(() => {
    loadHobbies();
  }, [loadHobbies]);

  return (
    <>
      
        <ul className="characters-list row list-unstyled">
          {hobbies.map((item) => (
            <Card info={item} key={item.id}></Card>
          ))}
        </ul>
    </>
  );
}
