import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { moveStrip } from '../../data/content'
import { Img } from '../../components/ui/Img'

/**
 * Made to move: as the page scrolls, a strip of twirl photographs slides one way and the
 * huge outlined words slide the other, so the section itself sways. Pure transform on
 * scroll progress; nothing animates under reduced motion.
 */
export function MadeToMove() {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const photosX = useTransform(scrollYProgress, [0, 1], reduce ? ['0%', '0%'] : ['4%', '-34%'])
  const wordsX = useTransform(scrollYProgress, [0, 1], reduce ? ['0%', '0%'] : ['-30%', '6%'])
  const words = [...moveStrip.words, ...moveStrip.words, ...moveStrip.words]

  return (
    <section ref={ref} className="mt-20 overflow-hidden bg-ink py-16 text-white lg:mt-28 lg:py-24" aria-labelledby="move-title">
      <div className="shell flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <h2 id="move-title" className="display text-[34px] sm:text-[52px]">
          Made to <span className="hand">move</span>
        </h2>
        <p className="max-w-[44ch] text-[15px] text-white/70">Tiers that twirl, hems that sway, fabrics that flow. Every piece is tested in motion before it is photographed still.</p>
      </div>

      <motion.ul style={{ x: wordsX }} className="mt-12 flex w-max gap-10 whitespace-nowrap" aria-hidden="true">
        {words.map((w, i) => (
          <li key={i} className="display text-[clamp(72px,11vw,170px)] leading-none text-transparent [-webkit-text-stroke:1.2px_rgb(255_255_255/0.55)]">
            {w}
          </li>
        ))}
      </motion.ul>

      <motion.ul style={{ x: photosX }} className="mt-8 flex w-max gap-3 pl-4 sm:pl-10">
        {moveStrip.images.map((id, i) => (
          <li key={id} className={i % 2 ? 'mt-10' : ''}>
            <div className="group relative w-[44vw] overflow-hidden sm:w-[26vw] lg:w-[18vw]">
              <Img id={id} alt="" sizes="(min-width: 1024px) 18vw, 44vw" className="aspect-[4/5]" position="50% 25%" imgClassName="transition-transform duration-[1400ms] ease-[var(--ease-out)] group-hover:scale-110" />
            </div>
          </li>
        ))}
      </motion.ul>
    </section>
  )
}
