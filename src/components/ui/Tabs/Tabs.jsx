import './tabs.css';

function Tabs({ textTabs, serviceIndex, handleClick }) {
  const renderTabs = (tabs, activeIndex) =>
    tabs.map((tab, index) => (
      <li className="tab__item" key={tab}>
        <button
          className={`tab__button button ${
            activeIndex === index ? 'tab__button_active' : ''
          }`}
          type="button"
          onClick={handleClick}
          id={tab}
        >
          <span className={`tab__icon tab__icon_type_${tab.toLowerCase()}`} />
          {tab}
        </button>
      </li>
    ));

  return (
    <div className="tabs">
      <ul className="tabs__list list">{renderTabs(textTabs, serviceIndex)}</ul>
    </div>
  );
}

export default Tabs;
