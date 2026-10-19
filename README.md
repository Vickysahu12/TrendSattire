# Trendsattire

A demo storefront for Trendsattire, "Wear what moves you": print-led dresses, maxis, co-ords and kurta sets. 48 pieces from ₹1,499 to ₹3,999 in sizes XS to XXL.

## Run it

```bash
npm install
npm run dev
```

Build with `npm run build`, then preview with `npm run preview`.

## What works

- **Home:**
  - "Wear what twirls you" hero with rotating verbs, three-depth parallax looks and a product tag.
  - New in tabs, the promo mosaic with a sale tile, and the scroll-linked "Made to move" strip.
  - Summer capsule, promises, customer notes, coupon codes and an Instagram wall.
- **Shop:**
  - Category pages, with filters in the URL: fabric, mood, colour, price.
  - Sort, and search with suggestions.
- **Product page:**
  - Gallery with zoom, size picker and size guide.
  - Pincode check, reviews, related and recently viewed.
- **Bag:**
  - Drawer and full page.
  - Free shipping progress over ₹1,499.
  - Coupons: `MOVE10`, `TWIRL300` (₹2,499+), `SUMMER30` (₹6,999+).
- **Checkout:**
  - Address with pincode autofill, then UPI, card, net banking or COD (₹49).
  - Order confirmation and order history on this device.
- **Also:** wishlist, account, help/FAQ, about us, a 404 page and an error page.

All data is local (`src/data`). The cart, wishlist and orders are saved in localStorage. No real payment is taken. Reviews and customer notes are sample content.

## Stack

- Vite, React 19, React Router 7 and Tailwind CSS v4.
- Motion, Lenis and Phosphor icons.
- Archivo font (variable weight and width).
