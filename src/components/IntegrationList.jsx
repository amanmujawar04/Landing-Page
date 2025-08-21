import React from 'react';

const integrations = [
  { name: 'Webflow', logo: 'https://img.icons8.com/?size=100&id=jsQA1CYwtblt&format=png&color=808080', alt: 'Webflow Logo' },
  { name: 'Framer', logo: 'https://img.icons8.com/?size=100&id=js8pNS2UtYKY&format=png&color=808080', alt: 'Framer Logo' },
  { name: 'WordPress', logo: 'https://img.icons8.com/?size=100&id=ZbU7QD8up3bw&format=png&color=808080', alt: 'WordPress Logo' },
  { name: 'React', logo: 'https://img.icons8.com/?size=100&id=047WZAFDnkVp&format=png&color=808080', alt: 'React logo' },
  { name: 'Circle', logo: 'https://img.icons8.com/?size=100&id=NJ9NHYTDtrBG&format=png&color=808080', alt: 'Circle logo' },
  { name: 'SquareSpace', logo: 'https://img.icons8.com/?size=100&id=p3RaQI4XTc5b&format=png&color=808080', alt: 'Squarespace logo' },
  { name: 'Weweb', logo: 'https://img.icons8.com/?size=100&id=66886&format=png&color=808080', alt: 'Weweb logo' },
  { name: 'Carrd', logo: 'https://img.icons8.com/?size=100&id=j5sL6fK3mJDT&format=png&color=808080', alt: 'Carrd logo' },
  { name: 'Notion', logo: 'https://img.icons8.com/?size=100&id=nvtEH6DpqruC&format=png&color=808080', alt: 'Notion logo' },
  { name: 'Discord', logo: 'https://img.icons8.com/?size=100&id=30888&format=png&color=808080', alt: 'Discord logo' },
  { name: 'Xano', logo: 'https://img.icons8.com/?size=100&id=38516&format=png&color=808080', alt: 'Xano logo' },
  { name: 'Supabase', logo: 'https://img.icons8.com/?size=100&id=7VdmcgXeUL6y&format=png&color=808080', alt: 'Supabase logo' },
];

const IntegrationItem = ({ name, logo, alt }) => (
  <li
    role="listitem"
    className="relative flex flex-col items-center space-y-2 cursor-pointer group"
  >
    <img src={logo} alt={alt} loading="lazy" className="w-auto h-12" />
    {/*  hover logo name */}
    <span className="absolute px-2 py-1 text-xs text-white transition-opacity bg-gray-800 rounded opacity-0 pointer-events-none bottom-16 group-hover:opacity-100 whitespace-nowrap">
      {name}
    </span>
  </li>
);

const IntegrationList = () => (
  <section className="w-full max-w-5xl mx-auto mt-10">
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      <p className="max-w-md text-sm text-center text-gray-600">
        Integrate with nearly any tool or framework under the sun
      </p>
      <div
        className="inline-flex items-center gap-1 text-sm font-semibold text-yellow-700 cursor-default select-none"
        aria-label="View all integration guides"
      >
        View all 🡢
      </div>
    </div>
    <ul
      role="list"
      className="flex flex-wrap justify-center gap-8 mt-10"
      aria-label="Integration tools list"
    >
      {integrations.map(({ name, logo, alt }) => (
        <IntegrationItem key={name} name={name} logo={logo} alt={alt} />
      ))}
    </ul>
  </section>
);

export default IntegrationList;