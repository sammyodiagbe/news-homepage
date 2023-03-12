import { useState } from "react";
import Logo from "./components/logo";
import MenuIcon from "./components/menuIcon";
import mobileImage from "./assets/images/image-web-3-mobile.jpg";

function App() {
  const [showNavigation, setShowNavigation] = useState(false);
  return (
    <>
      <nav className="navigation">
        <div className="container">
          <Logo />

          {showNavigation ? (
            <div className="menu">
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#new">New</a>
                </li>
                <li>
                  <a href="#popular">Popular</a>
                </li>
                <li>
                  <a href="#trending">Trending</a>
                </li>
                <li>
                  <a href="#categories">Categories</a>
                </li>
              </ul>
            </div>
          ) : (
            <MenuIcon />
          )}
        </div>
      </nav>
      <main className="main">
        <section className="head">
          <aside className="left-main-content">
            <img src={mobileImage} alt="gaming mobile" />
            <div className="bottom">
              <h1>The Bright Future of Web 3.0?</h1>
              <div className="writeup">
                <p>
                  We dive into the next evolution of the web that claims to put
                  the power of the platforms back into the hands of the people.
                  But is it really fulfilling its promise?
                </p>
                <a href="#read-more" className="btn">
                  Read More
                </a>
              </div>
            </div>
          </aside>
          <aside className="right-aside-new">
            <h1 className="title">New</h1>
            <div className="a-news">
              <h3>Hydrogen vs Electric Cars</h3>
              <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
            </div>
            <hr />
            <div className="a-news">
              <h3>The DownSides of AI Artistry</h3>
              <p>
                What are the possible adverse effects of on-demand AI image
                generation?
              </p>
            </div>
            <hr />

            <div className="a-news">
              <h3>is VC Funding Drying Up?</h3>
              <p>
                Private funding by VC firms is down 50% YOY. We take a look at
                what that means.
              </p>
            </div>
          </aside>
        </section>
        <section className="top-news"></section>
      </main>
    </>
  );
}

export default App;
