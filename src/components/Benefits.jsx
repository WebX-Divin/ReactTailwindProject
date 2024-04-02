import React from 'react';

const benefitsData = [
  {
    title: 'Get unlimited access to every story.',
    description:
      'Read any article in our entire library across all your devices - with no paywalls, story limits or ads.',
  },
  {
    title: 'Support the voices you want to hear more from.',
    description:
      'A portion of your membership will directly support the writers and thinkers you read the most.',
  },
];

const Benefit = ({ title, description }) => (
  <div className="benefit mb-8">
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Benefits = () => (
  <div className="benefits px-4 md:px-20 lg:px-40">
    <h2 className="text-2xl font-bold text-center mb-8">Why join Medium?</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> {/* Responsive grid */}
      {benefitsData.map((benefit) => (
        <Benefit key={benefit.title} {...benefit} />
      ))}
    </div>
  </div>
);

export default Benefits();