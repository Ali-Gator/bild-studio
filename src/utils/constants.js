import jezik from '../assets/images/project-jezik.png';
import boyAndGirl from '../assets/images/project-boy-and-girl.png';
import buttons from '../assets/images/project-buttons.png';
import socialMedia from '../assets/images/project-social-media.png';
import jes from '../assets/images/project-jes.png';

export const imageSlides = [jezik, boyAndGirl, buttons, socialMedia, jes];

export const textSlides = {
  title: 'Dark UI Kit Freebie',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat lacus, vel congue mauris. Fusce velit justo, faucibus eu sagittis.',
};

export const textService = [
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat lacus, vel congue mauris. Fusce velit justo, faucibus eu sagittis ac, gravida quis tortor. Suspendisse non urna mi, quis tincidunt eros. Nullam tellus turpis, fringilla sit amet congue ut, luctus a nulla. Donec sit amet sapien neque, id ullamcorper diam. Nulla facilisi. Pellentesque pellentesque arcu a elit congue lacinia.',
    advantages: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit fringilla sit amet.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit luctus donec.',
    ],
  },
  {
    text: 'Consectetur adipiscing elit. Pellentesque eu erat lacus, vel congue mauris. Fusce velit justo, faucibus eu sagittis ac, gravida quis tortor. Suspendisse non urna mi, quis tincidunt eros. Nullam tellus turpis, fringilla sit amet congue ut, luctus a nulla. Donec sit amet sapien neque, id ullamcorper diam. Nulla facilisi. Pellentesque pellentesque arcu a elit congue lacinia.',
    advantages: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit fringilla sit amet.',
    ],
  },
  {
    text: 'Lore, vel congue mauris. Fusce velit justo, faucibus eu sagittis ac, gravida quis tortor. Suspendisse non urna mi, quis tincidunt eros. Nullam tellus turpis, fringilla sit amet congue ut, luctus a nulla. Donec sit amet sapien neque, id ullamcorper diam. Nulla facilisi. Pellentesque pellentesque arcu a elit congue lacinia.',
    advantages: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipdiscing elit fringilla sit amet.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit fringilla sit amet.',
      'Lorem ipsum dolor sit amet, consectetur adipiscding elit fringilla sit amet.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit luctus donec.',
    ],
  },
  {
    text: 'Pellentesque eu erat lacus, vel congue mauris. Fusce velit justo, faucibus eu sagittis ac, gravida quis tortor. Suspendisse non urna mi, quis tincidunt eros. Nullam tellus turpis, fringilla sit amet congue ut, luctus a nulla. Donec sit amet sapien neque, id ullamcorper diam. Nulla facilisi. Pellentesque pellentesque arcu a elit congue lacinia.',
    advantages: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipisdcing elit fringilla sit amet.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit fringilla sit amet.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit luctus donec.',
    ],
  },
];

export const textTabs = ['Websites', 'Photography', 'SEO', 'Applications'];

export const textCategories = [
  'All',
  'Print',
  'Photography',
  'Web',
  'Applications',
];

export const BASE_URL = 'http://localhost:3001';

export const messages = {
  NO_MORE_RESULT: 'No more results',
  SERVER_ERR: 'Server error',
  NO_RESULTS: 'No Results',
  NO_EMPTY: 'Cannot be empty',
  NO_VALID_EMAIL: 'Email is not valid',
  TOO_LONG_TEXT: "Message can't be more than 1000 chars",
};

export const RECAPTCHA_SITE_KEY = '6LdcVMkhAAAAALG6U4hGfZcVBQ6hTAwX5N-avYz3';

// export const EMAIL_REGEXP =
//   // eslint-disable-next-line
//   /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const inputsData = [
  {
    addClassName: 'form__input_type_small',
    type: 'text',
    name: 'name',
    placeholder: 'Name',
    isRequired: true,
  },
  {
    addClassName: 'form__input_type_small',
    type: 'email',
    name: 'email',
    placeholder: 'Email Address',
    isRequired: true,
  },
  {
    addClassName: 'form__input_type_small',
    type: 'text',
    name: 'subject',
    placeholder: 'Subject',
    isRequired: false,
  },
  {
    addClassName: 'form__input_type_big',
    type: 'textarea',
    name: 'message',
    placeholder: 'Message',
    isRequired: true,
  },
];
