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
                <li></li>
              </ul>
            </div>
          ) : (
            <MenuIcon />
          )}
        </div>
      </nav>
      <main className="main"></main>
    </>
  );
}

export default App;
