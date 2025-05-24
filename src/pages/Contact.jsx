import React from 'react';

const Contact = () => {
  return (
    <section className="min-h-screen bg-gradient-to-tr from-pink-200 to-yellow-100 font-sans relative text-gray-900">
      {/* Back to Home Button */}
      <div className="absolute top-4 left-4">
        <a
          href="/"
          className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg shadow-md transition duration-300"
        >
          ← Back to Home
        </a>
      </div>

      <div className="max-w-4xl mx-auto py-16 px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 drop-shadow-lg">Contact Us</h1>

        {/* QR Code + Name */}
        <div className="flex flex-col md:flex-row items-center justify-center mb-12 gap-6">
          <img
            src="src/assets/images/Siddharth-Maurya.png"
            alt="QR Code"
            className="w-40 h-40 rounded-lg shadow-lg hover:scale-105 transition duration-300"
          />
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold">Siddharth Maurya</h2>
            <p className="mt-2">Scan the QR to save my contact or connect with me!</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white border border-gray-300 p-8 rounded-xl shadow-xl">
          <form className="grid gap-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="px-4 py-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-700 transition"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-700 transition"
                required
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="px-4 py-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-700 transition"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="px-4 py-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-700 transition resize-none"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow-lg font-semibold transition transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="mt-12 text-center space-y-4 text-gray-700">
          <p>
            Email:{' '}
            <a
              href="mailto:siddharthmaurya455@gmail.com"
              className="underline hover:text-black"
            >
              siddharthmaurya455@gmail.com
            </a>
          </p>
          <p>
            Phone:{' '}
            <a href="tel:+919621014735" className="underline hover:text-black">
              +91 9621014735
            </a>
          </p>
          <p>Location: Pune, Maharashtra, India</p>
        </div>

        {/* Friend Dedication */}
        <div className="mt-10 text-center text-gray-600 italic max-w-xl mx-auto px-4">
          <p>
            “Friends are the family we choose — thank you for being a part of my journey and for always being just a call or message away.”
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
