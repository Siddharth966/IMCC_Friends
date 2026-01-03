import React, { useState } from 'react';
import { friends } from '../config/constants';
import { Link } from 'react-router-dom';

const Friends = () => {
  const [showAll, setShowAll] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  const visibleFriends = showAll ? friends : friends.slice(0, 10);

  return (
    <section id="friends" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-orange-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
            Meet My Friends
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
            From classroom benches to lifelong companions — these amazing people make our journey special.
          </p>
        </div>

        {/* Friends Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5 md:gap-6">
          {visibleFriends.map((friend, index) => (
            <Link
              to={`/friends/${friend.slug}`}
              key={index}
              className="group block"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div 
                className="bg-white rounded-lg sm:rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
                style={{
                  transform: hoveredCard === index ? 'translateY(-4px)' : 'translateY(0)',
                  transition: 'all 0.3s ease'
                }}
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={friend.img}
                    alt={friend.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                    style={{
                      transform: hoveredCard === index ? 'scale(1.05)' : 'scale(1)'
                    }}
                  />
      
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-3 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-xs sm:text-sm font-medium truncate">{friend.description}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-3 sm:p-4">
                  <h3 className="text-sm sm:text-base font-semibold text-gray-800 group-hover:text-orange-600 transition-colors mb-1 truncate">
                    {friend.title}
                  </h3>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center space-x-1">
                      <span>⭐ {friend.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span>💬 {friend.messages}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View More Button */}
        {friends.length > 10 && (
          <div className="mt-8 sm:mt-12 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-green-500 to-green-600 text-white text-sm sm:text-base font-medium rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
            >
              {showAll ? 'View Less' : `View More (${friends.length - 10}+)`}
              <span className="ml-2">
                {showAll ? '↑' : '↓'}
              </span>
            </button>
            <p className="text-gray-500 text-xs sm:text-sm mt-3">
              Showing {visibleFriends.length} of {friends.length} friends
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Friends;