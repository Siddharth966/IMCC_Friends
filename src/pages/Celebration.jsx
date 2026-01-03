import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const Celebration = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const celebrations = [
    {
      title: "Birthday Bash 🎂",
      img: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=600&fit=crop",
      description: "Unforgettable birthday celebrations with cakes, surprises, laughter, pizza, and the warmth of close friends making every moment special.",
      link: "/celebration/birthday",
      icon: "🎂",
      date: "Multiple Dates",
      people: "15+ Friends",
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-gradient-to-br from-pink-100 to-rose-100"
    },
    {
      title: "Trekking Adventure 🥾",
      img: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&h=600&fit=crop",
      description: "Conquering mountains and creating memories — breathtaking views, teamwork, campfires, and endless laughter with the adventure squad.",
      link: "/celebration/trekking",
      icon: "🥾",
      date: "Seasonal",
      people: "8-12 Friends",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-gradient-to-br from-green-100 to-emerald-100"
    },
    {
      title: "Temple Visit 🛕",
      img: "https://i.pinimg.com/736x/3c/54/83/3c5483d35bda56fed317d655d69deaa5.jpg",
      description: "Peaceful spiritual journeys — seeking blessings, experiencing tranquility, and strengthening bonds through divine moments together.",
      link: "/celebration/temple",
      icon: "🛕",
      date: "Festive Seasons",
      people: "All Friends",
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-gradient-to-br from-amber-100 to-orange-100"
    },
    
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-pink-50 via-yellow-50 to-cyan-50 text-gray-800 font-sans relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>

      {/* Floating Emojis */}
      <div className="absolute top-20 right-20 text-4xl animate-bounce">🎉</div>
      <div className="absolute bottom-32 left-20 text-4xl animate-bounce animation-delay-1000">✨</div>

      {/* Back to Home Button
      <div className="fixed top-6 left-6 z-50">
        <Link
          to="/"
          className="group bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-5 py-3 rounded-full shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center space-x-2 backdrop-blur-sm"
        >
          <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="font-medium">Back to Home</span>
        </Link>
      </div> */}

      {/* Header Section */}
      <div className="relative z-10 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block mb-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-pink-600 via-rose-500 to-orange-500 bg-clip-text text-transparent">
              Our Celebrations
            </h1>
            <div className="h-1 w-48 md:w-64 bg-gradient-to-r from-pink-400 to-orange-400 mx-auto rounded-full"></div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
            Here's a glimpse of the beautiful moments we've celebrated together — birthdays, adventures, 
            spiritual journeys, and everything in between. Each memory is a treasure we hold close to our hearts.
          </p>
        </div>
      </div>

      {/* Celebration Cards Grid */}
      <div className="relative z-10 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {celebrations.map((celeb, index) => (
              <Link
                key={index}
                to={celeb.link}
                className="group block transform transition-all duration-500 hover:scale-105"
              >
                <div className={`${celeb.bgColor} rounded-3xl shadow-xl overflow-hidden h-full border-2 border-white/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-500`}>
                  {/* Image Container */}
                  <div className="relative h-56 md:h-64 overflow-hidden">
                    <img 
                      src={celeb.img} 
                      alt={celeb.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                      <span className="text-2xl">{celeb.icon}</span>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <div className={`inline-block bg-gradient-to-r ${celeb.color} text-white px-4 py-1 rounded-full text-sm font-medium`}>
                        {celeb.date}
                      </div>
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-pink-700 transition-colors duration-300">
                      {celeb.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {celeb.description}
                    </p>
                    
                    {/* Details */}
                    <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200/50">
                      <div className="flex items-center space-x-2">
                        <span className="text-gray-500">👥</span>
                        <span className="text-sm text-gray-600">{celeb.people}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-pink-600 font-medium">
                        <span>View Memories</span>
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative z-10 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-pink-500/10 via-rose-500/10 to-orange-500/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border-2 border-white/50 shadow-2xl">
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
                  More Memories to Come!
                </span>
              </h3>
              <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                This is just the beginning. Many more celebrations, adventures, and memories await us on this beautiful journey of friendship.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/memories"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold px-8 py-4 rounded-full shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  View All Memories
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center bg-white/90 hover:bg-white text-gray-800 font-semibold px-8 py-4 rounded-full shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-pink-200"
                >
                  Our Friendship Story
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
    <Footer />

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default Celebration;