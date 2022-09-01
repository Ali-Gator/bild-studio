module.exports = () => {
  // eslint-disable-next-line global-require,import/no-extraneous-dependencies
  const { faker } = require('@faker-js/faker');
  // eslint-disable-next-line global-require,import/no-extraneous-dependencies
  const _ = require('lodash');
  return {
    projects: _.times(30, (n) => ({
      id: n,
      categorie: 'print',
      title: faker.name.jobArea(),
      description: faker.lorem.paragraph(3),
      image: faker.image.abstract(300, 220, true),
    })),
  };
};
