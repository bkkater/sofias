import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import Page from '~/components/Page';
import Card from '~/components/UI/Card';
import Search from '~/components/UI/Input/Search';
import LocationCard from '~/components/UI/LocationCard';

import event01 from '~/resources/assets/Card/event01.png';
import event02 from '~/resources/assets/Card/event02.png';
import event03 from '~/resources/assets/Card/event03.png';

import cardImage from '~/resources/assets/Card/card-fullWidth01.png';

import api from '~/services/api';
import base64 from 'base-64';

import './styles.scss';

function Home() {
  const history = useHistory();
  const [isLogged, setLogged] = useState(false);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    let token = localStorage.getItem('token');
    if (token == null) {
      setLogged(false);
    } else {
      let decoded = base64.decode(token.split('.')[1]);
      let expiration = JSON.parse(decoded).exp;
      let timestamp = new Date().getTime();
      if (expiration > timestamp) {
        window.alert('Token expirou');
        history.push('/login');
      } else {
        setLogged(true);
      }
    }
  }, [history]);

  useEffect(() => {
    let token = localStorage.getItem('token');
    const options = {
      method: 'GET',
      url: '/course/courses',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    api
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setCards(response.data.data);
      })
      .catch(function (error) {
        console.error(error);
      });
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
              <Link
                to={
                  isLogged
                    ? { pathname: '/', state: { cardList } }
                    : { pathname: '/register/course', state: { cardList } }
                }
                className="mr-4"
              >
                <Card
                  label={cardList.title}
                  key={cardList._id}
                  image={cardList.image}
                />
              </Link>
            ))}
          </div>

          {isLogged && (
            <>
              <div>
                <h5 className="mt-4">Popular</h5>

                <div className="d-flex align-items-center mb-3 mt-3">
                  <div className="card__popular-type d-flex align-items-center justify-content-center mr-3">
                    Podcasts
                  </div>
                  <div className="card__popular-type d-flex align-items-center justify-content-center mr-4">
                    Livros
                  </div>
                </div>

                <div className="d-flex align-items-center mb-3">
                  <div className="card__popular-type d-flex align-items-center justify-content-center mr-3">
                    Artigos
                  </div>
                  <div className="card__popular-type d-flex align-items-center justify-content-center mr-4">
                    Vídeos
                  </div>
                </div>
              </div>

              <div>
                <div className="d-flex justify-content-between align-items-center mt-5">
                  <h5 className="mb-0">Eventos patrocinados</h5>
                  <FiArrowRight size={22} color="#4E148C" />
                </div>

                <div className="d-flex mt-3 mb-3 card__list">
                  <img src={event01} alt="Curso" className="mr-2" />
                  <img src={event02} alt="Curso" className="mr-2" />
                  <img src={event03} alt="Curso" className="mr-2" />
                </div>
              </div>
            </>
          )}

          {!isLogged && (
            <Card
              label="Em dúvida?"
              description="Faça um teste"
              image={cardImage}
              fullWidth
            />
          )}
        </div>

        {!isLogged && (
          <div className="d-flex card__location__container mb-4 mt-5 justify-content-center">
            <LocationCard
              label="Escolha a sua localização"
              description="vamos oferecer conteúdos melhores para você"
            />
          </div>
        )}
      </div>
    </Page>
  );
}

export default Home;
