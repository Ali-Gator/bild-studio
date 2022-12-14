import { Fragment } from 'react';
import './filters.css';
import { textCategories } from '../../../utils/constants';

function Filters({ isGrid, setIsGrid, setCategory, category }) {
  const handleChangeView = () => setIsGrid(!isGrid);

  const handleChangeCategory = (e) => setCategory(e.target.textContent);

  const renderCategoryFilters = () =>
    textCategories.map((text, index) => (
      <Fragment key={text}>
        <li className="filters__categories-item">
          <button
            className={`filters__categories-button button ${
              category === text && 'filters__categories-button_active'
            }`}
            type="button"
            disabled={category === text}
            onClick={handleChangeCategory}
          >
            {text}
          </button>
        </li>
        {textCategories.length > index + 1 && (
          <li>
            <span className="filters__categories-divider">/</span>
          </li>
        )}
      </Fragment>
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
              isGrid && 'filters__view-button_active'
            }`}
            type="button"
            aria-label="grid view"
            onClick={handleChangeView}
          />
        </li>
        <li className="filters__view-item">
          <button
            className={`filters__view-button filters__view-button_type_list button ${
              !isGrid && 'filters__view-button_active'
            }`}
            type="button"
            aria-label="list view"
            onClick={handleChangeView}
          />
        </li>
      </ul>
    </div>
  );
}

export default Filters;
