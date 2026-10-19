import { Link } from 'react-router'
import { capsule } from '../../data/content'
import { useReveal } from '../../hooks/useReveal'
import { Img } from '../../components/ui/Img'
import { Icon } from '../../components/ui/Icon'

/**
 * The summer capsule (ref: Весенняя капсула): four edits with a caps title, one line and a
 * "Shop" link over each photo. The line under "Shop" draws out on hover.
 */
export function Capsule() {
  const ref = useReveal()
  return (
    <section ref={ref} className="shell pt-20 lg:pt-28" aria-labelledby="capsule-title">
      <h2 id="capsule-title" className="display text-center text-[30px] sm:text-[40px]">
        The summer <span className="hand">capsule</span>
      </h2>
      <ul className="mt-9 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {capsule.map((c, i) => (
          <li key={c.id} data-reveal style={{ '--reveal-delay': `${i * 80}ms` }}>
            <Link to={c.to} className="group relative block overflow-hidden bg-sand">
              <Img id={c.image} alt="" sizes="(min-width: 1024px) 24vw, 50vw" className="aspect-[4/5]" position="50% 25%" imgClassName="transition-transform duration-[1400ms] ease-[var(--ease-out)] group-hover:scale-[1.05]" />
              <span aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgb(17_17_17/0.6))]" />
              <span className="absolute inset-x-0 bottom-0 p-4 text-white sm:p-5">
                <span className="display block text-[18px] sm:text-[22px]">{c.title}</span>
                <span className="mt-1.5 hidden text-[13px] text-white/80 sm:block">{c.body}</span>
                <span className="caps mt-3 flex items-center gap-3 text-[10px]">
                  Shop
                  <span className="relative block h-px w-6 bg-white transition-[width] duration-500 ease-[var(--ease-out)] group-hover:w-14">
                    <Icon name="caret-right" size={11} weight="bold" className="absolute top-1/2 -right-1.5 -translate-y-1/2" />
                  </span>
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
