import React, { useState } from 'react';
import { friends } from '../config/constants';
import { Link } from 'react-router-dom';

const Friends = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleFriends = showAll ? friends : friends.slice(0, 10);

  return (
    <section id="moments" className="py-20 bg-orange-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Meet My Friends</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {visibleFriends.map((friend, index) => (
            <Link
              to={`/friends/${friend.slug}`}
              key={index}
              className="group block bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={friend.img}
                  alt={friend.title}
                  className="w-full h-full object-cover object-top transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-base font-semibold text-gray-800">
                  {friend.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {friends.length > 10 && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
            >
              {showAll ? 'View Less' : 'View More'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Friends;
