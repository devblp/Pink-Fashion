'use strict';

/**
 * login-signup service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::login-signup.login-signup');
