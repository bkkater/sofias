import React from 'react';
import { Link } from 'react-router-dom';

import Page from '~/components/Page';
import Button from '~/components/UI/Button';
import Card from '~/components/UI/Card';
import LocationCard from '~/components/UI/LocationCard';

import './styles.scss';

const cardDescription =
  'Há basicamente quatro especialistas no mercado que podem orientar seusinvestimentos: o agente autônomo, o planejador financeiro, o consultorde investimentos e o analista de investimentos. No cargo de Investidorse inicia ganhando R$ 2.000,00 de salário e pode vir a ganhar até R$7.500,00. A média salarial para Investidor no Brasil é de R$ 4.302,00. Aformação mais comum é de Graduação em Administração de Empresas.';

function Course({ location }) {
  const cardItem = location.state.cardList;

  return (
    <Page className="page--detail-course" title=" ">
      <div className="d-flex flex-column justify-content-between flex-fill">
        <Card
          description={cardDescription}
          label={cardItem.label}
          image={cardItem.image}
        />

        <div className="d-flex flex-column align-items-center mb-4">
          <LocationCard
            label="Guaianases, São Paulo - SP"
            className="mb-5 w-100"
          />
          <Link className="button__goBack mb-4 font-weight-normal" to="/">
            voltar
          </Link>
          <Button label="Escolher essa" />
        </div>
      </div>
    </Page>
  );
}

export default Course;
