import React from 'react';

const testimonials = [
  {
    name: 'Alessia Sannazzaro',
    title: 'Account Manager',
    text: `I can’t believe how simple it is to implement Outseta with Webflow. So many features out of the box and an amazing team behind it.Client is happy, client’s clients are onboarded and happy special thanks to @GeoffTRoberts & @jameslavine_ for helping throughout the process .`,
    imageUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Justin Welsh',
    title: 'Creator and Solopreneur',
    text: `Thinking about launching a community or SaaS product?Outseta is your tool.
    A CRM, payments, subscriptions, email automation, gated content, segmentation, etc..
    Outseta is loaded with great features and functionality at an extremely fair price.`,
    imageUrl: 'https://randomuser.me/api/portraits/men/45.jpg',
  },
  {
    name: 'Bryan Watson',
    title: 'Founder and CEO, Ovida',
    text: `We're loving Outseta. We’ve walked away from Hubspot, Intercom and Chargebee, and have replaced them with Outseta.
    Our team can now focus on developing our core value offering, rather than wasting time building table-stakes features, and we don’t need experts in each tool to get value from them.`,
    imageUrl: 'https://randomuser.me/api/portraits/men/46.jpg',
  },
];

const TestimonialCard = ({ name, handle, title, text, imageUrl }) => (
  <div className="max-w-md p-12 mx-auto bg-white border border-black shadow-md rounded-3xl">
    <div className="flex items-center mb-4 space-x-4">
      <img className="w-12 h-12 rounded-full" src={imageUrl} alt={name} />
      <div>
        <p className="text-lg font-bold">{name}</p>
        {handle ? (
          <p className="text-sm text-gray-500">{handle}</p>
        ) : (
          title && <p className="text-sm font-semibold">{title}</p>
        )}
      </div>
    </div>
    <p className="text-sm text-gray-700 whitespace-pre-line">{text}</p>
  </div>
);

const Testimonials = () => (
  <div className="w-auto px-12 py-2 mx-auto mt-2 max-w-7xl">
    {/* Dashboard Image Section */}
    <div className="flex justify-center mb-12">
      <img
        src="https://cdn.prod.website-files.com/663cf90ca192fe7e5bcb8bd7/6700431fc3dc3762b59884e8_cdc5cff098435a0a7f0259a36fdbdab8_cleanshot-2024-10-04-15-33-33-p-800.avif"
        alt="Dashboard"
        className="object-cover w-full max-w-6xl rounded-lg shadow-lg"
      />
    </div>

    <h1 className="mb-12 text-5xl font-extrabold text-center text-gray-900">
      "Everything you need to build <br />a recurring revenue business..."
    </h1>
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
      {testimonials.map(({ name, handle, title, text, imageUrl }) => (
        <TestimonialCard
          key={name}
          name={name}
          handle={handle}
          title={title}
          text={text}
          imageUrl={imageUrl}
        />
      ))}
    </div>
  </div>
);

export default Testimonials;