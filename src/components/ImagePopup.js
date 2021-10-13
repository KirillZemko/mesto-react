function ImagePopup() {
  return (
    <div className="popup popup_type_view">
      <div className="popup__container popup__container_type_image">
        <button className="popup__close-button popup__close-button_type_view" aria-label="закрыть"></button>
        <h2 className="popup__description"></h2>
        <img src="#" alt="#" className="popup__image" />
      </div>
    </div>
  );
}

export default ImagePopup;
