import { Fragment } from 'react';
import clsx from 'clsx';
import { Highlight } from 'prism-react-renderer';

import { Button } from './Button';
import { HeroBackground } from './HeroBackground';
import { Search } from './Search';

const codeLanguage = 'javascript';
const code = `const config = {
  title: 'Pena - Title.',
  description: "Platform description",
  locales: ['en', 'fr'],
  ...
}

module.exports = config;`;

const tabs = [
  { name: 'pena.config.js', isActive: true },
  { name: 'package.json', isActive: false },
];

function TrafficLightsIcon(props) {
  return (
    <svg aria-hidden='true' viewBox='0 0 42 10' fill='none' {...props}>
      <circle cx='5' cy='5' r='4.5' />
      <circle cx='21' cy='5' r='4.5' />
      <circle cx='37' cy='5' r='4.5' />
    </svg>
  );
}

export function Hero() {
  return (
    <div className='overflow-hidden dark:-mb-32 dark:mt-[-4.75rem] dark:pb-32 dark:pt-[4.75rem]'>
      <div className='py-16 sm:px-2 lg:relative lg:px-0 lg:py-20 flex flex-col items-center justify-center'>
        <div className='absolute inset-x-[-50vw] -bottom-48 -top-32 [mask-image:linear-gradient(transparent,white,white)] lg:-bottom-32 lg:-top-32 lg:left-[calc(50%+14rem)] lg:right-0 lg:[mask-image:none] dark:[mask-image:linear-gradient(transparent,white,transparent)] lg:dark:[mask-image:linear-gradient(white,white,transparent)]'>
          <HeroBackground className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-0 lg:translate-x-0 lg:translate-y-[-60%]' />
        </div>
        <p className='text-5xl pb-8 font-bold'>What can we help you with?</p>
        <Search />
      </div>
    </div>
  );
}
