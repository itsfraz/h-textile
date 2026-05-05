import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Procurement Head',
    company: 'Ashoka Industries Pvt. Ltd.',
    text: 'Hina Textiles has been our go-to supplier for industrial fabrics for over 8 years. Their quality consistency and on-time delivery make them an invaluable partner. The tensile strength of their products is unmatched in the market.',
    rating: 5,
    initials: 'RK',
    color: 'from-blue-600 to-blue-800',
  },
  {
    name: 'Priya Sharma',
    role: 'Operations Manager',
    company: 'GreenField Agro Solutions',
    text: 'We switched to Hina Textiles for our tarpaulin requirements and the difference in quality is remarkable. Their UV-stabilized material outlasts everything else we have tried. Truly premium products at competitive prices.',
    rating: 5,
    initials: 'PS',
    color: 'from-green-600 to-green-800',
  },
  {
    name: 'Anil Mehta',
    role: 'Plant Director',
    company: 'Mehta Chemicals Ltd.',
    text: 'The chemical-resistant canvas from Hina Textiles has exceeded our safety requirements. Their team understood our needs perfectly and delivered custom solutions within the promised timeline. Highly recommended.',
    rating: 5,
    initials: 'AM',
    color: 'from-blue-700 to-blue-900',
  },
  {
    name: 'Sunita Verma',
    role: 'Supply Chain Lead',
    company: 'National Construction Corp.',
    text: 'Reliable, professional, and consistently high quality — that defines Hina Textiles. Their belting cloth has dramatically improved our conveyor systems uptime. A trusted partnership we value deeply.',
    rating: 5,
    initials: 'SV',
    color: 'from-green-700 to-green-800',
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const count = testimonials.length;

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % count);
  }, [count]);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + count) % count);
  }, [count]);

  const goTo = (idx) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? 80 : -80, opacity: 0, scale: 0.96 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir) => ({ x: dir > 0 ? -80 : 80, opacity: 0, scale: 0.96 }),
  };

  const t = testimonials[current];

  return (
    <section className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden" id="testimonials">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-green-500 rounded-full blur-[200px] opacity-[0.04]"></div>
      <div className="absolute bottom-0 right-1/4 w-60 h-60 bg-blue-500 rounded-full blur-[160px] opacity-[0.04]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-green-50 text-green-700 text-xs font-bold uppercase tracking-widest mb-4">
            Client Voices
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 tracking-tight">
            Trusted by Industry Leaders
          </h2>
          <p className="text-slate-500 mt-3 max-w-xl mx-auto">
            See what our valued clients have to say about our quality and service.
          </p>
        </motion.div>

        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Testimonial card */}
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="testimonial-card bg-white rounded-3xl p-8 sm:p-10 lg:p-12 border border-slate-100 relative"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-8 text-slate-100">
                <Quote size={56} strokeWidth={1} />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={18} className="text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-lg lg:text-xl text-slate-700 leading-relaxed mb-8 relative z-10 font-medium italic">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className={`w-13 h-13 rounded-2xl bg-gradient-to-br ${t.color} text-white flex items-center justify-center font-bold text-lg shadow-lg flex-shrink-0`}
                  style={{ width: 52, height: 52 }}
                >
                  {t.initials}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base">{t.name}</h4>
                  <p className="text-sm text-slate-500">
                    {t.role} · <span className="text-green-700 font-medium">{t.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav buttons */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-14 w-11 h-11 rounded-xl bg-white border border-slate-200 shadow-lg text-slate-600 flex items-center justify-center hover:bg-blue-900 hover:text-white hover:border-blue-900 transition-all duration-300 z-20"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-14 w-11 h-11 rounded-xl bg-white border border-slate-200 shadow-lg text-slate-600 flex items-center justify-center hover:bg-blue-900 hover:text-white hover:border-blue-900 transition-all duration-300 z-20"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2.5 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              className={`rounded-full transition-all duration-400 ${
                idx === current
                  ? 'w-8 h-2.5 bg-green-600'
                  : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
