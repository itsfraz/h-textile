import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Clock, MessageCircle } from 'lucide-react';
import { useState } from 'react';

// Custom SVG social icons (lucide-react v1.x removed brand icons)
const FacebookIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
const TwitterIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);
const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulated submission delay
    setTimeout(() => {
      alert('Thank you for your message! Our team will reach out to you shortly.');
      setFormData({ name: '', phone: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 800);
  };

  const contactDetails = [
    {
      icon: MapPin,
      title: 'Office Location',
      lines: ['89-B, Faithful Ganj,', 'Cantt., Kanpur – 208004'],
      href: null,
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      lines: ['+91 9839035588', '+91 9336225253'],
      href: 'tel:+919839035588',
    },
    {
      icon: Mail,
      title: 'Email Us',
      lines: ['hinatex@yahoo.co.in'],
      href: 'mailto:hinatex@yahoo.co.in',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      lines: ['Mon–Fri: 9 AM – 6 PM', 'Sat: 10 AM – 4 PM'],
      href: null,
    },
  ];

  const socialLinks = [
    { icon: FacebookIcon, label: 'Facebook', href: '#' },
    { icon: TwitterIcon, label: 'Twitter', href: '#' },
    { icon: LinkedinIcon, label: 'LinkedIn', href: '#' },
  ];

  return (
    <div className="w-full">
      {/* ========== PAGE HERO ========== */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-blue-950 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-blue-950 via-blue-900 to-blue-950"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-green-500 rounded-full blur-[200px] opacity-10"></div>
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-blue-400 rounded-full blur-[150px] opacity-10"></div>
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
              Reach Out
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-5 leading-tight">
              Get in Touch
            </h1>
            <p className="text-lg lg:text-xl text-blue-200/70 max-w-2xl mx-auto leading-relaxed">
              Have a question or need a custom quote? Reach out to Hina Textiles. We're here to assist with your industrial requirements.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60L1440 60L1440 30C1200 0 960 15 720 30C480 45 240 60 0 30L0 60Z" fill="#f8f9fa"/>
          </svg>
        </div>
      </section>

      {/* ========== CONTACT CONTENT ========== */}
      <section className="py-16 lg:py-24 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-0 bg-white rounded-3xl overflow-hidden shadow-lg shadow-slate-200/50 border border-slate-100">
            
            {/* Contact Details (Left Column) */}
            <div className="lg:col-span-2 bg-linear-to-br from-blue-900 via-blue-900 to-blue-950 p-8 lg:p-10 text-white relative flex flex-col justify-between overflow-hidden">
              {/* Decorative blob */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-green-500 rounded-full blur-[120px] opacity-10 transform -translate-y-1/2 translate-x-1/4"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400 rounded-full blur-[100px] opacity-10 translate-y-1/2 -translate-x-1/4"></div>
              
              <div className="relative z-10">
                <h2 className="text-2xl lg:text-3xl font-extrabold mb-8 tracking-tight">Contact Information</h2>
                
                <div className="space-y-6">
                  {contactDetails.map(({ icon: Icon, title, lines, href }, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-green-400 group-hover:bg-green-600 group-hover:text-white group-hover:border-green-600 transition-all duration-300 shrink-0">
                        <Icon size={20} />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold mb-1">{title}</h3>
                        {lines.map((line, i) => (
                          href ? (
                            <a key={i} href={href} className="block text-sm text-blue-100/70 hover:text-green-300 transition-colors">{line}</a>
                          ) : (
                            <p key={i} className="text-sm text-blue-100/70">{line}</p>
                          )
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Social links */}
              <div className="mt-12 relative z-10">
                <h4 className="font-semibold text-sm text-white/80 mb-4 uppercase tracking-widest">Follow Us</h4>
                <div className="flex gap-3">
                  {socialLinks.map(({ icon: Icon, label, href }, idx) => (
                    <a
                      key={idx}
                      href={href}
                      aria-label={`Follow us on ${label}`}
                      className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-green-600 hover:text-white hover:border-green-600 transition-all duration-300 hover:-translate-y-0.5"
                    >
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form & Map (Right Column) */}
            <div className="lg:col-span-3 p-8 lg:p-10 flex flex-col gap-10">
              <div>
                <h2 className="text-2xl lg:text-3xl font-extrabold text-blue-900 mb-2 tracking-tight">Send Us a Message</h2>
                <p className="text-slate-500 text-sm mb-6">Fill out the form below and we'll get back to you within 24 hours.</p>

                <form onSubmit={handleSubmit} className="space-y-5" id="contact-form">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-sm font-semibold text-slate-700">Full Name</label>
                      <input 
                        id="name"
                        type="text" 
                        placeholder="John Doe" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-green-600/30 focus:border-green-600 transition-all text-sm"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="text-sm font-semibold text-slate-700">Phone Number</label>
                      <input 
                        id="phone"
                        type="tel" 
                        placeholder="+91 98765 43210" 
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-green-600/30 focus:border-green-600 transition-all text-sm"
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-sm font-semibold text-slate-700">Email Address <span className="text-slate-400 font-normal">(Optional)</span></label>
                    <input 
                      id="email"
                      type="email" 
                      placeholder="john@example.com" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-green-600/30 focus:border-green-600 transition-all text-sm"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-sm font-semibold text-slate-700">Your Inquiry</label>
                    <textarea 
                      id="message"
                      rows={4} 
                      required
                      placeholder="Tell us about your requirements — product type, quantity, delivery timeline..." 
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-green-600/30 focus:border-green-600 transition-all resize-none text-sm"
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="group px-8 py-3.5 bg-blue-900 text-white font-bold rounded-xl hover:bg-blue-800 transition-all flex items-center justify-center gap-2 w-full sm:w-auto shadow-lg shadow-blue-900/20 hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  >
                    <Send size={16} className={isSubmitting ? 'animate-pulse' : 'group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform'} />
                    {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                  </button>
                </form>
              </div>

              {/* Map */}
              <div className="h-56 sm:h-64 w-full rounded-2xl overflow-hidden bg-slate-100 relative border border-slate-200">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.428753457199!2d80.3546736!3d26.4566373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c4709bed4de91%3A0xe2128bcaad81ed32!2sFaithful%20Ganj%2C%20Cantonment%2C%20Kanpur%2C%20Uttar%20Pradesh%20208004%2C%20India!5e0!3m2!1sen!2sus!4v1700684126284!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Hina Textiles office location on Google Maps"
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========== FLOATING WHATSAPP ========== */}
      <a 
        href="https://wa.me/919839035588" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-6 right-6 z-50 group"
      >
        <div className="relative">
          {/* Pulse ring */}
          <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20"></div>
          <div className="relative bg-[#25D366] text-white p-4 rounded-full shadow-2xl shadow-[#25D366]/30 hover:bg-[#20bd5a] hover:scale-110 transition-all duration-300 flex items-center justify-center">
            <MessageCircle size={28} fill="white" />
          </div>
        </div>
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-3 px-3 py-1.5 bg-slate-900 text-white text-xs font-semibold rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Chat on WhatsApp
          <div className="absolute top-full right-4 -mt-1 border-4 border-transparent border-t-slate-900"></div>
        </div>
      </a>
    </div>
  );
};

export default Contact;
