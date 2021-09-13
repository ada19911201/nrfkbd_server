/**
 * @Description:
 * @Author: bubao
 * @Date: 2020-04-09 15:54:48
 * @LastEditors: bubao
 * @LastEditTime: 2020-04-09 17:48:44
 */
"use strict";
module.exports = (option, app) => {
	return async function errorHandler(ctx, next) {
		try {
			await next();
		} catch (err) {
			app.emit("error", err, app);
			// 生产环境下不将错误内容返回给客户端
			console.log(JSON.stringify(err));
			ctx.helper.sendError(err, undefined);
		}
	};
};
