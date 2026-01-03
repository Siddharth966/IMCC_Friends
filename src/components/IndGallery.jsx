import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Download, 
  Play, 
  Image as ImageIcon,
  Video,
  Home
} from "lucide-react";

const IndGallery = ({ title, media = [] }) => {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [loadedImages, setLoadedImages] = useState({});

  useEffect(() => {
    // Close modal on Escape key
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const handleClose = () => {
    setSelectedMedia(null);
    setCurrentIndex(0);
    setIsFullscreen(false);
  };

  const openMedia = (item, index) => {
    setSelectedMedia(item);
    setCurrentIndex(index);
  };

  const navigateMedia = (direction) => {
    let newIndex = currentIndex + direction;
    if (newIndex < 0) newIndex = media.length - 1;
    if (newIndex >= media.length) newIndex = 0;
    setCurrentIndex(newIndex);
    setSelectedMedia(media[newIndex]);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement && selectedMedia) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const handleDownload = () => {
    if (selectedMedia) {
      const link = document.createElement('a');
      link.href = selectedMedia.src;
      link.download = `${title}-${selectedMedia.alt || 'media'}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleImageLoad = (index) => {
    setLoadedImages(prev => ({ ...prev, [index]: true }));
  };

  // Group media by categories if needed
  const categories = [...new Set(media.map(item => item.category).filter(Boolean))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-green-50">
      {/* Enhanced Back Button */}
      <Link
        to="/"
        className="fixed top-20 left-6 z-50 group"
      >
        <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white hover:-translate-x-1">
          <ChevronLeft className="w-5 h-5 text-green-600 group-hover:text-green-700" />
          <span className="font-semibold text-green-700 group-hover:text-green-800">
            Back to Home
          </span>
        </div>
      </Link>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 mb-4">
            <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-green-500 rounded-full" />
            <span className="text-sm font-semibold text-orange-600 uppercase tracking-wider">
              Gallery
            </span>
            <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-orange-500 rounded-full" />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
              {title}
            </span>
          </h1>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Relive the beautiful moments captured forever. Click on any image or video to view in full size.
          </p>
          
          <div className="flex items-center justify-center space-x-4 mt-6">
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <ImageIcon className="w-4 h-4 text-orange-500" />
              <span className="text-sm font-medium text-gray-700">
                {media.filter(m => m.type === "image").length} Photos
              </span>
            </div>
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <Video className="w-4 h-4 text-green-500" />
              <span className="text-sm font-medium text-gray-700">
                {media.filter(m => m.type === "video").length} Videos
              </span>
            </div>
          </div>
        </div>

        {/* Categories Filter (if categories exist) */}
        {categories.length > 0 && (
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 justify-center">
              <button className="px-4 py-2 bg-gradient-to-r from-orange-500 to-green-500 text-white rounded-full font-medium shadow-md">
                All
              </button>
              {categories.map(category => (
                <button
                  key={category}
                  className="px-4 py-2 bg-white text-gray-700 rounded-full font-medium hover:bg-gray-50 shadow-sm hover:shadow transition-all duration-200"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {media.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg bg-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => openMedia(item, index)}
            >
              {/* Media Container */}
              <div className="relative aspect-square overflow-hidden">
                {item.type === "image" ? (
                  <>
                    <div className={`absolute inset-0 bg-gradient-to-br from-orange-100 to-green-100 animate-pulse ${
                      loadedImages[index] ? 'opacity-0' : 'opacity-100'
                    } transition-opacity duration-300`} />
                    <img
                      src={item.src}
                      alt={item.alt}
                      className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ${
                        loadedImages[index] ? 'opacity-100' : 'opacity-0'
                      }`}
                      onLoad={() => handleImageLoad(index)}
                    />
                  </>
                ) : (
                  <>
                    <video
                      className="w-full h-full object-cover"
                      muted
                      preload="metadata"
                    >
                      <source src={item.src} type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                        <Play className="w-6 h-6 text-green-600 fill-current" />
                      </div>
                    </div>
                  </>
                )}
                
                {/* Media Type Indicator */}
                <div className="absolute top-3 right-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    item.type === "image" 
                      ? 'bg-orange-500 text-white' 
                      : 'bg-green-500 text-white'
                  }`}>
                    {item.type === "image" ? (
                      <ImageIcon className="w-4 h-4" />
                    ) : (
                      <Video className="w-4 h-4" />
                    )}
                  </div>
                </div>
              </div>

              {/* Caption Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-medium line-clamp-2">
                  {item.alt || item.caption || "Beautiful Memory"}
                </p>
                {item.date && (
                  <p className="text-gray-300 text-sm mt-1">{item.date}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {media.length === 0 && (
          <div className="text-center py-20">
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-orange-100 to-green-100 rounded-full flex items-center justify-center">
              <ImageIcon className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-600 mb-3">
              No Media Yet
            </h3>
            <p className="text-gray-500 max-w-md mx-auto">
              Photos and videos from this event will be added soon. Check back later!
            </p>
          </div>
        )}

        {/* Enhanced Modal */}
        {selectedMedia && (
          <div className="fixed inset-0 z-50">
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
              onClick={handleClose}
            />
            
            {/* Modal Content */}
            <div className="relative h-full flex items-center justify-center p-4">
              {/* Navigation Buttons */}
              <button
                onClick={() => navigateMedia(-1)}
                className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group"
              >
                <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              </button>
              
              <button
                onClick={() => navigateMedia(1)}
                className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group"
              >
                <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              </button>

              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 lg:top-8 lg:right-8 z-10 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group"
              >
                <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform" />
              </button>

              {/* Media Controls */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center space-x-4">
                <button
                  onClick={toggleFullscreen}
                  className="w-10 h-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group"
                >
                  <Maximize2 className="w-5 h-5 text-white group-hover:scale-110" />
                </button>
                
                <button
                  onClick={handleDownload}
                  className="w-10 h-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group"
                >
                  <Download className="w-5 h-5 text-white group-hover:scale-110" />
                </button>
              </div>

              {/* Media Display */}
              <div className="relative max-w-6xl max-h-[85vh]">
                <div className="bg-black/50 rounded-2xl overflow-hidden shadow-2xl">
                  {selectedMedia.type === "image" ? (
                    <img
                      src={selectedMedia.src}
                      alt={selectedMedia.alt}
                      className="max-h-[70vh] w-auto object-contain"
                    />
                  ) : (
                    <video
                      controls
                      autoPlay
                      className="max-h-[70vh] w-auto"
                      controlsList="nodownload"
                    >
                      <source src={selectedMedia.src} type="video/mp4" />
                    </video>
                  )}
                </div>

                {/* Media Info */}
                <div className="mt-6 text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {selectedMedia.alt || "Memory"}
                  </h3>
                  {selectedMedia.date && (
                    <p className="text-gray-300">{selectedMedia.date}</p>
                  )}
                  {selectedMedia.description && (
                    <p className="text-gray-300 max-w-2xl mx-auto mt-2">
                      {selectedMedia.description}
                    </p>
                  )}
                  <div className="flex items-center justify-center space-x-4 mt-4">
                    <div className="flex items-center space-x-1 text-sm text-gray-400">
                      {selectedMedia.type === "image" ? (
                        <>
                          <ImageIcon className="w-4 h-4" />
                          <span>Photo {currentIndex + 1} of {media.length}</span>
                        </>
                      ) : (
                        <>
                          <Video className="w-4 h-4" />
                          <span>Video {currentIndex + 1} of {media.length}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Thumbnail Strip */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm py-4">
                <div className="max-w-4xl mx-auto px-4">
                  <div className="flex overflow-x-auto space-x-2 py-2 scrollbar-hide">
                    {media.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setCurrentIndex(index);
                          setSelectedMedia(item);
                        }}
                        className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                          index === currentIndex
                            ? "border-orange-500 scale-110"
                            : "border-transparent hover:border-white/50"
                        }`}
                      >
                        {item.type === "image" ? (
                          <img
                            src={item.src}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                            <Video className="w-6 h-6 text-gray-400" />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Add custom styles for scrollbar hide */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default IndGallery;