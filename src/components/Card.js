import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);

  function handleClick(evt) {
    evt.preventDefault();
    props.onCardClick(props.name, props.link);
  }

  return (
    <article className="place">
      <a className="place__image-link" href="#">
        <img className="place__image" src={props.cardInfo.link} alt={props.cardInfo.name} onClick={handleClick} />
      </a>
      <div className="place__desription">
        <h2 className="place__title">{props.cardInfo.name}</h2>
        <div className="place__like-container">
          <button className="place__like" aria-label="лайк" type="button"></button>
          <p className="place__like-counter">{props.cardInfo.likes.length}</p>
        </div>
      </div>
      <button className="place__trash-btn" type="button"></button>
    </article>
  );
}

export default Card;
