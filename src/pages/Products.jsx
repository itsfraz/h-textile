import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import IndustrialFabricImg from '../assets/Industrial Fabric.png';

const categories = [
  {
    title: 'Industrial Fabrics',
    image: IndustrialFabricImg,
    alt: 'Rolls of woven industrial fabric stacked in a textile warehouse',
    description: 'Our industrial fabrics offer rugged performance, high tensile strength, and excellent resilience. Suitable for manufacturing bags, covers, and structural reinforcements that require tough, heavy-duty characteristics.',
    specs: ['High tensile strength', 'UV resistant', 'Custom widths available'],
  },
  {
    title: 'Tarpaulin & Tents',
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80',
    alt: 'Heavy-duty waterproof tarpaulin tents set up for outdoor industrial use',
    description: 'We supply high-grade tarpaulins and tents designed to secure goods and provide shelter. Fully waterproof, UV-stabilized, and tailored to endure extreme weather conditions for long-lasting protection.',
    specs: ['100% waterproof', 'UV stabilized', 'Extreme weather rated'],
  },
  {
    title: 'Cotton & Synthetic Filters',
    image: 'https://images.unsplash.com/photo-1586495985-929b1528096c?auto=format&fit=crop&w=800&q=80',
    alt: 'Close-up of finely woven cotton and synthetic filter cloth material',
    description: 'Our precision-woven cotton and synthetic filter cloths serve diverse filtration processes across chemical, pharmaceutical, and food processing plants, ensuring maximal purity, retention, and optimal flow rates.',
    specs: ['Pharmaceutical grade', 'High flow rate', 'Chemical resistant'],
  },
  {
    title: 'Belting Cloth',
    image: 'https://images.unsplash.com/photo-1565791380713-1756b9a05343?auto=format&fit=crop&w=800&q=80',
    alt: 'Industrial belting cloth material on a conveyor manufacturing line',
    description: 'Engineered for conveyor belting systems, our belting cloth resists tearing and fraying under continuous stress, offering reliable performance for conveying systems operating in harsh industrial environments.',
    specs: ['Anti-tear construction', 'Continuous stress rated', 'Custom lengths'],
  },
  {
    title: 'Grey & Chemical Canvas',
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=800&q=80',
    alt: 'Grey canvas fabric material used in chemical-resistant industrial applications',
    description: 'Specialized chemical canvas tailored to withstand corrosive substances. Ideal for safety curtains, heavy aprons, and covers in chemical plants where ordinary textiles cannot survive.',
    specs: ['Corrosion resistant', 'Chemical proof', 'Safety certified'],
  }
];

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
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2 relative group">
                  <div className={`absolute -inset-3 bg-gradient-to-br ${index % 2 === 0 ? 'from-blue-900 to-blue-800' : 'from-green-700 to-green-600'} rounded-3xl transform ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'} opacity-80`}></div>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[280px] sm:h-[350px] lg:h-[420px] bg-slate-100">
                    <img 
                      src={category.image} 
                      alt={category.alt}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    {/* Overlay gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 w-max px-4 py-1.5 rounded-full bg-blue-50 text-blue-800 text-xs font-bold uppercase tracking-widest mb-5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                    Category 0{index + 1}
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-blue-900 mb-5 tracking-tight">{category.title}</h2>
                  <p className="text-base lg:text-lg text-slate-600 leading-relaxed mb-6">
                    {category.description}
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

                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-2 text-green-700 font-bold hover:text-green-600 transition-colors w-max pb-1 border-b-2 border-green-200 hover:border-green-500"
                  >
                    Enquire Complete Specifications
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
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
