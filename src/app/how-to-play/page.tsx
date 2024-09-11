import { type Metadata } from 'next'
import Image from 'next/image'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { SectionIntro } from '@/components/SectionIntro'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'
import howToPlay from '@/images/how-to-play.png'
import howToPlay2 from '@/images/how-to-play2.png'

function PARTONE() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-24 sm:py-20 lg:mt-24">
      <Container>
        <SectionIntro title="HOW TO PLAY" invert={true}>
          <p className="font-bold">Objective</p>
          <p>
            The objective of Introverse is to get to know the other humans
            you're playing the game with a little better. There is no winning or
            losing! Though we think everyone wins when everyone playing tries to
            be their most authentic self.
          </p>
          <p className="mt-4 font-bold">Setup</p>
          <p>
            Separate the Level 1, 2, and 3 game cards into different piles and
            shuffle each pile. Have everyone select an archetype card. Deal
            cards from the Level 1 pile until you've dealt a card of each color.
            Arrange the cards face-up in the hexagon pattern shown on the back
            of the cards. Choose a starting player (we recommend the oldest
            player) and play counter-clockwise. Now you're ready to play!
          </p>
        </SectionIntro>
        <FadeInStagger faster>
          <FadeIn>
            <div className="mx-10 mt-10">
              <Image
                src={(howToPlay as any).src || howToPlay}
                alt="type"
                unoptimized
                width={500}
                height={300}
              />{' '}
            </div>
          </FadeIn>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function PARTTWO() {
  return (
    <>
      <SectionIntro title="Using Powers" className="mt-10 sm:mt-10 lg:mt-10">
        <p>
          Each Introverse archetype card has a unique power, which may be used
          at any point during the game. Powers may be used an unlimited number
          of times per game.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger faster>
          <FadeIn>
            <div className="mx-10 mt-10">
              <Image
                src={(howToPlay2 as any).src || howToPlay2}
                alt="type"
                unoptimized
                width={500}
                height={300}
              />{' '}
            </div>
          </FadeIn>
        </FadeInStagger>
      </Container>
    </>
  )
}

function PARTTHREE() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-24 sm:py-20 lg:mt-24">
      <Container>
        <SectionIntro title="Taking a Turn" invert={true}>
          <p>During each player's turn, they should:</p>
          <p>- Select a game card from the table.</p>
          <p>- Read the name and prompt out loud.</p>
          <p>- Play the game with the group.</p>
          <p>- Replace the played card with a new card of the same color.</p>
          <p className="mt-4 font-bold">Selecting a Card</p>
          <p>
            In level 1, choose the card that matches your archetype&apos;s
            color. In level 2, choose the card that matches your
            archetype&apos;s color, or one of the two adjacent cards to your
            archetype&apos;s color in the hexagon. In level 3, select any card
            from the hexagon.
          </p>
          <p className="mt-4">
            Remember: Introverse is supposed to be challenging! However, if your
            card feels too uncomfortable or unfun, feel free to select a
            different card from the table or deal another from the deck.
          </p>
        </SectionIntro>
      </Container>
    </div>
  )
}
function PARTFOUR() {
  return (
    <>
      <SectionIntro title="Leveling Up" className="mt-10 sm:mt-10 lg:mt-10">
        <p>
          When everyone in the group has had a turn, this completes a round. We
          suggest 2 rounds per level for groups of 2-3 and 1 round per level for
          groups of 4-6. When your group has completed the desired number of
          rounds, level up!
        </p>
        <p className="mt-4">
          To level up, remove all of the current level game cards from the table
          and deal a new hexagon containing each color from the next level of
          game cards, similar to how you set up the game initially.
        </p>
      </SectionIntro>
    </>
  )
}

function PARTFIVE() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-24 sm:py-20 lg:mt-24">
      <Container>
        <SectionIntro title="End of Game" invert={true}>
          <p className="mt-4 font-bold">End of Game</p>
          <p>
            When the group levels up from level 3, the game ends! Hopefully
            everyone knows each other a little better now than they did before.
          </p>
        </SectionIntro>
      </Container>
    </div>
  )
}
export const metadata: Metadata = {
  description:
    'Introverse is a connection card game that helps you get to know each other in an unforgettable way.',
}

export default async function Home() {
  return (
    <>
      <PARTONE />
      <PARTTWO />
      <PARTTHREE />
      <PARTFOUR />
      <PARTFIVE />
    </>
  )
}
