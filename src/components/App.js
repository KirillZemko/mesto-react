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
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false)
  const [selectedCard, setSelectedCard] = React.useState( {name: '', link: ''} );

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
    setIsImagePopupOpen(false);
    setSelectedCard( {name: '', link: ''} );
  }

  function handleCardClick(name, link) {
    setSelectedCard( {name, link} );
    setIsImagePopupOpen(true);
  }

  return (
    <div className="page">
      <Header />
      <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onCardClick={handleCardClick} />
      <Footer />

      <PopupWithForm title="Редактировать автар" name="edit-avatar" buttonText={"Сохранить"} buttonName="Сохарнить" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <section className="popup__input-section">
          <input className="popup__input popup__input_type_avatar-link" id="input-avatar-link" placeholder="Ссылка на автар" type="url" name="link" required />
          <span className="popup__input-error" id="input-url-error-avatar"></span>
        </section>
      </PopupWithForm>

      <PopupWithForm title="Редактировать профиль" name="edit" buttonText={"Сохранить"} buttonName="Сохарнить" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} >
        <section className="popup__input-section">
          <input className="popup__input popup__input_type_name" id="input-name" placeholder="" type="text" name="name" required minLength="2" maxLength="40" />
          <span className="popup__input-error" id="input-name-error"></span>
        </section>
        <section className="popup__input-section">
          <input className="popup__input popup__input_type_job" id="input-job" placeholder="" type="text" name="about" required minLength="2" maxLength="200" />
          <span className="popup__input-error" id="input-job-error"></span>
        </section>
      </ PopupWithForm>

      <PopupWithForm title="Название" name="add-card" buttonText={"Создать"} buttonName="Сохарнить" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <div className="popup__input-section">
          <input className="popup__input popup__input_type_title" id="input-title" placeholder="Название" type="text" name="name" required minLength="2" maxLength="30" />
          <span className="popup__input-error" id="input-title-error"></span>
        </div>
        <div className="popup__input-section">
          <input className="popup__input popup__input_type_url" id="input-url" placeholder="Ссылка на картинку" type="url" name="link" required />
          <span className="popup__input-error" id="input-url-error"></span>
        </div>
      </PopupWithForm>

      <PopupWithForm title="Вы уверены?" name="conformation" buttonText={"Да"}/>

      <ImagePopup isOpen={isImagePopupOpen} onClose={closeAllPopups} card={selectedCard}/>
    </div>
  );
}

export default App;
