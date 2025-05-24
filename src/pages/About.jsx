import React from 'react';

const About = () => {
  const highlights = [
    "📚 From study sessions to spontaneous trips, every moment we've shared added a new chapter to our story.",
    "🤝 We’ve tackled deadlines, planned fests, debated over ideas, and stood by each other through thick and thin.",
    "🏙️ A special thanks to Pune for being our second home, where we made memories that will last a lifetime.",
    "🔗 This bond isn't just for college — it's for life. Here's to friendship, growth, and everything in between!",
    "🎓 A huge shoutout to our professors and mentors who guided us along the way, making our journey even more enriching.",
    "🌟 Special thanks to the ones who supported us and made the journey magical.",
  ];

  const shayaris = [
    `दोस्ती नाम है सुख-दुख की कहानी का,\nदोस्ती राज है सदा मुस्कुराने का,\nये कोई पल भर की जान-पहचान नहीं,\nदोस्ती वादा है उम्र भर निभाने का।`,
    `नज़रों में तेरी कुछ खास बात है,\nहर अदा में एक प्यारी सी बात है,\nचुप रहकर भी कह जाती हो बहुत कुछ,\nतुझसे ही तो मेरी हर सुबह की शुरुआत है।`,
    `ज़िंदगी में दोस्ती का कोई मोल नहीं होता,\nहर किसी को ये रिश्ता नसीब नहीं होता,\nजो निभा दे दोस्ती के हर लम्हे को,\nऐसा दोस्त बार-बार नहीं होता।`,
  ];

  const quotes = [
    {
      type: "💛 Friendship Shayari",
      text: `सच्चा दोस्त वही होता है,\nजो बिना कहे समझ जाए,\nहर मुश्किल में साथ दे,\nऔर हर खुशी में मुस्कुरा जाए।`,
    },
    {
      type: "❤️ Love Shayari",
      text: `तेरे रुख से उठी ये बहारें सी लगती हैं,\nतेरी बातों में कुछ प्यारी फिजाएं सी लगती हैं,\nतेरा नाम लबों पर आते ही,\nमेरी हर सुबह सुहानी सी लगती है।`,
    },
    {
      type: "🔥 Motivational Quote",
      text: `“Surround yourself with people who lift you higher.\nFriendship is the spark that lights your fire.”`,
    },
    {
      type: "🌈 Beautiful Quote",
      text: `“You don’t meet people by accident,\nthere’s always a reason, a lesson, or a blessing.”`,
    },
  ];

  return (
    <section className="bg-gradient-to-br from-orange-200 to-green-200 text-black font-sans min-h-screen relative overflow-hidden">
      {/* Back Button */}
      <div className="absolute top-4 left-4 z-10">
        <a
          href="/"
          className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-full shadow-md transition-all duration-300 hover:scale-105"
        >
          ← Back to Home
        </a>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black drop-shadow-xl">About Us</h1>
        <p className="text-lg md:text-xl text-black mb-12 leading-relaxed max-w-3xl mx-auto">
          We’re a close group of college friends bonded by laughter, late-night projects, endless chai breaks,
          and unforgettable memories. What started as a classroom connection turned into a journey of growth,
          support, and friendship.
        </p>

        {/* Friendship Highlights */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-16">
          {highlights.map((text, index) => (
            <div
              key={index}
              className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl p-6 text-left shadow-xl transform transition-all duration-300 hover:scale-105 hover:bg-white/30"
            >
              <p className="text-base leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

        {/* Shayari Section */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 drop-shadow-md">Some Heartfelt Shayari</h2>
        <div className="grid gap-8 md:grid-cols-3 mb-16">
          {shayaris.map((text, index) => (
            <div
              key={index}
              className="bg-white/10 border border-white/20 backdrop-blur-lg p-6 rounded-2xl shadow-md transform transition-all duration-300 hover:scale-105 hover:bg-white/20"
            >
              <p className="whitespace-pre-line text-[17px] leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

        {/* Shayari & Quotes Section */}
        <h2 className="text-3xl md:text-4xl font-bold mb-10 drop-shadow-md">Shayari & Quotes</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {quotes.map((item, index) => (
            <div
              key={index}
              className="bg-white/20 backdrop-blur-2xl border border-white/30 p-6 rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:bg-white/30"
            >
              <h3 className="text-xl font-semibold text-orange-800 mb-2">{item.type}</h3>
              <p className="whitespace-pre-line leading-relaxed text-black">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
