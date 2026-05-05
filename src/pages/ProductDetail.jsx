import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Package,
  Shield,
  Sparkles,
  AlertTriangle,
  Loader2,
} from 'lucide-react';
import { getProductById, getAllProducts } from '../data/products';
import { useState, useEffect } from 'react';
import ImageCarousel from '../components/ImageCarousel';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Simulate a brief loading state for smooth UX
    setLoading(true);
    setError(false);

    const timer = setTimeout(() => {
      const found = getProductById(id);
      if (found) {
        setProduct(found);
      } else {
        setError(true);
      }
      setLoading(false);
    }, 150);

    return () => clearTimeout(timer);
  }, [id]);

  // --- Loading State ---
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center gap-4"
        >
          <Loader2
            size={40}
            className="text-blue-900 animate-spin"
          />
          <p className="text-slate-500 font-medium">Loading product...</p>
        </motion.div>
      </div>
    );
  }

  // --- Error / Not Found State ---
  if (error || !product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-md"
        >
          <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-red-50 flex items-center justify-center">
            <AlertTriangle size={36} className="text-red-500" />
          </div>
          <h1 className="text-2xl font-extrabold text-slate-900 mb-3">
            Product Not Found
          </h1>
          <p className="text-slate-500 mb-8 leading-relaxed">
            Sorry, the product you're looking for doesn't exist or may have been
            removed from our catalog.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => navigate(-1)}
              className="px-6 py-3 bg-slate-100 text-slate-700 font-semibold rounded-xl hover:bg-slate-200 transition-colors inline-flex items-center gap-2 justify-center"
            >
              <ArrowLeft size={16} />
              Go Back
            </button>
            <Link
              to="/products"
              className="px-6 py-3 bg-blue-900 text-white font-semibold rounded-xl hover:bg-blue-800 transition-colors inline-flex items-center gap-2 justify-center"
            >
              <Package size={16} />
              Browse Products
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  // Get related products (all except current)
  const allProducts = getAllProducts();
  const relatedProducts = allProducts.filter((p) => p.id !== product.id);

  return (
    <div className="w-full">
      {/* ========== PAGE HERO ========== */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-blue-950 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950"></div>
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-green-500 rounded-full blur-[200px] opacity-10"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-400 rounded-full blur-[150px] opacity-10"></div>
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <nav className="flex items-center gap-2 text-sm">
              <Link
                to="/"
                className="text-blue-300/70 hover:text-white transition-colors"
              >
                Home
              </Link>
              <span className="text-blue-400/40">/</span>
              <Link
                to="/products"
                className="text-blue-300/70 hover:text-white transition-colors"
              >
                Products
              </Link>
              <span className="text-blue-400/40">/</span>
              <span className="text-green-300 font-medium">{product.name}</span>
            </nav>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-300 text-xs font-bold uppercase tracking-widest mb-6">
              <Sparkles size={12} />
              Product Details
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-5 leading-tight">
              {product.name}
            </h1>
            <p className="text-lg lg:text-xl text-blue-200/70 max-w-2xl leading-relaxed">
              {product.description}
            </p>
          </motion.div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
          >
            <path
              d="M0 60L1440 60L1440 30C1200 0 960 15 720 30C480 45 240 60 0 30L0 60Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* ========== PRODUCT DETAIL CONTENT ========== */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-start">
            {/* Product Image Carousel */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="w-full lg:w-1/2 relative lg:sticky lg:top-28"
            >
              <div className="absolute -inset-3 bg-gradient-to-br from-blue-900 to-blue-800 rounded-3xl transform rotate-1 opacity-80"></div>
              <div className="absolute -inset-3 bg-gradient-to-tr from-green-600/20 to-transparent rounded-3xl transform rotate-1"></div>
              <div className="relative z-10">
                <ImageCarousel
                  images={product.images || [{ src: product.image, alt: product.alt }]}
                  autoplaySpeed={5000}
                />
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="w-full lg:w-1/2"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-800 text-xs font-bold uppercase tracking-widest mb-6">
                <Shield size={12} />
                Premium Quality
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-blue-900 mb-6 tracking-tight">
                {product.name}
              </h2>

              <p className="text-base lg:text-lg text-slate-600 leading-relaxed mb-8">
                {product.fullDescription}
              </p>

              {/* Specifications */}
              <div className="mb-8">
                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">
                  Key Specifications
                </h3>
                <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                  {product.specs.map((spec, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2.5 bg-slate-50 border border-slate-100 px-4 py-2.5 rounded-xl"
                    >
                      <CheckCircle2
                        size={16}
                        className="text-green-600 flex-shrink-0"
                      />
                      <span className="text-sm font-semibold text-slate-700">
                        {spec}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div className="mb-10">
                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">
                  Applications
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.applications.map((app, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + i * 0.08 }}
                      className="flex items-center gap-3 p-3 rounded-xl bg-green-50/60 border border-green-100/80"
                    >
                      <div className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0"></div>
                      <span className="text-sm font-medium text-slate-700">
                        {app}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2.5 px-8 py-4 bg-green-600 text-white font-bold rounded-xl hover:bg-green-500 transition-all duration-300 shadow-xl shadow-green-600/25 hover:shadow-2xl hover:shadow-green-500/30 hover:-translate-y-0.5"
              >
                Request a Quote
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== RELATED PRODUCTS ========== */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-800 text-xs font-bold uppercase tracking-widest mb-4">
              Explore More
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 tracking-tight">
              Other Products
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {relatedProducts.slice(0, 3).map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: idx * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <Link
                  to={`/product/${item.id}`}
                  className="group rounded-2xl overflow-hidden bg-white border border-slate-100 hover:shadow-2xl hover:shadow-slate-200/60 transition-all duration-500 hover:-translate-y-1 flex flex-col h-full block"
                >
                  <div className="relative h-52 sm:h-56 overflow-hidden bg-slate-100">
                    <img
                      src={item.image}
                      alt={item.alt}
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
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-900 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed flex-grow">
                      {item.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link
              to="/products"
              className="group inline-flex items-center gap-2 text-green-700 font-bold hover:text-green-600 transition-colors pb-1 border-b-2 border-green-200 hover:border-green-500"
            >
              View All Products
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ========== BOTTOM CTA ========== */}
      <section className="py-16 lg:py-20 bg-blue-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-green-500 rounded-full blur-[200px] opacity-10 -translate-y-1/2 translate-x-1/3"></div>
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        ></div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 tracking-tight">
              Interested in {product.name}?
            </h2>
            <p className="text-lg text-blue-200/80 mb-8 max-w-xl mx-auto">
              Contact us today to discuss your requirements, request samples, or
              get a custom quote.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2.5 px-10 py-5 bg-green-600 text-white text-lg font-bold rounded-xl hover:bg-green-500 transition-all duration-300 shadow-xl shadow-green-600/25 hover:shadow-2xl hover:shadow-green-500/30 hover:-translate-y-0.5"
            >
              Get in Touch
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
