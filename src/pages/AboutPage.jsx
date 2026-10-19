import { Link } from 'react-router'
import { categories, perks } from '../data/content'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { useReveal } from '../hooks/useReveal'
import { Img } from '../components/ui/Img'
import { Icon } from '../components/ui/Icon'
import { Button } from '../components/ui/Button'

const CHAPTERS = [
  { title: 'Prints first', hand: 'always', body: 'Every season starts with the print: ikats from Telangana, hand-painted organzas, bold botanicals. We build the silhouette around it, never the other way round.', image: 't04-2' },
  { title: 'Cut to', hand: 'move', body: 'Tiers, flares and wide hems are tested in motion before they are photographed still. If a dress does not twirl, it does not ship.', image: 't45-2' },
  { title: 'Light enough to', hand: 'travel', body: 'Cottons, linens and organzas that breathe in an Indian summer, fold into a weekend bag and come out ready to wear.', image: 't49-2' },
]

export function AboutPage() {
  useDocumentTitle('About us')
  const ref = useReveal()

  return (
    <div ref={ref}>
      <section className="bg-mist">
        <div className="shell grid items-center gap-12 py-14 lg:grid-cols-[1.1fr_1fr] lg:py-20">
          <div>
            <p className="caps ruled-label max-w-[280px] text-[10px] text-ink-soft">About us</p>
            <h1 className="display mt-6 text-[52px] leading-[0.92] sm:text-[84px]">
              Wear what <span className="hand">moves</span> you
            </h1>
            <p className="mt-7 max-w-[46ch] text-[16.5px] leading-relaxed text-ink-soft">
              Trendsattire makes clothes for women who choose colour, comfort and character. Print-led dresses, maxis, co-ords and kurta sets for brunches, holidays, work days and the occasional dance floor.
            </p>
            <Button to="/shop" size="lg" className="mt-9" arrow>
              Shop the collection
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Img id="t45-1" alt="A fuchsia tiered maxi mid-spin" sizes="(min-width: 1024px) 22vw, 50vw" className="aspect-[4/5]" position="50% 25%" />
            <Img id="t01-1" alt="A yellow ikat flare dress by a pool" sizes="(min-width: 1024px) 22vw, 50vw" className="mt-16 aspect-[4/5]" position="50% 25%" />
          </div>
        </div>
      </section>

      <section className="shell pt-24 lg:pt-32">
        <ul className="space-y-16 lg:space-y-24">
          {CHAPTERS.map((c, i) => (
            <li key={c.title} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-20">
              <div className={i % 2 ? 'lg:order-2' : ''} data-reveal-frame>
                <Img id={c.image} alt="" sizes="(min-width: 1024px) 45vw, 100vw" className="aspect-[4/3]" position="50% 30%" />
              </div>
              <div data-reveal>
                <h2 className="display text-[36px] sm:text-[52px]">
                  {c.title} <span className="hand">{c.hand}</span>
                </h2>
                <p className="mt-5 max-w-[48ch] text-[16.5px] leading-relaxed text-ink-soft">{c.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="shell pt-24 lg:pt-32">
        <ul className="grid gap-6 border-t border-line pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {perks.map((p) => (
            <li key={p.title} className="flex gap-4">
              <Icon name={p.icon} size={26} className="shrink-0" />
              <span>
                <span className="caps block text-[10px] text-ink">{p.title}</span>
                <span className="mt-1 block text-[14px] leading-relaxed text-ink-soft">{p.body}</span>
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="shell pt-20 lg:pt-28">
        <h2 className="display text-[30px] sm:text-[40px]">Where to begin</h2>
        <ul className="mt-6 flex flex-wrap gap-3">
          {categories.map((c) => (
            <li key={c.id}>
              <Link to={c.to} className="caps press group inline-flex h-12 items-center gap-3 border border-line-strong bg-paper px-5 text-[10.5px] text-ink transition-colors hover:border-ink hover:bg-ink hover:text-white">
                {c.label}
                <Icon name="arrow" size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
