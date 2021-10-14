import React from "react";

function ImagePopup(props) {
  return (
    <div className={`popup ${props.card.link ? 'popup_opened' : null}`}>
      <div className="popup__container popup__container_type_image">
        <button onClick={props.onClose} className="popup__close-button popup__close-button_type_view" aria-label="закрыть"></button>
        <h2 className="popup__description">{props.card.name}</h2>
        <img src={props.card.link} alt={props.card.name} className="popup__image" />
      </div>
    </div>
  );
}

export default ImagePopup;
