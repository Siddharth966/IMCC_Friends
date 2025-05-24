import React from "react";
import { useParams } from "react-router-dom";
import Gallery from "../components/IndGallery";
import { indradhanuMedia, oracle, traditional } from "../config/data";

const IndradhanuGallery = () => {
  const { eventId } = useParams();

  const galleryData = {
    indradhanu: {
      title: "Indradhanu & Freshers Gallery",
      media: indradhanuMedia,
    },
    traditional: {
      title: "Traditional Day Gallery",
      media: traditional,
    },
    oracle: {
      title: "Oracle Yatra Gallery",
      media: oracle,
    },
  };

  const selectedGallery = galleryData[eventId];

  if (!selectedGallery) {
    return <p className="text-center text-red-500">Event not found.</p>;
  }

  return (
    <Gallery title={selectedGallery.title} media={selectedGallery.media} />
  );
};

export default IndradhanuGallery;
