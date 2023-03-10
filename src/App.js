import { useState } from "react";
import Logo from "./assets/components/logo";
import MenuIcon from "./assets/components/menuIcon";

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
        <section className="">
          <aside className="left-main-content"></aside>
          <aside className="right-aside-new"></aside>
        </section>
        <section className="top-news"></section>
      </main>
    </>
  );
}

export default App;
