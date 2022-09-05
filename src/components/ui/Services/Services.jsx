import './services.css';
import { useState } from 'react';
import { textService, textTabs } from '../../../utils/constants';
import Tabs from '../Tabs/Tabs';
import Advantages from '../Advantages/Advantages';

function Services() {
  const [serviceIndex, setServiceIndex] = useState(0);

  const handleTabClick = (e) => {
    setServiceIndex(textTabs.indexOf(e.currentTarget.id));
  };

  return (
    <section className="services">
      <div className="services-title-wrapper">
        <h2 className="services__title subtitle">Services</h2>
      </div>
      <Tabs
        textTabs={textTabs}
        serviceIndex={serviceIndex}
        handleClick={handleTabClick}
      />
      <Advantages textService={textService} serviceIndex={serviceIndex} />
    </section>
  );
}

export default Services;
