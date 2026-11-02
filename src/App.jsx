import { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import PetsSection from "./components/PetsSec";

import { getWeather } from "./services/api";

import sunImage from "./img/image.png";
import heroImage from "./img/headgo.jpg";

import reloadImage from "./img/reload.png";
import heartImage from "./img/heart.png";
import deleteImage from "./img/delete.png";

import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSearch(event) {
    event.preventDefault();

    if (!city.trim()) {
      setError("Enter a city name");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const data = await getWeather(city.trim());
      setWeather(data);
    } catch {
      setWeather(null);
      setError("City not found. Try another city.");
    } finally {
      setLoading(false);
    }
  }

  const cityName = weather?.name || "Prague";
  const country = weather?.sys?.country || "CZ";

  return (
    <div className="app" id="top">
      <Header />

      <main>
        <section
          className="hero"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <h1>Weather dashboard</h1>

          <div className="hero-info">
            <p className="hero-description">
              Create your personal list of favorite cities and always be
              aware of the weather.
            </p>

            <div className="hero-date">
              <p>November 2026</p>
              <p>Monday, 02ᵗʰ</p>
            </div>
          </div>

          <form className="hero-search" onSubmit={handleSearch}>
            <input
              value={city}
              onChange={(event) => setCity(event.target.value)}
              placeholder="Search location..."
              aria-label="Search location"
            />

            <button type="submit" aria-label="Search">
              ⌕
            </button>
          </form>

          {loading && <p className="hero-message">Loading weather...</p>}
          {error && <p className="hero-message">{error}</p>}
        </section>

        <section className="weather-cards">
          {[1, 2, 3].map((item) => (
            <article className="weather-card" key={item}>
              <div className="weather-card-cities">
                <span>{cityName}</span>
                <span>{country}</span>
              </div>

              <p className="weather-card-time">
                {new Date().toLocaleTimeString("cs-CZ", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>

              <span className="weather-card-label">
                Hourly forecast
              </span>

              <p className="weather-card-day">
                {new Date().toLocaleDateString("en-GB")} |{" "}
                {new Date().toLocaleDateString("en-US", {
                  weekday: "long",
                })}
              </p>

              <img
                className="weather-card-sun"
                src={
                  weather?.weather?.[0]?.icon
                    ? `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
                    : sunImage
                }
                alt="Weather"
              />

              <p className="weather-card-temperature">
                {weather ? `${Math.round(weather.main.temp)}°C` : "22°C"}
              </p>

              <div className="weather-card-bottom">
                <button type="button" aria-label="Refresh">
                  <img src={reloadImage} alt="Refresh" />
                </button>

                <button type="button" aria-label="Add to favorites">
                  <img src={heartImage} alt="Favorite" />
                </button>

                <button
                  className="weather-card-more"
                  type="button"
                >
                  See more
                </button>

                <button type="button" aria-label="Delete">
                  <img src={deleteImage} alt="Delete" />
                </button>
              </div>
            </article>
          ))}
        </section>

        <PetsSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;