/**
 * @Description:
 * @Author: bubao
 * @Date: 2020-04-09 15:51:58
 * @LastEditors: bubao
 * @LastEditTime: 2020-04-12 15:37:42
 */
"use strict";

const { Service } = require("egg");
const fs = require("fs");

module.exports = class HomeService extends Service {
	async build() {
		const { ctx } = this;
		// Get the files.
		const files = ctx.request.body;
		// ctx.validate({ files: "object" }, files);
		const template = ctx.helper.CORE.layout;
		// Create a random key.
		const key = ctx.helper.key();
		const randomPatch = ctx.helper.TMP + key;
		console.log(`Start Compile：Build`);
		await this.premake(files, randomPatch, template, "default");
		await this.sendFile(
			template.kbdhex,
			`${randomPatch}/_build/${template.kbdhex}`,
			randomPatch
		);
		console.log(`Compile finish：${template.kbdhex}`);
	}

	async zip() {
		const { ctx } = this;
		// Get the files.
		const helper = ctx.helper;
		const files = ctx.request.body;
		// ctx.validate({ files: "object" }, files);
		const template = ctx.helper.CORE.layout;
		// Create a random key.
		const key = helper.key();
		const randomPatch = helper.TMP + key;
		// Start.
		await this.premake(files, randomPatch, template, "package");

		let zipname = "";
		console.log(`Start Compile：ZIP`);
		await helper
			.readdir(randomPatch + "/_build")
			.then(values => {
				values.forEach(element => {
					if (element.indexOf(".zip") !== -1) {
						console.log("in ", element);
						zipname = element;
					}
				});
			})
			.catch(reason => {
				console.error(reason);
				helper.sendError("Failed to read zip file.", randomPatch, 400);
			});
		await this.sendFile(
			zipname,
			`${randomPatch}/_build/${zipname}`,
			randomPatch
		);
		console.log(`Compile finish：${zipname}`);
	}

	async uf2() {
		const { ctx } = this;
		// Get the files.
		const files = ctx.request.body;
		// ctx.validate({ files: "object" }, files);
		const template = ctx.helper.CORE.layout;
		// Create a random key.
		const key = ctx.helper.key();
		const randomPatch = ctx.helper.TMP + key;

		// Start.
		console.log(`Start Compile：UF2`);
		await this.premake(files, randomPatch, template, "uf2");
		await this.sendFile(
			template.uf2,
			`${randomPatch}/${template.uf2}`,
			randomPatch
		);
		console.log(`Compile finish：${template.uf2}`);
	}

	/**
	 *
	 * make 前置任务
	 * @author bubao
	 * @date 2020-04-11
	 * @param {object} files
	 * @param {String} randomPatch
	 * @param {String} template
	 * @param {String} make
	 */
	async premake(files, randomPatch, template, make) {
		const { ctx } = this;
		const helper = ctx.helper;
		console.log("premake");
		// Copy the base stencil.
		await helper
			.exec(`mkdir ${randomPatch}`)
			.catch(reason => {
				console.log(reason);
				helper.sendError("Failed to initialize.", randomPatch, 400);
			});
		console.log(`mkdir ${randomPatch}`);
		// Copy all the files.
		for (const file in files) {
			const fileName = file.replace("zorokb", randomPatch);
			await helper.writeFile(fileName, files[file]).catch(reason => {
				console.log(reason);
				helper.sendError("Failed to initialize.", randomPatch, 400);
			});
		}
		console.log(`replace zorokb files`);
		// Make.
		await helper
			.exec(`cd ${randomPatch} && ${helper.CORE.action[make]}`)
			.catch(reason => {
				console.error(reason);
				return "Failed to make";
			});
			console.log(`premake: cd ${randomPatch} && ${helper.CORE.action[make]}`);
	}

	/**
	 *
	 * @author bubao
	 * @date 2020-04-09
	 * @param {String} filename 文件名
	 * @param {String} filePath 文件绝对路径
	 * @param {String} randomPatch 删除路径
	 */
	async sendFile(filename, filePath, randomPatch) {
		const { ctx } = this;
		const fileSize = (await ctx.helper.stat(filePath)).size;
		ctx.attachment(filename);
		ctx.set("Content-Length", fileSize);
		ctx.set("Content-Type", "application/octet-stream");
		ctx.body = fs.createReadStream(filePath).on("close", () => {
			ctx.helper.clean(randomPatch);
		});
	}
};
