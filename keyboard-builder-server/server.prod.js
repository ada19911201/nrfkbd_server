/**
 * @Description:
 * @Author: bubao
 * @Date: 2020-04-12 14:27:38
 * @LastEditors: bubao
 * @LastEditTime: 2020-04-12 14:29:17
 */
// server.js
"use strict";
const egg = require("egg");

egg.startCluster({
	workers: 1,
	baseDir: __dirname,
	NODE_ENV: "dev"
});
// pm2 start server.js --name builder-server
// npm run start
