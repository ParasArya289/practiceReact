import "./card.css";
const Card = () => {
  return (
    <div className="card-body">
      <div className="card-container">
        <img
          src="https://i.redd.it/466b7dxocnq51.jpg"
          alt="hero"
          className="hero-img"
        />
        <div className="info-container">
          <h2 className="hero-name">
            Minato Kamikaze<span className="hero-sub">Naruto</span>
          </h2>
          <p className="hero-info">
            Other villages had "run on sight" order for their shinobi if they
            encounter the Yellow Flash of Hidden Leaf.
          </p>
        </div>
        <footer>
          <button className="btn">Read</button>
          <button className="btn">Bookmark</button>
          {/* <FontAwesomeIcon icon={regular("heart")} /> */}
        </footer>
      </div>
    </div>
  );
};
export default Card;
