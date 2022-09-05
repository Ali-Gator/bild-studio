import './advantages.css';

function Advantages({ textService, serviceIndex }) {
  const renderAdvantages = (advantages) =>
    advantages.map((advantage) => (
      <li className="services__bullet-item" key={advantage}>
        {advantage}
      </li>
    ));

  return (
    <div className="advantages">
      <p className="advantages__text">{textService[serviceIndex].text}</p>
      <ul className="advantages__bullet-list">
        {renderAdvantages(textService[serviceIndex].advantages)}
      </ul>
    </div>
  );
}

export default Advantages;
