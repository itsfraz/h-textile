import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Pause, Play, Maximize2 } from 'lucide-react';

/**
 * ImageCarousel — A premium, fully responsive image slider.
 *
 * Features:
 *  • Autoplay with adjustable speed (pausable)
 *  • Next / Previous navigation buttons
 *  • Touch & swipe support for mobile (pointer events)
 *  • Thumbnail strip with active indicator
 *  • Lazy-loaded images for performance
 *  • Keyboard navigation (← →)
 *  • Fullscreen lightbox mode
 *  • Smooth framer-motion transitions
 *
 * @param {{ images: {src:string, alt:string}[], autoplaySpeed?: number }} props
 */
const ImageCarousel = ({ images = [], autoplaySpeed = 5000 }) => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState({});
  const containerRef = useRef(null);

  // --- Touch / Swipe state ---
  const pointerStart = useRef(null);
  const pointerDelta = useRef(0);

  const count = images.length;

  // Navigate to next or previous slide
  const goTo = useCallback(
    (index) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(((index % count) + count) % count);
    },
    [current, count],
  );

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % count);
  }, [count]);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + count) % count);
  }, [count]);

  // --- Autoplay ---
  useEffect(() => {
    if (isPaused || count <= 1) return;
    const timer = setInterval(next, autoplaySpeed);
    return () => clearInterval(timer);
  }, [isPaused, next, autoplaySpeed, count]);

  // --- Keyboard navigation ---
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'Escape' && isFullscreen) setIsFullscreen(false);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [prev, next, isFullscreen]);

  // --- Pointer / Swipe handlers ---
  const onPointerDown = (e) => {
    pointerStart.current = e.clientX;
    pointerDelta.current = 0;
  };
  const onPointerMove = (e) => {
    if (pointerStart.current === null) return;
    pointerDelta.current = e.clientX - pointerStart.current;
  };
  const onPointerUp = () => {
    if (pointerStart.current === null) return;
    const threshold = 50;
    if (pointerDelta.current < -threshold) next();
    else if (pointerDelta.current > threshold) prev();
    pointerStart.current = null;
    pointerDelta.current = 0;
  };

  // Track loaded images
  const handleImageLoad = (idx) => {
    setImagesLoaded((prev) => ({ ...prev, [idx]: true }));
  };

  if (!images || images.length === 0) return null;

  // Animation variants for slide transition
  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir > 0 ? '-100%' : '100%',
      opacity: 0,
    }),
  };

  // --- Fullscreen Lightbox ---
  if (isFullscreen) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center"
        onClick={() => setIsFullscreen(false)}
      >
        {/* Close hint */}
        <div className="absolute top-6 right-6 text-white/50 text-sm font-medium z-10">
          Press ESC or click to close
        </div>

        <div
          className="relative w-full h-full flex items-center justify-center p-4 sm:p-10"
          onClick={(e) => e.stopPropagation()}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          style={{ touchAction: 'pan-y' }}
        >
          <AnimatePresence custom={direction} mode="wait">
            <motion.img
              key={`fullscreen-${current}`}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              src={images[current].src}
              alt={images[current].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl select-none"
              draggable={false}
            />
          </AnimatePresence>

          {/* Fullscreen nav buttons */}
          {count > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/20 transition-all"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={next}
                className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/20 transition-all"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}

          {/* Fullscreen dots */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                className={`rounded-full transition-all duration-300 ${
                  idx === current
                    ? 'w-8 h-2.5 bg-white'
                    : 'w-2.5 h-2.5 bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
          </div>

          {/* Close button */}
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-6 left-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/20 transition-all text-lg font-bold"
            aria-label="Close fullscreen"
          >
            ✕
          </button>
        </div>
      </motion.div>
    );
  }

  // --- Main Carousel ---
  return (
    <div ref={containerRef} className="carousel-root w-full select-none">
      {/* Main image container */}
      <div
        className="relative rounded-2xl overflow-hidden bg-slate-100 h-[300px] sm:h-[400px] lg:h-[500px] shadow-2xl"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={{ touchAction: 'pan-y' }}
      >
        {/* Loading skeleton */}
        {!imagesLoaded[current] && (
          <div className="absolute inset-0 z-10 carousel-skeleton" />
        )}

        {/* Slide */}
        <AnimatePresence custom={direction} mode="wait">
          <motion.img
            key={`slide-${current}`}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
            src={images[current].src}
            alt={images[current].alt}
            loading={current === 0 ? 'eager' : 'lazy'}
            onLoad={() => handleImageLoad(current)}
            className="absolute inset-0 w-full h-full object-cover select-none"
            draggable={false}
          />
        </AnimatePresence>

        {/* Gradient overlay (bottom) */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent pointer-events-none z-20" />

        {/* Image counter badge */}
        <div className="absolute top-4 left-4 z-30 px-3 py-1.5 rounded-full bg-black/30 backdrop-blur-md text-white text-xs font-semibold tracking-wide">
          {current + 1} / {count}
        </div>

        {/* Top-right controls: fullscreen + play/pause */}
        <div className="absolute top-4 right-4 z-30 flex items-center gap-2">
          {count > 1 && (
            <button
              onClick={() => setIsPaused((p) => !p)}
              className="w-9 h-9 rounded-full bg-black/30 backdrop-blur-md text-white flex items-center justify-center hover:bg-black/50 transition-all"
              aria-label={isPaused ? 'Resume autoplay' : 'Pause autoplay'}
            >
              {isPaused ? <Play size={14} /> : <Pause size={14} />}
            </button>
          )}
          <button
            onClick={() => setIsFullscreen(true)}
            className="w-9 h-9 rounded-full bg-black/30 backdrop-blur-md text-white flex items-center justify-center hover:bg-black/50 transition-all"
            aria-label="Open fullscreen"
          >
            <Maximize2 size={14} />
          </button>
        </div>

        {/* Prev / Next buttons */}
        {count > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/15 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/30 transition-all duration-300 carousel-nav-btn"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/15 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/30 transition-all duration-300 carousel-nav-btn"
              aria-label="Next image"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}

        {/* Autoplay progress bar */}
        {count > 1 && !isPaused && (
          <div className="absolute bottom-0 left-0 right-0 h-[3px] z-30">
            <motion.div
              key={`progress-${current}`}
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: autoplaySpeed / 1000, ease: 'linear' }}
              className="h-full bg-gradient-to-r from-green-400 to-green-500"
            />
          </div>
        )}
      </div>

      {/* Thumbnail strip */}
      {count > 1 && (
        <div className="mt-4 flex gap-2.5 overflow-x-auto pb-2 carousel-thumbs">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              className={`relative flex-shrink-0 rounded-xl overflow-hidden transition-all duration-300 ${
                idx === current
                  ? 'ring-2 ring-green-500 ring-offset-2 ring-offset-white scale-[1.02]'
                  : 'opacity-60 hover:opacity-90 hover:scale-[1.02]'
              }`}
              style={{ width: 80, height: 60 }}
              aria-label={`View image ${idx + 1}: ${img.alt}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover"
                draggable={false}
              />
              {/* Active thumbnail highlight overlay */}
              {idx === current && (
                <motion.div
                  layoutId="thumb-highlight"
                  className="absolute inset-0 border-2 border-green-500 rounded-xl"
                  transition={{ duration: 0.3 }}
                />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
