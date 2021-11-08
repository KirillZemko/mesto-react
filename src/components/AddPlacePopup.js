import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function AddPlacePopup(props) {
  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName('');
    setLink('');
  }, [currentUser, props.isOpen]);

  function handleAddName(evt) {
    setName(evt.target.value);
  };

  function handleAddLink(evt) {
    setLink(evt.target.value);
  };

  function handleSubmit(evt) {
    evt.preventDefault();

    props.onAddPlace({
      name,
      link,
    });
    setLink('');
    setName('');
  };

  return (
    <PopupWithForm isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit} title="Название" name="add-card" buttonText={"Создать"} buttonName="Сохарнить">
      <div className="popup__input-section">
        <input value={name} onChange={handleAddName} className="popup__input popup__input_type_title" id="input-title" placeholder="Название" type="text" name="name" required minLength="2" maxLength="30" />
        <span className="popup__input-error" id="input-title-error"></span>
      </div>
      <div className="popup__input-section">
        <input value={link} onChange={handleAddLink} className="popup__input popup__input_type_url" id="input-url" placeholder="Ссылка на картинку" type="url" name="link" required />
        <span className="popup__input-error" id="input-url-error"></span>
      </div>
    </PopupWithForm>
  )
}

export default AddPlacePopup;
