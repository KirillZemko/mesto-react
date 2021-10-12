import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
    <div className="page">
      <Header />
      <Main />
      <Footer />

      <template className="place-template">
        <article className="place">
          <a className="place__image-link" href="#">
            <img className="place__image" src="#" alt="#" />
          </a>
          <div className="place__desription">
            <h2 className="place__title"></h2>
            <div className="place__like-container">
              <button className="place__like" aria-label="лайк" type="button"></button>
              <p className="place__like-counter"></p>
            </div>
          </div>
          <button className="place__trash-btn" type="button"></button>
        </article>
      </template>
    </div>
  );
}

export default App;
