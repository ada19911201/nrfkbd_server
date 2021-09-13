const RulesMKGenerator = require('./generators/rules.mk')
const ConfigHGenerator = require('./generators/config.h')
const KeymapPlainCGenerator = require('./generators/keymap_plain.c')
const KeymapCommonHGenerator = require('./generators/keymap.common.h')
const KeymapRGBCGenerator = require('./generators/keymap_rgb.c')
const MakeFileGenerator = require('./generators/Makefile')
class Files {
	/*
	 * Generate the set of source files given a Keyboard.
	 *
	 * @param {Keyboard} keyboard The keyboard to generate files from.
	 *
	 * @return {Object} The generated source files.
	 */
	static generate(keyboard) {
		return {
			'zorokb/rules.mk': new RulesMKGenerator(keyboard).generate(),
			'zorokb/config.h': new ConfigHGenerator(keyboard).generate(),
			'zorokb/keymap_plain.c': new KeymapPlainCGenerator(keyboard).generate(),
			'zorokb/keymap_common.h': new KeymapCommonHGenerator(keyboard).generate(),
			'zorokb/keymap_rgb.c': new KeymapRGBCGenerator(keyboard).generate(),
			'zorokb/Makefile': new MakeFileGenerator(keyboard).generate()
		}
	}
}

module.exports = Files
