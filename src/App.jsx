import { useState } from "react";
import "./App.css";

/* images */
import IconFacebook from "./assets/images/icon-facebook.svg";
import IconTwitter from "./assets/images/icon-twitter.svg";
import IconInstagram from "./assets/images/icon-instagram.svg";
import IconYoutube from "./assets/images/icon-youtube.svg";
import IconDown from "./assets/images/icon-down.svg";
import IconUp from "./assets/images/icon-up.svg";

function App() {
  const [theme, setTheme] = useState("dark");

  const handleThemeToggle = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <>
      <main
        className={"main" + (theme === "dark" ? " main--dark" : " main--light")}
      >
        <header className="header">
          <hgroup className="header__hgroup">
            <h1
              className={
                "" + (theme === "dark" ? " text2--dark" : " text2--light")
              }
            >
              Social Media Dashboard
            </h1>
            <p
              className={
                "text1" + (theme === "dark" ? " text1--dark" : " text1--light")
              }
            >
              Total Followers: 23,004
            </p>
          </hgroup>
          <div className="theme">
            <p
              className={
                "text1" + (theme === "dark" ? " text1--dark" : " text1--light")
              }
            >
              Dark Mode
            </p>
            <div
              className={
                "theme__toggle" +
                (theme === "dark"
                  ? " theme__toggle--dark"
                  : " theme__toggle--light")
              }
              onClick={handleThemeToggle}
            >
              <div
                className={
                  "theme__circle" +
                  (theme === "dark"
                    ? " theme__circle--dark"
                    : " theme__circle--light")
                }
              ></div>
            </div>
          </div>
        </header>

        <article className="totals">
          <div
            className={
              "card" + (theme === "dark" ? " card--dark" : " card--light")
            }
          >
            <div className="card__strip card__strip--facebook"></div>
            <div className="card__content">
              <div className="card__social-container">
                <img
                  className="card__social-icon"
                  src={IconFacebook}
                  alt="facebook icon"
                ></img>
                <p
                  className={
                    "text1" +
                    (theme === "dark" ? " text1--dark" : " text1--light")
                  }
                >
                  @nathanf
                </p>
              </div>
              <hgroup>
                <h2
                  className={
                    "card__social-num text2" +
                    (theme === "dark" ? " text2--dark" : " text2--light")
                  }
                >
                  1987
                </h2>
                <p
                  className={
                    "card__social-label text1" +
                    (theme === "dark" ? " text1--dark" : " text1--light")
                  }
                >
                  followers
                </p>
              </hgroup>
              <div className="card__change-container">
                <img
                  className="card__change-arrow"
                  src={IconUp}
                  alt="icon up"
                ></img>
                <p className={"pos text1"}>12 Today</p>
              </div>
            </div>
          </div>
          <div
            className={
              "card" + (theme === "dark" ? " card--dark" : " card--light")
            }
          >
            <div className="card__strip card__strip--twitter"></div>
          </div>
          <div
            className={
              "card" + (theme === "dark" ? " card--dark" : " card--light")
            }
          >
            <div className="card__strip card__strip--instagram"></div>
          </div>
          <div
            className={
              "card" + (theme === "dark" ? " card--dark" : " card--light")
            }
          >
            <div className="card__strip card__strip--youtube"></div>
          </div>
        </article>

        <footer
          className={
            "attribution" +
            (theme === "dark" ? " text1--dark" : " text1--light")
          }
        >
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="https://github.com/exchyphen" target="_blank">
            exc
          </a>
          .
        </footer>
      </main>
    </>
  );
}

export default App;
