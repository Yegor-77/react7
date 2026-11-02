
import { useEffect, useState } from "react";
import { getPetPhotos } from "../services/api";

import firstImage from "../img/firstumage.png";
import doubleImage from "../img/doubleimage.png";
import tripleImage from "../img/tripleimage.png";
import lastImage from "../img/lastimage.png";

function PetsSection() {
  const [photos, setPhotos] = useState([]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    async function loadPhotos() {
      try {
        const data = await getPetPhotos();
        setPhotos(data);
      } catch (error) {
        console.log(error);
      }
    }

    loadPhotos();
  }, []);

  const fallbackPhotos = [
    firstImage,
    doubleImage,
    tripleImage,
    lastImage,
  ];

  const articles = [
    "Rescue pups pose as ghosts in festive photo shoot",
    "Cat interrupts morning coffee on sunny Washington morning",
    "New study finds dogs pay more attention to women",
    "Petting dogs gives health benefits, even if they are not yours",
  ];

  const images = photos.length
    ? photos.map((photo) => photo.webformatURL)
    : fallbackPhotos;

  const visiblePhotos = showMore ? images : images.slice(0, 4);

  return (
    <section className="pets-section" id="about">
      <h2 className="pets-title">Interacting with our pets</h2>

      <div className="pets-gallery">
        {visiblePhotos.map((image, index) => (
          <article className="pets-card" key={`${image}-${index}`}>
            <img src={image} alt="Pet" />

            <p>{articles[index % articles.length]}</p>
          </article>
        ))}
      </div>

      <button
        className="pets-more"
        type="button"
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? "Show less" : "See more"}
      </button>
    </section>
  );
}

export default PetsSection;
