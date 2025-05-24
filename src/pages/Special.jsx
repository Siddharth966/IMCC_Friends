import React from 'react';
import { Link } from 'react-router-dom'; // make sure react-router-dom is installed and set up

const moments = [
  {
    title: "Journey from Village to Pune",
    description:
      "Leaving the village behind, the student faces the excitement and uncertainty of city life, with new sounds, places, and challenges.",
    icon: "🚆",
  },
  {
    title: "Facing Initial Difficulties",
    description:
      "Adapting to public transport, language barriers, and managing daily expenses are tough, but each day brings growth and learning.",
    icon: "⚠️",
  },
  {
    title: "Meeting Special Friends",
    description:
      "Making friends from diverse backgrounds who become support systems and create unforgettable memories together.",
    icon: "🤝",
  },
  {
    title: "A Beautiful Friendship",
    description:
      "Meeting a kind and inspiring female friend whose positivity brings joy, motivation, and a special connection that enriches daily life.",
    icon: "🌸",
  },
  {
    title: "Attracted by Fast Food & Trends",
    description:
      "The allure of fast food, trendy clothes, and modern cafes becomes a tempting part of urban life—but requires discipline to balance it all.",
    icon: "🍔",
  },
  {
    title: "Managing Studies and Life",
    description:
      "Balancing academics and personal life teaches valuable time management and self-discipline skills, essential for success in college.",
    icon: "📚",
  },
  {
    title: "Handling City Expenses",
    description:
      "Learning how to manage rent, groceries, mobile recharges, and college expenses on a limited student budget builds financial awareness, responsibility, and independence.",
    icon: "💸",
  },
  {
    title: "Overcoming Challenges",
    description:
      "With persistence and support, the student overcomes homesickness, stress, and adapts to the urban lifestyle confidently, emerging stronger and more resilient.",
    icon: "💪",
  },
  {
    title: "Returning Home with Growth",
    description:
      "As the chapter closes, the student heads back home—not just with bags, but with memories, growth, friendships, and a stronger self, ready to embrace the future.",
    icon: "🏡",
  },
];

const Special = () => {
  return (
    <div className="bg-gradient-to-tr from-green-200 via-orange-200 to-green-100 min-h-screen py-16 px-4 relative">
      {/* Back to Home Button */}
      <Link
        to="/"
        className="absolute top-6 left-6 bg-white text-orange-600 font-semibold px-4 py-2 rounded-full shadow hover:bg-orange-100 transition"
      >
        ← Back to Home
      </Link>

      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-orange-600 mb-6">
          Special Moments
        </h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-14 text-lg">
          Every student from a village stepping into a city like Pune experiences a journey filled with challenges and growth. Here are some heartfelt milestones many go through while shaping their future and finding their true selves - " Siddharth Maurya "
        </p>

        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {moments.map(({ title, description, icon }, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
            >
              <div className="text-6xl mb-4 text-indigo-500">{icon}</div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">{title}</h3>
              <p className="text-gray-600 text-md">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Special;
