/**
 * @Description: config
 * @Author: bubao
 * @Date: 2019-09-16 13:35:12
 * @LastEditors: bubao
 * @LastEditTime: 2019-09-16 13:43:03
 */
const Generator = require('./index')

const C = require('const')

class ConfigH extends Generator {
	loadTemplate() {
		return require('./templates/config.h')
	}

	fillTemplate() {
		const keyboard = this.keyboard

		let passkey_required
		switch (keyboard.settings.PASSKEY) {
			case C.PASSKEY_REQUIRED_YES:
				passkey_required = ''
				break
			case C.PASSKEY_REQUIRED_NO:
				passkey_required = '//'
				break
		}

		let high_tx_power
		switch (keyboard.settings.TX_POWER) {
			case C.HIGH_TX_POWER_YES:
				high_tx_power = ''
				break
			case C.HIGH_TX_POWER_NO:
				high_tx_power = '//'
				break
		}

		let macaddr_name
		switch (keyboard.settings.MACADDR_NAME) {
			case C.MACADDR_NAME_YES:
				macaddr_name = ''
				break
			case C.MACADDR_NAME_NO:
				macaddr_name = '//'
				break
		}

		let bat_adc_pin
		switch (keyboard.settings.BAT_ADC_PIN) {
			case C.BAT_ADC_PIN_0:
				bat_adc_pin = 'NRF_SAADC_INPUT_AIN0'
				break
			case C.BAT_ADC_PIN_1:
				bat_adc_pin = 'NRF_SAADC_INPUT_AIN1'
				break
			case C.BAT_ADC_PIN_2:
				bat_adc_pin = 'NRF_SAADC_INPUT_AIN2'
				break
			case C.BAT_ADC_PIN_3:
				bat_adc_pin = 'NRF_SAADC_INPUT_AIN3'
				break
			case C.BAT_ADC_PIN_4:
				bat_adc_pin = 'NRF_SAADC_INPUT_AIN4'
				break
			case C.BAT_ADC_PIN_5:
				bat_adc_pin = 'NRF_SAADC_INPUT_AIN5'
				break
			case C.BAT_ADC_PIN_6:
				bat_adc_pin = 'NRF_SAADC_INPUT_AIN6'
				break
			case C.BAT_ADC_PIN_7:
				bat_adc_pin = 'NRF_SAADC_INPUT_AIN7'
				break
			case C.BAT_ADC_PIN_8:
				bat_adc_pin = 'NRF_SAADC_INPUT_DISABLED'
				break
		}
		let rgb_enable
		switch (keyboard.settings.RGBLIGHT_ENABLE) {
			case C.RGBLIGHT_ENABLE_YES:
				rgb_enable = ''
				break
			case C.RGBLIGHT_ENABLE_NO:
				rgb_enable = '//'
				break
		}
		let rgbm_enable
		let rgbm_addr
		switch (keyboard.settings.RGBMATRIX_ENABLE) {
			case C.RGBMATRIX_ENABLE_IS31FL3733:
				rgbm_enable = ''
				rgbm_addr = '0b1010000'
				break
			case C.RGBMATRIX_ENABLE_IS31FL3737:
				rgbm_enable = ''
				rgbm_addr = '0b1010000'
				break
			case C.RGBMATRIX_ENABLE_IS31FL3741:
				rgbm_enable = ''
				rgbm_addr = '0b0110000'
				break
			case C.RGBMATRIX_ENABLE_NO:
				rgbm_enable = '//'
				break
		}

		let qdec_enable
		switch (keyboard.settings.ROTARY_ENCODER) {
			case C.ROTARY_ENCODER_YES:
				qdec_enable = ''
				break
			case C.ROTARY_ENCODER_NO:
				qdec_enable = '//'
				break
		}
		return {
			MATRIX_ROWS: keyboard.rows, // 列
			MATRIX_COLS: keyboard.cols, // 行
			row_pins: keyboard.pins.row.join(', '), // pin口
			col_pins: keyboard.pins.col.join(', '), // pin口
			diode_direction:
				keyboard.settings.diodeDirection === C.DIODE_COL2ROW
					? 'ROW_IN'
					: 'COL_IN', // 流向
			PRODUCT_NAME: keyboard.settings.PRODUCT || 'zorokb',
			RGBLIGHT_ANIMATIONS: keyboard.settings.RGBLIGHT_ENABLE ? '' : '//',
			LED_USER: keyboard.pins.LED_USER || 10, // 10
			RGB_PWR_PIN: keyboard.pins.RGB_PWR_PIN || 36, // 36
			RGB_PWR_PIN_REVERSE: keyboard.pins.RGB_PWR_PIN_REVERSE || 20, // 20
			POWER_BUTTON: keyboard.pins.POWER_BUTTON || 18, // 18
			RGBLED_NUM: keyboard.settings.RGBLED_NUM || 8, // 8
			RGBMATRIX_NUM: keyboard.settings.RGBMATRIX_NUM || 50, //50
			RGB_DI_PIN: keyboard.pins.RGB_DI_PIN || 35, // 21
			I2C_SCL: keyboard.pins.I2C_SCL || 22,
			I2C_SDA: keyboard.pins.I2C_SDA || 32,
			BLE_LED: keyboard.pins.BLE_LED || 6,
			USB_LED: keyboard.pins.USB_LED || 7,
			CAPS_LED: keyboard.pins.CAPS_LED || 8,
			QDEC_A: keyboard.pins.QDEC_A || 13,
			QDEC_B: keyboard.pins.QDEC_B || 14,
			ENCODER_A_ROW: keyboard.settings.ENCODER_A_ROW || 5, // 8
			ENCODER_A_COL: keyboard.settings.ENCODER_A_COL || 5, //50
			ENCODER_B_ROW: keyboard.settings.ENCODER_B_ROW || 5, // 8
			ENCODER_B_COL: keyboard.settings.ENCODER_B_COL || 5, //50
			Hiden_RGBLED_NUM: keyboard.settings.RGBLED_NUM ? '' : '//',
			Hiden_RGB_DI_PIN: keyboard.pins.RGB_DI_PIN ? '' : '//',
			Hiden_LED_USER: keyboard.pins.LED_USER ? '' : '//',
			Hiden_POWER_BUTTON: keyboard.pins.POWER_BUTTON ? '' : '//',
			Hiden_RGB_PWR_PIN: keyboard.pins.RGB_PWR_PIN ? '' : '//',
			Hiden_RGB_PWR_PIN_REVERSE: keyboard.pins.RGB_PWR_PIN_REVERSE
				? ''
				: '//',
			passkey_required: passkey_required || '',
			high_tx_power: high_tx_power || '',
			macaddr_name: macaddr_name || '',
			rgb_enable: rgb_enable || '',
			rgbm_enable: rgbm_enable || '',
			rgbm_addr: rgbm_addr || '',
			qdec_enable: qdec_enable || '',
			bat_adc_pin:bat_adc_pin ||'',
		}
	}
}

module.exports = ConfigH
