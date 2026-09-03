"use client";

import { useState, useRef, useEffect } from "react";
import { Play, ZoomIn, X, ChevronLeft, ChevronRight, Volume2, VolumeX } from "lucide-react";
import Image from "next/image";
import gallery1 from "@/images/products/gellary-1.jpg";
import gallery2 from "@/images/products/gallery_2.jpg";
import gallery3 from "@/images/products/gallery_3.jpg";
import gallery4 from "@/images/products/gallery_4.jpg";
import gallery5 from "@/images/products/gallery_5.jpg";
import gallery6 from "@/images/products/gallery_6.jpg";

const photos = [
  { title: "Residential Courtyard", src: gallery1 },
  { title: "Commercial Driveway", src: gallery2 },
  { title: "Garden Walkway", src: gallery3 },
  { title: "Heavy Duty Parking", src: gallery4 },
  { title: "Modern Patio", src: gallery5 },
  { title: "Industrial Estate", src: gallery6 },
];

function VideoPlayer({ src, poster }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const animationRef = useRef(null);

  const toggleMute = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  };

  const updateProgress = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const total = videoRef.current.duration;
      setProgress((current / total) * 100 || 0);
    }
    animationRef.current = requestAnimationFrame(updateProgress);
  };

  const handleProgressClick = (e) => {
    e.stopPropagation();
    if (videoRef.current && videoRef.current.duration) {
      const rect = e.currentTarget.getBoundingClientRect();
      const pos = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      videoRef.current.currentTime = pos * videoRef.current.duration;
      setProgress(pos * 100);
    }
  };

  useEffect(() => {
    if (isPlaying) {
      animationRef.current = requestAnimationFrame(updateProgress);
    } else if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isPlaying]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden && videoRef.current) {
        videoRef.current.pause();
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  return (
    <div className="relative w-full aspect-[9/16] bg-black rounded-xl overflow-hidden shadow-lg border border-slate-200 group cursor-pointer" onClick={togglePlay}>
      <video 
        ref={videoRef}
        className="w-full h-full object-cover relative z-10" 
        preload="metadata"
        poster={poster}
        onPlay={(e) => {
          setIsPlaying(true);
          document.querySelectorAll('video').forEach((v) => {
            if (v !== e.target) v.pause();
          });
        }}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
        playsInline
        loop
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Center Play Button Overlay */}
      <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 z-20 ${isPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100 bg-black/40'}`}>
        <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg border border-white/30">
          <Play className="w-8 h-8 text-white ml-1 fill-white" />
        </div>
      </div>

      {/* Bottom gradient overlay to ensure progress bar is always visible */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 to-transparent pointer-events-none transition-opacity duration-300 z-20" />

      {/* Mute Button */}
      <button 
        onClick={toggleMute}
        className="absolute bottom-6 right-3 z-40 p-2 rounded-full bg-black/40 text-white backdrop-blur hover:bg-black/60 transition-colors opacity-0 group-hover:opacity-100"
      >
        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
      </button>

      {/* Professional Progress Bar Area */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-12 flex items-end group/progress z-30" 
        onClick={handleProgressClick}
      >
        <div className="w-full h-1.5 bg-white/30 group-hover/progress:h-2.5 transition-all duration-200 relative">
          <div 
            className="h-full bg-[#FFD100]" 
            style={{ width: `${progress}%` }}
          />
          <div 
            className="absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white rounded-full shadow-md opacity-0 group-hover/progress:opacity-100 transition-opacity" 
            style={{ left: `calc(${progress}% - 7px)` }} 
          />
        </div>
      </div>
    </div>
  );
}

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  
  const nextImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };
  
  const prevImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  return (
    <div className="flex flex-col bg-slate-50 min-h-screen">
      <section className="bg-slate-900 text-white py-20 text-center">
        <h1 className="text-5xl font-poppins font-bold mb-4">Project Gallery & Installations</h1>
        <p className="text-slate-300 text-lg max-w-2xl mx-auto">See how our premium interlocks transform ordinary spaces into elegant, highly durable landscapes.</p>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-poppins font-bold text-slate-900 mb-8 border-b pb-4">Instagram Video Reels</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            <VideoPlayer src="https://res.cloudinary.com/l3e3g3gn/video/upload/v1788463950/reel1.mp4" poster={gallery1.src} />
            <VideoPlayer src="https://res.cloudinary.com/l3e3g3gn/video/upload/v1788464000/reel2.mp4" poster={gallery2.src} />
            <VideoPlayer src="https://res.cloudinary.com/l3e3g3gn/video/upload/v1788464043/reel3.mp4" poster={gallery3.src} />
          </div>

          <h2 className="text-3xl font-poppins font-bold text-slate-900 mb-8 border-b pb-4">Installation Photos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((item, idx) => (
              <div key={idx} onClick={() => openLightbox(idx)} className="group relative h-80 rounded-xl overflow-hidden cursor-pointer shadow-md">
                <Image src={item.src} alt={item.title} fill placeholder="blur" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 ease-in-out"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex justify-between items-center text-white">
                  <div>
                    <h4 className="font-bold text-lg font-poppins">{item.title}</h4>
                    <p className="text-sm text-slate-300">Malappuram, Kerala</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                    <ZoomIn className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fullscreen Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-300" onClick={closeLightbox}>
          <button className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50 p-2" onClick={closeLightbox}>
            <X className="w-8 h-8" />
          </button>
          
          <button className="absolute left-4 md:left-10 text-white/70 hover:text-white transition-colors z-50 p-2" onClick={prevImage}>
            <ChevronLeft className="w-12 h-12 md:w-16 md:h-16" />
          </button>
          
          <div className="relative w-full h-full max-w-6xl max-h-[85vh] flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <div className="relative w-full h-full">
              <Image src={photos[lightboxIndex].src} alt={photos[lightboxIndex].title} fill className="object-contain" />
            </div>
            <div className="absolute bottom-[-40px] text-center text-white">
              <h3 className="text-xl font-poppins font-medium tracking-wide">{photos[lightboxIndex].title}</h3>
            </div>
          </div>
          
          <button className="absolute right-4 md:right-10 text-white/70 hover:text-white transition-colors z-50 p-2" onClick={nextImage}>
            <ChevronRight className="w-12 h-12 md:w-16 md:h-16" />
          </button>
        </div>
      )}
    </div>
  );
}
