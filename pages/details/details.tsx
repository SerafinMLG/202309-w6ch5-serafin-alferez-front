import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AppContext } from '../../context/context';
import './detalis.scss';
import { Country } from '../../model/country.types';

export default function DetailsPage() {
  const { name } = useParams();
  const { countriesState } = useContext(AppContext);
  const country = countriesState.country.find(
    (item: Country) => item.name.common === name
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
