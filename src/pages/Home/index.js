import React, { useEffect, useState } from 'react';

import Page from '~/components/Page';
import Card from '~/components/UI/Card';
import Search from '~/components/UI/Input/Search';

import { cardList } from '~/resources/utils/cardList';
import card01 from '~/resources/assets/Card/card01.png';

import cardImage from '~/resources/assets/Card/card-fullWidth01.png';

import './styles.scss';
import LocationCard from '~/components/UI/LocationCard';
import base64 from "base-64";
import {useHistory} from 'react-router-dom';
import api from "~/services/api";

function Home() {
  const history = useHistory(); 
  const [isLogged, setLogged] = useState(false);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    let token = localStorage.getItem("token");
    if(token == null) {
      setLogged(false);
    } else {
      let decoded = base64.decode(token.split(".")[1]);
      let expiration = JSON.parse(decoded).exp;
      let timestamp = new Date().getTime();
      if(expiration > timestamp) {
        window.alert('Token expirou');
        history.push('/login');
      } else {
        setLogged(true);
      }
    }
  }, [history]);

  useEffect(() => {
    let token = localStorage.getItem("token");
    if(isLogged) {
      const options = {
        method: 'GET',
        url: '/course/courses',
        headers: {
          Authorization: `Bearer ${token}`
        }
      };

      api.request(options).then(function (response) {
        console.log(response.data);
        setCards(response.data.data);
      }).catch(function (error) {
        console.error(error);
      });
    }
  }, [isLogged]);

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
            {cards.map((cardList) => (
              <Card
                label={cardList.title}
                key={cardList._id}
                image={card01}
              />
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
          <LocationCard />
        </div>
      </div>
    </Page>
  );
}

export default Home;
