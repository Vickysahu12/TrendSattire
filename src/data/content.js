// Editorial content for the storefront. Kept out of components so the client
// (or a CMS later) can change copy and imagery in one place.
// Image ids refer to public/media/products (tNN-1 full look, tNN-2 close crop).

// Hero: "Wear what ___ you." Each verb brings its own three looks.
export const heroMoves = [
  { id: 'twirl', verb: 'twirls', images: ['t45-1', 't09-1', 't36-1'], productId: 't45', to: '/shop/maxis' },
  { id: 'sway', verb: 'sways', images: ['t34-1', 't01-1', 't25-1'], productId: 't34', to: '/shop/dresses' },
  { id: 'flow', verb: 'flows', images: ['t07-1', 't28-1', 't06-1'], productId: 't07', to: '/shop/co-ords' },
  { id: 'moves', verb: 'moves', images: ['t12-1', 't13-1', 't39-1'], productId: 't12', to: '/shop/kurta-sets' },
]

export const perks = [
  { icon: 'truck', title: 'Free shipping', body: 'On orders above ₹1,499' },
  { icon: 'returns', title: 'Easy 7-day returns', body: 'Free pickup from home' },
  { icon: 'cash', title: 'Cash on delivery', body: 'Pay when it arrives' },
  { icon: 'ruler', title: 'Size exchange', body: 'If the fit is off, swap it' },
]

export const categoryLabels = {
  dresses: 'Dresses',
  maxis: 'Maxis',
  'co-ords': 'Co-ords',
  'kurta-sets': 'Kurta sets',
}

export const categorySingular = {
  dresses: 'Dress',
  maxis: 'Maxi',
  'co-ords': 'Co-ord',
  'kurta-sets': 'Kurta set',
}

export const categories = [
  { id: 'dresses', label: 'Dresses', image: 't34-1', to: '/shop/dresses' },
  { id: 'maxis', label: 'Maxis', image: 't45-1', to: '/shop/maxis' },
  { id: 'co-ords', label: 'Co-ords', image: 't06-1', to: '/shop/co-ords' },
  { id: 'kurta-sets', label: 'Kurta sets', image: 't12-1', to: '/shop/kurta-sets' },
]

// "Mood" is stored in each product's `occasions`.
export const occasionLabels = {
  vacay: 'Holiday',
  brunch: 'Brunch',
  work: 'Work',
  festive: 'Festive',
}

export const occasions = [
  { id: 'vacay', label: 'Holiday', image: 't01-1', to: '/shop?occasion=vacay' },
  { id: 'brunch', label: 'Brunch', image: 't32-1', to: '/shop?occasion=brunch' },
  { id: 'work', label: 'Work', image: 't49-1', to: '/shop?occasion=work' },
  { id: 'festive', label: 'Festive', image: 't39-1', to: '/shop?occasion=festive' },
]

// New in (ref: Новинки) tabs.
export const collectionTabs = [
  { id: 'dresses', label: 'Dresses', query: { category: 'dresses', sort: 'new' } },
  { id: 'maxis', label: 'Maxis', query: { category: 'maxis', sort: 'new' } },
  { id: 'co-ords', label: 'Co-ords', query: { category: 'co-ords', sort: 'new' } },
  { id: 'kurta-sets', label: 'Kurta sets', query: { category: 'kurta-sets', sort: 'new' } },
]

// The promo mosaic (ref): one tall tile, two small, one wide sale tile.
export const tiles = [
  { id: 'twirl', title: 'Twirl-ready dresses', body: 'Tiers, flares and hems that move with you', image: 't34-1', to: '/shop/dresses', focus: '50% 25%' },
  { id: 'coords', title: 'Co-ords', body: 'Two pieces, zero thinking', image: 't06-1', to: '/shop/co-ords', focus: '50% 30%' },
  { id: 'kurta', title: 'Kurta sets', body: 'Prints that pass the family test', image: 't13-1', to: '/shop/kurta-sets', focus: '50% 25%' },
  { id: 'sale', title: 'Up to 30% off', body: 'On selected styles from the new edit', image: 't23-1', to: '/shop?sale=1', focus: '50% 30%', sale: true },
]

