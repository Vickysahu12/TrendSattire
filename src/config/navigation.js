// Navigation content: the mega-menu panels (desktop), menu tabs (phone) and quick chips.

export const megaMenus = [
  {
    id: 'shop',
    label: 'Women',
    to: '/shop',
    columns: [
      {
        title: 'Categories',
        items: [
          { label: 'Dresses', desc: 'Flare, tier, twirl', image: 't34-1', to: '/shop/dresses' },
          { label: 'Maxis', desc: 'Metres of hem', image: 't45-1', to: '/shop/maxis' },
          { label: 'Co-ords', desc: 'Two pieces, zero effort', image: 't06-1', to: '/shop/co-ords' },
          { label: 'Kurta sets', desc: 'Prints with a dupatta', image: 't12-1', to: '/shop/kurta-sets' },
          { label: 'New in', desc: 'Fresh this week', image: 't25-1', to: '/shop?sort=new' },
        ],
      },
    ],
    feature: { image: 't45-1', title: 'The Fuchsia Flight Maxi', to: '/product/fuchsia-flight-maxi' },
  },
  {
    id: 'mood',
    label: 'Moods',
    to: '/shop',
    columns: [
      {
        title: 'Dress for',
        items: [
          { label: 'Holiday', desc: 'Pool to dinner', image: 't01-1', to: '/shop?occasion=vacay' },
          { label: 'Brunch', desc: 'Prints and puff sleeves', image: 't32-1', to: '/shop?occasion=brunch' },
          { label: 'Work', desc: 'Linen and easy sets', image: 't49-1', to: '/shop?occasion=work' },
          { label: 'Festive', desc: 'Light, bright, twirly', image: 't39-1', to: '/shop?occasion=festive' },
          { label: 'Bestsellers', desc: 'Loved on repeat', image: 't09-1', to: '/shop?bestseller=1' },
        ],
      },
    ],
    feature: { image: 't09-1', title: 'The Ikat Swirl Maxi, our bestseller', to: '/product/ikat-swirl-maxi' },
  },
]

export const navLinks = [
  { label: 'New in', to: '/shop?sort=new' },
  { label: 'About', to: '/about' },
  { label: 'Sale', to: '/shop?sale=1', accent: true },
]

export const quickChips = [
  { label: 'New in', to: '/shop?sort=new' },
  { label: 'Dresses', to: '/shop/dresses' },
  { label: 'Maxis', to: '/shop/maxis' },
  { label: 'Co-ords', to: '/shop/co-ords' },
  { label: 'Kurta sets', to: '/shop/kurta-sets' },
  { label: 'Sale', to: '/shop?sale=1', accent: true },
]
