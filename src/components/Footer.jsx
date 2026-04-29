import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';
import LogoImg from '../assets/logo.png';

// Custom SVG social icons (lucide-react v1.x removed brand icons)
const FacebookIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
const TwitterIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);
const LinkedinIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);
const InstagramIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Company', path: '/about' },
    { name: 'Our Products', path: '/products' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Request a Quote', path: '/contact' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: FacebookIcon, href: '#' },
    { name: 'Twitter', icon: TwitterIcon, href: '#' },
    { name: 'LinkedIn', icon: LinkedinIcon, href: '#' },
    { name: 'Instagram', icon: InstagramIcon, href: '#' },
  ];

  return (
    <footer className="bg-blue-950 text-slate-300 relative overflow-hidden">
      {/* Decorative gradient blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500 rounded-full blur-[200px] opacity-5"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-500 rounded-full blur-[150px] opacity-5"></div>

      {/* Top accent bar */}
      <div className="h-1 bg-linear-to-r from-green-600 via-green-500 to-green-400"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Company Details */}
          <div className="lg:col-span-1 space-y-6">
            <Link to="/" className="inline-flex items-center gap-3 group" aria-label="Hina Textiles Home">
              <div className="w-11 h-11 overflow-hidden bg-white rounded-lg shadow-sm shrink-0 flex items-center justify-center">
                <img
                  src={LogoImg}
                  alt="Hina Textiles Logo"
                  width="44"
                  height="44"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-extrabold tracking-tight">
                <span className="text-white">HINA</span>
                <span className="text-green-400"> TEXTILES</span>
              </h3>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 max-w-xs">
              Trusted manufacturers and suppliers of premium industrial textiles, tarpaulins, and specialized canvases since establishment. Quality you can trust.
            </p>
            <div className="flex gap-3 pt-2">
              {socialLinks.map(({ name, icon: Icon, href }) => (
                <a
                  key={name}
                  href={href}
                  aria-label={`Follow us on ${name}`}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-green-600 hover:text-white hover:border-green-600 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="group text-slate-400 hover:text-green-400 transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-widest">Working Hours</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex justify-between items-center border-b border-white/5 pb-3">
                <span>Mon – Fri</span>
                <span className="text-white font-medium">9:00 AM – 6:00 PM</span>
              </li>
              <li className="flex justify-between items-center border-b border-white/5 pb-3">
                <span>Saturday</span>
                <span className="text-white font-medium">10:00 AM – 4:00 PM</span>
              </li>
              <li className="flex justify-between items-center pb-3">
                <span>Sunday</span>
                <span className="text-green-400 font-semibold">Closed</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-widest">Contact Us</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 group">
                <div className="mt-0.5 w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-green-400 group-hover:bg-green-600 group-hover:text-white group-hover:border-green-600 transition-all duration-300">
                  <MapPin size={16} />
                </div>
                <div>
                  <h5 className="text-white text-sm font-semibold mb-0.5">Office Address</h5>
                  <p className="text-sm text-slate-400 leading-relaxed">89-B, Faithful Ganj,<br />Cantt., Kanpur – 208004</p>
                </div>
              </li>
              
              <li className="flex items-start gap-4 group">
                <div className="mt-0.5 w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-green-400 group-hover:bg-green-600 group-hover:text-white group-hover:border-green-600 transition-all duration-300">
                  <Phone size={16} />
                </div>
                <div>
                  <h5 className="text-white text-sm font-semibold mb-0.5">Phone</h5>
                  <p className="text-sm text-slate-400">
                    <a href="tel:+919839035588" className="hover:text-green-400 transition-colors">+91 9839035588</a>
                    <br />
                    <a href="tel:+919336225253" className="hover:text-green-400 transition-colors">+91 9336225253</a>
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4 group">
                <div className="mt-0.5 w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-green-400 group-hover:bg-green-600 group-hover:text-white group-hover:border-green-600 transition-all duration-300">
                  <Mail size={16} />
                </div>
                <div>
                  <h5 className="text-white text-sm font-semibold mb-0.5">Email</h5>
                  <p className="text-sm text-slate-400">
                    <a href="mailto:hinatex@yahoo.co.in" className="hover:text-green-400 transition-colors">hinatex@yahoo.co.in</a>
                  </p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} Hina Textiles. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors flex items-center gap-1">
              Privacy Policy <ArrowUpRight size={10} />
            </a>
            <a href="#" className="hover:text-slate-300 transition-colors flex items-center gap-1">
              Terms of Service <ArrowUpRight size={10} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
