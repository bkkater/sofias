import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

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
 
  const history = useHistory();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [topic, setTopic] = useState("");

  function continuar() {
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("email", email);
    localStorage.setItem("birthday_date", date);
    localStorage.setItem("topic", topic);
    history.push('/register/step');
  }

  return (
    <Page title="Criando a sua conta" className="page--register">
      <div className="d-flex flex-column justify-content-between flex-fill">
        <div>
          <SelectComponent
            options={options}
            placeholder="Selecione uma área ou mais"
            label="Área escolhida"
            isMulti
            onChange={(e) => setTopic(e[0].value)}
          />

          <Field
            type="name"
            placeholder="Digite aqui o seu nome"
            label="Primeiro nome"
            className="mt-4"
            onChange={e => setFirstName(e.target.value)}
          />
          <Field
            type="name"
            placeholder="Digite aqui o seu sobrenome"
            label="Sobrenome"
            className="mt-4"
            onChange={e => setLastName(e.target.value)}
          />
          <Field
            type="email"
            placeholder="Digite aqui o seu e-mail"
            label="E-mail"
            className="my-4"
            onChange={e => setEmail(e.target.value)}
          />

          <Field
            type="date"
            placeholder="Digite a data do seu nascimento"
            label="Data de nascimento"
            className="my-4"
            onChange={e => setDate(e.target.value)}
          />
        </div>

        <div className="d-flex flex-column align-items-center mb-4">
          <Link className="button__goBack mb-4 font-weight-normal" to="/">
            voltar
          </Link>
          <Button label="Continuar" onClick={continuar}/>
        </div>
      </div>
    </Page>
  );
}

export default Register;
