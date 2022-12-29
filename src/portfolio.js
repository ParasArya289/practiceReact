import hero from "./hero.png";

let Portfolio = () => {
  return (
    <div>
      <nav className="container-nav">
        <p>Paras Arya</p>
        <ul>
          <li><a href='/'>Home</a></li>
          <li><a href='/'>Projects</a></li>
          <li><a href='/'>Blogs</a></li>
        </ul>
      </nav>
      <div className="container-hero">
        <img className="img-hero" src={hero} alt="hero" />
      </div>
      <h1>
        Paras Arya <span>Web Developer</span>
      </h1>
    </div>
  );
};
export default Portfolio;