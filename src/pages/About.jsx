import { motion } from 'framer-motion';
import { ShieldCheck, Target, Award, Users, Zap, Globe, CheckCircle2 } from 'lucide-react';
import AboutUS2Img from '../assets/AboutUS2.jpeg';

const milestones = [
  { year: 'Founded', text: 'Established in Kanpur as a small textile workshop' },
  { year: 'Growth', text: 'Expanded product range to industrial-grade fabrics' },
  { year: 'Scale', text: 'Became a trusted supplier to 500+ industrial clients' },
  { year: 'Today', text: 'Leading manufacturer with state-of-the-art infrastructure' },
];

const values = [
  {
    icon: ShieldCheck,
    title: 'Quality Assurance',
    description: 'Strict quality control processes across all manufacturing stages guarantees flawless fabrics.',
    gradient: 'from-blue-600 to-blue-800',
  },
  {
    icon: Award,
    title: 'Deep Experience',
    description: 'Decades of combined expertise backing every roll of canvas and tarpaulin we produce.',
    gradient: 'from-green-600 to-green-800',
  },
  {
    icon: Users,
    title: 'Trusted by the Best',
    description: 'A reliable partner to countless industries trusting us for their heavy-duty requirements.',
    gradient: 'from-blue-700 to-blue-900',
  },
];

const About = () => {
  return (
    <div className="w-full">
      {/* ========== PAGE HERO ========== */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-blue-950 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-green-500 rounded-full blur-[200px] opacity-10"></div>
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-blue-400 rounded-full blur-[150px] opacity-10"></div>
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
              Our Story
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-5 leading-tight">
              About Hina Textiles
            </h1>
            <p className="text-lg lg:text-xl text-blue-200/70 max-w-2xl mx-auto leading-relaxed">
              Delivering excellence in industrial fabrics and textile manufacturing since our inception. Your trusted partner for rigorous industrial needs.
            </p>
          </motion.div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60L1440 60L1440 30C1200 0 960 15 720 30C480 45 240 60 0 30L0 60Z" fill="#f8f9fa"/>
          </svg>
        </div>
      </section>

      {/* ========== COMPANY OVERVIEW ========== */}
      <section className="py-16 lg:py-24 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-12 shadow-sm border border-slate-100 flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ ease: [0.16, 1, 0.3, 1] }}
              className="w-full lg:w-1/2 relative rounded-2xl overflow-hidden h-[300px] sm:h-[380px] lg:h-[420px] bg-slate-100"
            >
              <img 
                src={AboutUS2Img}
                alt="Inside Hina Textiles modern manufacturing facility with industrial looms and machinery"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ ease: [0.16, 1, 0.3, 1] }}
              className="w-full lg:w-1/2"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-800 text-xs font-bold uppercase tracking-widest mb-5">
                Who We Are
              </span>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-blue-900 mb-6 tracking-tight">Company Overview</h2>
              <p className="text-slate-600 mb-5 leading-relaxed text-base lg:text-lg">
                Based in Kanpur, Hina Textiles has built a robust reputation as a reliable and experienced manufacturer and supplier of top-tier industrial textiles, tents, tarpaulins, and specialized canvases.
              </p>
              <p className="text-slate-600 leading-relaxed text-base lg:text-lg mb-6">
                Our commitment to delivering only the best quality ensures that our products withstand rigorous industrial applications, weathering harsh environments and maintaining durability where it matters most.
              </p>

              {/* Key highlights */}
              <div className="grid grid-cols-2 gap-3">
                {['ISO Standards', 'Bulk Orders', 'Custom Weaving', 'Pan-India Delivery'].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-green-600 flex-shrink-0" />
                    <span className="text-sm font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== MISSION & VISION ========== */}
      <section className="py-16 lg:py-24 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-900 via-blue-900 to-blue-950 text-white rounded-3xl p-8 lg:p-12 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-green-500 rounded-full blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity duration-700"></div>
              <div className="absolute bottom-0 right-0 p-6 opacity-[0.04]">
                <Target size={200} />
              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                  <Target size={28} className="text-green-400" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-extrabold mb-5 tracking-tight">Our Mission</h2>
                <p className="text-blue-100/80 text-base lg:text-lg leading-relaxed">
                  To engineer and supply high-performance industrial fabrics that exceed customer expectations, driving excellence in manufacturing methodologies while ensuring cost-effective solutions and punctual delivery worldwide.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="bg-gradient-to-br from-green-700 via-green-700 to-green-800 text-white rounded-3xl p-8 lg:p-12 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-400 rounded-full blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity duration-700"></div>
              <div className="absolute bottom-0 right-0 p-6 opacity-[0.04]">
                <Award size={200} />
              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                  <Award size={28} className="text-blue-200" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-extrabold mb-5 tracking-tight">Our Vision</h2>
                <p className="text-green-100/80 text-base lg:text-lg leading-relaxed">
                  To be the most trusted and universally recognized name in the industrial textile sector globally, fostering a culture of innovation, sustainability, and uncompromising quality in every product we weave.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== JOURNEY TIMELINE ========== */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-green-50 text-green-700 text-xs font-bold uppercase tracking-widest mb-4">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 tracking-tight">
              Milestones of Growth
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((milestone, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative group"
              >
                <div className="bg-slate-50 rounded-2xl p-6 lg:p-8 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 hover:-translate-y-1 h-full">
                  <div className="text-4xl font-extrabold text-blue-900/10 group-hover:text-green-600/20 transition-colors mb-3">
                    0{idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-blue-900 mb-2">{milestone.year}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{milestone.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CORE VALUES ========== */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-800 text-xs font-bold uppercase tracking-widest mb-4">
              Our Pillars
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 tracking-tight">
              Experience, Trust, & Quality
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12 }}
                className="group bg-white rounded-2xl p-8 lg:p-10 border border-slate-100 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 hover:-translate-y-1 text-center"
              >
                <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <value.icon size={30} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-500 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== WHY CHOOSE US STRIP ========== */}
      <section className="py-16 lg:py-20 bg-blue-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950"></div>
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { icon: Zap, label: 'Fast Turnaround', value: '48h' },
              { icon: Globe, label: 'Pan-India Supply', value: '28 States' },
              { icon: Award, label: 'Quality Rating', value: '4.9★' },
              { icon: Users, label: 'Happy Clients', value: '500+' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center bg-white/5 border border-white/5 rounded-2xl p-6 lg:p-8 hover:bg-white/10 transition-all duration-300"
              >
                <stat.icon size={28} className="text-green-400 mx-auto mb-3" />
                <div className="text-2xl lg:text-3xl font-extrabold text-white mb-1">{stat.value}</div>
                <div className="text-xs lg:text-sm text-blue-200/60 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
