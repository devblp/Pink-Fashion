'use strict';

/**
 * new-arrival service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::new-arrival.new-arrival');
