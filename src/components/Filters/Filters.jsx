import './filters.css';
import { textCategories } from '../../utils/constants';

function Filters() {
  const renderCategoryFilters = () =>
    textCategories.map((category, index) => (
      <>
        <li className="filters__categories-item" key={category}>
          <button
            className={`filters__categories-button button ${
              true && 'filters__categories-button_active'
            }`}
            type="button"
          >
            {category}
          </button>
        </li>
        {textCategories.length > index + 1 && (
          <li>
            <span className="filters__categories-divider">/</span>
          </li>
        )}
      </>
    ));

  return (
    <div className="filters">
      <ul className="filters__categories-list list">
        {renderCategoryFilters()}
      </ul>
      <ul className="filters__view-list list ">
        <li className="filters__view-item">
          <button
            className={`filters__view-button filters__view-button_type_grid button ${
              true && 'filters__view-button_active'
            }`}
            type="button"
            aria-label="grid view"
          />
        </li>
        <li className="filters__view-item">
          <button
            className={`filters__view-button filters__view-button_type_list button ${
              true && 'filters__view-button_active'
            }`}
            type="button"
            aria-label="list view"
          />
        </li>
      </ul>
    </div>
  );
}

export default Filters;
