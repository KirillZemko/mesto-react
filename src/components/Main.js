import React from "react";
import { api } from '../utils/Api.js';
import Card from "./Card.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);
  // const [cards, setCards] = React.useState([]);

  return (

    <main className="content" id="content">
        <section className="profile">
          <div className="profile__info">
            <div className="avatar-conatainer">
              <img className="profile__avatar" src={currentUser.avatar} alt="Аватар" />
              <button onClick={props.onEditAvatar} className="profile__avatar-edit-button"></button>
            </div>
              <div className="profile__text-wrapper">
                <div className="profile__name-wrapper">
                  <h1 className="profile__name">{currentUser.name}</h1>
                  <button onClick={props.onEditProfile} className="edit-button" type="button" aria-label="Редактировать профиль"></button>
                </div>
                <p className="profile__job">{currentUser.about}</p>
              </div>
          </div>
          <button onClick={props.onAddPlace} className="add-button" type="button" aria-label="Добавить"></button>
        </section>

        <section className="places">
          {
            props.cards.map((item) => {
              return (
                <Card
                  currentUser={currentUser._id}
                  cardInfo={item}
                  key={item._id}
                  onCardLike={props.onCardLike}
                  onCardClick={props.onCardClick}
                  onCardDelete={props.onCardDelete}
                />
              );
            })
          }
        </section>
        <a href="#content" className="up-button">Наверх</a>
      </main>
  );
}

export default Main;
