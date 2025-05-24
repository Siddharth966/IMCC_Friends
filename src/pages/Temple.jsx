import React from "react";
import TempleGallery from "./TempleGallery";

import temple from "/assets/images/temple.png";
import mdir1 from "/assets/images/mdir1.jpg";
import mdir2 from "/assets/images/mdir2.jpg";
import mdir3 from "/assets/images/mdir3.jpg";

const images = [
  { src: temple, caption: "Ganpati Bappa morya– peace begins here" },
  { src: mdir1, caption: "Morning prayers and serenity gudiparva" },
  { src: mdir2, caption: "Like Hum sath sath hai ! " },
  { src: mdir3, caption: "A moment of devotion and stillness" },
];

const Temple = () => {
  return (
    <TempleGallery
      title="🛕 Temple Visit"
      description="A serene escape from the hustle. Our temple visit brought peace, prayers, and a spiritual reset. Blessed moments with calm surroundings."
      images={images}
      theme="yellow"
      backHref="/celebration"
    />
  );
};

export default Temple;
