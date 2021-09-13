/**
 * @Description:
 * @Author: bubao
 * @Date: 2020-04-09 18:05:15
 * @LastEditors: bubao
 * @LastEditTime: 2020-04-09 18:05:40
 */
"use strict";
module.exports = {
	extends: ["@commitlint/config-conventional"],
	rules: {
		"subject-empty": [0, "always"],
		"type-empty": [0, "always"]
	}
};