// Made to move: the twirl strip.
export const moveStrip = {
  words: ['Twirl', 'Sway', 'Flow', 'Move'],
  images: ['t09-1', 't36-1', 't04-1', 't45-1', 't39-1', 't34-1', 't13-1', 't23-1', 't12-1', 't01-1'],
}

// The summer capsule (ref: Весенняя капсула): four edits.
export const capsule = [
  { id: 'pool', title: 'Pool-day prints', body: 'Ikat, fruit and florals in cotton that breathes', image: 't05-1', to: '/shop?occasion=vacay' },
  { id: 'desk', title: 'Desk to dinner', body: 'Linen sets and easy kurtas for long days', image: 't49-1', to: '/shop?occasion=work' },
  { id: 'organza', title: 'Organza afternoons', body: 'Hand-painted, sheer and light as air', image: 't24-1', to: '/shop?q=organza' },
  { id: 'festive', title: 'Festive, but light', body: 'Colour for functions without the weight', image: 't22-1', to: '/shop?occasion=festive' },
]

// Sample customer notes (demo content).
export const testimonials = [
  { name: 'Tanvi Rao', city: 'Bengaluru', rating: 5, productId: 't45', text: 'The fuchsia maxi is pure joy. Every photo at the wedding had me mid-spin.' },
  { name: 'Mehak Arora', city: 'Delhi', rating: 5, productId: 't49', text: 'The linen set is my airport outfit, my Monday outfit and my Sunday outfit.' },
  { name: 'Ishani Sen', city: 'Kolkata', rating: 4, productId: 't06', text: 'Polka palazzos that actually stay put. Fabric feels expensive.' },
  { name: 'Riya Kapoor', city: 'Mumbai', rating: 5, productId: 't34', text: 'Lavender tiers and sneakers, the combination I did not know I needed.' },
]

export const offers = [
  { title: '10% off everything', code: 'MOVE10' },
  { title: '₹300 off above ₹2,499', code: 'TWIRL300' },
  { title: '30% off above ₹6,999', code: 'SUMMER30' },
]

export const serviceRow = perks

// Review pool used to fill product pages (demo).
export const reviewPool = [
  { name: 'Aditi S.', rating: 5, title: 'Twirls beautifully', text: 'The flare is gorgeous and the fabric is soft. Got compliments all day.' },
  { name: 'Kriti M.', rating: 5, title: 'True to size', text: 'Ordered my usual M and it fit perfectly. Colours are exactly as shown.' },
  { name: 'Zoya H.', rating: 4, title: 'Lovely print', text: 'Slightly long for me at 5 feet 2, but the print is stunning.' },
  { name: 'Neha P.', rating: 5, title: 'Light and breezy', text: 'Wore it on a beach holiday. Did not crease in the suitcase.' },
  { name: 'Sakshi B.', rating: 4, title: 'Great quality', text: 'Neat stitching and the lining is soft. Delivered in four days.' },
]

export const sortOptions = [
  { id: 'featured', label: 'Featured' },
  { id: 'new', label: 'New in' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Top Rated' },
]

export const priceBands = [
  { id: 'u1999', label: 'Under ₹2,000', min: 0, max: 1999 },
  { id: '2000-2499', label: '₹2,000 to ₹2,499', min: 2000, max: 2499 },
  { id: '2500-2999', label: '₹2,500 to ₹2,999', min: 2500, max: 2999 },
  { id: '3000-3999', label: '₹3,000 and above', min: 3000, max: 3999 },
]

// Body measurements in inches: bust, waist, hip.
export const sizeChart = [
  ['XS', '32', '26', '35'],
  ['S', '34', '28', '37'],
  ['M', '36', '30', '39'],
  ['L', '38', '32', '41'],
  ['XL', '40', '34', '43'],
  ['XXL', '42', '36', '45'],
]
