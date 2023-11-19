import { Hobbie } from '../../model/hobbies';
import { useHobbies } from '../../hooks/use.hobbies';

type Props = {
  info: Hobbie;
};

export function Card({ info }: Props) {
  const { updateCharacter } = useCharacters();


  return (
    <li className="character col">
      <div className="card character__card">
        <img
          src={`${info.picture}`}
          alt={info.topic}
          className={`character__picture`}
        />
        <div className="card-body">
          <h2 className="character__name card-title h4">
            {info.name}
          </h2>
          <div className="character__info">
            <ul className="list-unstyled">
              <li>Place: {info.place}</li>
              <li>

              </li>
            </ul>
          </div>
          <div className="character__overlay">
            <div className="character__actions">
              <button className="character__action btn">habla</button>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
