import IndustrialFabricImg from '../assets/Industrial Fabric.png';

/**
 * Centralized product data used across Home, Products, and ProductDetail pages.
 * Each product has a unique `id` (slug) used for dynamic routing: /product/:id
 *
 * `images` — Array of { src, alt } objects for the carousel gallery.
 * `image` — Primary thumbnail used on cards and fallback contexts.
 */
const products = [
  {
    id: 'industrial-fabrics',
    name: 'Industrial Fabrics',
    image: IndustrialFabricImg,
    images: [
      {
        src: IndustrialFabricImg,
        alt: 'Rolls of woven industrial fabric in a textile factory warehouse',
      },
      {
        src: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?auto=format&fit=crop&w=1200&q=80',
        alt: 'Industrial fabric material close-up showing woven texture patterns',
      },
      {
        src: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=1200&q=80',
        alt: 'Stacked rolls of colored industrial fabric ready for shipment',
      },
      {
        src: 'https://images.unsplash.com/photo-1617727553252-65863c156eb0?auto=format&fit=crop&w=1200&q=80',
        alt: 'Fabric weaving machine producing industrial-grade textile',
      },
    ],
    description: 'Heavy-duty fabrics for rigorous industrial applications.',
    fullDescription:
      'Our industrial fabrics offer rugged performance, high tensile strength, and excellent resilience. Suitable for manufacturing bags, covers, and structural reinforcements that require tough, heavy-duty characteristics. Built with precision-engineered weaving techniques to withstand intense mechanical stress in demanding environments.',
    alt: 'Rolls of woven industrial fabric in a textile factory warehouse',
    specs: ['High tensile strength', 'UV resistant', 'Custom widths available'],
    applications: [
      'Manufacturing bags & sacks',
      'Protective covers & wraps',
      'Structural reinforcement layers',
      'Construction & scaffolding',
    ],
  },
  {
    id: 'tarpaulin-tents',
    name: 'Tent & Tarpaulin',
    image:
      'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1200&q=80',
        alt: 'Heavy-duty tent set up outdoors demonstrating weather resistance',
      },
      {
        src: 'https://images.unsplash.com/photo-1478827536114-da961b7f86d2?auto=format&fit=crop&w=1200&q=80',
        alt: 'Large industrial tarpaulin covering goods at a construction site',
      },
      {
        src: 'https://images.unsplash.com/photo-1563299796-17596ed6b017?auto=format&fit=crop&w=1200&q=80',
        alt: 'Waterproof tent fabric showing rain-resistance capabilities',
      },
      {
        src: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1200&q=80',
        alt: 'Multiple camping tents demonstrating durability in outdoor conditions',
      },
    ],
    description: 'Weather-resistant and durable outdoor protection.',
    fullDescription:
      'We supply high-grade tarpaulins and tents designed to secure goods and provide shelter. Fully waterproof, UV-stabilized, and tailored to endure extreme weather conditions for long-lasting protection. Our tarpaulins are manufactured using advanced polymer coating techniques for superior water resistance.',
    alt: 'Heavy-duty waterproof tarpaulin tents set up for outdoor industrial use',
    specs: ['100% waterproof', 'UV stabilized', 'Extreme weather rated'],
    applications: [
      'Outdoor shelters & camping',
      'Goods protection during transit',
      'Agricultural ground cover',
      'Construction site shielding',
    ],
  },
  {
    id: 'cotton-synthetic-filters',
    name: 'Cotton & Synthetic Filter Cloth',
    image: '/filter_cloth.png',
    images: [
      {
        src: '/filter_cloth.png',
        alt: 'Close up of high quality Cotton and Synthetic industrial Filter Cloth',
      },
      {
        src: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=1200&q=80',
        alt: 'Synthetic filter cloth material used in pharmaceutical processing',
      },
      {
        src: 'https://images.unsplash.com/photo-1606722590583-6951b5ea92ad?auto=format&fit=crop&w=1200&q=80',
        alt: 'Various filter cloth samples in different weave patterns',
      },
      {
        src: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1200&q=80',
        alt: 'Industrial filtration system using high-quality filter cloth',
      },
    ],
    description: 'High-efficiency filtration fabrics for various industries.',
    fullDescription:
      'Our precision-woven cotton and synthetic filter cloths serve diverse filtration processes across chemical, pharmaceutical, and food processing plants, ensuring maximal purity, retention, and optimal flow rates. Engineered for consistent performance across thousands of filtration cycles.',
    alt: 'Close-up of finely woven cotton and synthetic filter cloth material',
    specs: ['Pharmaceutical grade', 'High flow rate', 'Chemical resistant'],
    applications: [
      'Chemical plant filtration',
      'Pharmaceutical processing',
      'Food & beverage production',
      'Water treatment systems',
    ],
  },
  {
    id: 'belting-cloth',
    name: 'Belting Cloth',
    image:
      'https://images.unsplash.com/photo-1565791380713-1756b9a05343?auto=format&fit=crop&w=800&q=80',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1565791380713-1756b9a05343?auto=format&fit=crop&w=1200&q=80',
        alt: 'Industrial belting cloth material on a conveyor manufacturing line',
      },
      {
        src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
        alt: 'Belting cloth being used in automated conveyor systems',
      },
      {
        src: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80',
        alt: 'Heavy-duty belting material showing anti-tear construction',
      },
      {
        src: 'https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1200&q=80',
        alt: 'Manufacturing facility producing custom belting cloth products',
      },
    ],
    description: 'Robust belting cloth designed for conveyor systems.',
    fullDescription:
      'Engineered for conveyor belting systems, our belting cloth resists tearing and fraying under continuous stress, offering reliable performance for conveying systems operating in harsh industrial environments. Available in custom lengths and widths to match any conveyor specification.',
    alt: 'Industrial belting cloth material on a conveyor manufacturing line',
    specs: ['Anti-tear construction', 'Continuous stress rated', 'Custom lengths'],
    applications: [
      'Conveyor belt systems',
      'Mining & quarry operations',
      'Packaging production lines',
      'Bulk material handling',
    ],
  },
  {
    id: 'grey-chemical-canvas',
    name: 'Grey & Chemical Canvas',
    image:
      'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=800&q=80',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1200&q=80',
        alt: 'Grey canvas fabric for chemical-resistant industrial applications',
      },
      {
        src: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?auto=format&fit=crop&w=1200&q=80',
        alt: 'Chemical-proof canvas material undergoing quality testing',
      },
      {
        src: 'https://images.unsplash.com/photo-1617727553252-65863c156eb0?auto=format&fit=crop&w=1200&q=80',
        alt: 'Canvas fabric rolls stored in industrial warehouse',
      },
      {
        src: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=1200&q=80',
        alt: 'Safety-certified canvas used in chemical plant environments',
      },
    ],
    description: 'Specialized chemical-resistant canvas materials.',
    fullDescription:
      'Specialized chemical canvas tailored to withstand corrosive substances. Ideal for safety curtains, heavy aprons, and covers in chemical plants where ordinary textiles cannot survive. Our canvas undergoes rigorous chemical resistance testing to ensure maximum protection.',
    alt: 'Grey canvas fabric material used in chemical-resistant industrial applications',
    specs: ['Corrosion resistant', 'Chemical proof', 'Safety certified'],
    applications: [
      'Chemical plant safety curtains',
      'Protective aprons & clothing',
      'Acid-resistant covers',
      'Laboratory protection barriers',
    ],
  },
  {
    id: 'other-textile-goods',
    name: 'Other Textile Goods',
    image:
      'https://images.unsplash.com/photo-1606722590583-6951b5ea92ad?auto=format&fit=crop&w=800&q=80',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1606722590583-6951b5ea92ad?auto=format&fit=crop&w=1200&q=80',
        alt: 'Textile materials in various colors and textures',
      },
      {
        src: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=1200&q=80',
        alt: 'Specialty woven fabrics for custom industrial orders',
      },
      {
        src: 'https://images.unsplash.com/photo-1586495985-929b1528096c?auto=format&fit=crop&w=1200&q=80',
        alt: 'Diverse range of custom textile products on display',
      },
      {
        src: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80',
        alt: 'Custom-dyed fabrics ready for OEM component production',
      },
    ],
    description: 'A diverse range of customized textile supplies.',
    fullDescription:
      'Beyond our core categories, we manufacture and supply a wide range of custom textile products tailored to unique industrial requirements. From specialty weaves to custom-dyed fabrics, we adapt our manufacturing processes to deliver exactly what your project needs.',
    alt: 'Textile materials in various colors and textures for custom production',
    specs: ['Custom manufacturing', 'Specialty weaves', 'Bulk quantities'],
    applications: [
      'Custom industrial orders',
      'Specialty weave fabrics',
      'Tailored textile solutions',
      'OEM textile components',
    ],
  },
];

/**
 * Find a product by its unique slug ID.
 * @param {string} id - Product slug (e.g., 'industrial-fabrics')
 * @returns {Object|undefined} Product object or undefined
 */
export const getProductById = (id) => products.find((p) => p.id === id);

/**
 * Get all products.
 * @returns {Array} Array of all product objects
 */
export const getAllProducts = () => products;

export default products;
