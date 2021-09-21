import React, {useState} from 'react';
import { Link, Route } from 'react-router-dom';

export default function Register(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleAddEmail(evt) {
    setEmail(evt.target.value);
  }
  function handleAddPassword(evt) {
    setPassword(evt.target.value);
  }
  function handleSubmit(evt) {
    evt.preventDefault();
    props.handleRegistration(email, password);
  }
    return (
      <div className="popup__authorization">
        <form name="popup-form" className="popup__form" onSubmit={handleSubmit}>
          <h3 className="popup__title popup__title_place_login">Регистрация</h3>
          <input className="popup__form-input popup__form-input_type_authorization-data" type="email" value={email} placeholder="Email" id="inputEmail" required maxLength="40" minLength="1" onChange={handleAddEmail}></input>
          <input className="popup__form-input popup__form-input_type_authorization-data" type="password" value={password} placeholder="Пароль" id="imputPassword" required maxLength="40" minLength="2" onChange={handleAddPassword}></input>
          <button className="popup__button-submit button button_type_login">Зарегистрироваться</button>
          <div className="popup__redirect-container">
            <Route path="/sign-up">
              <Link className="popup__redirect-container-link" to="/sign-in">Уже зарегистрированы? Войти</Link>
            </Route>
          </div>
        </form>
      </div>
    )
}
