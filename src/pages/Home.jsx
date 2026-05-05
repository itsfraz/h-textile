import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Box, Target, Shield, Truck, CheckCircle2, Factory, Sparkles, Layers, Zap } from 'lucide-react';
import { useRef } from 'react';
import AboutUsImg from '../assets/AboutUS.png';
import { getAllProducts } from '../data/products';
import Testimonials from '../components/Testimonials';

const products = getAllProducts();

const features = [
  {
    icon: Shield,
    title: 'Premium Quality',
    description: 'Sourced from the best materials for unmatched durability and longevity.',
    accent: 'from-blue-600 to-blue-800',
  },
  {
    icon: Target,
    title: 'Precision Engineering',
    description: 'Woven for industrial-grade strength meeting rigorous specifications.',
    accent: 'from-green-600 to-green-800',
  },
  {
    icon: Truck,
    title: 'Reliable Supply',
    description: 'Punctual delivery logistics meeting bulk demands on schedule.',
    accent: 'from-blue-700 to-blue-900',
  },
  {
    icon: Layers,
    title: 'Custom Solutions',
    description: 'Bespoke textile manufacturing tailored to your exact specifications.',
    accent: 'from-green-700 to-green-800',
  },
  {
    icon: Zap,
    title: 'Fast Turnaround',
    description: 'Rapid production and dispatch for time-sensitive industrial projects.',
    accent: 'from-blue-600 to-blue-900',
  },
  {
    icon: Factory,
    title: 'In-House Manufacturing',
    description: 'End-to-end production under one roof ensures consistent quality control.',
    accent: 'from-green-600 to-green-700',
  },
];

const stats = [
  { value: '25+', label: 'Years Experience' },
  { value: '500+', label: 'Happy Clients' },
  { value: '50+', label: 'Product Varieties' },
  { value: '100%', label: 'Quality Assured' },
];

