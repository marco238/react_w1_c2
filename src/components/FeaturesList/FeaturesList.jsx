import FeatureCard from '../FeatureCard/FeatureCard';
import './FeaturesList.css';

function FeaturesList() {
  const features = [
    {
      icon: 'https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png',
      title: 'Declarative',
      description: 'React makes it painless to create interactive UIs.'
    },
    {
      icon: 'https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png',
      title: 'Components',
      description: 'Build encapsulated components that manage their state.'
    },
    {
      icon: 'https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png',
      title: 'Single-Way',
      description: 'A set of immutable values are passed to the component\'s.'
    },
    {
      icon: 'https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png',
      title: 'JSX',
      description: 'Statically-typed, designed to run on modern browsers.'
    }
  ];

  return (
    <section className="features-list">
      {features.map((feature, index) => (
        <FeatureCard key={index} {...feature} />
      ))}
    </section>
  )
}

export default FeaturesList;
