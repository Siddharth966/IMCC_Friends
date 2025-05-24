import React from 'react';
import { Link } from 'react-router-dom';

const Celebration = () => {
  const photos = [
    {
      title: "Birthday Bash 🎂",
      img: "/assets/images/birthday.png",
      description: "Unforgettable birthday celebration with cake, laughter, pizza, and close friends.",
      link: "/celebration/birthday"
    },
    {
      title: "Trekking Adventure 🥾",
      img: "/assets/images/bird.png",
      description: "Exploring new heights with the squad — nature, boating, and happiness.",
      link: "/celebration/trekking"
    },
    {
      title: "Temple Visit 🛕",
      img: "/assets/images/temple.png",
      description: "A peaceful day spent together seeking blessings and calmness.",
      link: "/celebration/temple"
    }
  ];

  return (
    <section className="bg-gradient-to-tr from-pink-200 to-yellow-100  min-h-screen py-16 px-6">
         {/* Back to Home Button */}
      <div className="absolute top-19 left-4">
        <a
          href="/"
          className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg shadow-md transition duration-300"
        >
          ← Back to Home
        </a>
      </div>
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">🎉 Our Celebrations</h1>
        <p className="text-lg md:text-xl text-green-500 mb-12">
          Here's a glimpse of the beautiful moments we've celebrated together — birthdays, adventures, and divine blessings.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {photos.map((photo, index) => (
            <Link
              key={index}
              to={photo.link}
              className="block transform hover:scale-105 transition duration-300"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden">
                <img src={photo.img} alt={photo.title} className="w-full h-56 object-cover" />
                <div className="p-4">
                  <h3 className="text-2xl font-semibold mb-2">{photo.title}</h3>
                  <p className="text-orange-600 text-base">{photo.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Celebration;
