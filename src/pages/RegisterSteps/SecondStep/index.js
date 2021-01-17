import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Page from '~/components/Page';
import Field from '~/components/UI/Input/Field';
import Button from '~/components/UI/Button';
import SelectComponent from '~/components/UI/Select';

import geoApi from '~/services/geo';
import api from '~/services/api';

import './styles.scss';

function SecondStep() {
  const history = useHistory();
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [password, setPassword] = useState("");
  const [selectedUF, setSelectedUF] = useState("");

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

  function finalizar() {
    let firstName = localStorage.getItem("firstName");
    let lastName = localStorage.getItem("lastName");
    let email = localStorage.getItem("email");
    let birthdayDate = localStorage.getItem("birthday_date");
    let topic = localStorage.getItem("topic");
    const options = {
      method: 'POST',
      url: '/auth/register',
      headers: {'Content-Type': 'application/json'},
      data: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        birthday_date: birthdayDate,
        location: selectedUF,
        topic: topic 
      }
    };

    api.request(options).then(function (response) {
      console.log(response.data);
      history.push('/login');
    }).catch(function (error) {
      console.error(error);
    });
  }

  return (
    <Page title="Entre na sua conta" className="page--register">
      <div className="d-flex flex-column justify-content-between flex-fill">
        <div>
          <SelectComponent
            options={states}
            placeholder="Selecione a UF do seu estado"
            label="UF"
            onChange={e => {
              setCities([])
              setSelectedUF(e.value)}
            }
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
            onChange={e => setPassword(e.target.value)}
          />
          <Field
            type="password"
            placeholder="Digite aqui a sua senha"
            label="Senha"
            className="my-4"
          />

          <div>
            <h6>Termos e condições</h6>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDisabled"
                id="flexRadioDisabled"
              />
              <label class="form-check-label" for="flexRadioDisabled">
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
          <Button label="Finalizar" onClick={finalizar}/>
        </div>
      </div>
    </Page>
  );
}

export default SecondStep;
