// Demo catalogue built from the client's photos (public/media/products/tNN-1 / tNN-2).
// `n` is the source photo number (src/assets/image/ImgNN). Img29 is too small to use and
// Img35 repeats Img34. Shape mirrors what a products API would return, so
// services/catalog.js can switch to fetch() later.
// Prices sit between ₹1,499 and ₹3,999; ratings and copy are sample data.

const SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL']

const CATEGORY = {
  dresses: { includes: 'One dress', care: ['Gentle machine wash cold', 'Wash prints inside out', 'Dry in shade, iron on low'] },
  maxis: { includes: 'One maxi dress', care: ['Gentle hand wash or dry clean', 'Dry flat in shade', 'Steam the tiers, do not press'] },
  'co-ords': { includes: 'Top and bottom', care: ['Gentle machine wash cold', 'Wash the pieces together the first time', 'Iron on low'] },
  'kurta-sets': { includes: 'Kurta and pants (with dupatta where shown)', care: ['Hand wash cold or dry clean', 'Wash the dupatta separately', 'Dry in shade'] },
}

const item = (category) => (p) => ({ category, sizes: SIZES, ...CATEGORY[category], ...p })
const dress = item('dresses')
const maxi = item('maxis')
const coord = item('co-ords')
const kset = item('kurta-sets')

