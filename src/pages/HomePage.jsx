import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { HeroMoves } from '../sections/home/HeroMoves'
import { NewIn } from '../sections/home/NewIn'
import { Mosaic } from '../sections/home/Mosaic'
import { MadeToMove } from '../sections/home/MadeToMove'
import { Capsule } from '../sections/home/Capsule'
import { Closing } from '../sections/home/Closing'

export function HomePage() {
  useDocumentTitle()
  return (
    <>
      <HeroMoves />
      <NewIn />
      <Mosaic />
      <MadeToMove />
      <Capsule />
      <Closing />
    </>
  )
}
