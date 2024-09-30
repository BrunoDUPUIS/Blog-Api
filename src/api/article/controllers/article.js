"use strict";

const comment = require("../../comment/controllers/comment");
const article = require("../routes/article");

/**
 * article controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::article.article");

// ({ strapi }) => ({
// async delete(ctx) {
//   try {
//     const artId = ctx.request.params.id;
//     const article = await strapi.entityService.findOne(
//       "api::article.article",
//       artId
//     );

//     console.log(article);
//     console.log("----------------------------");

//     console.log(artId);
//     console.log("----------------------------");

//     const commentToSup = await strapi.entityService.findOne(
//       "api::article.article",
//       artId,
//         { populate: ["comments"] }
//       );
//       console.log(commentToSup);
//       console.log("----------------------------");

//       const lengtToSup = commentToSup.comments.length;
//       console.log("----------------------------");
//       for (let i = 0; i < lengtToSup; i++) {
//         console.log(commentToSup.comments[i]);
//         await strapi.entityService.delete(
//           "api::comment.comment",
//           commentToSup.comments[i].id
//         );
//       }
//       const { data, meta } = await super.delete(ctx);
//       return { data, meta };
//     } catch (error) {
//       ctx.response.status = 500;
//       return { message: error.message };
//     }
//   },
// }));

// code a rajouter pour correction excercice

//  ({ strapi }) => ({
// async delete(ctx) {
//   try {
// const params = ctx.request.params;
// // console.log(params);
// const articleId = params.id;
// console.log(articleId);
// const test = await strapi.entityService.findOne(
//   "api::article.article",
//         articleId,
//         { populate: ["comments"] }
//       );
//       console.log(test);
//       console.log("------------------------");
//       for (let i = 0; i < test.comments.length; i++) {
//         console.log(test.comments[i].id);
//         await strapi.entityService.delete(
//           "api::comment.comment",
//           test.comments[i].id
//         );
//       }
//       const { data, meta } = await super.delete(ctx);
//       return { data, meta };
//     } catch (error) {
//       ctx.response.status = 500;
//       return { message: error.message };
//     }
//   },
// }));
