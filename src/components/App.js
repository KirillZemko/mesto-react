import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

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

  return (
    <div className="page">
      <Header />
      <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} />
      <Footer />
      <PopupWithForm title="Редактировать автар" name="edit-avatar" buttonName="Сохарнить" isOpen={isEditAvatarPopupOpen}>
        <fieldset class="popup__profile-info popup__profile-edit-avatar">
          <section class="popup__input-section">
            <input class="popup__input popup__input_type_avatar-link" id="input-avatar-link" placeholder="Ссылка на автар" type="url" name="link" required />
            <span class="popup__input-error" id="input-url-error-avatar"></span>
          </section>
          <button class="popup__button popup__button-save" type="submit">Сохранить</button>
        </fieldset>
      </PopupWithForm>
      <PopupWithForm title="Редактировать профиль" name="edit" buttonName="Сохарнить" isOpen={isEditProfilePopupOpen} >
        <fieldset class="popup__profile-info">
          <section class="popup__input-section">
            <input class="popup__input popup__input_type_name" id="input-name" placeholder="" type="text" name="name" required minlength="2" maxlength="40" />
            <span class="popup__input-error" id="input-name-error"></span>
          </section>
          <section class="popup__input-section">
            <input class="popup__input popup__input_type_job" id="input-job" placeholder="" type="text" name="about" required minlength="2" maxlength="200" />
            <span class="popup__input-error" id="input-job-error"></span>
          </section>
          <button class="popup__button" type="submit">Сохранить</button>
          </fieldset>
      </ PopupWithForm>
      <PopupWithForm title="Название" name="add-card" buttonName="Сохарнить" isOpen={isAddPlacePopupOpen}>
        <fieldset class="popup__profile-info popup__profile-info_type_add-card">
          <div class="popup__input-section">
            <input class="popup__input popup__input_type_title" id="input-title" placeholder="Название" type="text" name="name" required minlength="2" maxlength="30" />
            <span class="popup__input-error" id="input-title-error"></span>
          </div>
          <div class="popup__input-section">
            <input class="popup__input popup__input_type_url" id="input-url" placeholder="Ссылка на картинку" type="url" name="link" required />
            <span class="popup__input-error" id="input-url-error"></span>
          </div>
          <button class="popup__button popup__button_type-add-card" type="submit">Создать</button>
        </fieldset>
      </PopupWithForm>

      <template className="place-template">
        <article className="place">
          <a className="place__image-link" href="#">
            <img className="place__image" src="#" alt="#" />
          </a>
          <div className="place__desription">
            <h2 className="place__title"></h2>
            <div className="place__like-container">
              <button className="place__like" aria-label="лайк" type="button"></button>
              <p className="place__like-counter"></p>
            </div>
          </div>
          <button className="place__trash-btn" type="button"></button>
        </article>
      </template>
    </div>
  );
}

export default App;
