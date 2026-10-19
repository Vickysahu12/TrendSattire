import { Link } from 'react-router'
import { tiles } from '../../data/content'
import { useReveal } from '../../hooks/useReveal'
import { Img } from '../../components/ui/Img'
import { Icon } from '../../components/ui/Icon'
import { cn } from '../../lib/cn'

/**
 * The promo mosaic (ref): one tall tile, two small, and a wide sale tile with a button.
 * On hover the photo eases in, the scrim deepens and the arrow line draws longer.
 */
export function Mosaic() {
  const ref = useReveal()
  const [tall, a, b, sale] = tiles
  return (
    <section ref={ref} className="shell pt-20 lg:pt-28" aria-label="Edits">
      <div className="grid gap-3 lg:h-[720px] lg:grid-cols-[1fr_0.78fr_0.78fr] lg:grid-rows-[1fr_1fr]">
        <Tile t={tall} className="aspect-[4/5] lg:row-span-2 lg:aspect-auto" sizes="(min-width: 1024px) 40vw, 100vw" big />
        <Tile t={a} className="aspect-[4/5] sm:aspect-[16/11] lg:aspect-auto" sizes="(min-width: 1024px) 28vw, 100vw" />
        <Tile t={b} className="aspect-[4/5] sm:aspect-[16/11] lg:aspect-auto" sizes="(min-width: 1024px) 28vw, 100vw" />
        <Tile t={sale} className="aspect-[4/5] sm:aspect-[16/9] lg:col-span-2 lg:aspect-auto" sizes="(min-width: 1024px) 56vw, 100vw" big />
      </div>
    </section>
  )
}

function Tile({ t, className, sizes, big }) {
  return (
    <Link to={t.to} className={cn('group relative block overflow-hidden bg-sand', className)} data-reveal-frame>
      <Img id={t.image} alt="" sizes={sizes} className="absolute! inset-0" position={t.focus} imgClassName="transition-transform duration-[1600ms] ease-[var(--ease-out)] group-hover:scale-[1.05]" />
      <span aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(90deg,rgb(17_17_17/0.55),rgb(17_17_17/0.05)_65%)] transition-opacity duration-500 group-hover:opacity-90" />
      <span className="absolute inset-0 flex flex-col justify-end p-6 text-white sm:p-8 lg:justify-center">
        <span className={cn('display block max-w-[12ch]', t.sale ? 'text-[44px] sm:text-[64px]' : big ? 'text-[36px] sm:text-[48px]' : 'text-[28px] sm:text-[32px]')}>{t.title}</span>
        <span className="mt-3 block max-w-[30ch] text-[14px] text-white/85">{t.body}</span>
        {t.sale ? (
          <span className="caps mt-6 inline-flex w-max items-center gap-3 bg-white px-5 py-3 text-[10.5px] text-ink transition-colors duration-300 group-hover:bg-ink group-hover:text-white">
            Shop the sale <Icon name="arrow" size={15} />
          </span>
        ) : (
          <span className="caps mt-6 flex items-center gap-3 text-[10.5px]">
            Shop
            <span className="relative block h-px w-8 bg-white transition-[width] duration-500 ease-[var(--ease-out)] group-hover:w-16">
              <Icon name="caret-right" size={12} weight="bold" className="absolute top-1/2 -right-1.5 -translate-y-1/2" />
            </span>
          </span>
        )}
      </span>
    </Link>
  )
}
