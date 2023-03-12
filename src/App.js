import { useState } from "react";
import Logo from "./components/logo";
import MenuIcon from "./components/menuIcon";
import mobileImage from "./assets/images/image-web-3-mobile.jpg";
import desktopImage from "./assets/images/image-web-3-desktop.jpg";
import retroPc from "./assets/images/image-retro-pcs.jpg";
import topLaptops from "./assets/images/image-top-laptops.jpg";
import gamingGrowth from "./assets/images/image-gaming-growth.jpg";
import IconMenuClose from "./components/iconMenuClose";

function App() {
  const [showNavigation, setShowNavigation] = useState(false);
  return (
    <>
      <nav className="navigation">
        <div className="container">
          <Logo />

          <div className={`menu ${showNavigation && "show"}`}>
            <ul>
              <button className="icon" onClick={() => setShowNavigation(false)}>
                <IconMenuClose />
              </button>
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
          <button className="icon" onClick={() => setShowNavigation(true)}>
            <MenuIcon />
          </button>
        </div>
      </nav>
      <main className="main">
        <div className="container">
          <section className="head">
            <img
              src={mobileImage}
              srcSet={`${mobileImage} 320w, ${desktopImage} 1440w`}
              alt="gaming mobile"
            />
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
          </section>
          <section className="right-aside-new">
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
          </section>
          <section className="top-news">
            <div className="news">
              <img src={retroPc} alt="Reviving Retro PCs" />
              <div className="write-up">
                <h1 className="number">01</h1>
                <h4>Reviving Retro PCs</h4>
                <p>What happens when old PCs are given modern upgrades</p>
              </div>
            </div>
            <div className="news">
              <img src={topLaptops} alt="Top laptops of 2022" />
              <div className="write-up">
                <h1 className="number">02</h1>
                <h4>Top 10 Laptops of 2022</h4>
                <p>Our best picks for various needs and budgets.</p>
              </div>
            </div>
            <div className="news">
              <img src={gamingGrowth} alt="Gaming growth" />

              <div className="write-up">
                <h1 className="number">03</h1>
                <h4>The Growth of Gaming</h4>
                <p>How the pandemic has sparked fresh opportunities.</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
