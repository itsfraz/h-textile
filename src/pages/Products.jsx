import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getAllProducts } from '../data/products';
import ImageCarousel from '../components/ImageCarousel';

const categories = getAllProducts();

const Products = () => {
  return (
    <div className="w-full">
      {/* ========== PAGE HERO ========== */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-blue-950 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950"></div>
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-green-500 rounded-full blur-[200px] opacity-10"></div>
        <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-blue-400 rounded-full blur-[150px] opacity-10"></div>
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-green-300 text-xs font-bold uppercase tracking-widest mb-6">
              Product Catalog
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-5 leading-tight">
              Our Product Categories
            </h1>
            <p className="text-lg lg:text-xl text-blue-200/70 max-w-2xl mx-auto leading-relaxed">
              Explore our diverse array of premium industrial textiles, precision-engineered to meet stringent industrial specifications.
            </p>
          </motion.div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60L1440 60L1440 30C1200 0 960 15 720 30C480 45 240 60 0 30L0 60Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* ========== CATEGORIES LIST ========== */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 lg:space-y-28">
            {categories.map((category, index) => (
              <motion.div 
                key={category.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center`}
              >
                {/* Image Carousel */}
                <div className="w-full lg:w-1/2 relative">
                  <div className={`absolute -inset-3 bg-gradient-to-br ${index % 2 === 0 ? 'from-blue-900 to-blue-800' : 'from-green-700 to-green-600'} rounded-3xl transform ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'} opacity-80`}></div>
                  <div className="relative z-10">
                    <ImageCarousel
                      images={category.images || [{ src: category.image, alt: category.alt }]}
                      autoplaySpeed={6000}
                    />
                  </div>
                </div>
                
                {/* Content */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 w-max px-4 py-1.5 rounded-full bg-blue-50 text-blue-800 text-xs font-bold uppercase tracking-widest mb-5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                    Category 0{index + 1}
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-blue-900 mb-5 tracking-tight">{category.name}</h2>
                  <p className="text-base lg:text-lg text-slate-600 leading-relaxed mb-6">
                    {category.fullDescription || category.description}
                  </p>

                  {/* Specs */}
                  <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-8">
                    {category.specs.map((spec, i) => (
                      <div key={i} className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-lg">
                        <CheckCircle2 size={14} className="text-green-600 flex-shrink-0" />
                        <span className="text-sm font-medium text-slate-700">{spec}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      to={`/product/${category.id}`}
                      className="group inline-flex items-center gap-2 px-6 py-3 bg-blue-900 text-white font-bold rounded-xl hover:bg-blue-800 transition-all duration-300 shadow-lg shadow-blue-900/20 hover:shadow-xl hover:-translate-y-0.5 w-max"
                    >
                      <Eye size={16} />
                      View Full Details
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      to="/contact"
                      className="group inline-flex items-center gap-2 text-green-700 font-bold hover:text-green-600 transition-colors w-max pb-1 border-b-2 border-green-200 hover:border-green-500 self-center"
                    >
                      Enquire Specifications
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== BOTTOM CTA ========== */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-900 mb-4 tracking-tight">
              Can't find what you need?
            </h2>
            <p className="text-lg text-slate-500 mb-8 max-w-xl mx-auto">
              We also manufacture custom textile solutions. Tell us your requirements and we'll deliver.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2.5 px-8 py-4 bg-blue-900 text-white font-bold rounded-xl hover:bg-blue-800 transition-all duration-300 shadow-lg shadow-blue-900/20 hover:shadow-xl hover:-translate-y-0.5"
            >
              Request Custom Quote
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;
