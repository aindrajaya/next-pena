export const navigation = [
  {
    title: '',
    links: [
      { title: 'Home', href: '/', icon: 'start' },
    ],
  },
  {
    title: 'Introduction',
    links: [
      { title: 'Getting started', href: '/docs/getting-started', icon: 'start' },
      { 
        title: 'Installation', 
        href: '/docs/installation', 
        icon: 'install',
        children: [
          {
            title: 'Windows Installation',
            href: '/docs/installation/windows',
          },
          { title: 'Mac Installation', href: '/docs/installation/mac' },
          { title: 'Linux Installation', href: '/docs/installation/linux' },
        ], 
      },
    ],
  },
  {
    title: 'Core concepts',
    links: [
      {
        title: 'About Pena',
        href: '/docs/about-pena',
        icon: 'stack',
      },
      {
        title: 'Architecture guide',
        href: '/docs/architecture-guide',
        icon: 'arch',
      },
    ],
  },
  // {
  //   title: 'Advanced guides',
  //   links: [
  //     { title: 'Writing plugins', href: '/docs/writing-plugins' },
  //     { title: 'Neuralink integration', href: '/docs/neuralink-integration' },
  //   ],
  // },
  {
    title: 'API reference',
    links: [
      { title: 'API Reference', href: '/reference', icon: 'install' },
    ],
  },
  {
    title: 'Contributing',
    links: [

      {
        title: 'How to contribute',
        href: '/docs/how-to-contribute',
        icon: 'user',
      },
    ],
  },
];
