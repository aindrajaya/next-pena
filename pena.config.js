// pena.config.js

const config = {
    title: 'Pena - Technical Writing as Subscription.',
    description: 'Pena is a comprehensive platform revolutionizing technical writing through subscription-based services, offering advanced tools, resources, and expertise to empower professionals and organizations in creating high-quality technical content efficiently and effectively.',
    author: 'Penateam',
    siteUrl: 'https://your-nextjs-site.example.com',
    logo: '/images/logo.svg', // Path to your site logo
    defaultLocale: 'en',
    locales: ['en', 'fr'], // Example locales for internationalization

    apiReferenceConfig: {
      spec: {
        // url: 'https://petstore3.swagger.io/api/v3/openapi.json',
        url: "/upsto.json"
      },
      theme: 'alternate',
      customCss: '.darklight{display:none!important;}',
    }
  
    // Other configuration options as needed
  };
  
module.exports = config;