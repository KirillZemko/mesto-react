function PopupWithForm(props) {
  return (
  <div className={`popup popup_${props.name} ${props.isOpen ? 'popup_opened' : null}`}>
    <div className="popup__container">
      <button onClick={props.onClose} className="popup__close-button" aria-label="закрыть"></button>
      <h2 className="popup__title">{props.title}</h2>
      <form className={`popup__form popup__form_type_${props.name}`} name="popup-form" autoComplete="off" noValidate>
        {props.children}
      </form>
    </div>
  </div>
  );
}

export default PopupWithForm;
