import './video.css';
import { useState } from 'react';
import Popup from '../Popup/Popup';

function Video() {
  const [popupOpen, setPopupOpen] = useState(false);

  const handleOpenPopup = () => setPopupOpen(true);
  const handleClosePopup = () => setPopupOpen(false);

  return (
    <>
      <section className="video">
        <div className="video__wrapper">
          <button
            className="video__button button"
            type="button"
            aria-label="play video"
            onClick={handleOpenPopup}
          />
          <div className="video__text">
            <h2 className="video__title">Get To Know Us a Little Better!</h2>
            <p className="video__caption">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque eu erat lacus, vel congue mauris. Fusce velit justo,
              faucibus eu sagittis ac, gravida quis tortor. Suspendisse non urna
              mi, quis tincidunt eros. Nullam tellus turpis, fringilla sit amet
              congue ut, luctus a nulla. Donec sit amet sapien neque, id
              ullamcorper diam. Nulla facilisi. Pellentesque pellentesque arcu a
              elit congue lacinia.
            </p>
            <p className="video__caption">
              Nullam tellus turpis, fringilla sit amet congue ut, luctus a
              nulla. Donec sit amet sapien neque, id ullamcorper diam. Nulla
              facilisi. Pellentesque pellentesque arcu a elit congue lacinia.
            </p>
          </div>
        </div>
      </section>
      <Popup isOpen={popupOpen} onClose={handleClosePopup}>
        <iframe
          className="video__iframe"
          src="https://www.youtube.com/embed/arj7oStGLkU?autoplay=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </Popup>
    </>
  );
}

export default Video;
