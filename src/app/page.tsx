import { type Metadata } from 'next'
import Image from 'next/image'

import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { SectionIntro } from '@/components/SectionIntro'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'
import enhancer from '@/images/types/1.png'
import conjurer from '@/images/types/2.png'
import intuitor from '@/images/types/3.png'
import specialist from '@/images/types/4.png'
import connector from '@/images/types/5.png'
import transmuter from '@/images/types/6.png'
import one from '@/images/cards/1.png'
import two from '@/images/cards/2.png'
import three from '@/images/cards/3.png'
import four from '@/images/cards/4.png'
import five from '@/images/cards/5.png'
import six from '@/images/cards/6.png'
import product from '@/images/product.png'
import { Button } from '@/components/Button'
import Link from 'next/link'
const types = [
  ['Intuitor', intuitor],
  ['Connector', connector],
  ['Conjurer', conjurer],
  ['Enhancer', enhancer],
  ['Specialist', specialist],
  ['Transmuter', transmuter],
]
const cards = [
  ['one', one],
  ['two', two],
  ['three', three],
  ['four', four],
  ['five', five],
  ['six', six],
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <SectionIntro title="Archetypes of the Introverse" invert={true}>
          <p>
            Meet the 6 archetypes of the Introverse: The Intuitor, The
            Connector, The Specialist, The Enhancer, The Conjurer, and The
            Transmuter. Which one are you?
          </p>
        </SectionIntro>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3"
          >
            {types.map(([client, logo]) => (
              <li key={client.toString()}>
                <FadeIn>
                  <Image
                    src={(logo as any).src || logo}
                    alt="type"
                    unoptimized
                    width={500}
                    height={300}
                    style={{ borderRadius: '1rem', border: '1px solid #fff' }}
                  />{' '}
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({
  caseStudies,
}: {
  caseStudies: Array<MDXEntry<CaseStudy>>
}) {
  return (
    <>
      <SectionIntro title="120 Game Cards" className="mt-24 sm:mt-32 lg:mt-40">
        <p>
          Each of the six archetypes has 20 unique game cards, ranging from
          introspective questions to group activities to meditations and
          rituals. Introverse has something for everyone.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3"
          >
            {cards.map(([client, logo]) => (
              <li key={client.toString()}>
                <FadeIn>
                  <Image
                    src={(logo as any).src || logo}
                    alt="type"
                    unoptimized
                    width={400}
                    height={200}
                    style={{ borderRadius: '1rem', border: '1px solid #fff' }}
                  />{' '}
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'Introverse is a connection card game that helps you get to know each other in an unforgettable way.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24  ">
        <FadeIn className="w-full">
          <div className="flex w-full flex-col items-center justify-between md:flex-row">
            <div className="mb-4 w-full md:mb-0 md:w-7/12">
              <Image src={product} alt="" unoptimized />
            </div>
            <div className="w-full md:w-5/12">
              <h1 className="inline-block bg-gradient-to-r from-red-300 via-green-500 to-indigo-400 bg-clip-text font-display text-5xl font-medium tracking-tight text-neutral-950 text-transparent [text-wrap:balance] sm:text-7xl">
                Welcome to The Introverse
              </h1>
              <p className="mt-6 text-xl text-neutral-600">
                Get to know each other unforgettably with Introverse! Find your
                archetype and play through three levels of questions,
                discussions, meditations, rituals, and competitions. This is the
                last connection card game you'll ever need.
              </p>
              <Button
                href="https://theintroversegame.myshopify.com/"
                className="mt-8 px-6 py-3 text-lg"
              >
                ✨Buy Now✨
              </Button>
              <Link href="/how-to-play" className="mt-8 px-6 py-3 text-lg">
                How to Play
              </Link>
              <Link
                href="https://bcad.substack.com/p/introverse-is-finally-here"
                className="mt-8 px-6 py-3 text-lg"
              >
                Our Journey
              </Link>
            </div>
          </div>
        </FadeIn>
      </Container>

      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      {/* <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Phobia', logo: logoPhobiaDark }}
      >
        The team at Studio went above and beyond with our onboarding, even
        finding a way to access the user’s microphone without triggering one of
        those annoying permission dialogs.
      </Testimonial>

      <Services /> */}

      {/* <ContactSection /> */}
    </>
  )
}
