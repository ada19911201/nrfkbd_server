const React = require('react')

const Files = require('files')
const Utils = require('utils')

const Request = require('superagent')

const C = require('const')
function str2bytes(str) {
	let bytes = new Uint8Array(str.length)
	for (let i = 0; i < str.length; i++) {
		bytes[i] = str.charCodeAt(i)
	}
	return bytes
}

class Compile extends React.Component {
	constructor(props) {
		super(props)

		// Bind functions.
		this.downloadHex = this.downloadHex.bind(this)
		this.downloadZip = this.downloadZip.bind(this)
		this.downloadH = this.downloadH.bind(this)
	}

	downloadH() {
		const state = this.props.state
		const keyboard = state.keyboard

		// Disable buttons.
		state.ui.set('compile-working', true)

		// Generate source files.
		const files = Files.generate(keyboard)
		console.log(files)

		const zip = new JSZip()
		// Insert the files.
		for (const file in files) {
			zip.file(file, files[file])
		}

		// Download the file.
		zip.generateAsync({ type: 'blob' })
			.then(blob => {
				// Generate a friendly name.
				const friendly = keyboard.settings.PRODUCT
					? Utils.generateFriendly(keyboard.settings.PRODUCT)
					: 'layout'

				saveAs(blob, friendly + '.zip')

				// Re-enable buttons.
				state.ui.set('compile-working', false)
			})
			.catch(e => {
				console.error(e)
				state.error('无法生成文件')
				state.ui.set('compile-working', false)
			})
	}

	downloadHex() {
		const state = this.props.state
		const keyboard = state.keyboard

		// Disable buttons.
		state.ui.set('compile-working', true)

		// Generate source files.
		const files = Files.generate(keyboard)
		// Send the request.
		Request.post(C.LOCAL.API)
			.timeout(99999999000)
			.set('Content-Type', 'application/json')
			.responseType('blob')
			.send(JSON.stringify(files))
			.end((err, res) => {
				// Download the hex file.
				if (err) {
					console.error(err)
					state.error('无法连接到 API 服务.')
					state.ui.set('compile-working', false)
					return
				}
				const friendly = keyboard.settings.PRODUCT
					? Utils.generateFriendly(keyboard.settings.PRODUCT)
					: 'layout'
				console.log(res.body)
				console.log(res.body.size)
				saveAs(res.body, friendly + '.hex')
				state.ui.set('compile-working', false)
			})
	}
	downloadZip() {
		const state = this.props.state
		const keyboard = state.keyboard

		// Disable buttons.
		state.ui.set('compile-working', true)

		// Generate source files.
		const files = Files.generate(keyboard)
		// Send the request.
		Request.post(C.LOCAL.ZIP)
			.timeout(99999999000)
			.set('Content-Type', 'application/json')
			.responseType('blob')
			.send(JSON.stringify(files))
			.end((err, res) => {
				if (err) {
					console.error(err)
					state.error('无法连接到 API 服务.')
					state.ui.set('compile-working', false)
					return
				}
				const friendly = keyboard.settings.PRODUCT
					? Utils.generateFriendly(keyboard.settings.PRODUCT)
					: 'layout'
				console.log(res.body)
				console.log(res.body.size)
				saveAs(res.body, friendly + '.uf2')
				state.ui.set('compile-working', false)
			})
	}

	render() {
		const state = this.props.state
		const keyboard = state.keyboard

		return (
			<div className="pane-compile">
				下载升级文件 .uf2
				<div style={{ height: '0.5rem' }} />
				<button
					disabled={
						!keyboard.valid ||
						state.ui.get('compile-working', false)
					}
					onClick={this.downloadZip}
				>
					下载UF2升级文件
				</button>
				<div style={{ height: '1.5rem' }} />
				下载烧录固件 .hex
				<div style={{ height: '0.5rem' }} />
				<button
					className="light"
					disabled={
						!keyboard.valid ||
						state.ui.get('compile-working', false)
					}
					onClick={this.downloadHex}
				>
					下载HEX烧录固件文件
				</button>
				<div style={{ height: '1.5rem' }} />
				下载源码 .zip
				<div style={{ height: '0.5rem' }} />
				<button
					className="light"
					disabled={
						!keyboard.valid ||
						state.ui.get('compile-working', false)
					}
					onClick={this.downloadH}
				>
					下载生成的源码文件
				</button>
				<div>
					<br />
					<br />
					阅读{' '}
					<a
						href="https://glab.online/update-log"
						target="_blank"
					>
						更新日志
					</a>{' '}
					了解当前固件源码更新情况.
		  		</div>
			</div>
		)
	}
}

module.exports = Compile
