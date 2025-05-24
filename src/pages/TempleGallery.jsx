import React, { useEffect, useState, useCallback } from "react";

const TempleGallery = ({ title, description, images = [], backHref = "/", theme = "pink" }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const closeModal = () => setSelectedIndex(null);

  const showPrev = () => setSelectedIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  const showNext = () => setSelectedIndex((prev) => (prev + 1) % images.length);

  const handleKeyDown = useCallback(
    (e) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") closeModal();
      else if (e.key === "ArrowLeft") showPrev();
      else if (e.key === "ArrowRight") showNext();
    },
    [selectedIndex]
  );

  useEffect(() => {
    let interval;
    if (isPlaying && selectedIndex !== null) {
      interval = setInterval(showNext, 2000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, selectedIndex]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <section className="min-h-screen bg-gradient-to-br from-yellow-100 via-orange-100 to-yellow-100 text-orange-300 p-10 relative">
      <div className="absolute top-4 left-4">
        <a
          href={backHref}
          className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg shadow-md transition duration-300"
        >
          ← Back to Celebration
        </a>
      </div>

      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-bold mb-6 text-orange-600">{title}</h1>
        <p className="text-lg">{description}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {images.map((img, index) => (
          <div
            key={index}
            onClick={() => setSelectedIndex(index)}
            className="overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <img src={img.src} alt={`Image ${index + 1}`} className="w-full h-64 object-cover" />
            <p className="mt-2 text-center text-sm text-gray-700">{img.caption}</p>
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex flex-col items-center justify-center">
          <img
            src={images[selectedIndex].src}
            alt="Preview"
            className="max-h-[80vh] max-w-[90vw] rounded-xl shadow-2xl"
          />
          <p className="mt-2 text-white text-lg italic">{images[selectedIndex].caption}</p>

          <div className="flex gap-4 mt-4">
            <button
              onClick={showPrev}
              className="bg-white px-4 py-2 rounded hover:bg-gray-200 text-gray-800"
            >
              ⬅️ Prev
            </button>
            <button
              onClick={() => setIsPlaying((prev) => !prev)}
              className="bg-white px-4 py-2 rounded hover:bg-gray-200 text-gray-800"
            >
              {isPlaying ? "⏸ Pause" : "▶️ Play"}
            </button>
            <button
              onClick={showNext}
              className="bg-white px-4 py-2 rounded hover:bg-gray-200 text-gray-800"
            >
              Next ➡️
            </button>
            <button
              onClick={closeModal}
              className="px-4 py-2 bg-red-600 text-white rounded shadow hover:bg-red-700"
            >
              ✖ Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default TempleGallery;
