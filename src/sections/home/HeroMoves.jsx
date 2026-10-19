import { useState } from 'react'
import { Link } from 'react-router'
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'motion/react'
import { heroMoves } from '../../data/content'
import { getProductSync } from '../../services/catalog'
import { formatPrice } from '../../lib/format'
import { Img } from '../../components/ui/Img'
import { Icon } from '../../components/ui/Icon'
import { Button } from '../../components/ui/Button'
import { cn } from '../../lib/cn'

const DURATION = 5200
const ease = [0.23, 1, 0.32, 1]

/** One photo layer that drifts with the pointer by its depth, on a spring. */
function Layer({ x, y, depth, className, children }) {
  const tx = useTransform(x, (v) => v * depth)
  const ty = useTransform(y, (v) => v * depth)
  return (
    <motion.div className={className} style={{ x: tx, y: ty }}>
      {children}
    </motion.div>
  )
}

/**
 * "Wear what moves you", set the way the reference sets its three stacked capital lines.
 * The middle line's verb changes (twirls, sways, flows, moves) and brings its own three
 * looks. The looks sit at three depths and drift with the pointer on springs, so the page
 * moves when you do. Verb tabs at the foot run a hairline timer; hover holds it.
 */
export function HeroMoves() {
  const reduce = useReducedMotion()
  const [index, setIndex] = useState(0)
  const move = heroMoves[index]
  const product = getProductSync(move.productId)
  const go = (i) => setIndex((i + heroMoves.length) % heroMoves.length)

  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const x = useSpring(mx, { stiffness: 60, damping: 18, mass: 0.6 })
  const y = useSpring(my, { stiffness: 60, damping: 18, mass: 0.6 })
  const onMove = (e) => {
    if (reduce || e.pointerType !== 'mouse') return
    const r = e.currentTarget.getBoundingClientRect()
    mx.set(((e.clientX - r.left) / r.width - 0.5) * 40)
    my.set(((e.clientY - r.top) / r.height - 0.5) * 30)
  }

  const photo = (k, sizes, extra) => (
    <AnimatePresence initial={false}>
      <motion.div
        key={`${move.id}-${k}`}
        className="absolute inset-0"
        initial={reduce ? { opacity: 0 } : { opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
        animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
        exit={{ opacity: 0, transition: { duration: 0.5, delay: 0.3 } }}
        transition={{ duration: 0.9, ease, delay: reduce ? 0 : [0, 0.12, 0.22][k] }}
      >
        <Img id={move.images[k]} alt="" sizes={sizes} priority={index === 0} className="h-full w-full" position="50% 22%" {...extra} />
      </motion.div>
    </AnimatePresence>
  )

  return (
    <section
      className="group/hero relative overflow-hidden bg-mist"
      aria-labelledby="hero-title"
      onPointerMove={onMove}
      onPointerLeave={() => {
        mx.set(0)
        my.set(0)
      }}
    >
      <div className="shell grid gap-10 pt-10 pb-8 lg:min-h-[clamp(620px,calc(100svh-120px),880px)] lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-center lg:gap-6 lg:py-0">
        {/* Words */}
        <div className="relative z-10">
          <p className="caps ruled-label max-w-[300px] text-[10px] text-ink-soft">The summer edit</p>
          <h1 id="hero-title" className="display mt-6 text-[54px] leading-[0.92] text-ink sm:text-[78px] lg:text-[clamp(72px,7vw,112px)]">
            Wear
            <span className="block">
              what{' '}
              <span className="relative inline-flex h-[1em] overflow-hidden align-bottom" aria-live="polite">
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.span
                    key={move.verb}
                    className="hand block pr-[0.08em]"
                    initial={reduce ? { opacity: 0 } : { y: '100%' }}
                    animate={reduce ? { opacity: 1 } : { y: '0%' }}
                    exit={reduce ? { opacity: 0 } : { y: '-100%' }}
                    transition={{ duration: 0.6, ease: [0.77, 0, 0.175, 1] }}
                  >
                    {move.verb}
                  </motion.span>
                </AnimatePresence>
              </span>
            </span>
            You.
          </h1>
          <p className="mt-6 max-w-[40ch] text-[16px] leading-relaxed text-ink-soft">Dresses, maxis, co-ords and kurta sets in prints that pull focus and cuts made to move. For women who choose colour, comfort and character.</p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <Button to={move.to} size="lg" arrow>
              Shop the edit
            </Button>
            <Link to="/shop?sort=new" className="caps link-under text-[10.5px] text-ink">
              View new in
            </Link>
          </div>

          {/* Verb tabs */}
          <ol className="mt-12 flex gap-6">
            {heroMoves.map((m, i) => {
              const on = i === index
              return (
                <li key={m.id} className="w-20">
                  <button type="button" onClick={() => go(i)} aria-current={on} className="group/tab block w-full text-left">
                    <span className="block h-px overflow-hidden bg-ink/15">
                      {on && (
                        <span
                          key={`${m.id}-${index}`}
                          className="block h-full origin-left bg-ink group-hover/hero:[animation-play-state:paused]"
                          style={reduce ? undefined : { animation: `progress ${DURATION}ms linear forwards` }}
                          onAnimationEnd={() => go(index + 1)}
                        />
                      )}
                    </span>
                    <span className={cn('caps mt-2.5 block text-[9.5px] transition-colors', on ? 'text-ink' : 'text-ink-soft group-hover/tab:text-ink')}>{m.id === 'moves' ? 'Move' : m.verb.slice(0, -1)}</span>
                  </button>
                </li>
              )
            })}
          </ol>
        </div>

        {/* The looks, at three depths */}
        <div className="relative h-[520px] sm:h-[640px] lg:h-[min(760px,calc(100svh-180px))]">
          <Layer x={x} y={y} depth={0.5} className="absolute top-0 right-0 h-full w-[68%] sm:w-[60%]">
            <div className="relative h-full overflow-hidden bg-sand shadow-lift">
              {photo(0, '(min-width: 1024px) 34vw, 68vw', { imgClassName: 'scale-[1.04] transition-transform duration-[6000ms] ease-out group-hover/hero:scale-100' })}
              <Link to={`/product/${product.slug}`} className="group/tag absolute bottom-4 left-4 flex items-center gap-3 bg-paper/95 py-2 pr-3 pl-2 backdrop-blur-sm">
                <span className="grid size-7 place-items-center bg-ink text-white transition-transform duration-300 group-hover/tag:rotate-90">
                  <Icon name="plus" size={14} weight="bold" />
                </span>
                <span className="min-w-0">
                  <span className="block max-w-[180px] truncate text-[12.5px] text-ink">{product.name}</span>
                  <span className="block text-[12.5px] font-semibold text-ink tabular-nums">{formatPrice(product.price)}</span>
                </span>
              </Link>
            </div>
          </Layer>
          <Layer x={x} y={y} depth={1.1} className="absolute top-[14%] left-0 h-[46%] w-[34%] sm:w-[30%]">
            <div className="relative h-full overflow-hidden bg-sand shadow-lift">{photo(1, '(min-width: 1024px) 18vw, 34vw')}</div>
          </Layer>
          <Layer x={x} y={y} depth={1.6} className="absolute bottom-[4%] left-[16%] h-[34%] w-[24%] sm:left-[20%] sm:w-[22%]">
            <div className="relative h-full overflow-hidden border-[6px] border-paper bg-sand shadow-lift">{photo(2, '(min-width: 1024px) 14vw, 26vw')}</div>
          </Layer>
        </div>
      </div>
    </section>
  )
}
