import React from "react";

function Main(props) {
  return (
    <main className="content" id="content">

        <section className="profile">
          <div className="profile__info">
            <div className="avatar-conatainer">
              <img onClick={props.onEditAvatar} className="profile__avatar" src=">" alt="Аватар" />
              <button className="profile__avatar-edit-button"></button>
            </div>
              <div className="profile__text-wrapper">
                <div className="profile__name-wrapper">
                  <h1 className="profile__name">Жак-Ив Кусто</h1>
                  <button onClick={props.onEditProfile} className="edit-button" type="button" aria-label="Редактировать профиль"></button>
                </div>
                <p className="profile__job">Исследователь океана</p>
              </div>
          </div>
          <button onClick={props.onAddPlace} className="add-button" type="button" aria-label="Добавить"></button>
        </section>

        <section className="places"></section>

        <div className="popup popup_edit">
          <div className="popup__container">
            <button className="popup__close-button" aria-label="закрыть"></button>
            <h2 className="popup__title">Редактировать профиль</h2>
            <form className="popup__form popup__form_type_edit" name="popup-form" autoComplete="off" noValidate>
              <fieldset className="popup__profile-info">
                <section className="popup__input-section">
                  <input className="popup__input popup__input_type_name" id="input-name" placeholder="" type="text" name="name" required minLength="2" maxLength="40" />
                  <span className="popup__input-error" id="input-name-error"></span>
                </section>
                <section className="popup__input-section">
                  <input className="popup__input popup__input_type_job" id="input-job" placeholder="" type="text" name="about" required minLength="2" maxLength="200" />
                  <span className="popup__input-error" id="input-job-error"></span>
                </section>
                <button className="popup__button" type="submit">Сохранить</button>
              </fieldset>
            </form>
          </div>
        </div>

        <div className="popup popup_add-card">
          <div className="popup__container">
            <button className="popup__close-button popup__close-button_type_add-card" aria-label="закрыть"></button>
            <h2 className="popup__title popup__title_type_add-card">Название</h2>
            <form className="popup__form popup__form_type_add-card" name="popup-form-add-card" autoComplete="off" noValidate>
              <fieldset className="popup__profile-info popup__profile-info_type_add-card">
                <div className="popup__input-section">
                  <input className="popup__input popup__input_type_title" id="input-title" placeholder="Название" type="text" name="name" required minLength="2" maxLength="30" />
                  <span className="popup__input-error" id="input-title-error"></span>
                </div>
                <div className="popup__input-section">
                  <input className="popup__input popup__input_type_url" id="input-url" placeholder="Ссылка на картинку" type="url" name="link" required />
                  <span className="popup__input-error" id="input-url-error"></span>
                </div>
                <button className="popup__button popup__button_type-add-card" type="submit">Создать</button>
              </fieldset>
            </form>
          </div>
        </div>

        <div className="popup popup_type_view">
          <div className="popup__container popup__container_type_image">
            <button className="popup__close-button popup__close-button_type_view" aria-label="закрыть"></button>
            <h2 className="popup__description"></h2>
            <img src="#" alt="#" className="popup__image" />
          </div>
        </div>

        <div className="popup popup_edit-avatar">
          <div className="popup__container">
            <button className="popup__close-button popup__close-button_type_edit-avatar" aria-label="закрыть"></button>
            <h2 className="popup__title">Редактировать автар</h2>
            <form className="popup__form popup__form_type_edit-avatar" name="popup-form-edit-avatar" autoComplete="off" noValidate>
              <fieldset className="popup__profile-info popup__profile-edit-avatar">
                <section className="popup__input-section">
                  <input className="popup__input popup__input_type_avatar-link" id="input-avatar-link" placeholder="Ссылка на автар" type="url" name="link" required />
                  <span className="popup__input-error" id="input-url-error-avatar"></span>
                </section>
                <button className="popup__button popup__button-save" type="submit">Сохранить</button>
              </fieldset>
            </form>
          </div>
        </div>

        <div className="popup popup_conformation">
          <div className="popup__container">
            <button className="popup__close-button popup__close-button_type_conformation" aria-label="закрыть"></button>
            <h2 className="popup__title popup__title_type_conformation">Вы уверены?</h2>
            <form className="popup__form popup__form_type_conformation" name="popup-form-conformation" autoComplete="off" noValidate>
              <fieldset className="popup__profile-info popup__profile-edit-avatar">
                <button className="popup__button popup__button-conformation" type="submit">Да</button>
              </fieldset>
            </form>
          </div>
        </div>
        <a href="#content" className="up-button">Наверх</a>
      </main>
  );
}

export default Main;
