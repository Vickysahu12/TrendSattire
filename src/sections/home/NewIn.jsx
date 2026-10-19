import { useMemo, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { collectionTabs } from '../../data/content'
import { queryProducts } from '../../services/catalog'
import { ProductCard } from '../../features/product/ProductCard'
import { Button } from '../../components/ui/Button'
import { cn } from '../../lib/cn'

/**
 * New in (ref: Новинки): spaced-capital tabs with a sliding underline, six pieces across
 * on desktop (a swipeable row on phones), and "View all new in" beneath.
 */
export function NewIn() {
  const reduce = useReducedMotion()
  const [tab, setTab] = useState(collectionTabs[0].id)
  const current = collectionTabs.find((t) => t.id === tab)
  const items = useMemo(() => queryProducts({ ...current.query, limit: 6 }), [current])

  return (
    <section className="shell pt-20 lg:pt-24" aria-labelledby="new-title">
      <h2 id="new-title" className="display text-center text-[30px] sm:text-[40px]">
        New in
      </h2>
      <div role="tablist" aria-label="Categories" className="no-scrollbar mx-auto mt-5 flex max-w-max gap-2 overflow-x-auto sm:gap-6">
        {collectionTabs.map((t) => {
          const on = t.id === tab
          return (
            <button key={t.id} type="button" role="tab" aria-selected={on} onClick={() => setTab(t.id)} className={cn('caps relative shrink-0 px-2 py-3 text-[10.5px] transition-colors duration-300', on ? 'text-ink' : 'text-ink-soft hover:text-ink')}>
              {t.label}
              {on && <motion.span layoutId="new-line" className="absolute inset-x-2 bottom-1 h-px bg-ink" transition={reduce ? { duration: 0 } : { type: 'spring', duration: 0.45, bounce: 0.1 }} />}
            </button>
          )
        })}
      </div>
      <ul key={tab} className="no-scrollbar -mx-4 mt-8 flex snap-x scroll-px-4 gap-3 overflow-x-auto px-4 sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:overflow-visible sm:px-0 lg:grid-cols-6">
        {items.map((p, i) => (
          <li key={p.id} className="anim-fade-up w-[46vw] shrink-0 snap-start sm:w-auto" style={{ '--delay': `${i * 45}ms` }}>
            <ProductCard product={p} sizes="(min-width: 1024px) 15vw, 46vw" />
          </li>
        ))}
      </ul>
      <div className="mt-10 flex justify-center">
        <Button to={`/shop/${current.query.category}`} variant="outline" arrow>
          View all {current.label.toLowerCase()}
        </Button>
      </div>
    </section>
  )
}
