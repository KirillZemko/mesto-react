import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = props.cardInfo.owner._id === currentUser._id;
  const cardDeleteButtonClassName = (
    `place__trash-btn ${isOwn ? 'place__trash-btn' : 'place__trash-btn_hidden'}`
  );
  const isLiked = props.cardInfo.likes.some(i => i._id === props.currentUser);
  const cardLikeButtonClassName = (
    `place__like ${isLiked ? 'place__like_type_active' : 'place__like'}`
  );

  function handleClick(evt) {
    evt.preventDefault();
    props.onCardClick(props.cardInfo.name, props.cardInfo.link);
  }

  function handleLikeClick() {
    props.onCardLike(props.cardInfo);
  };

  return (
    <article className="place">
      <a className="place__image-link" href="#">
        <img className="place__image" src={props.cardInfo.link} alt={props.cardInfo.name} onClick={handleClick} />
      </a>
      <div className="place__desription">
        <h2 className="place__title">{props.cardInfo.name}</h2>
        <div className="place__like-container">
          <button onClick={handleLikeClick} className={cardLikeButtonClassName} aria-label="лайк" type="button"></button>
          <p className="place__like-counter">{props.cardInfo.likes.length}</p>
        </div>
      </div>
      <button className={cardDeleteButtonClassName} type="button"></button>
    </article>
  );
}

export default Card;
