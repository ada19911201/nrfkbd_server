const React = require('react')

const Keyboard = require('state/keyboard')

const C = require('const')
const Utils = require('utils')

const Request = require('superagent')

class Main extends React.Component {
	constructor(props) {
		super(props)

		// Bind functions.
		this.upload = this.upload.bind(this)
		this.useKLE = this.useKLE.bind(this)
		this.usePreset = this.usePreset.bind(this)
	}

	/*
	 * Upload a QMK Builder configuration.
	 */
	upload() {
		const state = this.props.state

		// Upload a file.
		Utils.readFile(contents => {
			try {
				// Deserialize the contents.
				const deserialized = JSON.parse(contents)

				// Ensure the version is correct.
				if (deserialized.version !== C.VERSION) throw '版本不匹配'

				// Build a new keyboard.
				const keyboard = Keyboard.deserialize(
					state,
					deserialized.keyboard
				)

				state.update({
					keyboard: keyboard,
					screen: C.SCREEN_WIRING // Switch to the wiring screen.
				})
			} catch (e) {
				console.error(e)
				console.log(e)
				state.error('无效的配置文件' + e)
			}
		})
	}

	/*
	 * Use KLE raw data.
	 */
	useKLE() {
		const state = this.props.state

		try {
			const json = parser.parse('[' + state.ui.get('kle', '') + ']') // Parse the raw data.

			// Parse the KLE data.
			const keyboard = new Keyboard(state, json)

			// Make sure the data is valid.
			if (keyboard.keys.length == 0) {
				throw '布局为空'
			}

			state.update({
				keyboard: keyboard,
				screen: C.SCREEN_WIRING // Switch to the wiring screen.
			})
		} catch (e) {
			console.error(e)
			state.error('无效的布局')
		}
	}

	/*
	 * Use a preset.
	 *
	 * @param {String} id The id of the preset.
	 */
	usePreset(id) {
		const state = this.props.state

		Request.get(C.LOCAL.PRESETS + id + '.json').end((err, res) => {
			if (err) return state.error('无法载入预设.')

			try {
				// Deserialize the contents.
				const deserialized = JSON.parse(res.text)

				// Ensure the version is correct.
				if (deserialized.version !== C.VERSION) throw '版本不匹配'

				// Build a new keyboard.
				const keyboard = Keyboard.deserialize(
					state,
					deserialized.keyboard
				)

				state.update({
					keyboard: keyboard,
					screen: C.SCREEN_KEYMAP // Switch to the keymap screen.
				})
			} catch (e) {
				console.error(e)
				console.log(e)
				state.error('无效的配置文件' + e)
			}
		})
	}

	render() {
		const state = this.props.state

		return (
			<div>
				<h3>选择一个预设的按键布局</h3>
				{(() => {
					const presets = []
					for (const preset in C.PRESETS) {
						presets.push(
							<button
								className="light block"
								onClick={() => this.usePreset(preset)}
								key={preset}
							>
								{C.PRESETS[preset]}
							</button>
						)
						presets.push(
							<div
								style={{ height: '0.5rem' }}
								key={'-key-' + preset}
							/>
						)
					}
					return presets
				})()}
				<br />
				<br />
				<h3>或 上传键盘配置文件</h3>
				<button className="block" onClick={this.upload}>
					上传
				</button>
				<br />
				<br />
				<h3>或 从keyboard-layout-editor.com导入</h3>
				<textarea
					className="kle"
					placeholder="将按键布局的RAW Data粘贴在这里..."
					value={state.ui.get('kle', '')}
					onChange={state.ui.set('kle')}
				/>
				<button className="block" onClick={this.useKLE}>
					导入
				</button>
			</div>
		)
	}
}
module.exports = Main
