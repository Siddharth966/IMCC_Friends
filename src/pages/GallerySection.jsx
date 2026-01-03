import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

// Images
import g1 from "/assets/gallery/1.jpg";
import g2 from "/assets/gallery/2.jpg";
import g3 from "/assets/gallery/3.jpg";
import g4 from "/assets/gallery/4.png";
import g5 from "/assets/gallery/5.jpg";
import g6 from "/assets/gallery/6.jpg";
import g7 from "/assets/gallery/7.jpg";
import g8 from "/assets/gallery/8.jpg";
import g9 from "/assets/gallery/9.jpg";
import g10 from "/assets/gallery/10.jpg";
import g11 from "/assets/gallery/11.jpg";
import g12 from "/assets/gallery/12.jpg";
import g13 from "/assets/gallery/13.jpg";
import g14 from "/assets/gallery/14.jpg";
import g15 from "/assets/gallery/15.jpg";
import g16 from "/assets/gallery/16.jpg";
import g17 from "/assets/gallery/17.jpg";
import g18 from "/assets/gallery/18.jpg";
import g19 from "/assets/gallery/19.jpg";
import g20 from "/assets/gallery/20.jpg";
import g21 from "/assets/gallery/21.jpg";
import g22 from "/assets/gallery/22.jpg";
import g23 from "/assets/gallery/23.jpg";
import g24 from "/assets/gallery/24.jpg";
import g25 from "/assets/gallery/25.jpg";
import g26 from "/assets/gallery/26.jpg";
import g27 from "/assets/gallery/27.jpg";
import g28 from "/assets/gallery/28.jpg";
import g29 from "/assets/gallery/29.jpg";
import g30 from "/assets/gallery/30.jpg";
import g31 from "/assets/gallery/31.jpg";
import g32 from "/assets/gallery/32.jpg";
import g33 from "/assets/gallery/33.jpg";
import g34 from "/assets/gallery/34.jpg";
import g35 from "/assets/gallery/35.jpg";
import g36 from "/assets/gallery/36.jpg";
import g37 from "/assets/gallery/37.jpg";
import g38 from "/assets/gallery/38.jpg";
import g39 from "/assets/gallery/39.jpg";
import g40 from "/assets/gallery/40.jpg";
import g41 from "/assets/gallery/41.jpg";
import g42 from "/assets/gallery/42.jpg";
import g43 from "/assets/gallery/43.jpg";
import g44 from "/assets/gallery/44.jpg";
import g45 from "/assets/gallery/45.jpg";
import g46 from "/assets/gallery/46.jpg";
import g47 from "/assets/gallery/47.jpg";
import g48 from "/assets/gallery/48.jpg";
// import g49 from "/assets/gallery/49.jpg";
import g50 from "/assets/gallery/50.jpg";
import g51 from "/assets/gallery/51.jpg";
import g52 from "/assets/gallery/52.jpg";
import g53 from "/assets/gallery/53.jpg";
import g54 from "/assets/gallery/54.jpg";
import g55 from "/assets/gallery/55.jpg";
import g56 from "/assets/gallery/56.jpg";
import g57 from "/assets/gallery/57.jpg";
import g58 from "/assets/gallery/58.jpg";
import g59 from "/assets/gallery/59.jpg";
import g60 from "/assets/gallery/60.jpg";
import g61 from "/assets/gallery/61.jpg";
import g62 from "/assets/gallery/62.jpg";
import g63 from "/assets/gallery/63.jpg";
import g64 from "/assets/gallery/64.jpg";
import g65 from "/assets/gallery/65.jpg";
import g66 from "/assets/gallery/66.jpg";
import g67 from "/assets/gallery/67.jpg";
import g68 from "/assets/gallery/68.jpg";
import g69 from "/assets/gallery/69.jpg";
import g70 from "/assets/gallery/70.jpg";
import g71 from "/assets/gallery/71.jpg";
import g72 from "/assets/gallery/72.jpg";
import g73 from "/assets/gallery/73.jpg";
import g74 from "/assets/gallery/74.jpg";
import g75 from "/assets/gallery/75.jpg";
import g76 from "/assets/gallery/76.jpg";
import g77 from "/assets/gallery/77.jpg";
import g78 from "/assets/gallery/78.jpg";
import g79 from "/assets/gallery/79.jpg";
import g80 from "/assets/gallery/80.jpg";
import g81 from "/assets/gallery/81.jpg";
import g82 from "/assets/gallery/82.jpg";
import g83 from "/assets/gallery/83.jpg";
import g84 from "/assets/gallery/84.jpg";
import g85 from "/assets/gallery/85.jpg";
import g86 from "/assets/gallery/86.jpg";
import g87 from "/assets/gallery/87.jpg";



