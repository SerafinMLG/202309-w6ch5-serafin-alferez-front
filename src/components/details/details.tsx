import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
export function Details() {
  const { currentHobbie } = useSelector((state: RootState) => state.hobbieState);
  return (
    <div className="details-container">
      <div className="title-container">
        <p>{currentHobbie?.name}</p>
      </div>
      <div className="image-container">
        <img
          src={currentHobbie?.img}
          alt={currentHobbie?.name}
          height="300"
          width="200"
        />
      </div>
      <div className="info-container">
        <p>Director: {currentHobbie?.director}</p>
        <p>Era: {currentHobbie?.era}</p>
        <p>Año: {currentHobbie?.year}</p>
      </div>
    </div>
  );
}