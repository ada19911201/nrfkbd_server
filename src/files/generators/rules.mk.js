const Generator = require('./index')

const C = require('const')

class RulesMK extends Generator {
	loadTemplate() {
		return require('./templates/rules.mk')
	}

	fillTemplate() {
		const keyboard = this.keyboard

		let nrf_chip
		switch (keyboard.controller) {
			case C.CONTROLLER_nrf52840:
				nrf_chip = 'nrf52840'
				break
			case C.CONTROLLER_nrf52833:
				nrf_chip = 'nrf52833'
				break
		}

		let rgblight_enable
		switch (keyboard.settings.RGBLIGHT_ENABLE) {
			case C.RGBLIGHT_ENABLE_YES:
				rgblight_enable = ''
				break
			case C.RGBLIGHT_ENABLE_NO:
				rgblight_enable = '#'
				break
		}

		let rgbstatus_enable
		switch (keyboard.settings.RGBSTATUS_ENABLE) {
			case C.RGBSTATUS_ENABLE_YES:
				rgbstatus_enable = ''
				break
			case C.RGBSTATUS_ENABLE_NO:
				rgbstatus_enable = '#'
				break
		}

		let rgbmatrix_enable
		let rgb_select
		switch (keyboard.settings.RGBMATRIX_ENABLE) {
			case C.RGBMATRIX_ENABLE_IS31FL3733:
				rgbmatrix_enable = ''
				rgb_select = 'IS31FL3733'
				break
			case C.RGBMATRIX_ENABLE_IS31FL3737:
				rgbmatrix_enable = ''
				rgb_select = 'IS31FL3737'
				break
			case C.RGBMATRIX_ENABLE_IS31FL3741:
				rgbmatrix_enable = ''
				rgb_select = 'IS31FL3741'
				break
			case C.RGBMATRIX_ENABLE_NO:
				rgbmatrix_enable = '#'
				break
		}

		let rgbqdec_enable
		switch (keyboard.settings.ROTARY_ENCODER) {
			case C.ROTARY_ENCODER_YES:
				rgbqdec_enable = ''
				break
			case C.ROTARY_ENCODER_NO:
				rgbqdec_enable = '#'
				break
		}

		let code_key_id
		switch (keyboard.settings.CODE_KEY) {
			case C.CODE_KEY_ZORO_0:
				code_key_id = ''
				break
			case C.CODE_KEY_ZORO46:
				code_key_id = '00046'
				break
			case C.CODE_KEY_ZORO50:
				code_key_id = '00050'
				break
			case C.CODE_KEY_ZORO61:
				code_key_id = '00061'
				break
			case C.CODE_KEY_ZORO64:
				code_key_id = '00064'
				break
			case C.CODE_KEY_ZORO66:
				code_key_id = '00066'
				break
			case C.CODE_KEY_ZORO68:
				code_key_id = '00068'
				break
			case C.CODE_KEY_ZORO75:
				code_key_id = '00075'
				break
			case C.CODE_KEY_ZORO1800Mini:
				code_key_id = '01800'
				break
			case C.CODE_KEY_ZORO96:
				code_key_id = '00096'
				break
			case C.CODE_KEY_ZORO980M:
				code_key_id = '00980'
				break
		}
		return {
			nrf_chip: nrf_chip,
			rgblight_enable: rgblight_enable || '',
			rgbstatus_enable: rgbstatus_enable || '',
			rgbmatrix_enable: rgbmatrix_enable || '',
			rgb_select: rgb_select || '',
			code_key_id: code_key_id || '00000',
			rgbqdec_enable: rgbqdec_enable || ''
		}
	}
}

module.exports = RulesMK
