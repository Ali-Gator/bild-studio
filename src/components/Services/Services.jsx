import './services.css';
import { useState } from 'react';
import { textService, textTabs } from '../../utils/constants';

function Services() {
  const [serviceIndex, setServiceIndex] = useState(0);

  const handleTabClick = (e) => {
    setServiceIndex(textTabs.indexOf(e.target.textContent));
  };

  const renderTabs = (tabs) =>
    tabs.map((tab, index) => (
      <li className="services__tab-item" key={tab}>
        <button
          className={`services__tab-button button ${
            serviceIndex === index ? 'services__tab-button_active' : ''
          }`}
          type="button"
          onClick={handleTabClick}
        >
          <span
            className={`services__tab-icon services__tab-icon_type_${tab.toLowerCase()}`}
          />
          {tab}
        </button>
      </li>
    ));

  const renderAdvantages = (advantages) =>
    advantages.map((advantage) => (
      <li className="services__bullet-item" key={advantage}>
        {advantage}
      </li>
    ));

  return (
    <section className="services">
      <div className="services-title-wrapper">
        <h2 className="services__title">Services</h2>
      </div>
      <div className="services-tabs-wrapper">
        <ul className="services__tabs-list list">{renderTabs(textTabs)}</ul>
      </div>
      <div className="services__text-wrapper">
        <p className="services__text">{textService[serviceIndex].text}</p>
        {textService[serviceIndex].advantages && (
          <ul className="services__bullet-list">
            {renderAdvantages(textService[serviceIndex].advantages)}
          </ul>
        )}
      </div>
    </section>
  );
}

export default Services;
