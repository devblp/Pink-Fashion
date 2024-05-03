'use strict';

/**
 * sign-up service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sign-up.sign-up');
