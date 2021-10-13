import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import { Card } from "./Card";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
  }

  return (
    <div className="page">
      <Header />
      <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} />
      <Footer />
      <PopupWithForm title="Редактировать автар" name="edit-avatar" buttonName="Сохарнить" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <fieldset className="popup__profile-info popup__profile-edit-avatar">
          <section className="popup__input-section">
            <input className="popup__input popup__input_type_avatar-link" id="input-avatar-link" placeholder="Ссылка на автар" type="url" name="link" required />
            <span className="popup__input-error" id="input-url-error-avatar"></span>
          </section>
          <button className="popup__button popup__button-save" type="submit">Сохранить</button>
        </fieldset>
      </PopupWithForm>
      <PopupWithForm title="Редактировать профиль" name="edit" buttonName="Сохарнить" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} >
        <fieldset className="popup__profile-info">
          <section className="popup__input-section">
            <input className="popup__input popup__input_type_name" id="input-name" placeholder="" type="text" name="name" required minLength="2" maxLength="40" />
            <span className="popup__input-error" id="input-name-error"></span>
          </section>
          <section className="popup__input-section">
            <input className="popup__input popup__input_type_job" id="input-job" placeholder="" type="text" name="about" required minLength="2" maxLength="200" />
            <span className="popup__input-error" id="input-job-error"></span>
          </section>
          <button className="popup__button" type="submit">Сохранить</button>
          </fieldset>
      </ PopupWithForm>
      <PopupWithForm title="Название" name="add-card" buttonName="Сохарнить" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <fieldset className="popup__profile-info popup__profile-info_type_add-card">
          <div className="popup__input-section">
            <input className="popup__input popup__input_type_title" id="input-title" placeholder="Название" type="text" name="name" required minLength="2" maxLength="30" />
            <span className="popup__input-error" id="input-title-error"></span>
          </div>
          <div className="popup__input-section">
            <input className="popup__input popup__input_type_url" id="input-url" placeholder="Ссылка на картинку" type="url" name="link" required />
            <span className="popup__input-error" id="input-url-error"></span>
          </div>
          <button className="popup__button popup__button_type-add-card" type="submit">Создать</button>
        </fieldset>
      </PopupWithForm>

      <PopupWithForm title="Вы уверены?" name="conformation" buttonName="Да"/>

    </div>
  );
}

export default App;
