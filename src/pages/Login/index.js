import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import Page from '~/components/Page';
import Field from '~/components/UI/Input/Field';
import Button from '~/components/UI/Button';
import api from '~/services/api';

import './styles.scss';

function Login() {
  const history = useHistory();
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');

  function handleLogin() {
    const options = {
      method: 'POST',
      url: '/auth/login',
      headers: { 'Content-Type': 'application/json' },
      data: { email: email, password: senha },
    };

    api
      .request(options)
      .then(function (response) {
        console.log(response.data);
        localStorage.setItem('token', response.data.data.token);
        history.push('/');
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  return (
    <Page title="Entre na sua conta" className="page--login">
      <div className="d-flex flex-column justify-content-between flex-fill">
        <div>
          <Field
            type="email"
            placeholder="Digite aqui o seu e-mail"
            label="Email"
            className="mt-4"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Field
            type="password"
            placeholder="Digite aqui a sua senha"
            label="Senha"
            className="my-4"
            onChange={(e) => setSenha(e.target.value)}
          />

          <Link className="mt-4">não lembro a minha senha</Link>
        </div>

        <div className="d-flex flex-column align-items-center mb-4">
          <Link className="button__goBack mb-4 font-weight-normal" to="/">
            voltar
          </Link>
          <Button label="Acessar" nextRoute="/" onClick={handleLogin} />
        </div>
      </div>
    </Page>
  );
}

export default Login;
