import React, {useState} from 'react';

export default function Login({handleAuthorization}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleСhangeEmail(evt) {
    setEmail(evt.target.value);
  }
  function handleChangePassword(evt) {
    setPassword(evt.target.value);
  }
  function handleSubmit(evt) {
    evt.preventDefault();
    handleAuthorization({password, email});
  }
  return (
    <div className="popup__authorization">
        <form name="popup-form" className="popup__form" onSubmit={handleSubmit}>
          <h3 className="popup__title popup__title_place_login">Вход</h3>
        <input className="popup__form-input popup__form-input_type_authorization-data" type="email" value={email} placeholder="Email" id="inputEmail" required maxLength="40" minLength="1" onChange={handleСhangeEmail}></input>
          {/* <span className="popup__input-error inputEmail-error"></span> */}
          <input className="popup__form-input popup__form-input_type_authorization-data" type="password" value={password} placeholder="Пароль" id="imputPassword" required maxLength="40" minLength="2" onChange={handleChangePassword}></input>
          {/* <span className="popup__input-error inputPassword-error"></span> */}
        <button className="popup__button-submit button button_type_login">Войти</button>
        </form>
    </div>
  )
}
