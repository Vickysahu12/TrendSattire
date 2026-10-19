import { Link } from 'react-router'
import { site } from '../../config/site'
import { cn } from '../../lib/cn'

// The client's logo (public/brand). In the header the wordmark sits alone, as in the
// reference; `tagline` shows the full lockup with "Wear what moves you" between its rules.
// `light` swaps black for white on dark grounds.
export function Logo({ className, light, tagline, size = 'md' }) {
  const src = `/brand/${tagline ? 'logo' : 'wordmark'}${light ? '-light' : ''}.png`
  return (
    <Link to="/" aria-label={`${site.name} home`} className={cn('press group inline-flex items-center', className)}>
      <img
        src={src}
        alt={site.name}
        width={466}
        height={tagline ? 100 : 72}
        draggable={false}
        className={cn('w-auto transition-opacity duration-300 group-hover:opacity-75', tagline ? (size === 'lg' ? 'h-16' : 'h-12') : size === 'sm' ? 'h-5' : 'h-6 lg:h-7')}
      />
    </Link>
  )
}
