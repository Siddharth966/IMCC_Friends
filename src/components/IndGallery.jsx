import React, { useState } from "react";
import { Link } from "react-router-dom";

const IndGallery = ({ title, media = [] }) => {
  const [selectedMedia, setSelectedMedia] = useState(null);

  const handleClose = () => setSelectedMedia(null);

  return (
    <section className="py-20 bg-gradient-to-br from-orange-200 via-yellow-200 to-green-200">
      {/* Fixed Back Button on the Left Side */}
      <Link
        to="/"
        className="fixed top-16 left-4 z-50 bg-green-500 text-black px-4 py-2 rounded hover:bg-green-600 shadow-lg"
      >
        ← Back to Home
      </Link>

      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-orange-600">
          {title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {media.map((item, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-lg cursor-pointer"
              onClick={() => setSelectedMedia(item)}
            >
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <video className="w-full h-56 object-cover" muted>
                  <source src={item.src} type="video/mp4" />
                </video>
              )}
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedMedia && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={handleClose}
          >
            <div
              className="max-w-5xl max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedMedia.type === "image" ? (
                <img
                  src={selectedMedia.src}
                  alt={selectedMedia.alt}
                  className="w-full object-contain"
                />
              ) : (
                <video controls className="w-full max-h-[80vh]">
                  <source src={selectedMedia.src} type="video/mp4" />
                </video>
              )}
              <button
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 block mx-auto"
                onClick={handleClose}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default IndGallery;
