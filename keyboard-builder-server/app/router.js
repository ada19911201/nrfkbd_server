/**
 * @Description:
 * @Author: bubao
 * @Date: 2020-04-09 14:45:37
 * @LastEditors: bubao
 * @LastEditTime: 2020-04-12 15:37:30
 */
"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
	const { router, controller } = app;
	router.post("/build", controller.home.build);
	router.post("/download/zip", controller.home.zip);
	router.post("/uf2", controller.home.uf2);
};
