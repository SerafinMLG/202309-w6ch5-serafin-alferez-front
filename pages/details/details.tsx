
import { Link, useParams } from 'react-router-dom';
import './detalis.scss';
import { Hobbie } from '../../src/model/hobbies';
import { useSelector } from 'react-redux';
import { RootState } from '../../src/store/store';

export default function DetailsPage() {
  const { name } = useParams();
  const { hobbieState } = useSelector((state: RootState) => state.hobbieState);
  const hobbie = hobbieState.hobbies.find(
    (item: Hobbie) => item.name === name
  );

  return (
    <>
      <Link to={'/'}>
        <img src="../back-arrow.png" alt="Back Arrow" width={40} />
      </Link>
      <div className="country-detail">
        <h2>{name}</h2>
        <img src={country?.flags.png} alt="" />
        <h3>
          Capital: <span className="detail-subtitle">{country?.capital}</span>
        </h3>
        <p>
          Superficie:{' '}
          <span className="detail-subtitle">{country?.area} KM2</span>
        </p>
        <p>
          Población:{' '}
          <span className="detail-subtitle">{country?.population}</span>
        </p>
        <p>
          Continente: <span className="detail-subtitle">{country?.region}</span>
        </p>
        <p>
          Subregión:{' '}
          <span className="detail-subtitle">{country?.subregion}</span>
        </p>
      </div>
    </>
  );
}
