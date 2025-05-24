import React from "react";
import { useParams, Link } from "react-router-dom";
import { friends } from "../config/constants";

// ✅ JavaScript-compatible formatDate function
const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

const FriendDetail = () => {
  const { slug } = useParams();
  const friend = friends.find((f) => f.slug === slug);

  if (!friend) {
    return (
      <div className="text-center mt-10 text-red-500 font-poppins">
        Friend not found
      </div>
    );
  }

  return (
    <section className="relative min-h-screen py-20 bg-gradient-to-r from-orange-100 via-pink-100 to-indigo-100 font-poppins">
      {/* Back to Home Button */}
      <div className="absolute top-6 left-6">
        <Link
          to="/"
          className="px-4 py-2 bg-green-600 text-white rounded-full shadow hover:bg-green-700 transition"
        >
          ← Back to Home
        </Link>
      </div>

      <div className="max-w-5xl mx-auto px-6">
        {/* Top Description */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-playfair text-indigo-700 mb-2">
            Get to Know {friend.title}
          </h2>
          <p className="text-gray-600 text-md max-w-xl mx-auto">
            A page dedicated to celebrating amazing people and unforgettable friendships ✨
          </p>
        </div>

        {/* Profile Card */}
        <div className="bg-white/60 backdrop-blur-md rounded-3xl shadow-xl p-8 flex flex-col items-center text-center transition-all">
          <img
            src={`${friend.img}`}
            alt={friend.title}
            className="w-44 h-60 object-cover rounded-xl border shadow-md hover:scale-105 duration-300"
          />

          <h1 className="text-4xl font-extrabold text-green-600 mt-4 tracking-wide font-playfair">
            {friend.title}
          </h1>
          <p className="text-gray-700 mt-2 text-lg font-medium">{friend.description}</p>

          {/* About */}
          {friend.about && (
            <p className="mt-6 text-gray-800 leading-relaxed text-md max-w-2xl mx-auto">
              {friend.about}
            </p>
          )}

          <Link
            to="/friends"
            className="mt-6 inline-block px-5 py-2 bg-orange-500 text-white rounded-full shadow hover:bg-orange-600 transition"
          >
            Back to Friends
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FriendDetail;
