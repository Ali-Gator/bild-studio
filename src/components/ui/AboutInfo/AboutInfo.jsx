import './aboutInfo.css';
import businessman from '../../../assets/images/about-businessman.png';

function AboutInfo() {
  return (
    <section className="about">
      <img
        className="about__image"
        alt="Businessman is talking by phone"
        src={businessman}
      />
      <div className="about__text-wrapper about__text-wrapper_type_big">
        <p className="about__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          eu erat lacus, vel congue mauris. Fusce velit justo, faucibus eu
          sagittis ac, gravida quis tortor. Suspendisse non urna mi, quis
          tincidunt eros. Nullam tellus turpis, fringilla sit amet congue ut,
          luctus a nulla. Donec sit amet sapien neque, id ullamcorper diam.
          Nulla facilisi. Pellentesque pellentesque arcu a elit congue lacinia.
        </p>
        <p className="about__text">
          Nullam tellus turpis, fringilla sit amet congue ut, luctus a nulla.
          Donec sit amet sapien neque, id ullamcorper diam. Nulla facilisi.
          Pellentesque pellentesque arcu a elit congue lacinia. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat
          lacus, vel congue mauris. Fusce velit justo, faucibus eu sagittis ac,
          gravida quis tortor. Suspendisse non urna mi, quis tincidunt eros.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="about__text-wrapper about__text-wrapper_type_medium">
        <p className="about__title subtitle">Mission Statement</p>
        <p className="about__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          eu erat lacus, vel congue mauris. Fusce velit justo, faucibus eu
          sagittis ac, gravida quis tortor. Suspendisse non urna mi, quis
          tincidunt eros. Nullam tellus turpis, fringilla sit amet congue ut,
          luctus a nulla. Donec sit amet sapien neque, id ullamcorper diam.
          Nulla facilisi. Pellentesque pellentesque arcu a elit congue lacinia.
        </p>
      </div>
      <div className="about__text-wrapper about__text-wrapper_type_medium">
        <p className="about__title subtitle">Fun Facts</p>
        <p className="about__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          eu erat lacus, vel congue mauris. Fusce velit justo, faucibus eu
          sagittis ac, gravida quis tortor. Suspendisse non urna mi, quis
          tincidunt eros. Nullam tellus turpis, fringilla sit amet congue ut,
          luctus a nulla. Donec sit amet sapien neque, id ullamcorper diam.
          Nulla facilisi. Pellentesque pellentesque arcu a elit congue lacinia.
        </p>
      </div>
    </section>
  );
}

export default AboutInfo;
