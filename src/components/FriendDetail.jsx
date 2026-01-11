import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { friends } from '../config/constants';
import {
  ArrowLeft,
  Mail,
  Phone,
  Instagram,
  Heart,
  Calendar,
  MapPin,
  Users,
  Star,
  Camera,
  Share2,
  MessageCircle,
  Facebook,
  Twitter,
  Linkedin,
  ExternalLink,
  Award,
  Coffee,
  Music,
  Camera as CameraIcon,
  Volleyball,
  Code,
  Sparkles,
  X,
  ChevronLeft,
  ChevronRight,
  Download,
  Maximize2,
  Video,
  Image as ImageIcon,
  ThumbsUp,
  MessageSquare,
  MoreVertical,
  Home,
  Clock,
  Globe,
  PhoneCall,
  UserCheck,
  MailCheck
} from 'lucide-react';

const FriendDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('about');
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const imageContainerRef = useRef(null);

  const friend = friends.find(f => f.slug === slug);

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoading(false);
    
    // Add scroll listener for scroll-to-top button
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard navigation for gallery
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImage && friend.gallery) {
        if (e.key === 'ArrowRight') {
          handleNextImage();
        } else if (e.key === 'ArrowLeft') {
          handlePrevImage();
        } else if (e.key === 'Escape') {
          setSelectedImage(null);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentImageIndex]);

  if (!friend) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-green-50 flex items-center justify-center px-4 animate-fadeIn">
        <div className="text-center max-w-md">
          <div className="mb-6 animate-bounce">
            <Users className="w-24 h-24 text-gray-300 mx-auto" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 animate-slideUp">
            Friend Not Found
          </h1>
          <p className="text-gray-600 mb-8 animate-slideUp animation-delay-100">
            The friend you're looking for doesn't exist or has been removed.
          </p>
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-green-500 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-slideUp animation-delay-200"
          >
            <ArrowLeft className="mr-2 w-5 h-5" />
            Back to Friends
          </Link>
        </div>
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `Check out ${friend.title}'s profile`,
        text: friend.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      // Show toast notification
      alert('Link copied to clipboard!');
    }
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    // Add animation effect
    const likeBtn = document.getElementById('like-btn');
    if (likeBtn) {
      likeBtn.classList.add('animate-ping');
      setTimeout(() => {
        likeBtn.classList.remove('animate-ping');
      }, 300);
    }
  };

  const handleImageClick = (img, index) => {
    setSelectedImage(img);
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const handleNextImage = () => {
    if (friend.gallery) {
      const nextIndex = (currentImageIndex + 1) % friend.gallery.length;
      setCurrentImageIndex(nextIndex);
      setSelectedImage(friend.gallery[nextIndex]);
    }
  };

  const handlePrevImage = () => {
    if (friend.gallery) {
      const prevIndex = currentImageIndex === 0 ? friend.gallery.length - 1 : currentImageIndex - 1;
      setCurrentImageIndex(prevIndex);
      setSelectedImage(friend.gallery[prevIndex]);
    }
  };

  const handleDownload = () => {
    if (selectedImage) {
      const link = document.createElement('a');
      link.href = selectedImage;
      link.download = `${friend.slug}-image-${currentImageIndex + 1}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      alert(`Message sent to ${friend.title}: ${message}`);
      setMessage('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    // Smooth scroll to tab content on mobile
    if (window.innerWidth < 768) {
      setTimeout(() => {
        const tabContent = document.getElementById('tab-content');
        if (tabContent) {
          tabContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-green-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 animate-pulse">Loading {friend?.title}'s profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-green-50 overflow-hidden">
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-gradient-to-r from-orange-500 to-green-500 text-white rounded-full shadow-2xl flex items-center justify-center hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 animate-bounce-slow"
        >
          <ChevronLeft className="w-6 h-6 transform rotate-90" />
        </button>
      )}

      {/* Floating Back Button */}
      <div className="fixed top-20 left-0 z-20">
        <button
          onClick={() => navigate(-1)}
          className="group flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-white transform hover:-translate-x-1"
        >
          <ArrowLeft className="w-5 h-5 text-green-600 group-hover:text-green-700 transition-colors group-hover:animate-bounceX" />
          <span className="font-semibold text-green-700 group-hover:text-green-800 hidden sm:block">
            Back
          </span>
        </button>
      </div>

      {/* Mobile Quick Actions */}
      <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-white/90 backdrop-blur-sm border-t border-gray-200">
        <div className="flex justify-around items-center p-3">
          <button
            onClick={() => handleTabClick('about')}
            className={`flex flex-col items-center p-2 rounded-lg transition-all duration-200 ${
              activeTab === 'about' ? 'text-orange-600' : 'text-gray-500'
            }`}
          >
            <Users className="w-5 h-5 mb-1" />
            <span className="text-xs font-medium">About</span>
          </button>
          <button
            onClick={() => handleTabClick('gallery')}
            className={`flex flex-col items-center p-2 rounded-lg transition-all duration-200 ${
              activeTab === 'gallery' ? 'text-orange-600' : 'text-gray-500'
            }`}
          >
            <Camera className="w-5 h-5 mb-1" />
            <span className="text-xs font-medium">Gallery</span>
          </button>
          <button
            onClick={handleShare}
            className="flex flex-col items-center p-2 rounded-lg text-gray-500 hover:text-green-600 transition-colors"
          >
            <Share2 className="w-5 h-5 mb-1" />
            <span className="text-xs font-medium">Share</span>
          </button>
          <button
            onClick={handleLike}
            className="flex flex-col items-center p-2 rounded-lg text-gray-500 hover:text-red-500 transition-colors"
          >
            <Heart className={`w-5 h-5 mb-1 ${isLiked ? 'fill-red-500 text-red-500 animate-heartBeat' : ''}`} />
            <span className="text-xs font-medium">Like</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8 pt-20 sm:pt-24">
        {/* Profile Header */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-6 sm:mb-8 animate-slideUp">
          {/* Cover Image - Responsive Height */}
          <div className="h-40 sm:h-48 md:h-56 lg:h-64 bg-gradient-to-r from-orange-400 to-green-400 relative overflow-hidden">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
            </div>

            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-8">
              <div className="flex items-end space-x-4 sm:space-x-6">
                {/* Profile Image with Animation */}
                <div className="relative">
                  <div className="w-30 h-30 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-2xl border-4 border-white shadow-2xl overflow-hidden animate-float-slow">
                    <img
                      src={friend.img}
                      alt={friend.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  {friend.isOnline && (
                    <div className="absolute bottom-1 sm:bottom-2 right-1 sm:right-2 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 bg-green-500 rounded-full border-2 border-white shadow-md animate-pulse"></div>
                  )}
                  {/* Special Badge */}
                  {friend.isSpecial && (
                    <div className="absolute -top-2 -right-2">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs px-2 py-1 rounded-full shadow-md flex items-center animate-bounce-slow">
                        <Sparkles className="w-3 h-3 mr-1" />
                        <span className="hidden sm:inline">Special</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Name & Role */}
                <div className="pb-2 sm:pb-4">
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                    {friend.fullName || friend.title}
                  </h1>
                  <p className="text-white/90 text-sm sm:text-base md:text-lg mt-1">{friend.role}</p>
                  <div className="flex items-center flex-wrap gap-2 mt-2 sm:mt-3">
                    <div className="flex items-center space-x-1 bg-white/20 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full">
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-300" />
                      <span className="text-white text-sm font-medium">{friend.rating || '4.5'}</span>
                    </div>
                    {/* Categories */}
                    {friend.categories?.slice(0, 2).map((cat, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons - Responsive */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex space-x-2 sm:space-x-3">
              <button
                onClick={handleShare}
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 group hover:scale-110"
              >
                <Share2 className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white group-hover:rotate-12 transition-transform" />
              </button>
              <button
                id="like-btn"
                onClick={handleLike}
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 group hover:scale-110"
              >
                <Heart className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ${
                  isLiked ? 'fill-red-500 text-red-500 animate-heartBeat' : 'text-white'
                } group-hover:scale-110 transition-transform`} />
              </button>
            </div>
          </div>

          {/* Profile Info - Responsive Grid */}
          <div className="p-4 sm:p-6 md:p-8 pt-16 sm:pt-20 md:pt-24 lg:pt-28">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Left Column */}
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h3 className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2 sm:mb-3">
                    About
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    {friend.description}
                  </p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="bg-gray-50 rounded-xl p-3 sm:p-4 text-center transform hover:scale-105 transition-transform duration-300">
                    <div className="text-xl sm:text-2xl font-bold text-orange-600">{friend.messages || 0}</div>
                    <div className="text-xs sm:text-sm text-gray-500">Messages</div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-3 sm:p-4 text-center transform hover:scale-105 transition-transform duration-300">
                    <div className="text-xl sm:text-2xl font-bold text-green-600">{friend.gallery?.length || 0}</div>
                    <div className="text-xs sm:text-sm text-gray-500">Photos</div>
                  </div>
                </div>

                {/* Tags */}
                <div>
                  <h3 className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2 sm:mb-3">
                    Tags
                  </h3>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {friend.tags?.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 sm:px-3 py-1 bg-gradient-to-r from-orange-100 to-green-100 text-orange-700 text-xs sm:text-sm rounded-full font-medium transform hover:scale-105 transition-all duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Middle Column */}
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  Personal Details
                </h3>
                
                <div className="space-y-3 sm:space-y-4">
                  {[
                    { icon: Calendar, label: "Birthday", value: friend.birthday },
                    { icon: MapPin, label: "Hometown", value: friend.hometown },
                    { icon: Users, label: "Joined", value: friend.joinDate },
                    { icon: Award, label: "Nickname", value: friend.nickname },
                  ].map((item, index) => (
                    <div 
                      key={index}
                      className="flex items-center space-x-3 p-2 sm:p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 animate-slideRight"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="text-xs sm:text-sm text-gray-500">{item.label}</div>
                        <div className="font-medium text-sm sm:text-base truncate">{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Favorites */}
                {friend.favorites && (
                  <div>
                    <h3 className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2 sm:mb-3">
                      Favorites
                    </h3>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {friend.favorites.map((fav, index) => (
                        <span
                          key={index}
                          className="px-2 sm:px-3 py-1 bg-white border border-gray-200 text-gray-700 text-xs sm:text-sm rounded-full transform hover:scale-105 transition-all duration-200"
                        >
                          {fav}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column */}
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  Connect
                </h3>
                
                <div className="space-y-3 sm:space-y-4">
                  {friend.email && (
                    <a
                      href={`mailto:${friend.email}`}
                      className="flex items-center space-x-3 p-2 sm:p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-200 group hover:shadow-md"
                    >
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-orange-500 transition-colors flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="text-xs sm:text-sm text-gray-500">Email</div>
                        <div className="font-medium text-sm truncate">{friend.email}</div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-300 group-hover:text-orange-500" />
                    </a>
                  )}
                  
                  {friend.whatsapp && (
                    <a
                      href={`https://wa.me/${friend.whatsapp.replace(/\D/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-2 sm:p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-200 group hover:shadow-md"
                    >
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-green-500 transition-colors flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="text-xs sm:text-sm text-gray-500">WhatsApp</div>
                        <div className="font-medium text-sm">{friend.whatsapp}</div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-300 group-hover:text-green-500" />
                    </a>
                  )}
                  
                  {friend.instagram && (
                    <a
                      href={`https://instagram.com/${friend.instagram.replace('@', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-2 sm:p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-200 group hover:shadow-md"
                    >
                      <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-pink-500 transition-colors flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="text-xs sm:text-sm text-gray-500">Instagram</div>
                        <div className="font-medium text-sm">{friend.instagram}</div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-300 group-hover:text-pink-500" />
                    </a>
                  )}
                </div>

                {/* Social Share */}
                <div>
                  <h3 className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2 sm:mb-3">
                    Share Profile
                  </h3>
                  <div className="flex space-x-2 sm:space-x-3">
                    {[
                      { icon: Facebook, color: 'bg-blue-500 hover:bg-blue-600' },
                      { icon: Twitter, color: 'bg-sky-400 hover:bg-sky-500' },
                      { icon: Linkedin, color: 'bg-blue-700 hover:bg-blue-800' },
                    ].map((social, index) => (
                      <button
                        key={index}
                        className={`w-8 h-8 sm:w-10 sm:h-10 ${social.color} text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:rotate-12`}
                      >
                        <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div id="tab-content" className="bg-white rounded-2xl shadow-lg mb-6 sm:mb-8 animate-slideUp animation-delay-100">
          <div className="flex overflow-x-auto scrollbar-hide">
            {['about', 'gallery', 'memories', 'messages'].map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={`flex-1 min-w-[120px] sm:min-w-0 py-3 sm:py-4 text-center font-medium text-sm sm:text-base transition-all duration-300 whitespace-nowrap ${
                  activeTab === tab
                    ? 'text-orange-600 border-b-2 border-orange-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-4 sm:p-6 md:p-8">
            {activeTab === 'about' && (
              <div className="space-y-4 sm:space-y-6 animate-fadeIn">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">Detailed Story</h3>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg whitespace-pre-line">
                    {friend.about}
                  </p>
                </div>
                
                {friend.shortAbout && (
                  <div className="bg-gradient-to-r from-orange-50 to-green-50 rounded-2xl p-4 sm:p-6 border border-orange-100 transform hover:scale-105 transition-transform duration-300">
                    <div className="flex items-start space-x-3">
                      <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">In Their Words</h4>
                        <p className="text-gray-700 italic text-sm sm:text-base md:text-lg">{friend.shortAbout}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'gallery' && (
  <div className="animate-fadeIn">

    {/* HEADER */}
    <div className="flex justify-between items-center mb-4 sm:mb-6">
      <h3 className="text-xl sm:text-2xl font-bold text-gray-800">Photo Gallery</h3>
      <span className="text-sm text-gray-500">
        {friend.gallery?.length || 0} items
      </span>
    </div>

    {/* GALLERY GRID */}
    {friend.gallery && friend.gallery.length > 0 ? (
      <div
        ref={imageContainerRef}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4"
      >
        {friend.gallery.map((img, index) => (
          <div
            key={index}
            className="aspect-square rounded-xl overflow-hidden cursor-pointer group relative animate-slideUp"
            style={{ animationDelay: `${index * 100}ms` }}
            onClick={() => setSelectedImage(img)}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
              <Maximize2 className="w-6 h-6 text-white" />
            </div>

            <img
              src={img}
              alt={`${friend.title} ${index + 1}`}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />

            {/* Icon */}
            <div className="absolute top-2 right-2 w-6 h-6 bg-black/50 rounded-full flex items-center justify-center">
              {img.includes('.mp4') || img.includes('.mov') ? (
                <Video className="w-3 h-3 text-white" />
              ) : (
                <CameraIcon className="w-3 h-3 text-white" />
              )}
            </div>
          </div>
        ))}
      </div>
    ) : (
      <div className="text-center py-8 sm:py-12">
        <CameraIcon className="w-12 h-12 sm:w-16 sm:h-16 text-gray-300 mx-auto mb-4 animate-bounce" />
        <p className="text-gray-500">No photos available yet.</p>
      </div>
    )}

    {/* FULLSCREEN IMAGE POPUP (LIGHTBOX) */}
    {selectedImage && (
      <div
        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
        onClick={() => setSelectedImage(null)}
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={() => setSelectedImage(null)}
          className="absolute top-6 right-6 px-4 py-2 bg-pink-600 text-white font-semibold rounded-lg shadow hover:bg-pink-700 transition"
        >
          Close ✖
        </button>

        {/* IMAGE */}
        <img
          src={selectedImage}
          alt="Expanded"
          className="w-full max-w-3xl max-h-[80vh] object-contain rounded-lg"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    )}

  </div>
)}


            {activeTab === 'memories' && (
              <div className="animate-fadeIn">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Shared Memories</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {['Indradhanu', 'Traditional Day', 'Oracle Yatra', 'College Days'].map((memory, index) => (
                    <div 
                      key={index} 
                      className="bg-gray-50 rounded-xl p-4 sm:p-6 hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md animate-slideRight"
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <div className="flex items-center space-x-3 mb-3">
                        <Calendar className="w-5 h-5 text-orange-500 flex-shrink-0" />
                        <h4 className="text-base sm:text-lg font-semibold">{memory}</h4>
                      </div>
                      <p className="text-gray-600 text-sm sm:text-base">
                        Beautiful moments shared together during {memory.toLowerCase()}. Lots of laughter and unforgettable memories.
                      </p>
                      <div className="flex space-x-2 mt-4">
                        <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs sm:text-sm">
                          15 Photos
                        </span>
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs sm:text-sm">
                          2 Videos
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'messages' && (
              <div className="animate-fadeIn">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Leave a Message</h3>
                <div className="max-w-2xl mx-auto">
                  <div className="bg-gray-50 rounded-2xl p-4 sm:p-6 mb-4">
                    <div className="flex items-start space-x-3 mb-4">
                      <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                        <img src={friend.img} alt={friend.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="font-semibold">{friend.title}</span>
                          <span className="text-xs text-gray-500">• Just now</span>
                        </div>
                        <p className="text-gray-700">Send me a message! I'd love to hear from you! 😊</p>
                      </div>
                    </div>
                  </div>
                  
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full h-32 sm:h-40 p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder={`Write a sweet message for ${friend.title}...`}
                  />
                  <div className="flex flex-col sm:flex-row justify-between items-center mt-4 space-y-4 sm:space-y-0">
                    <div className="flex space-x-2">
                      <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                        <Camera className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                        <ThumbsUp className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>
                    <button
                      onClick={handleSendMessage}
                      disabled={!message.trim()}
                      className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 ${
                        message.trim()
                          ? 'bg-gradient-to-r from-orange-500 to-green-500 text-white hover:shadow-lg'
                          : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      <MessageCircle className="w-5 h-5 inline mr-2" />
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Friends */}
        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 animate-slideUp animation-delay-200">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Other Amazing Friends</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4">
            {friends
              .filter(f => f.slug !== slug)
              .slice(0, 6)
              .map((f, index) => (
                <Link
                  key={f.slug}
                  to={`/friends/${f.slug}`}
                  className="group block text-center animate-slideUp"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative mb-2 sm:mb-3 mx-auto">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-white shadow-md group-hover:border-orange-300 transition-all duration-300 group-hover:scale-110">
                      <img
                        src={f.img}
                        alt={f.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    {f.isOnline && (
                      <div className="absolute bottom-0 right-0 w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full border-2 border-white" />
                    )}
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-orange-600 truncate">
                    {f.nickname || f.title.split(' ')[0]}
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>

      {/* Enhanced Image Modal */}
      {isModalOpen && selectedImage && (
        <div className="fixed inset-0 z-50 animate-fadeIn">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          />
          
          {/* Modal Content */}
          <div className="relative h-full flex items-center justify-center p-2 sm:p-4">
            {/* Navigation Buttons */}
            <button
              onClick={handlePrevImage}
              className="absolute left-2 sm:left-4 lg:left-8 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 group hover:scale-110"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white group-hover:scale-110 transition-transform" />
            </button>
            
            <button
              onClick={handleNextImage}
              className="absolute right-2 sm:right-4 lg:right-8 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 group hover:scale-110"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white group-hover:scale-110 transition-transform" />
            </button>

            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 group hover:rotate-90"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white group-hover:scale-110 transition-transform" />
            </button>

            {/* Media Controls */}
            <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center space-x-2 sm:space-x-4">
              <button
                onClick={() => document.documentElement.requestFullscreen()}
                className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 group hover:scale-110"
              >
                <Maximize2 className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:scale-110" />
              </button>
              
              <button
                onClick={handleDownload}
                className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 group hover:scale-110"
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:scale-110" />
              </button>
            </div>

            {/* Media Display */}
            <div className="relative max-w-full max-h-[85vh]">
              <div className="bg-black/50 rounded-2xl overflow-hidden shadow-2xl">
                {selectedImage.includes('.mp4') || selectedImage.includes('.mov') ? (
                  <video
                    controls
                    autoPlay
                    className="max-h-[70vh] w-auto object-contain"
                    controlsList="nodownload"
                  >
                    <source src={selectedImage} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={selectedImage}
                    alt="Full size"
                    className="max-h-[70vh] w-auto object-contain"
                  />
                )}
              </div>

              {/* Media Info */}
              <div className="mt-4 sm:mt-6 text-center">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">
                  {friend.title} - Image {currentImageIndex + 1} of {friend.gallery?.length}
                </h3>
              </div>

              {/* Thumbnail Strip */}
              {friend.gallery && friend.gallery.length > 1 && (
                <div className="absolute -bottom-16 sm:-bottom-20 left-0 right-0">
                  <div className="max-w-4xl mx-auto px-2 sm:px-4">
                    <div className="flex overflow-x-auto space-x-2 py-2 scrollbar-hide">
                      {friend.gallery.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            setCurrentImageIndex(idx);
                            setSelectedImage(img);
                          }}
                          className={`flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                            idx === currentIndex
                              ? "border-orange-500 scale-110"
                              : "border-transparent hover:border-white/50"
                          }`}
                        >
                          <img
                            src={img}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideRight {
          from { 
            opacity: 0;
            transform: translateX(-20px);
          }
          to { 
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes bounceX {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-5px); }
        }
        @keyframes heartBeat {
          0% { transform: scale(1); }
          25% { transform: scale(1.2); }
          50% { transform: scale(1); }
          75% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.6s ease-out;
        }
        .animate-slideRight {
          animation: slideRight 0.6s ease-out;
        }
        .animate-bounceX {
          animation: bounceX 0.5s ease-in-out;
        }
        .animate-heartBeat {
          animation: heartBeat 0.6s ease-in-out;
        }
        .animate-float-slow {
          animation: floatSlow 3s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .animation-delay-100 {
          animation-delay: 100ms;
        }
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default FriendDetail;