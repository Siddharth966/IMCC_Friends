import React from "react";
import TreckingGallery from "./TreckingGallery";

import bird from "../assets/images/bird.png";
import treck1 from "../assets/images/treck1.jpg";
import treck2 from "../assets/images/treck2.jpg";
import treck3 from "../assets/images/treck3.jpg";
import treck4 from "../assets/images/treck4.jpg";
import treck5 from "../assets/images/treck5.jpg";
import treck6 from "../assets/images/treck6.jpg";
import treck7 from "../assets/images/treck7.jpg";
import treck8 from "../assets/images/treck8.jpg";
import treck9 from "../assets/images/treck9.jpg";
import treck10 from "../assets/images/treck10.jpg";
import treck11 from "../assets/images/treck11.jpg";
import treck12 from "../assets/images/treck12.jpg";
import treck13 from "../assets/images/treck13.jpg";
import treck15 from "../assets/images/treck15.jpg";
import treck16 from "../assets/images/treck16.jpg";

const images = [
  { src: bird, caption: "Our trek groups Welcome !" },
  { src: treck1, caption: "Starting the trek with excitement -zoo !" },
  { src: treck2, caption: "Crossing the rugged terrains" },
  { src: treck3, caption: "A quick photo with great views" },
  { src: treck4, caption: "we are going to Singhad Fort." },
  { src: treck5, caption: "Fun and laughter , sabko seat mil gayi hai !" },
  { src: treck6, caption: "Taking a picture before boating ." },
  { src: treck7, caption: "Reaching new heights together" },
  { src: treck8, caption: "Boating fun during the trek" },
  { src: treck9, caption: "ye to kuch alag hi tha !" },
  { src: treck10, caption: "Capturing beaytiful moments" },
  { src: treck11, caption: "we are praepared for boating" },
  { src: treck12, caption: "ye hamre 3 Commandos !" },
  { src: treck13, caption: "Adventure in every step" },
  { src: treck15, caption: "Mid night in new Year 2025 !" },
  { src: treck16, caption: "Memories to Pavbhaji at MH-12" },
];

const Trekking = () => {
  return (
    <TreckingGallery
      title="🥾 Trekking Adventure"
      description="Scaling peaks and soaking in nature’s beauty. It was a refreshing trek with scenic views, boating fun, and unforgettable laughter."
      images={images}
      theme="green"
    />
  );
};

export default Trekking;
