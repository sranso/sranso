import { TextLink } from './components/TextLink';

export function About() {
  return (
    <main className='flex-1 p-6 md:ml-64'>
      <div className='flex flex-col gap-y-4'>
        <div className='flex flex-col gap-y-2'>
          <h2 className='text-md font-bold'>Artist statement</h2>
          <p>
          I am drawn to intimate and quiet subject matter found in nature, in people I care about, and in animals. I start with something observed and see how far it can move towards something less certain. Much of my work comes from paying attention and then following the thought (“following the fun,” as is said in improv). Life is mysterious and unpredictable, and I like how artmaking dances on the line between the known and unknown. I want my work to retain the intimacy of that original encounter while leaving room for humor, surprise, and ambiguity.
          <br/>
          I make art because it is a puzzle that will forever intrigue me. The different shades of artmaking—whether it’s oil painting, acrylic, watercolor, clay, Mokuhanga, sewing, painting on clothing, sewing, or improv comedy (I performed on a house team in NYC for a few years) — can change quite a bit for me, but I like moving between them. Each has its own rules and possibilities, and they reinforce one another. When I take a break from one and return after some time, I can see how I have changed and what I have learned. Advancing in one advances another.
          <br/>
          The space between intention and outcome is especially interesting to me. I like having enough control to make choices, but not so much that I know exactly what the finished thing will be. This is part of what draws me to printmaking, watercolor, clay, improv, and to working plein air: the image or subject shifts. It is unpredictable and surprising. We have to stay present and be attentive.
          <br/>
          Much of my growth as an artist has come from working alongside others. I have learned through classes, residencies, and simply being in a room with people who are making things. I value the generosity, experimentation, and conversation that come from that.
          </p>
        </div>

        <div className='flex flex-col gap-y-2'>
          <h2 className='text-md font-bold'>CV</h2>
          <p>
            <TextLink href='https://docs.google.com/document/d/e/2PACX-1vThqlpCZg77fgqTNA0kvOjDagYcijQop355sgta1nNu1JMabJJDk3oSglxMJN0wH5rc4lu-TwmvTbf-/pub?embedded=true'>
              See here.
            </TextLink>
          </p>
        </div>

        <div className='flex flex-col gap-y-2'>
          <h2 className='text-md font-bold'>New Yorker Cartoons</h2>
          <p>
            Prints for sale at the{' '}
            <TextLink href='https://condenaststore.com/art/sarah+ransohoff?searchType=artistname'>
              Conde Nast Store
            </TextLink>
            .
          </p>
        </div>
      </div>
    </main>
  );
}
