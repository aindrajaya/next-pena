export const navigation = [
  {
    title: "Introduction",
    id: 0,
    links: [
      { title: "Getting started", href: "/", icon: "start" },
      { title: "Installation", href: "/docs/installation", icon: "install" },
    ],
  },
  {
    title: "Core concepts",
    id: 1,
    links: [
      {
        title: "Understanding Pena",
        href: "/docs/understanding-penanext",
        icon: "stack",
        navigations: [
          {
            title: "What is Next.js?",
            href: "/what-is-next-js",
            icon: "stack",
          },
          {
            title: "Benefits of Next Js",
            href: "/benefits-of-next-js",
            icon: "stack",
          },
          {
            title: "How to use Next Js",
            href: "/how-to-use-next-js",
            icon: "stack",
          },
          {
            title: "Conclusion",
            href: "/conclusion",
            icon: "stack",
          },
        ],
      },
      {
        title: "Predicting user",
        href: "/docs/predicting-user-behavior",
        icon: "start",
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
  // {
  //   title: 'API reference',
  //   links: [
  //   ],
  // },
  {
    title: "Contributing",
    id: 2,
    links: [
      {
        title: "Architecture guide",
        href: "/docs/architecture-guide",
        icon: "arch",
      },
      {
        title: "How to contribute",
        href: "/docs/how-to-contribute",
        icon: "user",
      },
    ],
  },
];
