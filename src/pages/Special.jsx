import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const moments = [
  {
    title: "Journey from Village to Pune",
    description: "Leaving the village behind, the student faces the excitement and uncertainty of city life, with new sounds, places, and challenges.",
    icon: "🚆",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50"
  },
  {
    title: "Facing Initial Difficulties",
    description: "Adapting to public transport, language barriers, and managing daily expenses are tough, but each day brings growth and learning.",
    icon: "⚠️",
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-gradient-to-br from-amber-50 to-orange-50"
  },
  {
    title: "Meeting Special Friends",
    description: "Making friends from diverse backgrounds who become support systems and create unforgettable memories together.",
    icon: "🤝",
    color: "from-emerald-500 to-green-500",
    bgColor: "bg-gradient-to-br from-emerald-50 to-green-50"
  },
  {
    title: "A Beautiful Friendship",
    description: "Meeting a kind and inspiring female friend whose positivity brings joy, motivation, and a special connection that enriches daily life.",
    icon: "🌸",
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-gradient-to-br from-pink-50 to-rose-50"
  },
  {
    title: "Attracted by Fast Food & Trends",
    description: "The allure of fast food, trendy clothes, and modern cafes becomes a tempting part of urban life—but requires discipline to balance it all.",
    icon: "🍔",
    color: "from-red-500 to-orange-500",
    bgColor: "bg-gradient-to-br from-red-50 to-orange-50"
  },
  {
    title: "Managing Studies and Life",
    description: "Balancing academics and personal life teaches valuable time management and self-discipline skills, essential for success in college.",
    icon: "📚",
    color: "from-purple-500 to-indigo-500",
    bgColor: "bg-gradient-to-br from-purple-50 to-indigo-50"
  },
  {
    title: "Handling City Expenses",
    description: "Learning how to manage rent, groceries, mobile recharges, and college expenses on a limited student budget builds financial awareness, responsibility, and independence.",
    icon: "💸",
    color: "from-yellow-500 to-amber-500",
    bgColor: "bg-gradient-to-br from-yellow-50 to-amber-50"
  },
  {
    title: "Overcoming Challenges",
    description: "With persistence and support, the student overcomes homesickness, stress, and adapts to the urban lifestyle confidently, emerging stronger and more resilient.",
    icon: "💪",
    color: "from-teal-500 to-emerald-500",
    bgColor: "bg-gradient-to-br from-teal-50 to-emerald-50"
  },
  {
    title: "Returning Home with Growth",
    description: "As the chapter closes, the student heads back home—not just with bags, but with memories, growth, friendships, and a stronger self, ready to embrace the future.",
    icon: "🏡",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-gradient-to-br from-green-50 to-emerald-50"
  },
];