const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [loadedImages, setLoadedImages] = useState({});
  const [touchStart, setTouchStart] = useState(null);

  const galleryImages = [
  { id: 1, src: g1, caption: "Memory 1" },
  { id: 5, src: g5, caption: "Memory 5" },
   
 
  { id: 3, src: g3, caption: "Memory 3" },
  { id: 4, src: g4, caption: "Memory 4" },
  

  { id: 7, src: g7, caption: "Memory 7" },
  { id: 8, src: g8, caption: "Memory 8" },
  { id: 9, src: g9, caption: "Memory 9" },
   { id: 6, src: g6, caption: "Memory 6" },
  { id: 10, src: g10, caption: "Memory 10" },
  { id: 11, src: g11, caption: "Memory 11" },
  { id: 12, src: g12, caption: "Memory 12" },
  { id: 13, src: g13, caption: "Memory 13" },
  { id: 14, src: g14, caption: "Memory 14" },
  { id: 15, src: g15, caption: "Memory 15" },
  { id: 16, src: g16, caption: "Memory 16" },
   { id: 2, src: g2, caption: "Memory 2" },
  { id: 17, src: g17, caption: "Memory 17" },
  { id: 18, src: g18, caption: "Memory 18" },
  { id: 19, src: g19, caption: "Memory 19" },
  { id: 20, src: g20, caption: "Memory 20" },
  { id: 21, src: g21, caption: "Memory 21" },
  { id: 22, src: g22, caption: "Memory 22" },
  { id: 23, src: g23, caption: "Memory 23" },
  { id: 24, src: g24, caption: "Memory 24" },
  { id: 25, src: g25, caption: "Memory 25" },
  { id: 26, src: g26, caption: "Memory 26" },
  { id: 27, src: g27, caption: "Memory 27" },
  { id: 28, src: g28, caption: "Memory 28" },
  { id: 29, src: g29, caption: "Memory 29" },
  { id: 30, src: g30, caption: "Memory 30" },
  { id: 31, src: g31, caption: "Memory 31" },
  { id: 32, src: g32, caption: "Memory 32" },
  { id: 33, src: g33, caption: "Memory 33" },
  { id: 34, src: g34, caption: "Memory 34" },
  { id: 35, src: g35, caption: "Memory 35" },
  { id: 36, src: g36, caption: "Memory 36" },
  { id: 37, src: g37, caption: "Memory 37" },
  { id: 38, src: g38, caption: "Memory 38" },
  { id: 39, src: g39, caption: "Memory 39" },
  { id: 40, src: g40, caption: "Memory 40" },
  { id: 41, src: g41, caption: "Memory 41" },
  { id: 42, src: g42, caption: "Memory 42" },
  { id: 43, src: g43, caption: "Memory 43" },
  { id: 44, src: g44, caption: "Memory 44" },
  { id: 45, src: g45, caption: "Memory 45" },
  { id: 46, src: g46, caption: "Memory 46" },
  { id: 47, src: g47, caption: "Memory 47" },
  { id: 48, src: g48, caption: "Memory 48" },
  // { id: 49, src: g49, caption: "Memory 49" },
  { id: 50, src: g50, caption: "Memory 50" },
  { id: 51, src: g51, caption: "Memory 51" },
  { id: 52, src: g52, caption: "Memory 52" },
  { id: 53, src: g53, caption: "Memory 53" },
  { id: 54, src: g54, caption: "Memory 54" },
  { id: 55, src: g55, caption: "Memory 55" },
  { id: 56, src: g56, caption: "Memory 56" },
  { id: 57, src: g57, caption: "Memory 57" },
  { id: 58, src: g58, caption: "Memory 58" },
  { id: 59, src: g59, caption: "Memory 59" },
  { id: 60, src: g60, caption: "Memory 60" },
  { id: 61, src: g61, caption: "Memory 61" },
  { id: 62, src: g62, caption: "Memory 62" },
  { id: 63, src: g63, caption: "Memory 63" },
  { id: 64, src: g64, caption: "Memory 64" },
  { id: 65, src: g65, caption: "Memory 65" },
  { id: 66, src: g66, caption: "Memory 66" },
  { id: 67, src: g67, caption: "Memory 67" },
  { id: 68, src: g68, caption: "Memory 68" },
  { id: 69, src: g69, caption: "Memory 69" },
  { id: 70, src: g70, caption: "Memory 70" },
  { id: 71, src: g71, caption: "Memory 71" },
  { id: 72, src: g72, caption: "Memory 72" },
  { id: 73, src: g73, caption: "Memory 73" },
  { id: 74, src: g74, caption: "Memory 74" },
  { id: 75, src: g75, caption: "Memory 75" },
  { id: 76, src: g76, caption: "Memory 76" },
  { id: 77, src: g77, caption: "Memory 77" },
  { id: 78, src: g78, caption: "Memory 78" },
  { id: 79, src: g79, caption: "Memory 79" },
  { id: 80, src: g80, caption: "Memory 80" },
  { id: 81, src: g81, caption: "Memory 81" },
  { id: 82, src: g82, caption: "Memory 82" },
  { id: 83, src: g83, caption: "Memory 83" },
  { id: 84, src: g84, caption: "Memory 84" },
  { id: 85, src: g85, caption: "Memory 85" },
  { id: 86, src: g86, caption: "Memory 86" },
  { id: 87, src: g87, caption: "Memory 87" },
];


  /* ---------- Mobile Detection ---------- */
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  /* ---------- Preload Images ---------- */
  useEffect(() => {
    galleryImages.forEach((img) => {
      const image = new Image();
      image.src = img.src;
      image.onload = () =>
        setLoadedImages((p) => ({ ...p, [img.id]: true }));
    });
  }, []);

  /* ---------- Keyboard Navigation ---------- */
  useEffect(() => {
    const handleKey = (e) => {
      if (!selectedImage) return;
      const index = galleryImages.findIndex(
        (i) => i.id === selectedImage.id
      );
      if (e.key === "ArrowRight")
        setSelectedImage(galleryImages[(index + 1) % galleryImages.length]);
      if (e.key === "ArrowLeft")
        setSelectedImage(
          galleryImages[(index - 1 + galleryImages.length) % galleryImages.length]
        );
      if (e.key === "Escape") setSelectedImage(null);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [selectedImage]);

  /* ---------- Touch Swipe ---------- */
  const onTouchStart = (e) =>
    setTouchStart(e.targetTouches[0].clientX);

  const onTouchEnd = (e) => {
    if (!touchStart || !selectedImage) return;
    const delta = touchStart - e.changedTouches[0].clientX;
    const index = galleryImages.findIndex(
      (i) => i.id === selectedImage.id
    );
    if (delta > 50)
      setSelectedImage(galleryImages[(index + 1) % galleryImages.length]);
    if (delta < -50)
      setSelectedImage(
        galleryImages[(index - 1 + galleryImages.length) % galleryImages.length]
      );
    setTouchStart(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header */}
      <div className="pt-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Memory Gallery
        </h1>
        <p className="text-gray-600 mt-3">
          Simple memories, lasting impressions
        </p>
      </div>

      {/* Gallery */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((img) => (
          <div
            key={img.id}
            onClick={() => setSelectedImage(img)}
            className="relative group cursor-pointer rounded-xl overflow-hidden shadow-lg bg-white"
          >
            {!loadedImages[img.id] && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                <div className="h-8 w-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
              </div>
            )}
            <img
              src={img.src}
              alt={img.caption}
              className="w-full aspect-square object-cover group-hover:scale-110 transition duration-700"
            />
            <div className="absolute bottom-0 w-full bg-black/70 text-white text-sm p-2 text-center">
              {img.caption}
            </div>
          </div>
        ))}
      </div>

      {/* ---------- LIGHTBOX ---------- */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <img
              src={selectedImage.src}
              alt={selectedImage.caption}
              className="w-full max-h-[65vh] sm:max-h-[70vh] md:max-h-[80vh] object-contain rounded-lg"
            />

            {/* Caption */}
            <p className="text-white text-center mt-4 text-lg">
              {selectedImage.caption}
            </p>

            {/* Desktop Arrows */}
            {!isMobile && (
              <>
                <button
                  onClick={() => {
                    const i = galleryImages.findIndex(
                      (x) => x.id === selectedImage.id
                    );
                    setSelectedImage(
                      galleryImages[
                        (i - 1 + galleryImages.length) %
                          galleryImages.length
                      ]
                    );
                  }}
                  className="absolute left-6 top-1/2 text-white text-3xl"
                >
                  ‹
                </button>

                <button
                  onClick={() => {
                    const i = galleryImages.findIndex(
                      (x) => x.id === selectedImage.id
                    );
                    setSelectedImage(
                      galleryImages[(i + 1) % galleryImages.length]
                    );
                  }}
                  className="absolute right-6 top-1/2 text-white text-3xl"
                >
                  ›
                </button>
              </>
            )}

            {/* Mobile Bottom Buttons */}
            {isMobile && (
              <div className="flex gap-4 mt-6">
                <button
                  onClick={() => {
                    const i = galleryImages.findIndex(
                      (x) => x.id === selectedImage.id
                    );
                    setSelectedImage(
                      galleryImages[
                        (i - 1 + galleryImages.length) %
                          galleryImages.length
                      ]
                    );
                  }}
                  className="flex-1 py-3 bg-white rounded-full font-semibold"
                >
                  ⬅ Previous
                </button>

                <button
                  onClick={() => {
                    const i = galleryImages.findIndex(
                      (x) => x.id === selectedImage.id
                    );
                    setSelectedImage(
                      galleryImages[(i + 1) % galleryImages.length]
                    );
                  }}
                  className="flex-1 py-3 bg-white rounded-full font-semibold"
                >
                  Next ➡
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default GallerySection;
