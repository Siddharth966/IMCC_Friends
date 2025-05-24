import React from "react";
import Navbar from "./Navbar"; // Import Navbar
import { friends } from "../config/constants";
import Friends from "./Friends";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section
        id="home"
        className="bg-gradient-to-r from-orange-100 to-green-100 min-h-screen flex items-center justify-center px-6"
      >
        <div className="max-w-7xl flex flex-col md:flex-row items-center justify-between w-full">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Welcome to <span className="text-orange-500">IMCC</span>{" "}
              <span className="text-green-600">Friends</span>
            </h1>
            <p className="text-lg mb-8">
              Let's connect, grow, and achieve amazing things together!
            </p>
            <a className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300" href="#memories">
              Get Started
            </a>
          </div>

          {/* Image */}
          <div className="flex-1 mt-12 md:mt-0 flex justify-center">
            <img
              src="src\assets\images\Home.jpg"
              className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-6">About To Us</h2>
          <p className="text-lg text-gray-600">
            "We all met in September 2023, coming together at IMCC, Kothrud,
            Pune, as strangers but soon became a family of learners and
            dreamers. Over time, we celebrated countless occasions, supported
            each other through ups and downs, and created memories that will
            last forever. IMCC Friends is not just a community — it’s a bond of
            friendship, learning, and shared growth. As we move forward in our
            lives, we hope that our connection remains strong, and we continue
            to celebrate many more milestones together in the future."
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6" id="memories">
          <h2 className="text-3xl font-bold text-center mb-12">Our Memories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Link to="/memories/indradhanu" className="block">
              <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow duration-300">
                <img
                  src="src/assets/images/indradhanu.jpg"
                  alt="Indradhanu"
                  className="w-full h-40 object-cover mb-4 rounded-lg"
                />
                <h3 className="text-2xl font-semibold mb-2">Indradhanu & Freshers</h3>
                <p className="text-gray-600">
                  We showcased our talents with energetic stage dance
                  performances, celebrating togetherness and creativity.
                </p>
              </div>
            </Link>

            {/* Feature 2 */}
            <Link to="/memories/traditional" className="block">
              <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow duration-300">
                <img
                  src="src/assets/images/tradi.jpg"
                  alt="Traditional Day"
                  className="w-full h-40 object-cover mb-4 rounded-lg"
                />
                <h3 className="text-2xl font-semibold mb-2">Traditional</h3>
                <p className="text-gray-600">
                  Traditional outfits speak the language of grace, elegance, and culture — whether it's a flowing saree or a crisp kurta.
                </p>
              </div>
            </Link>

            {/* Feature 3 */}
            <Link to="/memories/oracle" className="block">
              <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow duration-300">
                <img
                  src="src/assets/images/oracle.jpg"
                  alt="Oracle Yatra"
                  className="w-full h-40 object-cover mb-4 rounded-lg"
                />
                <h3 className="text-2xl font-semibold mb-2">Oracle Yatra</h3>
                <p className="text-gray-600">
                  We conducted sessions and actively volunteered to manage food,
                  hospitality and wonderful experience for everyone.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Friends />

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
          <p className="text-gray-600 mb-8">
            Have questions or want to collaborate? We'd love to hear from you.
          </p>
          <a
            href="mailto:siddharthmaurya455@gmail.com"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} IMCC Friends. All rights reserved.
      </footer>
    </div>
  );
}

export default LandingPage;
