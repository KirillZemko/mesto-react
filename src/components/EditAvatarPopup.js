import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  // const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  // function handleEditAvatarClick() {
  //   setIsEditAvatarPopupOpen(true);
  // }

  return (
    <PopupWithForm title="Редактировать автар" name="edit-avatar" buttonText={"Сохранить"} buttonName="Сохарнить" >
      <section className="popup__input-section">
        <input className="popup__input popup__input_type_avatar-link" id="input-avatar-link" placeholder="Ссылка на автар" type="url" name="link" required />
        <span className="popup__input-error" id="input-url-error-avatar"></span>
      </section>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;
