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
  const [selectedUF, setSelectedUF] = useState('');

  useEffect(() => {
    geoApi.get('/').then((response) => {
      let array = response.data.map((state) => {
        return { value: state.sigla, label: state.nome };
      });

      setStates(array);
    });
  }, []);

  useEffect(() => {
    geoApi.get(`/${selectedUF}/distritos`).then((response) => {
      let array = response.data.map((state) => {
        return { value: state.municipio.nome, label: state.municipio.nome };
      });
      setCities(array);
    });
  }, [selectedUF]);

  return (
    <Page title="Entre na sua conta" className="page--register">
      <div className="d-flex flex-column justify-content-between flex-fill">
        <div>
          <SelectComponent
            options={states}
            placeholder="Selecione a UF do seu estado"
            label="UF"
            onChange={(e) => {
              setCities([]);
              setSelectedUF(e.value);
            }}
          />

          <SelectComponent
            options={cities}
            placeholder="Selecione o Municipio"
            label="Municipio"
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

          <div>
            <h6>Termos e condições</h6>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDisabled"
                id="flexRadioDisabled"
              />
              <label className="form-check-label" htmlFor="flexRadioDisabled">
                Concordo que li e aceito os <b>termos e condições</b> de
                utilização do Sofias.
              </label>
            </div>
          </div>
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
