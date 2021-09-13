/**
 * @Description:
 * @Author: bubao
 * @Date: 2020-04-09 14:47:36
 * @LastEditors: bubao
 * @LastEditTime: 2020-04-12 16:00:59
 */
"use strict";

/** @type Egg.EggPlugin */
exports.validate = {
	enable: true,
	package: "egg-validate"
};
// 打开跨域访问控制
exports.cors = {
	enable: true,
	package: "egg-cors"
};
