import React, { useState, useEffect } from "react";

const TreckingGallery = ({ title, description, images, backHref = "/celebration", theme = "green" }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex !== null) {
        if (e.key === "ArrowRight") {
          setSelectedIndex((prev) => (prev + 1) % images.length);
        } else if (e.key === "ArrowLeft") {
          setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
        } else if (e.key === "Escape") {
          setSelectedIndex(null);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, images.length]);

  useEffect(() => {
    if (isPlaying && selectedIndex !== null) {
      const timer = setTimeout(() => {
        setSelectedIndex((prev) => (prev + 1) % images.length);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [isPlaying, selectedIndex, images.length]);

  return (
    <section className="min-h-screen bg-gradient-to-br from-lime-100 via-yellow-100 to-orange-100 text-gray-900 p-10 relative">
      <div className="absolute top-4 left-4">
        <a
          href={backHref}
          className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg shadow-md transition duration-300"
        >
          ← Back to Celebration
        </a>
      </div>

      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-bold mb-6 text-green-800">{title}</h1>
        <p className="text-lg">{description}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {images.map((img, index) => (
          <div
            key={index}
            onClick={() => setSelectedIndex(index)}
            className="overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer bg-white"
          >
            <img src={img.src} alt={`Gallery image ${index + 1}`} className="w-full h-64 object-cover" />
            {img.caption && (
              <div className="p-3 text-sm text-center text-gray-700">{img.caption}</div>
            )}
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center z-50 px-4 text-center">
          <img
            src={images[selectedIndex].src}
            alt="Full preview"
            className="max-h-[80vh] max-w-[90vw] rounded-xl shadow-2xl"
          />
          {images[selectedIndex].caption && (
            <p className="text-white mt-4 text-lg">{images[selectedIndex].caption}</p>
          )}
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setSelectedIndex((selectedIndex - 1 + images.length) % images.length)}
              className="px-4 py-2 bg-white rounded shadow hover:bg-gray-200"
            >
              ← Prev
            </button>
            <button
              onClick={() => setIsPlaying((prev) => !prev)}
              className="px-4 py-2 bg-white rounded shadow hover:bg-gray-200"
            >
              {isPlaying ? "Pause" : "Play"}
            </button>
            <button
              onClick={() => setSelectedIndex((selectedIndex + 1) % images.length)}
              className="px-4 py-2 bg-white rounded shadow hover:bg-gray-200"
            >
              Next →
            </button>
            <button
              onClick={() => {
                setSelectedIndex(null);
                setIsPlaying(false);
              }}
              className="px-4 py-2 bg-red-600 text-white rounded shadow hover:bg-red-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default TreckingGallery;
