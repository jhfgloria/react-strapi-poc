'use strict';

/**
 * Category.js controller
 *
 * @description: A set of functions called "actions" for managing `Category`.
 */

module.exports = {

  /**
   * Retrieve category records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.category.search(ctx.query);
    } else {
      return strapi.services.category.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a category record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.category.fetch(ctx.params);
  },

  /**
   * Count category records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.category.count(ctx.query);
  },

  /**
   * Create a/an category record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.category.add(ctx.request.body);
  },

  /**
   * Update a/an category record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.category.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an category record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.category.remove(ctx.params);
  },

  /**
   * Add relation to a/an category record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.category.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an category record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.category.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an category record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.category.removeRelation(ctx.params, ctx.request.body);
  }
};
