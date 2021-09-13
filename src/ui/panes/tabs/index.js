const React = require('react')

const Tab = require('./tab')

const C = require('const')

class Tabs extends React.Component {
	constructor(props) {
		super(props)

		// Bind functions.
		this.switchTab = this.switchTab.bind(this)
	}

	/*
	 * Generate a function for switching tabs.
	 *
	 * @param {Number} screen The screen to switch to.
	 *
	 * @return {Function} A function used to switch to the specified screen.
	 */
	switchTab(screen) {
		const state = this.props.state

		return () => {
			// Deselect.
			state.keyboard.deselect()

			state.update({
				screen: screen
			})
		}
	}

	render() {
		const state = this.props.state
		const screen = state.screen

		return (
			<div className="panes-tabs">
				<Tab
					selected={screen === C.SCREEN_WIRING}
					onClick={this.switchTab(C.SCREEN_WIRING)}
				>
					布线
				</Tab>
				<Tab
					selected={screen === C.SCREEN_PINS}
					onClick={this.switchTab(C.SCREEN_PINS)}
				>
					针脚
				</Tab>
				<Tab
					selected={screen === C.SCREEN_KEYMAP}
					onClick={this.switchTab(C.SCREEN_KEYMAP)}
				>
					按键映射
				</Tab>
				{<Tab
					selected={screen === C.SCREEN_MACROS}
					onClick={this.switchTab(C.SCREEN_MACROS)}
				>
					按键宏
				</Tab> }
				<Tab
					selected={screen === C.SCREEN_QUANTUM}
					onClick={this.switchTab(C.SCREEN_QUANTUM)}
				>
					RGB矩阵
				</Tab>
				<Tab
					selected={screen === C.SCREEN_SETTINGS}
					onClick={this.switchTab(C.SCREEN_SETTINGS)}
				>
					设置
				</Tab>
				<Tab
					selected={screen === C.SCREEN_COMPILE}
					onClick={this.switchTab(C.SCREEN_COMPILE)}
				>
					编译生成
				</Tab>
			</div>
		)
	}
}

module.exports = Tabs
