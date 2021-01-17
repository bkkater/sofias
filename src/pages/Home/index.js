import React from 'react';

import Page from '~/components/Page';
import Card from '~/components/UI/Card';
import Search from '~/components/UI/Input/Search';

import { cardList } from '~/resources/utils/cardList';

import cardImage from '~/resources/assets/Card/card-fullWidth01.png';

import './styles.scss';
import LocationCard from '~/components/UI/LocationCard';

function Home() {
  return (
    <Page title="Escolha uma área">
      <Search />

      <div className="d-flex mt-3 mb-3 card__list">
        {cardList.map((cardList) => (
          <Card
            label={cardList.label}
            key={cardList.id}
            image={cardList.image}
          />
        ))}
      </div>

      <Card
        label="Em dúvida?"
        description="Faça um teste"
        image={cardImage}
        fullWidth
      />

      <div className="d-flex flex-fill align-items-end justify-content-center">
        <LocationCard />
      </div>
    </Page>
  );
}

export default Home;
