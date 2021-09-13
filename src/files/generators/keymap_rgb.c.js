const Generator = require('./index')

const Utils = require('utils')
const C = require('const')
class KeyboardH extends Generator {
	loadTemplate() {
		return require('./templates/keymap_rgb.c')
	}

	fillTemplate() {
		const keyboard = this.keyboard

		// Generate the keymap_rgb.
		return {
			KEYMAP_RGB: keyboard.quantum
		}
	}
}

module.exports = KeyboardH
