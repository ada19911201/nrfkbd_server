/**
 * @Description:
 * @Author: bubao
 * @Date: 2020-04-09 14:47:36
 * @LastEditors: bubao
 * @LastEditTime: 2020-04-12 16:35:54
 */
/* eslint valid-jsdoc: "off" */

"use strict";

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
	/**
	 * built-in config
	 * @type {Egg.EggAppConfig}
	 **/
	const config = {};

	// use for cookie sign key, should change to your own and keep security
	config.keys = appInfo.name + "_1586414644157_1179";

	// add your middleware config here
	config.middleware = ["errorHandler"];

	// add your user config here
	const userConfig = {
		// myAppName: 'egg',
	};

	config.cluster = {
		listen: {
			// path: '',
			port: 5004
		}
	};
	config.security = {
		csrf: {
			// 判断是否需要 ignore 的方法，请求上下文 context 作为第一个参数
			// ignore: ['/', '/api', '/sms', '/user', '/register', '/ai', '/wx'],
			useSession: true,
			// enable: appInfo.env === 'production',
			enable: false,
			cookieName: "csrfToken", // Cookie 中的字段名，默认为 csrfToken
			sessionName: "csrfToken" // Session 中的字段名，默认为 csrfToken
		}
	};

	config.cors = {
		exposeHeaders: "WWW-Authenticate,Server-Authorization,Date",
		maxAge: 100,
		credentials: true,
		origin: "*",
		allowMethods: "GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS",
		allowHeaders:
			"Content-Type,Authorization,Accept,X-Custom-Header,anonymous"
	};

	return {
		...config,
		userConfig
	};
};
