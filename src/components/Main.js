import React from "react";
import { api } from '../utils/Api.js';
import Card from "./Card.js";

function Main(props) {
  const [userName, setUserName] = React.useState('Земко Кирилл');
  const [userDescription, setUserDescription] = React.useState('Студент 27 потока');
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getOriginsCards(), api.getUserInfo()])
      .then(([data, item]) => {
        setUserName(item.name);
        setUserDescription(item.about);
        setUserAvatar(item.avatar);
        setCards(data);

        console.log(data);
      })
      .catch((err) => {
        console.log(err);
    });
  });

  return (
    <main className="content" id="content">

        <section className="profile">
          <div className="profile__info">
            <div className="avatar-conatainer">
              <img className="profile__avatar"  src={userAvatar} alt="Аватар" />
              <button onClick={props.onEditAvatar} className="profile__avatar-edit-button"></button>
            </div>
              <div className="profile__text-wrapper">
                <div className="profile__name-wrapper">
                  <h1 className="profile__name">{userName}</h1>
                  <button onClick={props.onEditProfile} className="edit-button" type="button" aria-label="Редактировать профиль"></button>
                </div>
                <p className="profile__job">{userDescription}</p>
              </div>
          </div>
          <button onClick={props.onAddPlace} className="add-button" type="button" aria-label="Добавить"></button>
        </section>

        <section className="places">
          {
            cards.map((item) => {
              return <Card name={item.name} link={item.link} likes={item.likes.length} key={item._id} onCardClick={props.onCardClick} />
            })
          }
        </section>

        <a href="#content" className="up-button">Наверх</a>
      </main>
  );
}

export default Main;
