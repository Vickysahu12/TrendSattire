// Brand-level settings. Change the name, offers, fees or contact details here, not in components.
export const site = {
  name: 'Trendsattire',
  tagline: 'Wear what moves you',
  currency: 'INR',
  locale: 'en-IN',
  freeShippingOver: 1499,
  shippingFee: 79,
  codFee: 49,
  stitchFee: 0,
  orderPrefix: 'TA',
  instagram: '@trendsattire',
  phone: '+91 98111 70245',
  email: 'hello@trendsattire.in',

  announcements: ['Free shipping on orders above ₹1,499', 'The summer edit is here', 'Extra 10% off with code MOVE10'],

  // Coupon codes accepted at bag / checkout (demo).
  coupons: {
    MOVE10: { type: 'percent', value: 10, label: '10% off everything' },
    TWIRL300: { type: 'flat', value: 300, label: '₹300 off orders above ₹2,499', min: 2499 },
    SUMMER30: { type: 'percent', value: 30, label: '30% off orders above ₹6,999', min: 6999 },
  },

  footer: {
    blurb: 'Print-led dresses, maxis, co-ords and kurta sets made to move. Brunch, holiday, office, festival: wear what moves you.',
    columns: [
      {
        title: 'Shop',
        links: [
          { label: 'Dresses', to: '/shop/dresses' },
          { label: 'Maxis', to: '/shop/maxis' },
          { label: 'Co-ords', to: '/shop/co-ords' },
          { label: 'Kurta sets', to: '/shop/kurta-sets' },
          { label: 'New in', to: '/shop?sort=new' },
        ],
      },
      {
        title: 'Help',
        links: [
          { label: 'Size guide', to: '/help#sizing' },
          { label: 'Shipping', to: '/help#shipping' },
          { label: 'Returns', to: '/help#returns' },
          { label: 'Track order', to: '/account' },
          { label: 'Contact', to: '/help#contact' },
        ],
      },
      {
        title: 'Trendsattire',
        links: [
          { label: 'About us', to: '/about' },
          { label: 'Wishlist', to: '/wishlist' },
          { label: 'Privacy', to: '/help#privacy' },
        ],
      },
    ],
  },
}
