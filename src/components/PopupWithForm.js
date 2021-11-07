import React from "react";

function PopupWithForm(props) {
  return (
  <div className={`popup popup_${props.name} ${props.isOpen ? 'popup_opened' : null}`}>
    <div className="popup__container">
      <button onClick={props.onClose} className="popup__close-button" aria-label="закрыть"></button>
      <h2 className="popup__title">{props.title}</h2>
      <form className={`popup__form popup__form_type_${props.name}`} name={`${props.name}`} onSubmit={props.onSubmit} autoComplete="off">
        <fieldset className="popup__profile-info popup__profile-edit-avatar">
          {props.children}
          <button className="popup__button popup__button-save" type="submit">{props.buttonText}</button>
        </fieldset>
      </form>
    </div>
  </div>
  );
}

export default PopupWithForm;
