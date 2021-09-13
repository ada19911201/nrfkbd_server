const React = require('react')

const NumberBox = require('ui/elements/numberbox')
const Help = require('ui/elements/help')

const C = require('const')
const Utils = require('utils')

class Settings extends React.Component {
	constructor(props) {
		super(props)

		// Bind functions.
		this.save = this.save.bind(this)
	}

	/*
	 * Save the configuration.
	 */
	save() {
		const state = this.props.state
		const keyboard = state.keyboard

		// Get a friendly name for the keyboard.
		const friendly = keyboard.settings.PRODUCT
			? Utils.generateFriendly(keyboard.settings.PRODUCT)
			: 'layout'

		// Serialize the keyboard.
		const serialized = keyboard.serialize()

		// Create the configuration.
		const config = JSON.stringify({
			version: C.VERSION,
			keyboard: serialized
		})

		// Download.
		const blob = new Blob([config], { type: 'text/plain;charset=utf-8' })
		saveAs(blob, friendly + '.json')
	}

	render() {
		const state = this.props.state
		const keyboard = state.keyboard

		// Compile a list of errors and warnings.
		const list = []
		let index = 0
		for (const error of keyboard.errors) {
			list.push(
				<div className="pane-settings-list-element" key={index++}>
					<span style={{ color: '#ff1800' }}>
						<i className="fa fa-times-circle" />
					</span>
					{error}
				</div>
			)
		}
		for (const warning of keyboard.warnings) {
			list.push(
				<div className="pane-settings-list-element" key={index++}>
					<span style={{ color: '#f5ff00' }}>
						<i className="fa fa-exclamation-triangle" />
					</span>
					{warning}
				</div>
			)
		}
		if (list.length === 0) {
			list.push(
				<div style={{ padding: '1rem' }} key={-1}>
					没有错误与警告
				</div>
			)
		}

		return (
			<div className="pane-settings">
				配置固件相关设置.
				<div style={{ height: '0.5rem' }} />
				<h2 style={{ width: '8rem', marginRight: '0.8rem' }}>
					键盘名称
				</h2>
				<input
					style={{ width: '8rem' }}
					type="text"
					value={keyboard.settings.PRODUCT}
					onChange={e =>
						keyboard.setSetting('PRODUCT', e.target.value)
					}
				/>
				<h2 style={{ width: '2rem', textAlign: 'left' }}></h2>
				<Help>
					设定你的蓝牙键盘的名字，蓝牙广播及设备连接后将显示此名称.
				</Help>
				<div style={{ height: '0.5rem' }} />
				<h2 style={{ width: '8rem', marginRight: '0.8rem' }}>
					MAC地址后缀
				</h2>
				<select
					style={{ width: '8rem' }}
					value={keyboard.settings.MACADDR_NAME}
					onChange={e =>
						keyboard.setSetting(
							'MACADDR_NAME',
							parseInt(e.target.value)
						)
					}
				>
					<option value={C.MACADDR_NAME_YES}>启用</option>
					<option value={C.MACADDR_NAME_NO}>禁用</option>
				</select>
				<h2 style={{ width: '2rem', textAlign: 'left' }}></h2>
				<Help>
					键盘名称后面是否附加MAC地址后缀.
					<br />
					启用后，键盘名称后将附加6位MAC地址后缀，如:Zoroada46 2C61FO.
					禁用后，键盘名称不附加MAC地址后缀
				</Help>
				<div style={{ height: '0.5rem' }} />
				<h2 style={{ width: '8rem', marginRight: '0.8rem' }}>
					绑定PIN码
				</h2>
				<select
					style={{ width: '8rem' }}
					value={keyboard.settings.PASSKEY}
					onChange={e =>
						keyboard.setSetting('PASSKEY', parseInt(e.target.value))
					}
				>
					<option value={C.PASSKEY_REQUIRED_YES}>启用</option>
					<option value={C.PASSKEY_REQUIRED_NO}>禁用</option>
				</select>
				<h2 style={{ width: '2rem', textAlign: 'left' }}></h2>
				<Help>
					蓝牙绑定时是否启用键盘输入PIN码.
					<br />
					启用后，每次绑定设备时，都会要求键盘输入6位数字PIN码进行确认,这样可以避免键盘被他人搜索绑定.禁用时，绑定过程将不需要输入PIN码
				</Help>
				<div style={{ height: '0.5rem' }} />
				<h2 style={{ width: '8rem', marginRight: '0.8rem' }}>
					高发射功率
				</h2>
				<select
					style={{ width: '8rem' }}
					value={keyboard.settings.TX_POWER}
					onChange={e =>
						keyboard.setSetting(
							'TX_POWER',
							parseInt(e.target.value)
						)
					}
				>
					<option value={C.HIGH_TX_POWER_YES}>启用</option>
					<option value={C.HIGH_TX_POWER_NO}>禁用</option>
				</select>
				<h2 style={{ width: '2rem', textAlign: 'left' }}></h2>
				<Help>
					发射功率提高到+8dBm.
					<br />
					启用后,信号发射功率将提高到+8dBm.连接将更稳定，但功耗将提高，续航将会小幅下降.当禁用时,信号发射功率采用默认的0dBm.
				</Help>
				<div style={{ height: '0.5rem' }} />
				<h2 style={{ width: '8rem', marginRight: '0.8rem' }}>旋钮</h2>
				<select
					style={{ width: '8rem' }}
					value={keyboard.settings.ROTARY_ENCODER}
					onChange={e =>
						keyboard.setSetting(
							'ROTARY_ENCODER',
							parseInt(e.target.value)
						)
					}
				>
					<option value={C.ROTARY_ENCODER_YES}>启用</option>
					<option value={C.ROTARY_ENCODER_NO}>禁用</option>
				</select>
				<h2 style={{ width: '2rem', textAlign: 'left' }}></h2>
				<Help>
					是否启用旋钮功能.
					<br />
					启用后,将支持旋钮,其中下按键在按键映射中设置,左右旋转在本页面设置,行和列从0计算.
				</Help>
				<div style={{ height: '0.5rem' }} />
				<h2 style={{ width: '8rem', marginRight: '0.8rem' }}>状态灯控制模式</h2>
				<select
					style={{ width: '8rem' }}
					value={keyboard.settings.RGBSTATUS_ENABLE}
					onChange={e =>
						keyboard.setSetting(
							'RGBSTATUS_ENABLE',
							parseInt(e.target.value)
						)
					}
				>
					<option value={C.RGBSTATUS_ENABLE_YES}>启用</option>
					<option value={C.RGBSTATUS_ENABLE_NO}>禁用</option>
				</select>
				<h2 style={{ width: '2rem', textAlign: 'left' }}></h2>
				<Help>
					是否启用pwm控制5个状态灯
					<br />
					启用后,一个引脚控制5个状态灯(1:caps,2:numlock,3:ble,4:charge,5:mode),否则BLE_LED,USB_LED,CAPS_LED所选引脚单独控制对应灯。
				</Help>
				<div style={{ height: '0.5rem' }} />
				<h2 style={{ width: '8rem', marginRight: '0.8rem' }}>
					RGB底灯
				</h2>
				<select
					style={{ width: '8rem' }}
					value={keyboard.settings.RGBLIGHT_ENABLE}
					onChange={e =>
						keyboard.setSetting(
							'RGBLIGHT_ENABLE',
							parseInt(e.target.value)
						)
					}
				>
					<option value={C.RGBLIGHT_ENABLE_YES}>启用</option>
					<option value={C.RGBLIGHT_ENABLE_NO}>禁用</option>
				</select>
				<h2 style={{ width: '2rem', textAlign: 'left' }}></h2>
				<Help>
					是否启用RGB灯驱动支持.
					<br />
					启用后,将支持RGB
					WS2812灯光，但功耗将提高，续航将大幅下降.当禁用时,将不支持RGB灯光，相关配置项也将无效.
				</Help>
				<div style={{ height: '0.5rem' }} />
				<h2 style={{ width: '8rem', marginRight: '0.8rem' }}>
					电池ADC引脚选择
				</h2>
				<select
					style={{ width: '8rem' }}
					value={keyboard.settings.BAT_ADC_PIN}
					onChange={e =>
						keyboard.setSetting(
							'BAT_ADC_PIN',
							parseInt(e.target.value)
						)
					}
				>
					<option value={C.BAT_ADC_PIN_0}>
					NRF_SAADC_INPUT_AIN0:pin_2
					</option>
					<option value={C.BAT_ADC_PIN_1}>
					NRF_SAADC_INPUT_AIN1:pin_3
					</option>
					<option value={C.BAT_ADC_PIN_2}>
					NRF_SAADC_INPUT_AIN2:pin_4
					</option>
					<option value={C.BAT_ADC_PIN_3}>
					NRF_SAADC_INPUT_AIN3:pin_5
					</option>
					<option value={C.BAT_ADC_PIN_4}>
					NRF_SAADC_INPUT_AIN4:pin_28
					</option>
					<option value={C.BAT_ADC_PIN_5}>
					NRF_SAADC_INPUT_AIN5:pin_29
					</option>
					<option value={C.BAT_ADC_PIN_6}>
					NRF_SAADC_INPUT_AIN6:pin_30
					</option>
					<option value={C.BAT_ADC_PIN_7}>
					NRF_SAADC_INPUT_AIN7:pin_31
					</option>
					<option value={C.BAT_ADC_PIN_8}>
					NRF_SAADC_INPUT_DISABLED:无
					</option>
				</select>
				<h2 style={{ width: '2rem', textAlign: 'left' }}></h2>
				<Help>
					电池ADC检测引脚，只有8个adc引脚，根据自己的模块选择
				</Help>
				<div style={{ height: '0.5rem' }} />
				<h2 style={{ width: '8rem', marginRight: '0.8rem' }}>
					U盘升级识别码
				</h2>
				<select
					style={{ width: '8rem' }}
					value={keyboard.settings.CODE_KEY}
					onChange={e =>
						keyboard.setSetting(
							'CODE_KEY',
							parseInt(e.target.value)
						)
					}
				>
					<option value={C.CODE_KEY_ZORO46}>
						46%布局
					</option>
					<option value={C.CODE_KEY_ZORO50}>
						50%布局
					</option>
					<option value={C.CODE_KEY_ZORO61}>
						61%布局
					</option>
					<option value={C.CODE_KEY_ZORO64}>
						64%布局
					</option>
					<option value={C.CODE_KEY_ZORO66}>
						66%布局
					</option>
					<option value={C.CODE_KEY_ZORO68}>
						68%布局
					</option>
					<option value={C.CODE_KEY_ZORO75}>
						75%布局
					</option>
					<option value={C.CODE_KEY_ZORO1800Mini}>
						1800Mini布局
					</option>
					<option value={C.CODE_KEY_ZORO96}>
						96%布局
					</option>
					<option value={C.CODE_KEY_ZORO980M}>
						980M布局
					</option>>
					<option value={C.CODE_KEY_ZORO_0}>自定义</option>
				</select>
				<h2 style={{ width: '2rem', textAlign: 'left' }}></h2>
				<Help>
					U盘升级识别码.
					<br />
					对应的配列选择对应的，默认布局不要修改此选项。自定义布局键盘选择自定义否则U盘升级会出错！！！
				</Help>
				<div style={{ height: '0.5rem' }} />
				<h2 style={{ width: '8rem', marginRight: '0.8rem' }}>
					RGB轴灯
				</h2>
				<select
					style={{ width: '8rem' }}
					value={keyboard.settings.RGBMATRIX_ENABLE}
					onChange={e =>
						keyboard.setSetting(
							'RGBMATRIX_ENABLE',
							parseInt(e.target.value)
						)
					}
				>
					<option value={C.RGBMATRIX_ENABLE_IS31FL3733}>
						IS31FL3733
					</option>
					<option value={C.RGBMATRIX_ENABLE_IS31FL3737}>
						IS31FL3737
					</option>
					<option value={C.RGBMATRIX_ENABLE_IS31FL3741}>
						IS31FL3741
					</option>
					<option value={C.RGBMATRIX_ENABLE_NO}>禁用</option>
				</select>
				<h2 style={{ width: '2rem', textAlign: 'left' }}></h2>
				<Help>
					是否启用RGB轴灯驱动支持.
					<br />
					启用后,将支持RGB轴灯(IS31FL3733支持64RGB灯、IS31FL3737支持48RGB灯、IS31FL3741支持117RGB灯)
					不带IC的普通RGB4脚灯，功耗将提高，续航将大幅下降.当禁用时,将不支持RGB灯光，相关配置项也将无效
				</Help>
				<div style={{ height: '0.5rem' }} />
				<h2 style={{ width: '8rem', marginRight: '0.8rem' }}>
					WS2812 LEDs
				</h2>
				<div
					style={{
						width: '8rem',
						display: 'inline-block',
						textAlign: 'left'
					}}
				>
					<NumberBox
						style={{ width: '3.5rem' }}
						min="0"
						max="100"
						value={keyboard.settings.RGBLED_NUM}
						onChange={v => keyboard.setSetting('RGBLED_NUM', v)}
					/>
				</div>
				<h2 style={{ width: '2rem', textAlign: 'left' }}>颗</h2>
				<Help>设定你的 WS2812 LED 灯的数量.</Help>
				<div style={{ height: '0.5rem' }} />
				<h2 style={{ width: '8rem', marginRight: '0.8rem' }}>
					RGBMATRIX LEDs
				</h2>
				<div
					style={{
						width: '8rem',
						display: 'inline-block',
						textAlign: 'left'
					}}
				>
					<NumberBox
						style={{ width: '3.5rem' }}
						min="0"
						max="200"
						value={keyboard.settings.RGBMATRIX_NUM}
						onChange={v => keyboard.setSetting('RGBMATRIX_NUM', v)}
					/>
				</div>
				<h2 style={{ width: '2rem', textAlign: 'left' }}>颗</h2>
				<Help>设定你的 RGB矩阵 LED 灯的数量.</Help>
				<div style={{ height: '0.5rem' }} />
				<h2 style={{ width: '8rem', marginRight: '0.8rem' }}>
					旋钮A_ROW
				</h2>
				<div
					style={{
						width: '8rem',
						display: 'inline-block',
						textAlign: 'left'
					}}
				>
					<NumberBox
						style={{ width: '3.5rem' }}
						min="0"
						max="10"
						value={keyboard.settings.ENCODER_A_ROW}
						onChange={v => keyboard.setSetting('ENCODER_A_ROW', v)}
					/>
				</div>
				<h2 style={{ width: '2rem', textAlign: 'left' }}>行</h2>
				<Help>设定你旋钮+方向映射行.</Help>
				<div style={{ height: '0.5rem' }} />
				<h2 style={{ width: '8rem', marginRight: '0.8rem' }}>
					旋钮A_COL
				</h2>
				<div
					style={{
						width: '8rem',
						display: 'inline-block',
						textAlign: 'left'
					}}
				>
					<NumberBox
						style={{ width: '3.5rem' }}
						min="0"
						max="25"
						value={keyboard.settings.ENCODER_A_COL}
						onChange={v => keyboard.setSetting('ENCODER_A_COL', v)}
					/>
				</div>
				<h2 style={{ width: '2rem', textAlign: 'left' }}>列</h2>
				<Help>设定你旋钮+方向映射列.</Help>
				<div style={{ height: '0.5rem' }} />
				<h2 style={{ width: '8rem', marginRight: '0.8rem' }}>
					旋钮B_ROW
				</h2>
				<div
					style={{
						width: '8rem',
						display: 'inline-block',
						textAlign: 'left'
					}}
				>
					<NumberBox
						style={{ width: '3.5rem' }}
						min="0"
						max="10"
						value={keyboard.settings.ENCODER_B_ROW}
						onChange={v => keyboard.setSetting('ENCODER_B_ROW', v)}
					/>
				</div>
				<h2 style={{ width: '2rem', textAlign: 'left' }}>行</h2>
				<Help>设定你旋钮-方向映射行.</Help>
				<div style={{ height: '0.5rem' }} />
				<h2 style={{ width: '8rem', marginRight: '0.8rem' }}>
					旋钮B_COL
				</h2>
				<div
					style={{
						width: '8rem',
						display: 'inline-block',
						textAlign: 'left'
					}}
				>
					<NumberBox
						style={{ width: '3.5rem' }}
						min="0"
						max="25"
						value={keyboard.settings.ENCODER_B_COL}
						onChange={v => keyboard.setSetting('ENCODER_B_COL', v)}
					/>
				</div>
				<h2 style={{ width: '2rem', textAlign: 'left' }}>列</h2>
				<Help>设定你旋钮-方向映射列.</Help>
				{/* <div style={{ height: '0.5rem' }} />
				<h2 style={{ width: '8rem', marginRight: '0.8rem' }}>
					自动休眠时间
				</h2>
				<div
					style={{
						width: '8rem',
						display: 'inline-block',
						textAlign: 'left'
					}}
				>
					<NumberBox
						style={{ width: '3.5rem' }}
						min="0"
						max="600"
						value={keyboard.settings.SLEEP_OFF_TIMEOUT}
						onChange={v =>
							keyboard.setSetting('SLEEP_OFF_TIMEOUT', v)
						}
					/>
				</div>
				<h2 style={{ width: '2rem', textAlign: 'left' }}>分钟</h2>
				<Help>
					设定你的键盘无按键行为后自动休眠间隔时间, 单位为分钟.
					<br />
					最短设定1分钟，最长设定10小时.当设定为0时将不自动休眠.
				</Help> */}
				{/* <div style={{ height: '0.5rem' }} />
				<h2 style={{ width: '8rem', marginRight: '0.8rem' }}>
					指示灯自动熄灭
				</h2>
				<div
					style={{
						width: '8rem',
						display: 'inline-block',
						textAlign: 'left'
					}}
				>
					<NumberBox
						style={{ width: '3.5rem' }}
						min="0"
						max="900"
						value={keyboard.settings.LED_AUTOOFF_TIME}
						onChange={v =>
							keyboard.setSetting('LED_AUTOOFF_TIME', v)
						}
					/>
				</div>
				<h2 style={{ width: '2rem', textAlign: 'left' }}>秒</h2>
				<Help>
					设定你的指示灯在蓝牙状态时自动熄灭的时长,
					单位为秒；设定为0则为常亮，最长设定15分钟.
				</Help> */}
				{/* <div style={{ height: '0.5rem' }} />
				<h2 style={{ width: '8rem', marginRight: '0.8rem' }}>
					慢速扫描间隔
				</h2>
				<div
					style={{
						width: '8rem',
						display: 'inline-block',
						textAlign: 'left'
					}}
				>
					<NumberBox
						style={{ width: '3.5rem' }}
						min="0"
						max="120"
						value={keyboard.settings.KEYBOARD_SLOW_SCAN_INTERVAL}
						onChange={v =>
							keyboard.setSetting(
								'KEYBOARD_SLOW_SCAN_INTERVAL',
								v
							)
						}
					/>
				</div>
				<h2 style={{ width: '2rem', textAlign: 'left' }}>毫秒</h2>
				<Help>
					你的键盘无按键行为后将转入慢速扫描以节约电量.
					<br />
					此处设定慢速扫描的时间间隔，时间间隔越长越省电，但可能导致第一个按键丢键。默认为100ms，如果有丢键可以适当调低.
				</Help> */}
				<div style={{ height: '1.5rem' }} />
				保存按键布局.
				<div style={{ height: '0.5rem' }} />
				<button onClick={this.save}>保存设置文件.</button>
				<div style={{ height: '1.5rem' }} />
				检查错误和警告.
				<div style={{ height: '0.5rem' }} />
				<div className="pane-settings-list">{list}</div>
			</div>
		)
	}
}

module.exports = Settings
