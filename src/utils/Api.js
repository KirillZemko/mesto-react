export default class Api {
  constructor( {address, headers} ) {
    this._address = address;
    this._headers = headers;
  }

  getOriginsCards() {
    return fetch(`${this._address}/cards`, {
      headers: this._headers
    })
     .then(this._checkResponse);
  }

  getUserInfo() {
    return fetch(`${this._address}/users/me`, {
      headers: this._headers
    })
     .then(this._checkResponse);
  }

  _checkResponse(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка ${res.status}`);
    }

    return res.json();
  }

  editUserAvatar(url) {
    return fetch(`${this._address}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: url,
      })
    })
     .then(this._checkResponse);
  }

  addNewCard(name, link) {
    return fetch(`${this._address}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        link: link,
      })
    })
     .then(this._checkResponse);
  }

  dislikeCard(id) {
    return fetch(`${this._address}/cards/likes/${id}`, {
      method: 'DELETE',
      headers: this._headers,
    })
     .then(this._checkResponse);
  }

  likeCard(id, isLiked) {
    return fetch(`${this._address}/cards/likes/${id}`, {
      method: isLiked ? 'PUT' : 'DELETE',
      headers: this._headers
    })
    .then(this._checkResponse)
  }

  removeCard(cardId) {
    return fetch(`${this._address}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers,
    })
     .then(this._checkResponse);
 }

  editProfile(userName, info) {
    return fetch(`${this._address}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(
        {
        name: userName,
        about: info
        }
      )
    })
    .then(this._checkResponse)
  }

}

const pass = {
  address: 'https://mesto.nomoreparties.co/v1/cohort-27',
  headers: {
    authorization: '7a42bcdf-9e77-420b-bf78-ff8f38c4a370',
    'Content-type': 'application/json',
  }
}

export const api = new Api(pass);