const Home = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  return (
    <div className="w-full">
      {/* ========== HERO SECTION ========== */}
      <section ref={heroRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden" id="hero">
        {/* Parallax background image */}
        <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000&q=80"
            alt="Modern textile manufacturing facility with industrial looms"
            className="w-full h-[120%] object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/95 via-blue-900/85 to-blue-800/70"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 to-transparent"></div>
        </motion.div>

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 z-[1] opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        ></div>

        {/* Floating decorative elements */}
        <div className="absolute top-1/4 right-[10%] w-20 h-20 rounded-2xl bg-green-500/10 border border-green-500/10 animate-float-slow z-[2] hidden lg:block"></div>
        <div className="absolute bottom-1/3 left-[8%] w-14 h-14 rounded-xl bg-blue-400/10 border border-blue-400/10 animate-float z-[2] hidden lg:block"></div>
        <div className="absolute top-1/3 left-[15%] w-3 h-3 rounded-full bg-green-400/40 animate-float-fast z-[2] hidden lg:block"></div>
        <div className="absolute bottom-1/4 right-[20%] w-4 h-4 rounded-full bg-blue-300/30 animate-float z-[2] hidden lg:block"></div>
        
        <motion.div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-0" style={{ y: textY }}>
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left content */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:w-3/5"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass text-green-300 font-semibold text-sm mb-8"
              >
                <Sparkles size={14} className="text-green-400" />
                Quality Industrial Fabrics You Can Trust
              </motion.div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
                Premium Industrial{' '}
                <span className="block mt-2 text-gradient">
                  Textiles & Fabrics
                </span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-blue-100/80 mb-10 max-w-xl leading-relaxed">
                High-quality manufacturing and supply of industrial fabrics, tents, tarpaulins, and specialized canvases tailored for diverse industrial needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/products"
                  className="group px-8 py-4 bg-green-600 text-white font-bold rounded-xl hover:bg-green-500 transition-all duration-300 flex justify-center items-center gap-2.5 shadow-xl shadow-green-600/25 hover:shadow-2xl hover:shadow-green-500/30 hover:-translate-y-0.5 animate-pulse-glow"
                >
                  Explore Products
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-4 glass text-white font-semibold rounded-xl hover:bg-white/15 transition-all duration-300 flex justify-center items-center"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>

            {/* Right side — Stats cards */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="lg:w-2/5 w-full"
            >
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                    whileHover={{ scale: 1.04, y: -4 }}
                    className="glass rounded-2xl p-5 text-center cursor-default"
                  >
                    <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-blue-200/70 font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden lg:flex flex-col items-center gap-2"
        >
          <span className="text-xs text-blue-200/50 uppercase tracking-widest">Scroll</span>
          <div className="w-5 h-8 rounded-full border-2 border-blue-200/30 flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-green-400"
            />
          </div>
        </motion.div>
      </section>

      {/* ========== FEATURES SECTION ========== */}
      <section className="py-20 lg:py-28 bg-white relative" id="features">
        {/* Subtle decorative bg */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-500 rounded-full blur-[250px] opacity-[0.03]"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500 rounded-full blur-[200px] opacity-[0.03]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-800 text-xs font-bold uppercase tracking-widest mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 tracking-tight">
              Built for Industrial Excellence
            </h2>
            <p className="text-slate-500 mt-3 max-w-2xl mx-auto">
              Six pillars that make Hina Textiles the preferred choice for industry leaders.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6 }}
                className="group relative p-8 lg:p-10 rounded-2xl bg-slate-50/80 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500"
              >
                {/* Hover glow accent */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.accent} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`}></div>
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.accent} text-white flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                  <feature.icon size={26} strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-500 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== ABOUT PREVIEW SECTION ========== */}
      <section className="py-20 lg:py-28 bg-slate-50" id="about-preview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ ease: [0.16, 1, 0.3, 1] }}
              className="lg:w-1/2 relative"
            >
              {/* Decorative background shape */}
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-900 to-blue-800 rounded-3xl transform rotate-2 opacity-90"></div>
              <div className="absolute -inset-4 bg-gradient-to-tr from-green-600/20 to-transparent rounded-3xl transform rotate-2"></div>
              <img 
                src={AboutUsImg}
                alt="Inside view of a modern textile production facility with industrial looms"
                className="relative z-10 rounded-2xl shadow-2xl w-full h-[350px] sm:h-[450px] lg:h-[500px] object-cover"
                loading="lazy"
              />
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="absolute -bottom-6 -right-2 sm:right-6 z-20 glass-light rounded-2xl shadow-xl p-4 sm:p-5 flex items-center gap-3"
              >
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                  <Factory size={24} className="text-green-700" />
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-blue-900">25+</div>
                  <div className="text-xs text-slate-500 font-medium">Years of Excellence</div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ ease: [0.16, 1, 0.3, 1] }}
              className="lg:w-1/2"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-green-50 text-green-700 text-xs font-bold uppercase tracking-widest mb-5">
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-900 mb-6 tracking-tight leading-tight">
                Trusted Manufacturing from Kanpur
              </h2>
              <p className="text-lg text-slate-600 mb-5 leading-relaxed">
                Hina Textiles is a reliable and leading textile manufacturer and supplier based in Kanpur. We are dedicated to delivering high-quality goods for rigorous industrial needs.
              </p>

              {/* Checklist */}
              <div className="space-y-3 mb-8">
                {['State-of-the-art infrastructure', 'Expert team of textile engineers', 'On-time delivery guarantee'].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 size={18} className="text-green-600 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>

              <Link
                to="/about"
                className="group inline-flex items-center gap-2 text-green-700 font-bold hover:text-green-600 transition-colors hover-underline"
              >
                Read more about us
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== PRODUCTS GRID ========== */}
      <section className="py-20 lg:py-28 bg-white relative" id="products-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-800 text-xs font-bold uppercase tracking-widest mb-4">
              Our Categories
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4 tracking-tight">Our Core Products</h2>
            <p className="text-lg text-slate-500">
              Discover our comprehensive range of high-performance textile solutions tailored for industrial requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {products.map((product, idx) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6 }}
              >
                <Link
                  to={`/product/${product.id}`}
                  className="group rounded-2xl overflow-hidden bg-white border border-slate-100 hover:shadow-2xl hover:shadow-slate-200/60 transition-all duration-500 flex flex-col h-full block"
                >
                  <div className="relative h-56 sm:h-60 overflow-hidden bg-slate-100">
                    <img 
                      src={product.image} 
                      alt={product.alt}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                      <span className="text-white text-sm font-semibold flex items-center gap-2">
                        View Details <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-900 transition-colors">{product.name}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed flex-grow">{product.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-14 text-center"
          >
            <Link
              to="/products"
              className="group inline-flex items-center gap-2.5 px-8 py-4 bg-blue-900 text-white font-bold rounded-xl hover:bg-blue-800 transition-all duration-300 shadow-lg shadow-blue-900/20 hover:shadow-xl hover:-translate-y-0.5"
            >
              <Box size={18} />
              View Entire Catalog
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ========== TESTIMONIALS ========== */}
      <Testimonials />

      {/* ========== CTA SECTION ========== */}
      <section className="py-20 lg:py-28 bg-blue-950 relative overflow-hidden" id="cta">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500 rounded-full blur-[200px] opacity-10 -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500 rounded-full blur-[150px] opacity-10 translate-y-1/2 -translate-x-1/3"></div>
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        ></div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full glass text-green-300 text-xs font-bold uppercase tracking-widest mb-6">
              Ready to get started?
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
              Need a Custom Quote?
            </h2>
            <p className="text-lg sm:text-xl text-blue-200/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Reach out to our experts and let us fulfill your industrial fabric requirements efficiently and on time.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2.5 px-10 py-5 bg-green-600 text-white text-lg font-bold rounded-xl hover:bg-green-500 transition-all duration-300 shadow-xl shadow-green-600/25 hover:shadow-2xl hover:shadow-green-500/30 hover:-translate-y-0.5 animate-pulse-glow"
            >
              Get in Touch Today
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
