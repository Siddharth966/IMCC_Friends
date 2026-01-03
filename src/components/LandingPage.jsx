import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { friends } from "../config/constants";
import Friends from "./Friends";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Users,
  Calendar,
  Trophy,
  Mail,
  ChevronRight,
  Sparkles,
  Heart,
  Camera,
  GraduationCap,
  ExternalLink,
} from "lucide-react";
import Footer from "./Footer";

function LandingPage() {
  const [activeSection, setActiveSection] = useState("home");
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "memories", "friends", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fixed SVG string - using template literal
  const svgPattern = encodeURIComponent(
    `<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="#fb923c" fill-opacity="0.05"><path d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/></g></g></svg>`
  );

  return (
    <div className="font-sans text-gray-800 overflow-hidden">
      {/* Floating Particles Background */}
      <div className="fixed inset-0 -z-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-orange-300 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-green-50 opacity-90" />
        <div
          className={`absolute inset-0 bg-[url("data:image/svg+xml,${svgPattern}")]`}
        />

        <div className="relative max-w-7xl w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left space-y-8">
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm mb-4">
                <Sparkles className="w-4 h-4 text-orange-500" />
                <span className="text-sm font-medium text-gray-700">
                  Since 2023
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                Welcome to{" "}
                <span className="relative inline-block">
                  <span className="text-orange-500 relative z-10">IMCC</span>
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-orange-200/50 -z-0 rounded-lg" />
                </span>{" "}
                <span className="text-green-600">Friends</span>
              </h1>

              <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
                A bond forged in classrooms, strengthened through celebrations,
                and cherished as a family of learners and dreamers. Together we
                grow, achieve, and create memories that last forever.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="#memories"
                  className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-orange-500 to-green-500 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  Explore Memories
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </a>
                <a
                  href="#friends"
                  className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-700 bg-white border-2 border-gray-200 rounded-full shadow-sm hover:shadow-md hover:border-orange-300 transition-all duration-300"
                >
                  <Users className="mr-2 w-5 h-5" />
                  Meet Friends
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">10+</div>
                  <div className="text-sm text-gray-500">Friends</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">20+</div>
                  <div className="text-sm text-gray-500">Events</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">100+</div>
                  <div className="text-sm text-gray500">Memories</div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 to-green-400 rounded-3xl opacity-20 blur-xl" />
              <img
                src="/assets/images/Home.jpg"
                alt="IMCC Friends Group"
                className={`relative rounded-3xl shadow-2xl transform transition-all duration-700 ${
                  imageLoaded ? "scale-100 opacity-100" : "scale-95 opacity-0"
                }`}
                onLoad={() => setImageLoaded(true)}
              />

              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl">
                <div className="flex items-center space-x-3">
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-64 h-64 bg-orange-100 rounded-full -translate-x-32 -translate-y-32" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-100 rounded-full translate-x-48 translate-y-48" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-4">
              <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-green-500 rounded-full" />
              <span className="text-sm font-semibold text-orange-600 uppercase tracking-wider">
                Our Story
              </span>
              <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-orange-500 rounded-full" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              We Are More Than Just{" "}
              <span className="bg-gradient-to-r from-orange-500 to-green-500 bg-clip-text text-transparent">
                Classmates
              </span>
            </h2>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">September 2023</h3>
                <p className="text-gray-600">When strangers became family</p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Learning Together</h3>
                <p className="text-gray-600">
                  Growing as learners and dreamers
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Forever Bond</h3>
                <p className="text-gray-600">Memories that last a lifetime</p>
              </div>
            </div>

            <blockquote className="text-2xl md:text-3xl text-center italic text-gray-700 leading-relaxed mb-8">
              "We came as strangers, we stay as family. From classroom benches
              to life's celebrations, our journey at IMCC has been nothing short
              of magical."
            </blockquote>

            <div className="text-center">
              <Link
                to="/about"
                className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700 group"
              >
                Read our full story
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="memories"
        className="py-14 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-4">
              <Camera className="w-6 h-6 text-orange-500" />
              <span className="text-sm font-semibold text-orange-600 uppercase tracking-wider">
                Cherished Moments
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Relive Our <span className="text-green-600">Golden Moments</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From stage performances to cultural celebrations, every memory is
              a story worth telling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Link to="/memories/indradhanu" className="group block">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 h-full">
                <div className="relative overflow-hidden">
                  <img
                    src="/assets/images/indradhanu.jpg"
                    alt="Indradhanu"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-block px-3 py-1 bg-orange-500 text-white text-sm font-semibold rounded-full">
                      Dance & Music
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-orange-600 transition-colors">
                    Indradhanu & Freshers
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Energetic stage dance performances that showcased our
                    talents and celebrated our togetherness with creativity and
                    joy.
                  </p>
                  <div className="flex items-center text-orange-600 font-semibold">
                    View Gallery
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Feature 2 */}
            <Link to="/memories/traditional" className="group block">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 h-full">
                <div className="relative overflow-hidden">
                  <img
                    src="/assets/images/tradi.jpg"
                    alt="Traditional Day"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-block px-3 py-1 bg-green-500 text-white text-sm font-semibold rounded-full">
                      Cultural Day
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-green-600 transition-colors">
                    Traditional Elegance
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Flowing sarees and crisp kurtas speaking the language of
                    grace, elegance, and rich cultural heritage.
                  </p>
                  <div className="flex items-center text-green-600 font-semibold">
                    View Gallery
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Feature 3 */}
            <Link to="/memories/oracle" className="group block">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 h-full">
                <div className="relative overflow-hidden">
                  <img
                    src="/assets/images/oracle.jpg"
                    alt="Oracle Yatra"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-block px-3 py-1 bg-blue-500 text-white text-sm font-semibold rounded-full">
                      Tech Event
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                    Oracle Yatra
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Conducted sessions and volunteered in managing food,
                    hospitality, creating a wonderful learning experience for
                    everyone.
                  </p>
                  <div className="flex items-center text-blue-600 font-semibold">
                    View Gallery
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/memories"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-gray-700 bg-white border-2 border-gray-200 rounded-full hover:border-orange-300 hover:shadow-lg transition-all duration-300 group"
            >
              <Camera className="mr-3 w-5 h-5" />
              Explore All Memories
              <ChevronRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Friends Component */}
      <div id="friends">
        <Friends />
      </div>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-12 sm:py-7 bg-gradient-to-br from-orange-50 to-green-50"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">
              Find Us At <span className="text-green-600">IMCC</span>
            </h2>
            <p className="text-gray-600">Visit our campus where it all began</p>
          </div>

          {/* Map & Image Container */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Map Section */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-4 bg-gradient-to-r from-orange-100 to-green-100">
                <h3 className="text-xl font-bold text-gray-800">
                  📍 Our Location
                </h3>
              </div>
              <div className="p-0">
                {/* Google Maps Embed */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.540769713384!2d73.81464987493693!3d18.50444938258595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfbfebf71269%3A0x867cff78f72ea691!2sMES-IMCC%20College!5e0!3m2!1sen!2sin!4v1766250282820!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                  title="IMCC College Location"
                />
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="text-gray-700 font-medium">
                        MES IMCC College
                      </p>
                      <p className="text-gray-500 text-sm">
                        Kothrud, Pune, Maharashtra
                      </p>
                    </div>
                    <div className="text-3xl">📍</div>
                  </div>
                  <a
                    href="https://maps.google.com/?q=MES+IMCC+College+Kothrud+Pune"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-3 bg-gradient-to-r from-orange-500 to-green-500 text-white text-center rounded-lg font-medium hover:shadow-md transition-shadow"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-4 bg-gradient-to-r from-orange-100 to-green-100">
                <h3 className="text-xl font-bold text-gray-800">
                  📸 Campus Memories
                </h3>
              </div>
              <div className="relative">
                <img
                  src="/assets/images/college.png"
                  alt="IMCC Campus"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-white font-medium">
                    Where friendships were born and memories were made
                  </p>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-700 font-medium">
                      IMCC College Campus
                    </p>
                    <p className="text-gray-500 text-sm">
                      Since September 2023 to May 2025
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Contact Info */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-2">
              Have questions or want to connect?
            </p>
            <a
              href="mailto:siddharthmaurya455@gmail.com"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-green-500 text-white rounded-full font-medium hover:shadow-lg transition-shadow"
            >
              <span className="mr-2">✉️</span>
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Add CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default LandingPage;
