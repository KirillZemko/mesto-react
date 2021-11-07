import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name || '');
    setDescription(currentUser.about || '');
  }, [currentUser]);

  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  function handleChangeName(evt) {
    setName(evt.target.value);
  }

  function handleChangeDescription(evt) {
    setDescription(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    props.onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit} title="Редактировать профиль" name="edit" buttonText={"Сохранить"} buttonName="Сохарнить" >
      <section className="popup__input-section">
        <input className="popup__input popup__input_type_name" id="input-name" placeholder="" type="text" name="name" required minLength="2" maxLength="40" value={name} onChange={handleChangeName} />
        <span className="popup__input-error" id="input-name-error"></span>
      </section>
      <section className="popup__input-section">
        <input className="popup__input popup__input_type_job" id="input-job" placeholder="" type="text" name="about" required minLength="2" maxLength="200" value={description} onChange={handleChangeDescription} />
        <span className="popup__input-error" id="input-job-error"></span>
      </section>
  </ PopupWithForm>
  )
}

export default EditProfilePopup;
