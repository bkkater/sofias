import React from 'react';
import { Link } from 'react-router-dom';

import Page from '~/components/Page';
import Field from '~/components/UI/Input/Field';
import Button from '~/components/UI/Button';

import './styles.scss';
import SelectComponent from '~/components/UI/Select';

const options = [
  { value: 'investment ', label: 'Investimento' },
  { value: 'business', label: 'Negócios' },
  { value: 'dressmaking', label: 'Costura' },
];

function Register() {
  return (
    <Page title="Criando a sua conta" className="page--register">
      <div className="d-flex flex-column justify-content-between flex-fill">
        <div>
          <SelectComponent
            options={options}
            placeholder="Selecione uma área ou mais"
            label="Área escolhida"
            isMulti
          />

          <Field
            type="name"
            placeholder="Digite aqui o seu nome"
            label="Primeiro nome"
            className="mt-4"
          />
          <Field
            type="name"
            placeholder="Digite aqui o seu sobrenome"
            label="Sobrenome"
            className="mt-4"
          />
          <Field
            type="email"
            placeholder="Digite aqui o seu e-mail"
            label="E-mail"
            className="my-4"
          />

          <Field
            type="date"
            placeholder="Digite a data do seu nascimento"
            label="Data de nascimento"
            className="my-4"
          />
        </div>

        <div className="d-flex flex-column align-items-center mb-4">
          <Link className="button__goBack mb-4 font-weight-normal" to="/">
            voltar
          </Link>
          <Button label="Continuar" nextRoute="/register/step" />
        </div>
      </div>
    </Page>
  );
}

export default Register;
