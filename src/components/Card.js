import React from "react";

export function Card(props) {
  return (
    <article className="place">
      <a className="place__image-link" href="#">
        <img className="place__image" src={props.link} alt={props.name} />
      </a>
      <div className="place__desription">
        <h2 className="place__title">{props.name}</h2>
        <div className="place__like-container">
          <button className="place__like" aria-label="лайк" type="button"></button>
          <p className="place__like-counter">{props.likes}</p>
        </div>
      </div>
      <button className="place__trash-btn" type="button"></button>
    </article>
  );
}

export default Card;
