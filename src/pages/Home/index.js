import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Page from '~/components/Page';
import Card from '~/components/UI/Card';
import Search from '~/components/UI/Input/Search';

import { cardList } from '~/resources/utils/cardList';

import cardImage from '~/resources/assets/Card/card-fullWidth01.png';

import './styles.scss';
import LocationCard from '~/components/UI/LocationCard';

function Home() {
  const [isLogged, setLogged] = useState(true);

  return (
    <Page
      title={isLogged ? 'Navegue' : 'Escolha uma área'}
      className="page--home"
    >
      <div className="d-flex flex-column justify-content-between flex-fill">
        <div>
          <Search />

          {isLogged && <h5 className="mt-4">Recomendados</h5>}
          <div className="d-flex mt-3 mb-3 card__list">
            {cardList.map((cardList) => (
              <Link
                to={{ pathname: '/detail/course', state: { cardList } }}
                className="mr-4"
              >
                <Card
                  label={cardList.label}
                  key={cardList.id}
                  image={cardList.image}
                />
              </Link>
            ))}
          </div>

          <Card
            label="Em dúvida?"
            description="Faça um teste"
            image={cardImage}
            fullWidth
          />
        </div>

        <div className="d-flex card__location__container mb-4 mt-5 justify-content-center">
          <LocationCard
            label="Escolha a sua localização"
            description="vamos oferecer conteúdos melhores para você"
          />
        </div>
      </div>
    </Page>
  );
}

export default Home;
