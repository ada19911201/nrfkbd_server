/**
 * @Description:
 * @Author: bubao
 * @Date: 2020-04-09 15:43:29
 * @LastEditors: bubao
 * @LastEditTime: 2020-04-13 02:26:44
 */
"use strict";
const crypto = require("crypto");
const util = require("util");
const fs = require("fs");

const exec = util.promisify(require("child_process").exec);
const writeFile = util.promisify(fs.writeFile);
const stat = util.promisify(fs.stat);
const readFile = util.promisify(fs.readFile);
const readdir = util.promisify(fs.readdir);

/**
 * 随机字符
 * @author bubao
 * @date 2019-09-09
 * @return {String} 随机字符
 */
function key() {
	return crypto.randomBytes(16).toString("hex");
}

/**
 * 清除tmp
 * @author bubao
 * @date 2019-09-11
 * @param {string} where /var/tmp/*
 * @return PromiseWithChild
 */
function clean(where) {
	if (where !== undefined && where.indexOf("/var/tmp/NRF52840_KBD/keyboard/") === 0) {
		return exec(`rm -rf ${where}`);
	}
}

/**
 * 返回错误信息，并清除tmp
 * @author bubao
 * @date 2019-09-11
 * @param {*} error
 * @param {*} randomPatch
 * @param {*} status
 */
function sendError(error, randomPatch, status) {
	const { ctx } = this;
	ctx.status = status || 500;
	ctx.body = { error };
	return clean(randomPatch);
}

module.exports = {
	TMP: "/var/tmp/NRF52840_KBD/keyboard/",
	CORE: {
		layout: {
			name: "zorokb",
			kbdhex: "nrf52840_kbd.hex",
			uf2: "flash.uf2",
			path: "/var/tmp/NRF52840_KBD/keyboard/"
		},
		action: {
			package: "make package",
			default: "make default",
			uf2: "make uf2"
		}
	},
	stat,
	exec,
	sendError,
	clean,
	key,
	writeFile,
	readFile,
	readdir
};
