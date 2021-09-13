const Keycodes = require('./keycodes')
const Presets = require('./presets')
const Local = require('./local')

const C = {
	// Version.
	VERSION: 1,

	// Screens.
	SCREEN_MAIN: 0,
	SCREEN_WIRING: 1,
	SCREEN_PINS: 2,
	SCREEN_KEYMAP: 3,
	SCREEN_MACROS: 4,
	SCREEN_QUANTUM: 5,
	SCREEN_SETTINGS: 6,
	SCREEN_COMPILE: 7,

	// Display properties.
	KEY_SIZE: 60,
	KEY_SIZE_MIN: 45,
	KEY_SIZE_MAX: 75,
	KEY_SIZE_INC: 5,

	// Key properties.
	KEY_SELECT: 1,
	KEY_PROGRAM: 2,

	// Diode direction.
	DIODE_COL2ROW: 0,
	DIODE_ROW2COL: 1,

	// Controllers.
	CONTROLLER_nrf52840: 0,
	CONTROLLER_nrf52833: 1,

	// PASSKEY.
	PASSKEY_REQUIRED_YES: 0,
	PASSKEY_REQUIRED_NO: 1,
	//key_updata_code
	BAT_ADC_PIN_0: 0,
	BAT_ADC_PIN_1: 1,
	BAT_ADC_PIN_2: 2,
	BAT_ADC_PIN_3: 3,
	BAT_ADC_PIN_4: 4,
	BAT_ADC_PIN_5: 5,
	BAT_ADC_PIN_6: 6,
	BAT_ADC_PIN_7: 7,
	BAT_ADC_PIN_7: 8,
	//key_updata_code
	CODE_KEY_ZORO_0: 0,
	CODE_KEY_ZORO46: 1,
	CODE_KEY_ZORO50: 2,
	CODE_KEY_ZORO61: 3,
	CODE_KEY_ZORO64: 4,
	CODE_KEY_ZORO66: 5,
	CODE_KEY_ZORO68: 6,
	CODE_KEY_ZORO75: 7,
	CODE_KEY_ZORO1800Mini: 8,
	CODE_KEY_ZORO96: 9,
	CODE_KEY_ZORO980M: 10,
	//MACADDR_NAME
	MACADDR_NAME_YES: 0,
	MACADDR_NAME_NO: 1,

	//RGBLIGHT
	RGBLIGHT_ENABLE_YES: 0,
	RGBLIGHT_ENABLE_NO: 1,
	//RGBSTATUS
	RGBSTATUS_ENABLE_YES: 0,
	RGBSTATUS_ENABLE_NO: 1,
	//RGBMATRIX
	RGBMATRIX_ENABLE_IS31FL3733: 0,
	RGBMATRIX_ENABLE_IS31FL3737: 1,
	RGBMATRIX_ENABLE_IS31FL3741: 2,
	RGBMATRIX_ENABLE_NO: 3,

	//旋钮
	ROTARY_ENCODER_YES: 0,
	ROTARY_ENCODER_NO: 1,

	// //SCAN_INTERVAL
	// SCAN_INTERVAL_10ms: 0,
	// SCAN_INTERVAL_8ms: 1,
	// SCAN_INTERVAL_4ms: 2,
	// SCAN_INTERVAL_2ms: 3,

	// TX POWER.
	HIGH_TX_POWER_YES: 0,
	HIGH_TX_POWER_NO: 1,

	// Pins.
	PINS: {
		0: [
			// CONTROLLER_nrf52840
			'0',
			'1',
			'2',
			'3',
			'4',
			'5',
			'6',
			'7',
			'8',
			'9',
			'10',
			'11',
			'12',
			'13',
			'14',
			'15',
			'16',
			'17',
			'18',
			'19',
			'20',
			'21',
			'22',
			'23',
			'24',
			'25',
			'26',
			'27',
			'28',
			'29',
			'30',
			'31',
			'32',
			'33',
			'34',
			'35',
			'36',
			'37',
			'38',
			'39',
			'40',
			'41',
			'42',
			'43',
			'44',
			'45',
			'46',
			'47'
		],
		1: [
			// CONTROLLER_nrf52833
			'0',
			'1',
			'2',
			'3',
			'4',
			'5',
			'6',
			'7',
			'8',
			'9',
			'10',
			'11',
			'12',
			'13',
			'14',
			'15',
			'16',
			'17',
			'18',
			'19',
			'20',
			'21',
			'22',
			'23',
			'24',
			'25',
			'26',
			'27',
			'28',
			'29',
			'30',
			'31',
			'32',
			'33',
			'34',
			'35',
			'36',
			'37',
			'38',
			'39',
			'40',
			'41',
			'42',
			'43',
			'44',
			'45',
			'46',
			'47'
		]
	},

	// Keycodes.
	KEYCODES: Keycodes.KEYCODES,
	KEYCODE_ALIASES: Keycodes.ALIASES,
	KEYCODE_CATEGORIES: Keycodes.CATEGORIES,
	KEYCODE_REVERSE_CATEGORIES: Keycodes.REVERSE_CATEGORIES,
	KEYCODE_NUMBERS: Keycodes.NUMBERS,
	KEYCODE_SPECIAL: Keycodes.SPECIAL,
	KEYCODE_RECOMMENDED: Keycodes.RECOMMENDED,

	// Keymap.
	KEYMAP_MAX_LAYERS: 16,

	// Macros.
	MACRO_NONE: 0,
	MACRO_INTERVAL: 1,
	MACRO_DOWN: 2,
	MACRO_UP: 3,
	MACRO_TYPE: 4,
	MACRO_WAIT: 5,

	// Quantum.
	QUANTUM_DEFAULT: `
	`.trim(),

	// Presets.
	PRESETS: Presets,

	// Local settings.
	LOCAL: Local
}

module.exports = C
