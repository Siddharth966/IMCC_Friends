import React, { useState, useEffect, useCallback } from 'react';

const BirthdayGallery = ({ title, description, images }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);

  // Slideshow logic
  useEffect(() => {
    if (selectedIndex !== null && isPlaying) {
      const interval = setInterval(() => {
        setSelectedIndex((prev) => (prev + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [selectedIndex, isPlaying]);

  // Keyboard controls
  const handleKeyDown = useCallback(
    (e) => {
      if (selectedIndex === null) return;
      if (e.key === 'ArrowRight') {
        setSelectedIndex((prev) => (prev + 1) % images.length);
      } else if (e.key === 'ArrowLeft') {
        setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
      } else if (e.key === 'Escape') {
        setSelectedIndex(null);
      }
    },
    [selectedIndex, images.length]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <section className="min-h-screen bg-gradient-to-tr from-pink-200 to-yellow-100 p-8 text-center relative">
      <div className="absolute top-4 left-4">
        <a
          href="/celebration"
          className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg shadow-md transition duration-300"
        >
          ← Back to Celebration
        </a>
      </div>

      {/* Header */}
      <div className="max-w-4xl mx-auto mb-12">
        <h1 className="text-5xl font-bold text-pink-700 mb-4">{title}</h1>
        <p className="text-lg text-gray-700">{description}</p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {images.map((img, index) => (
          <div
            key={index}
            onClick={() => setSelectedIndex(index)}
            className="overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <img src={img.src} alt={`Memory ${index + 1}`} className="w-full h-64 object-cover" />
            <p className="text-sm text-gray-700 mt-2">{img.caption}</p>
          </div>
        ))}
      </div>

      {/* Modal Lightbox */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center z-50 p-4">
          <img
            src={images[selectedIndex].src}
            alt="Full preview"
            className="max-h-[80vh] max-w-[90vw] rounded-xl shadow-2xl mb-4"
          />
          <p className="text-white text-lg mb-4">{images[selectedIndex].caption}</p>

          <div className="flex gap-4 flex-wrap justify-center">
            <button
              onClick={() =>
                setSelectedIndex((prev) => (prev - 1 + images.length) % images.length)
              }
              className="px-4 py-2 bg-white text-pink-600 font-bold rounded shadow hover:bg-pink-100"
            >
              ⟨ Prev
            </button>
            <button
              onClick={() => setIsPlaying((prev) => !prev)}
              className="px-4 py-2 bg-yellow-400 text-white font-bold rounded shadow hover:bg-yellow-500"
            >
              {isPlaying ? 'Pause ⏸️' : 'Play ▶️'}
            </button>
            <button
              onClick={() => setSelectedIndex(null)}
              className="px-6 py-2 bg-pink-600 text-white font-semibold rounded-lg shadow hover:bg-pink-700 transition"
            >
              Close ✖
            </button>
            <button
              onClick={() =>
                setSelectedIndex((prev) => (prev + 1) % images.length)
              }
              className="px-4 py-2 bg-white text-pink-600 font-bold rounded shadow hover:bg-pink-100"
            >
              Next ⟩
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default BirthdayGallery;
