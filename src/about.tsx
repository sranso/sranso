import { TextLink } from './components/TextLink';

export function About() {
  return (
    <main className='flex-1 p-6 md:ml-64'>
      <div className='flex flex-col gap-y-4'>
        <div className='flex flex-col gap-y-2'>
          <h2 className='text-md font-bold'>Artist statement</h2>
          <p>
            Practice and enlightenment are one phenomenon – when we are present
            to the work, we can make art. I am drawn to intimate and quiet
            subject matter found in nature, in people I care about, in animals.
            I owe much of my growth as an artist to working alongside others.
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
