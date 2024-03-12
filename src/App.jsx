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

  const dataToday = [
    {
      metric: "Page Views",
      num: "87",
      social: IconFacebook,
      pos: true,
      change: "3",
    },
    {
      metric: "Likes",
      num: "52",
      social: IconFacebook,
      pos: false,
      change: "2",
    },
    {
      metric: "Likes",
      num: "5462",
      social: IconInstagram,
      pos: true,
      change: "2257",
    },
    {
      metric: "Profile Views",
      num: "52k",
      social: IconInstagram,
      pos: true,
      change: "1375",
    },
    {
      metric: "Retweets",
      num: "117",
      social: IconTwitter,
      pos: true,
      change: "303",
    },
    {
      metric: "Likes",
      num: "507",
      social: IconTwitter,
      pos: true,
      change: "553",
    },
    {
      metric: "Likes",
      num: "107",
      social: IconYoutube,
      pos: false,
      change: "19",
    },
    {
      metric: "Total Views",
      num: "1407",
      social: IconYoutube,
      pos: false,
      change: "12",
    },
  ];

  /* handlers */

  const handleThemeToggle = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  /* creator */
  const createTodayCards = () => {
    return dataToday.map((data, index) => {
      return (
        <div
          key={`todayCards${index}`}
          className={
            "today__grid-card" +
            (theme === "dark" ? " card--dark" : " card--light")
          }
        >
          <hgroup className="today__views">
            <p
              className={
                "text1" + (theme === "dark" ? " text1--dark" : " text1--light")
              }
            >
              {data.metric}
            </p>
            <h3
              className={
                "text2" + (theme === "dark" ? " text2--dark" : " text2--light")
              }
            >
              {data.num}
            </h3>
          </hgroup>
          <div className="today__change">
            <img
              className="today__social"
              src={data.social}
              alt="social icon"
            ></img>

            <div className="card__change-container">
              <img
                className="card__change-arrow"
                src={data.pos ? IconUp : IconDown}
                alt="change icon"
              ></img>
              <p
                className={"text1" + (data.pos ? " pos" : " neg")}
              >{`${data.change}%`}</p>
            </div>
          </div>
        </div>
      );
    });
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
          <div
            className={
              "theme" + (theme === "dark" ? " theme--dark" : " theme--light")
            }
          >
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
            <div className="card__content">
              <div className="card__social-container">
                <img
                  className="card__social-icon"
                  src={IconTwitter}
                  alt="twitter icon"
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
                  1044
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
                <p className={"pos text1"}>99 Today</p>
              </div>
            </div>
          </div>
          <div
            className={
              "card" + (theme === "dark" ? " card--dark" : " card--light")
            }
          >
            <div className="card__strip card__strip--instagram"></div>
            <div className="card__content">
              <div className="card__social-container">
                <img
                  className="card__social-icon"
                  src={IconInstagram}
                  alt="instagram icon"
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
                  11k
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
                <p className={"pos text1"}>1099 Today</p>
              </div>
            </div>
          </div>
          <div
            className={
              "card" + (theme === "dark" ? " card--dark" : " card--light")
            }
          >
            <div className="card__strip card__strip--youtube"></div>
            <div className="card__content">
              <div className="card__social-container">
                <img
                  className="card__social-icon"
                  src={IconYoutube}
                  alt="youtube icon"
                ></img>
                <p
                  className={
                    "text1" +
                    (theme === "dark" ? " text1--dark" : " text1--light")
                  }
                >
                  @Nathan F.
                </p>
              </div>
              <hgroup>
                <h2
                  className={
                    "card__social-num text2" +
                    (theme === "dark" ? " text2--dark" : " text2--light")
                  }
                >
                  8239
                </h2>
                <p
                  className={
                    "card__social-label text1" +
                    (theme === "dark" ? " text1--dark" : " text1--light")
                  }
                >
                  subscribers
                </p>
              </hgroup>
              <div className="card__change-container">
                <img
                  className="card__change-arrow"
                  src={IconDown}
                  alt="icon down"
                ></img>
                <p className={"neg text1"}>144 Today</p>
              </div>
            </div>
          </div>
        </article>

        <article className="today">
          <h3
            className={
              "today__header text2" +
              (theme === "dark" ? " text2--dark" : " text2--light")
            }
          >
            Overview - Today
          </h3>
          <div className="today__grid">{createTodayCards()}</div>
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
