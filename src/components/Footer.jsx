import React from 'react'

const Footer = () => {
  return (
    <div>
       {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold mb-4">
                <span className="text-orange-400">IMCC</span>
                <span className="text-green-400"> Friends</span>
              </div>
              <p className="text-gray-400">
                A community of learners, dreamers, and friends creating 
                memories that last forever.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['Home', 'About', 'Memories', 'Friends', 'Contact'].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Location</h3>
              <p className="text-gray-400">
                IMCC, Kothrud<br />
                Pune, Maharashtra<br />
                Since September 2023
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <p className="text-gray-400">
                © {new Date().getFullYear()} IMCC Friends. All rights reserved.
              </p>
              <p className="text-gray-400">
                Developed and Design by Siddharh Maurya ❤️
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
