/* eslint-disable react/prop-types */
import './FeatureCard.css';

function FeatureCard(props) {
  return (
    <div className="feature-card">
      <img src={props.icon} alt="icon" />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}

export default FeatureCard;
