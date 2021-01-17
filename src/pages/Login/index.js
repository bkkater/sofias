import React from 'react';
import { Link } from 'react-router-dom';

import Page from '~/components/Page';
import Field from '~/components/UI/Input/Field';
import Button from '~/components/UI/Button';

import './styles.scss';

function Login() {
  return (
    <Page title="Entre na sua conta" className="page--login">
      <div className="d-flex flex-column justify-content-between flex-fill">
        <div>
          <Field
            type="email"
            placeholder="Digite aqui o seu e-mail"
            label="Email"
            className="mt-4"
          />
          <Field
            type="password"
            placeholder="Digite aqui a sua senha"
            label="Senha"
            className="my-4"
          />

          <Link className="mt-4">não lembro a minha senha</Link>
        </div>

        <div className="d-flex flex-column align-items-center mb-4">
          <Link className="button__goBack mb-4 font-weight-normal" to="/">
            voltar
          </Link>
          <Button label="Acessar" />
        </div>
      </div>
    </Page>
  );
}

export default Login;
