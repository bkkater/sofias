import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Page from '~/components/Page';
import Field from '~/components/UI/Input/Field';
import Button from '~/components/UI/Button';
import SelectComponent from '~/components/UI/Select';

import geoApi from '~/services/geo';

import './styles.scss';

function SecondStep() {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    geoApi.get('/').then((response) => {
      let array = response.data.map((state) => {
        return { value: state.sigla, label: state.nome };
      });

      setStates(array);
    });
  }, []);

  // useEffect(() => {
  //   geoApi.get('/').then((response) => {
  //     let array = response.data.map((state) => {
  //       return { value: state.sigla, label: state.nome };
  //     });

  //     setStates(array);
  //   });
  // }, []);

  return (
    <Page title="Entre na sua conta" className="page--register">
      <div className="d-flex flex-column justify-content-between flex-fill">
        <div>
          <SelectComponent
            options={states}
            placeholder="Selecione a UF do seu estado"
            label="UF"
          />

          <Field
            type="password"
            placeholder="Digite aqui a sua senha"
            label="Senha"
            className="my-4"
          />
          <Field
            type="password"
            placeholder="Digite aqui a sua senha"
            label="Senha"
            className="my-4"
          />
        </div>

        <div className="d-flex flex-column align-items-center mb-4">
          <Link className="button__goBack mb-4 font-weight-normal" to="/">
            voltar
          </Link>
          <Button label="Finalizar" nextRoute="/" />
        </div>
      </div>
    </Page>
  );
}

export default SecondStep;
