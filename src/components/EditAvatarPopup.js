import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  const userAvatar = React.useRef(null);

  function handleSubmit(evt) {
    evt.preventDefault();

    props.onUpdateAvatar({
      avatar: userAvatar.current.value
    });
  }
  return (
    <PopupWithForm isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit} title="Редактировать автар" name="edit-avatar" buttonText={"Сохранить"} buttonName="Сохарнить" >
      <section className="popup__input-section">
        <input ref={userAvatar} className="popup__input popup__input_type_avatar-link" id="avaar" placeholder="Ссылка на автар" type="url" name="link" required />
        <span className="popup__input-error" id="input-url-error-avatar"></span>
      </section>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;
