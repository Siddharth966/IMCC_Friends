import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';

const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const highlights = [
    {
      text: "📚 From study sessions to spontaneous trips, every moment we've shared added a new chapter to our story.",
      icon: "📚",
      image: "https://tse2.mm.bing.net/th/id/OIP.z1IU4Jc6p28ziB8BA_2ulwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
      text: "🤝 We've tackled deadlines, planned fests, debated over ideas, and stood by each other through thick and thin.",
      icon: "🤝",
      image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=400&h-300&fit=crop"
    },
    {
      text: "🏙️ A special thanks to Pune for being our second home, where we made memories that will last a lifetime.",
      icon: "🏙️",
      image: "https://i.pinimg.com/originals/c3/7a/9e/c37a9e2de23f60803025032b458b2c90.jpg"
    },
    {
      text: "🔗 This bond isn't just for college — it's for life. Here's to friendship, growth, and everything in between!",
      icon: "🔗",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h-300&fit=crop"
    },
    {
      text: "🎓 A huge shoutout to our professors and mentors who guided us along the way, making our journey even more enriching.",
      icon: "🎓",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&h-300&fit=crop"
    },
    {
      text: "🌟 Special thanks to the ones who supported us and made the journey magical.",
      icon: "🌟",
      image: "https://images.unsplash.com/photo-1530099486328-e021101a494a?w=400&h-300&fit=crop"
    },
  ];

  const shayaris = [
    {
      text: `दोस्ती नाम है सुख-दुख की कहानी का,\nदोस्ती राज है सदा मुस्कुराने का,\nये कोई पल भर की जान-पहचान नहीं,\nदोस्ती वादा है उम्र भर निभाने का।`,
      author: "— Unknown",
      bg: "from-amber-100 to-orange-100"
    },
    {
      text: `नज़रों में तेरी कुछ खास बात है,\nहर अदा में एक प्यारी सी बात है,\nचुप रहकर भी कह जाती हो बहुत कुछ,\nतुझसे ही तो मेरी हर सुबह की शुरुआत है।`,
      author: "— Unknown",
      bg: "from-pink-100 to-rose-100"
    },
    {
      text: `ज़िंदगी में दोस्ती का कोई मोल नहीं होता,\nहर किसी को ये रिश्ता नसीब नहीं होता,\nजो निभा दे दोस्ती के हर लम्हे को,\nऐसा दोस्त बार-बार नहीं होता।`,
      author: "— Unknown",
      bg: "from-blue-100 to-cyan-100"
    },
  ];

  const quotes = [
    {
      type: "💛 Friendship Shayari",
      text: `सच्चा दोस्त वही होता है,\nजो बिना कहे समझ जाए,\nहर मुश्किल में साथ दे,\nऔर हर खुशी में मुस्कुरा जाए।`,
      color: "border-amber-300 bg-gradient-to-br from-amber-50 to-orange-50"
    },
    {
      type: "❤️ Love Shayari",
      text: `तेरे रुख से उठी ये बहारें सी लगती हैं,\nतेरी बातों में कुछ प्यारी फिजाएं सी लगती हैं,\nतेरा नाम लबों पर आते ही,\nमेरी हर सुबह सुहानी सी लगती है।`,
      color: "border-rose-300 bg-gradient-to-br from-rose-50 to-pink-50"
    },
    {
      type: "🔥 Motivational Quote",
      text: `"Surround yourself with people who lift you higher.\nFriendship is the spark that lights your fire."`,
      author: "— Oprah Winfrey",
      color: "border-orange-300 bg-gradient-to-br from-orange-50 to-red-50"
    },
    {
      type: "🌈 Beautiful Quote",
      text: `"You don't meet people by accident,\nthere's always a reason, a lesson, or a blessing."`,
      author: "— Unknown",
      color: "border-purple-300 bg-gradient-to-br from-purple-50 to-indigo-50"
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50 text-gray-800 font-sans relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      
      {/* Floating elements */}
      <div className="absolute top-1/4 left-10 animate-bounce">
        <span className="text-4xl">🤝</span>
      </div>
      <div className="absolute bottom-1/4 right-10 animate-bounce animation-delay-1000">
        <span className="text-4xl">💫</span>
      </div>

      {/* Back Button
      <div className="fixed top-6 left-6 z-50">
        <a
          href="/"
          className="group bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-5 py-3 rounded-full shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center space-x-2 backdrop-blur-sm"
        >
          <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>Back to Home</span>
        </a>
      </div> */}

      {/* Content */}
      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-orange-600 via-red-500 to-purple-600 bg-clip-text text-transparent">
              Our Journey
            </h1>
            <div className="h-1 w-48 md:w-64 bg-gradient-to-r from-orange-400 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-4xl mx-auto leading-relaxed">
            We're a close-knit group of college friends bonded by laughter, late-night projects, endless chai breaks,
            and unforgettable memories. What started as classroom connections turned into a lifelong journey of growth,
            support, and friendship.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-2xl mx-auto">
            {[
              { label: "Years", value: "2+" },
              { label: "Friends", value: "11+" },
              { label: "Trips", value: "10+" },
              { label: "Memories", value: "∞" }
            ].map((stat, index) => (
              <div key={index} className="bg-white/60 backdrop-blur-sm p-4 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold text-orange-600">{stat.value}</div>
                <div className="text-sm md:text-base text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Friendship Highlights */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Friendship Highlights
            </span>
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt="Friendship moment"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-3">
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Shayari Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Heartfelt Shayari
            </span>
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {shayaris.map((item, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${item.bg} backdrop-blur-sm rounded-3xl p-8 shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-white/50`}
              >
                <div className="text-4xl mb-4 text-center opacity-60">❝</div>
                <p className="whitespace-pre-line text-lg leading-relaxed text-gray-800 mb-4 text-center font-serif">
                  {item.text}
                </p>
                <div className="text-right text-gray-600">{item.author}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Shayari & Quotes Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Inspiration & Wisdom
            </span>
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {quotes.map((item, index) => (
              <div
                key={index}
                className={`border-2 ${item.color} rounded-3xl p-8 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-3xl backdrop-blur-sm`}
              >
                <div className="flex items-center mb-4">
                  <div className="text-2xl mr-3">{item.type.split(' ')[0]}</div>
                  <h3 className="text-xl font-semibold text-gray-800">{item.type}</h3>
                </div>
                <p className="whitespace-pre-line text-lg leading-relaxed text-gray-700 mb-4 font-serif">
                  {item.text}
                </p>
                {item.author && (
                  <div className="text-right text-gray-600 italic">{item.author}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-orange-500/20 via-red-500/20 to-purple-500/20 backdrop-blur-sm rounded-3xl p-10 border border-white/50 shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent">
                Forever Friends
              </span>
            </h3>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              College may end, but our friendship doesn't. Here's to many more adventures together!
            </p>
            <a
              href="/memories"
              className="inline-block bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold px-8 py-4 rounded-full shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl transform"
            >
              View Our Memories →
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
};

export default About;