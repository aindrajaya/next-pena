import React from 'react';

const DynamicColorIcon = ({ svg }) => {
  const renderSVG = (svgType) => {
    switch (svgType) {
      case 'arch':
        return svgArch;
      case 'start':
        return svgStart;
      case 'stack':
        return svgStack;
      case 'core':
        return svgCore;
      case 'user':
        return svgUser;
      case 'install':
        return svgInstall;
      default:
        return null;
    }
  };

  return <div dangerouslySetInnerHTML={{ __html: renderSVG(svg) }} />;
};

export default DynamicColorIcon;

const svgArch = `
    <svg class="h-4 w-4 text-red-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="3" y1="21" x2="21" y2="21" />  <path d="M4 21v-15a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v15" />  <path d="M9 21v-8a3 3 0 0 1 6 0v8" /></svg>
`;

const svgStart = `
<svg class="h-4 w-4 text-red-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
</svg>
`;

const svgStack = `
<svg class="h-4 w-4 text-red-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="12 4 4 8 12 12 20 8 12 4" />  <polyline points="4 12 12 16 20 12" />  <polyline points="4 16 12 20 20 16" /></svg>
`;

const svgCore = `
<svg class="h-4 w-4 text-red-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="1" />  <circle cx="12" cy="12" r="5" />  <circle cx="12" cy="12" r="9" stroke-dasharray=".001 4.03" /></svg>
`;

const svgUser = `
<svg class="h-4 w-4 text-red-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
</svg>
`;

const svgInstall = `
<svg class="h-4 w-4 text-red-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M7 7h10v6a3 3 0 0 1 -3 3h-4a3 3 0 0 1 -3 -3v-6" />  <line x1="9" y1="3" x2="9" y2="7" />  <line x1="15" y1="3" x2="15" y2="7" />  <path d="M12 16v2a2 2 0 0 0 2 2h3" /></svg>
`;
