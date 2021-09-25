'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Contacts', [
      {
        firstname: 'Cristian',
        lastname: 'Nicolas',
        phone: '3885177405',
        email: 'cristian@openix.com',
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      },
      {
        firstname: 'Bad',
        lastname: 'Bunny',
        phone: '3885144325',
        email: 'benito@openix.com',
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
