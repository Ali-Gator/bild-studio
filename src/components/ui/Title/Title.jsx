import './title.css';

function Title({ children }) {
  return (
    <div className="title">
      <div className="title-wrapper">
        <h1 className="title__text">{children}</h1>
      </div>
    </div>
  );
}

export default Title;