const raw = [
  dress({ n: 1, name: 'Sunny Ikat Flare Dress', fabric: 'Cotton', color: 'Yellow', hex: '#ecd24a', occasions: ['vacay', 'brunch'], price: 2299, rating: 4.7, reviews: 142, bestseller: true, blurb: 'A sunny ikat dress with a full flare, bell sleeves and a cinched waist. Made for the pool deck and the walk to lunch.' }),
  dress({ n: 4, name: 'Parrot Ikat Tiered Dress', fabric: 'Cotton', color: 'Green', hex: '#8fbf3c', occasions: ['vacay', 'brunch'], price: 2499, rating: 4.6, reviews: 88, blurb: 'Green and pink ikat on a tiered dress that moves every time you do.' }),
  dress({ n: 5, name: 'Lotus Ikat Midi', fabric: 'Cotton', color: 'Pink', hex: '#d9a1c6', occasions: ['vacay', 'brunch'], price: 2399, rating: 4.7, reviews: 97, blurb: 'A pink and green ikat midi with a square neck and puff sleeves.' }),
  dress({ n: 11, name: 'Marigold Tiered Dress', fabric: 'Cotton', color: 'Yellow', hex: '#f0bf2c', occasions: ['vacay'], price: 2299, rating: 4.6, reviews: 74, blurb: 'A marigold print with three tiers and puff sleeves. Pure holiday.' }),
  dress({ n: 15, name: 'Daisy Days Dress', fabric: 'Cotton', color: 'Yellow', hex: '#f4d33b', occasions: ['brunch', 'work'], price: 1999, rating: 4.5, reviews: 63, blurb: 'Yellow with pink blooms and short flutter sleeves. Wear it with sneakers.' }),
  dress({ n: 16, name: 'Fruit Punch Dress', fabric: 'Crepe', color: 'Multi', hex: '#e86a3a', occasions: ['vacay', 'brunch'], price: 2199, rating: 4.6, reviews: 58, blurb: 'Big fruit prints on an asymmetric frill dress. Impossible to have a bad day in.' }),
  dress({ n: 17, name: 'Lime Splash Midi', fabric: 'Crepe', color: 'Lime', hex: '#bcd437', occasions: ['vacay'], price: 2199, rating: 4.5, reviews: 41, blurb: 'Abstract lime, pink and black on a wrap midi with a tiered hem.' }),
  dress({ n: 20, name: 'Noir Floral Mini', fabric: 'Georgette', color: 'Black', hex: '#1f1d1f', occasions: ['brunch', 'work'], price: 1999, rating: 4.6, reviews: 92, isNew: true, badge: 'New', blurb: 'A black floral mini with puff sleeves and a sweetheart neck.' }),
  dress({ n: 24, name: 'Blush Organza Dress', fabric: 'Organza', color: 'Blush', hex: '#e9b9b9', occasions: ['brunch', 'festive'], price: 2999, rating: 4.7, reviews: 55, blurb: 'Sheer blush organza with hand-painted florals and bishop sleeves.' }),
  dress({ n: 25, name: 'Cobalt Tiered Dress', fabric: 'Cotton', color: 'Cobalt', hex: '#2348b6', occasions: ['brunch', 'vacay'], price: 2299, rating: 4.7, reviews: 81, isNew: true, badge: 'New', blurb: 'Saturated cobalt with a square neck, puff sleeves and a tiered skirt.' }),
  dress({ n: 31, name: 'Peach Garden Dress', fabric: 'Organza', color: 'Peach', hex: '#f0cbb8', occasions: ['brunch', 'festive'], price: 2799, rating: 4.6, reviews: 47, blurb: 'Peach organza with painted roses and full sleeves.' }),
  dress({ n: 32, name: 'Lilac Bloom Dress', fabric: 'Organza', color: 'Lilac', hex: '#c8a9e3', occasions: ['brunch', 'festive'], price: 2799, rating: 4.7, reviews: 52, blurb: 'Lilac organza with painted florals and puff sleeves.' }),
  dress({ n: 34, more: [35], name: 'Lavender Tiered Dress', fabric: 'Organza', color: 'Lavender', hex: '#b691e0', occasions: ['brunch', 'festive'], price: 2899, rating: 4.8, reviews: 69, bestseller: true, blurb: 'Lavender tiers with painted flowers. Twirls on cue, even in sneakers.' }),
  dress({ n: 37, name: 'Lemon Organza Dress', fabric: 'Organza', color: 'Yellow', hex: '#f3d968', occasions: ['brunch', 'festive'], price: 2899, rating: 4.6, reviews: 44, blurb: 'Lemon organza with appliqué flowers at the yoke.' }),
  dress({ n: 38, name: 'Midnight Tiered Midi', fabric: 'Cotton', color: 'Black', hex: '#1b1b1d', occasions: ['work', 'brunch'], price: 2499, rating: 4.7, reviews: 77, blurb: 'A black tiered midi with puff sleeves. The one that goes with boots.' }),
  dress({ n: 43, name: 'Sky Painted Dress', fabric: 'Organza', color: 'Sky Blue', hex: '#bcd3e8', occasions: ['brunch', 'vacay'], price: 2899, rating: 4.6, reviews: 38, blurb: 'Pale sky blue with painted yellow blooms and full sleeves.' }),
  dress({ n: 48, name: 'Cocoa Wrap Mini', fabric: 'Linen Blend', color: 'Brown', hex: '#8a5a45', occasions: ['brunch', 'work'], price: 1899, rating: 4.5, reviews: 36, blurb: 'A cocoa mini with a panelled wrap front and soft sleeves.' }),

  maxi({ n: 9, name: 'Ikat Swirl Maxi', fabric: 'Cotton', color: 'Multi', hex: '#c95ea2', occasions: ['vacay', 'festive'], price: 3299, rating: 4.8, reviews: 103, bestseller: true, badge: 'Bestseller', blurb: 'A sleeveless ikat maxi with a full circle skirt. Built for spinning.' }),
  maxi({ n: 23, name: 'Sunbeam Painted Maxi', fabric: 'Organza', color: 'Yellow', hex: '#f2dc63', occasions: ['festive', 'brunch'], price: 3699, rating: 4.7, reviews: 49, blurb: 'Yellow organza with painted blue florals and flutter sleeves.' }),
  maxi({ n: 36, name: 'Lime Twirl Maxi', fabric: 'Georgette', color: 'Lime', hex: '#a8d82e', occasions: ['vacay', 'festive'], price: 3299, rating: 4.7, reviews: 61, blurb: 'Bright lime, tiered and strappy, with metres of hem to twirl.' }),
  maxi({ n: 39, name: 'Scarlet Tiered Maxi', fabric: 'Georgette', color: 'Red', hex: '#c91e2a', occasions: ['festive'], price: 3499, rating: 4.8, reviews: 72, bestseller: true, blurb: 'Scarlet tiers with tie shoulders and a V neck.' }),
  maxi({ n: 45, name: 'Fuchsia Flight Maxi', fabric: 'Georgette', color: 'Fuchsia', hex: '#e12c87', occasions: ['vacay', 'festive'], price: 3499, compareAt: 3999, rating: 4.9, reviews: 118, bestseller: true, badge: 'Bestseller', blurb: 'The fuchsia maxi that flies when you spin. Strappy, tiered, unforgettable.' }),

  coord({ n: 2, name: 'Indigo Bloom Co-ord', fabric: 'Cotton', color: 'Indigo', hex: '#4a6aa3', occasions: ['vacay', 'brunch'], price: 2499, rating: 4.6, reviews: 66, blurb: 'A floral bandeau top and a matching column skirt.' }),
  coord({ n: 3, name: 'Graphic Vest Co-ord', fabric: 'Cotton', color: 'Charcoal', hex: '#4a4744', occasions: ['brunch', 'work'], price: 2499, rating: 4.5, reviews: 39, blurb: 'A printed vest and a geometric column skirt.' }),
  coord({ n: 6, name: 'Polka Palazzo Set', fabric: 'Crepe', color: 'Ivory', hex: '#efe7dc', occasions: ['vacay', 'brunch'], price: 2299, rating: 4.7, reviews: 84, blurb: 'An ivory crop top with oversized navy and plum polka palazzos.' }),
  coord({ n: 7, name: 'Palm Kaftan Set', fabric: 'Viscose', color: 'Teal', hex: '#6fb29a', occasions: ['vacay'], price: 2699, rating: 4.6, reviews: 57, blurb: 'A palm-print kaftan over easy straight pants. Airport to beach.' }),
  coord({ n: 8, name: 'Ruby Satin Co-ord', fabric: 'Satin', color: 'Red', hex: '#9a2229', occasions: ['festive', 'brunch'], price: 2999, rating: 4.6, reviews: 43, blurb: 'A printed satin tunic with straight pants in deep ruby.' }),
  coord({ n: 10, name: 'Gilded Satin Set', fabric: 'Satin', color: 'Champagne', hex: '#c8b39b', occasions: ['festive', 'work'], price: 3199, rating: 4.7, reviews: 51, blurb: 'A printed satin shirt with a belted maxi skirt.' }),
  coord({ n: 19, name: 'Cocoa Cami Set', fabric: 'Linen Blend', color: 'Brown', hex: '#73473a', occasions: ['work', 'brunch'], price: 2299, rating: 4.6, reviews: 62, isNew: true, badge: 'New', blurb: 'A straight-neck cami and wide trousers in cocoa linen.' }),
  coord({ n: 27, name: 'Sunshine Cape Set', fabric: 'Organza', color: 'Yellow', hex: '#f2cb34', occasions: ['festive', 'brunch'], price: 3299, rating: 4.6, reviews: 37, blurb: 'A sheer yellow cape over printed pants.' }),
  coord({ n: 28, name: 'Lime Kaftan Co-ord', fabric: 'Crepe', color: 'Lime', hex: '#b4d23a', occasions: ['vacay'], price: 2799, rating: 4.7, reviews: 48, blurb: 'Bold botanical prints on a kaftan top and matching pants.' }),
  coord({ n: 49, name: 'Oat Linen Set', fabric: 'Linen', color: 'Oat', hex: '#d8d2c6', occasions: ['work', 'vacay'], price: 2499, rating: 4.7, reviews: 71, blurb: 'A relaxed linen shirt and trousers in oat. Your work-from-anywhere uniform.' }),

  kset({ n: 12, name: 'Royal Blue Angrakha Set', fabric: 'Georgette', color: 'Royal Blue', hex: '#20409a', occasions: ['festive'], price: 3299, rating: 4.8, reviews: 89, bestseller: true, blurb: 'An angrakha anarkali with white thread work and a matching dupatta.' }),
  kset({ n: 13, name: 'Emerald Garden Anarkali', fabric: 'Chanderi', color: 'Emerald', hex: '#1f6a4c', occasions: ['festive'], price: 3499, rating: 4.7, reviews: 58, blurb: 'Big pink blooms on emerald chanderi, with pants and a dupatta.' }),
  kset({ n: 14, name: 'Red Bandhani Anarkali', fabric: 'Georgette', color: 'Red', hex: '#c0202b', occasions: ['festive'], price: 3299, rating: 4.7, reviews: 64, blurb: 'Red anarkali with a printed bandhani dupatta.' }),
  kset({ n: 18, name: 'Oat Linen Kurta Set', fabric: 'Linen', color: 'Oat', hex: '#d2c6b4', occasions: ['work'], price: 1999, rating: 4.5, reviews: 47, blurb: 'A sleeveless linen kurta with straight pants.' }),
  kset({ n: 21, name: 'Powder Floral Kurta Set', fabric: 'Cotton', color: 'Powder Blue', hex: '#b8c9db', occasions: ['work', 'brunch'], price: 1999, rating: 4.6, reviews: 72, blurb: 'Soft blue florals on a straight kurta and pants.' }),
  kset({ n: 22, name: 'Rani Red Kurta Set', fabric: 'Georgette', color: 'Red', hex: '#cf1f3b', occasions: ['festive'], price: 2999, rating: 4.7, reviews: 55, blurb: 'Red with a halter neck, palazzos and a bandhani dupatta.' }),
  kset({ n: 26, name: 'Cobalt Yoke Kurta Set', fabric: 'Chanderi', color: 'Cobalt', hex: '#2552a5', occasions: ['festive', 'work'], price: 2799, rating: 4.6, reviews: 49, blurb: 'Cobalt with a colourful embroidered yoke and straight pants.' }),
  kset({ n: 30, name: 'Sage Organza Kurta Set', fabric: 'Organza', color: 'Sage', hex: '#a7bf9a', occasions: ['festive', 'brunch'], price: 2899, rating: 4.6, reviews: 38, blurb: 'Sheer sage organza over a slip, with straight pants.' }),
  kset({ n: 33, name: 'Plum Buti Kurta Set', fabric: 'Cotton', color: 'Plum', hex: '#5d2a83', occasions: ['work'], price: 1499, compareAt: 1899, rating: 4.5, reviews: 58, blurb: 'A plum kurta in tiny white buttis, with matching pants.' }),
  kset({ n: 40, name: 'Mint Painted Kurta Set', fabric: 'Organza', color: 'Mint', hex: '#bcd7b4', occasions: ['festive'], price: 3299, rating: 4.7, reviews: 46, blurb: 'Mint with painted lilac flowers on the kurta and dupatta.' }),
  kset({ n: 41, name: 'Cocoa Anarkali Set', fabric: 'Georgette', color: 'Brown', hex: '#5a3527', occasions: ['festive'], price: 2999, rating: 4.6, reviews: 41, blurb: 'Cocoa anarkali with a lime printed dupatta.' }),
  kset({ n: 42, name: 'Sapphire Salwar Set', fabric: 'Georgette', color: 'Royal Blue', hex: '#2245a8', occasions: ['festive'], price: 2999, rating: 4.7, reviews: 53, blurb: 'Sapphire with a mirror-work yoke and a Patiala salwar.' }),
  kset({ n: 44, name: 'Ivory Buti Suit', fabric: 'Cotton', color: 'Ivory', hex: '#efe7d2', occasions: ['work', 'brunch'], price: 1799, rating: 4.6, reviews: 66, blurb: 'Ivory cotton with yellow buttis and a matching dupatta.' }),
  kset({ n: 46, name: 'Emerald Palm Kurta', fabric: 'Cotton Silk', color: 'Emerald', hex: '#1f7a55', occasions: ['work', 'brunch'], price: 1899, rating: 4.6, reviews: 44, blurb: 'A sleeveless emerald kurta with one embroidered palm.' }),
  kset({ n: 47, name: 'Mustard Pleat Kurta Set', fabric: 'Cotton Silk', color: 'Mustard', hex: '#a7792f', occasions: ['work', 'festive'], price: 2299, rating: 4.6, reviews: 39, isNew: true, badge: 'New', blurb: 'Mustard with soft front pleats and wide pants.' }),
  kset({ n: 50, name: 'Indigo Print Kurta Dress', fabric: 'Cotton', color: 'Indigo', hex: '#2f4c86', occasions: ['work'], price: 1699, rating: 4.6, reviews: 52, blurb: 'An indigo printed kurta dress with contrast piping.' }),
]

const slugify = (s) => s.toLowerCase().replace(/[’']/g, '').replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
const id = (n) => `t${String(n).padStart(2, '0')}`

export const products = raw.map(({ n, more = [], ...p }) => ({
  id: id(n),
  slug: slugify(p.name),
  images: [`${id(n)}-1`, `${id(n)}-2`],
  cut: p.fabric,
  model: 'S',
  ...p,
}))

export const getProduct = (pid) => products.find((p) => p.id === pid)
export const getProductBySlug = (slug) => products.find((p) => p.slug === slug)
