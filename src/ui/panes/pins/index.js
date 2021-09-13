const React = require('react')

const Chooser = require('./chooser')

const Help = require('ui/elements/help')

const C = require('const')

class Pins extends React.Component {
	render() {
		const state = this.props.state
		const keyboard = state.keyboard
		console.log(keyboard)
		return (
			<div className="pane-pins">
				选择键盘采用的蓝牙主控芯片.
				<div style={{ height: '0.5rem' }} />
				<select
					style={{ width: '10rem' }}
					value={keyboard.controller}
					onChange={e =>
						(keyboard.controller = parseInt(e.target.value))
					}
				>
					<option value={C.CONTROLLER_nrf52840}>nrf52840</option>
					<option value={C.CONTROLLER_nrf52833}>nrf52833</option>
				</select>
				<Help>
					设置你的蓝牙主控芯片型号，当前支持nrf52840、nrf52833.
					<br />
				</Help>
				<div style={{ height: '1.5rem' }} />
				配置行和列的针脚.
				<div style={{ height: '0.5rem' }} />
				<div className="clear">
					<div className="float-left" style={{ width: '50%' }}>
						<h2>Rows</h2>
						<br />
						{(() => {
							// Rows.
							const rows = []
							for (let i = 0; i < keyboard.rows; i++) {
								rows.push(
									<div key={i}>
										<h2
											style={{
												width: '1rem',
												marginRight: '0.8rem'
											}}
										>
											{i}
										</h2>
										<Chooser
											state={state}
											onChange={p =>
												keyboard.setRowPin(i, p)
											}
											pin={keyboard.pins.row[i]}
										/>
										<div style={{ height: '0.5rem' }} />
									</div>
								)
							}
							return rows
						})()}
					</div>
					<div className="float-right" style={{ width: '50%' }}>
						<h2>Columns</h2>
						<br />
						{(() => {
							// Columns.
							const cols = []
							for (let i = 0; i < keyboard.cols; i++) {
								cols.push(
									<div key={i}>
										<h2
											style={{
												width: '1rem',
												marginRight: '0.8rem'
											}}
										>
											{i}
										</h2>
										<Chooser
											state={state}
											onChange={p =>
												keyboard.setColPin(i, p)
											}
											pin={keyboard.pins.col[i]}
										/>
										<div style={{ height: '0.5rem' }} />
									</div>
								)
							}
							return cols
						})()}
					</div>
				</div>
				<div style={{ height: '1.5rem' }} />
				配置其他针脚.
				<div className="clear">
					<div className="float-left" style={{ width: '50%' }}>
						<div style={{ height: '0.5rem' }} />
						<h2 style={{ width: '6rem', marginRight: '0.8rem' }}>
							RGB底灯
						</h2>
						<Chooser
							noPin
							state={state}
							onChange={p => keyboard.setPin('RGB_DI_PIN', p)}
							pin={keyboard.pins.RGB_DI_PIN}
						/>
						<div style={{ height: '0.5rem' }} />
						<h2 style={{ width: '6rem', marginRight: '0.8rem' }}>
							P—MOS
						</h2>
						<Chooser
							noPin
							state={state}
							onChange={p => keyboard.setPin('RGB_PWR_PIN', p)}
							pin={keyboard.pins.RGB_PWR_PIN}
						/>
						<div style={{ height: '0.5rem' }} />
						<h2 style={{ width: '6rem', marginRight: '0.8rem' }}>
							N—MOS
						</h2>
						<Chooser
							noPin
							state={state}
							onChange={p =>
								keyboard.setPin('RGB_PWR_PIN_REVERSE', p)
							}
							pin={keyboard.pins.RGB_PWR_PIN_REVERSE}
						/>
						<div style={{ height: '0.5rem' }} />
						<h2 style={{ width: '6rem', marginRight: '0.8rem' }}>
							BLE.LED
						</h2>
						<Chooser
							noPin
							state={state}
							onChange={p => keyboard.setPin('BLE_LED', p)}
							pin={keyboard.pins.BLE_LED}
						/>
						<div style={{ height: '0.5rem' }} />
						<h2 style={{ width: '6rem', marginRight: '0.8rem' }}>
							USB.LED
						</h2>
						<Chooser
							noPin
							state={state}
							onChange={p => keyboard.setPin('USB_LED', p)}
							pin={keyboard.pins.USB_LED}
						/>
												<div style={{ height: '0.5rem' }} />
						<h2 style={{ width: '6rem', marginRight: '0.8rem' }}>
							CAPS.LED
						</h2>
						<Chooser
							noPin
							state={state}
							onChange={p => keyboard.setPin('CAPS_LED', p)}
							pin={keyboard.pins.CAPS_LED}
						/>
					</div>
					<div className="float-right" style={{ width: '50%' }}>
						<div style={{ height: '0.5rem' }} />
						<h2 style={{ width: '6rem', marginRight: '0.8rem' }}>
							5个状态灯
						</h2>
						<Chooser
							noPin
							state={state}
							onChange={p => keyboard.setPin('LED_USER', p)}
							pin={keyboard.pins.LED_USER}
						/>
						<Help>
					 	选择pwm状态控制引脚
						<br />
						选择后要在设置页面启用，否则无法工作。
						</Help>
						<div style={{ height: '0.5rem' }} />
						<h2 style={{ width: '6rem', marginRight: '0.8rem' }}>
							RGB.SCL
						</h2>
						<Chooser
							noPin
							state={state}
							onChange={p => keyboard.setPin('I2C_SCL', p)}
							pin={keyboard.pins.I2C_SCL}
						/>
						<div style={{ height: '0.5rem' }} />
						<h2 style={{ width: '6rem', marginRight: '0.8rem' }}>
							RGB.SDA
						</h2>
						<Chooser
							noPin
							state={state}
							onChange={p => keyboard.setPin('I2C_SDA', p)}
							pin={keyboard.pins.I2C_SDA}
						/>
						<div style={{ height: '0.5rem' }} />
						<h2 style={{ width: '6rem', marginRight: '0.8rem' }}>
							Power按钮
						</h2>
						<Chooser
							noPin
							state={state}
							onChange={p => keyboard.setPin('POWER_BUTTON', p)}
							pin={keyboard.pins.POWER_BUTTON}
						/>
						<div style={{ height: '0.5rem' }} />
						<h2 style={{ width: '6rem', marginRight: '0.8rem' }}>
							旋钮+
						</h2>
						<Chooser
							noPin
							state={state}
							onChange={p => keyboard.setPin('QDEC_A', p)}
							pin={keyboard.pins.QDEC_A}
						/>
						<div style={{ height: '0.5rem' }} />
						<h2 style={{ width: '6rem', marginRight: '0.8rem' }}>
							旋钮-
						</h2>
						<Chooser
							noPin
							state={state}
							onChange={p => keyboard.setPin('QDEC_B', p)}
							pin={keyboard.pins.QDEC_B}
						/>
					</div>
				</div>
			</div>
		)
	}
}

module.exports = Pins