const Special = () => {
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    // Staggered animation for cards
    const timer = setTimeout(() => {
      moments.forEach((_, index) => {
        setTimeout(() => {
          setVisibleCards(prev => [...prev, index]);
        }, index * 150);
      });
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-orange-50 to-cyan-50 text-gray-800 font-sans relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-1000"></div>
      <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 text-4xl animate-bounce">✨</div>
      <div className="absolute bottom-32 left-20 text-4xl animate-bounce animation-delay-500">🌟</div>
      <div className="absolute top-1/3 left-1/4 text-4xl animate-bounce animation-delay-1500">💫</div>

      {/* Back to Home Button */}
      <div className="fixed top-19 left-2 z-50">
        <Link
          to="/"
          className="group bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-5 py-3 rounded-full shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center space-x-2 backdrop-blur-sm"
        >
          <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="font-medium">Back to Home</span>
        </Link>
      </div>

      {/* Header Section */}
      <div className="relative z-10 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block mb-6 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-green-600 via-orange-500 to-cyan-600 bg-clip-text text-transparent">
              Special Moments
            </h1>
            <div className="h-1 w-48 md:w-64 bg-gradient-to-r from-green-400 via-orange-400 to-cyan-400 mx-auto rounded-full"></div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
            Every student from a village stepping into a city like Pune experiences a journey filled with challenges and growth. Here are some heartfelt milestones many go through while shaping their future and finding their true selves.
          </p>
          
          {/* Signature */}
          <div className="max-w-2xl mx-auto mb-12 animate-fade-in-up animation-delay-400">
            <div className="inline-block bg-gradient-to-r from-orange-100 to-yellow-100 backdrop-blur-sm rounded-full px-8 py-4 border border-orange-200 shadow-lg">
              <p className="text-lg font-serif italic text-gray-700">
                "Life in Pune taught me that growth happens outside your comfort zone."
              </p>
              <p className="text-right text-orange-600 font-semibold mt-2">— Siddharth Maurya</p>
            </div>
          </div>

          {/* Journey Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 max-w-2xl mx-auto">
            {[
              { label: "Journey", value: "Village → Pune", emoji: "🚆" },
              { label: "Growth", value: "100%", emoji: "📈" },
              { label: "Friends", value: "Lifelong", emoji: "👥" },
              { label: "Memories", value: "Unforgettable", emoji: "💝" }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="bg-white/70 backdrop-blur-sm p-4 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${300 + index * 100}ms` }}
              >
                <div className="text-2xl mb-1">{stat.emoji}</div>
                <div className="text-xl md:text-2xl font-bold text-green-600">{stat.value}</div>
                <div className="text-sm md:text-base text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Moments Grid */}
      <div className="relative z-10 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {moments.map((moment, index) => (
              <div
                key={index}
                className={`${moment.bgColor} rounded-3xl shadow-xl overflow-hidden border-2 border-white/50 backdrop-blur-sm transform transition-all duration-500 ${
                  visibleCards.includes(index) 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-8 scale-95'
                } hover:scale-105 hover:shadow-2xl`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Icon Header */}
                <div className={`bg-gradient-to-r ${moment.color} p-8 text-center`}>
                  <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full p-6">
                    <span className="text-6xl">{moment.icon}</span>
                  </div>
                  <div className="mt-4">
                    <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm font-medium">
                      Step {index + 1}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">
                    {moment.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {moment.description}
                  </p>
                  
                  {/* Progress Indicator */}
                  <div className="mt-6 pt-4 border-t border-gray-200/50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="h-2 w-24 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r ${moment.color} transition-all duration-1000 ${
                              visibleCards.includes(index) ? 'w-full' : 'w-0'
                            }`}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-500">Milestone</span>
                      </div>
                      <span className="text-lg animate-pulse">→</span>
                    </div>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-lg font-medium bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
                    Life Lesson
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Journey Timeline Visualization */}
      <div className="relative z-10 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-green-500/10 via-orange-500/10 to-cyan-500/10 backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-2xl">
            <h3 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-green-600 to-cyan-600 bg-clip-text text-transparent">
              🛤️ The Journey Timeline
            </h3>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-green-400 via-orange-400 to-cyan-400 transform -translate-y-1/2 rounded-full"></div>
              
              {/* Timeline Points */}
              <div className="flex justify-between relative z-10">
                {["Village", "Arrival", "Adaptation", "Growth", "Return"].map((point, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-white rounded-full shadow-lg border-4 border-orange-400 flex items-center justify-center">
                      <span className="text-xl">
                        {["🏡", "🚆", "🤝", "📈", "🎓"][index]}
                      </span>
                    </div>
                    <span className="mt-2 font-semibold text-gray-700">{point}</span>
                    <span className="text-sm text-gray-500">Step {index + 1}</span>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-center text-gray-700 mt-8 text-lg">
              From humble beginnings to becoming a confident urban student - every step mattered.
            </p>
          </div>
        </div>
      </div>

      {/* Final Message */}
      <div className="relative z-10 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-orange-500/20 to-yellow-500/20 backdrop-blur-sm rounded-3xl p-8 md:p-12 border-2 border-white/50 shadow-2xl">
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                  The Transformation Complete
                </span>
              </h3>
              <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                What started as uncertainty turned into confidence, what felt like struggle became strength, 
                and what was once a strange city became a second home filled with memories, friendships, and personal growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold px-8 py-4 rounded-full shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  Read Our Full Story
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                <Link
                  to="/celebration"
                  className="inline-flex items-center justify-center bg-white/90 hover:bg-white text-gray-800 font-semibold px-8 py-4 rounded-full shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-orange-200"
                >
                  View Celebrations
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer/>

      {/* Custom CSS Animations */}
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
        
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        
        .animation-delay-400 {
          animation-delay: 400ms;
        }
        
        .animation-delay-500 {
          animation-delay: 500ms;
        }
        
        .animation-delay-1000 {
          animation-delay: 1000ms;
        }
        
        .animation-delay-1500 {
          animation-delay: 1500ms;
        }
        
        .animation-delay-2000 {
          animation-delay: 2000ms;
        }
      `}</style>
    </div>
  );
};

export default Special;