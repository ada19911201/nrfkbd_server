const C = require('const');

class Keycode {

	/*
	 * Constructor for a keycode.
	 *
	 * @param {String} id The id of the keycode.
	 * @param {List} fields The fields associated with the keycode.
	 */
	constructor(id, fields) {
		this.id = id;
		this.fields = fields;

		// Get the keycode.
		this.code = C.KEYCODES[id];
		this.template = this.code.template;

		// Bind functions.
		this.getCode = this.getCode.bind(this);
		this.getName = this.getName.bind(this);
		this.serialize = this.serialize.bind(this);
	}

	/*
	 * Get the code.
	 *
	 * @return {String} The code..
	 */
	getCode() {
		const fields = [];
		for (let i = 0; i < this.fields.length; i ++) {
			const field = this.fields[i];
			const templateField = this.template.fields[i];
			switch(templateField) {
				case 'KEY': {
					fields.push(field.getCode());
					break;
				}
				case 'MOD': {
					// Get active mods.
					const active = [];
					if (field & 0b00000001) active.push('MOD_LCTL');
					if (field & 0b00000010) active.push('MOD_LSFT');
					if (field & 0b00000100) active.push('MOD_LALT');
					if (field & 0b00001000) active.push('MOD_LGUI');
					if (field & 0b00010000) active.push('MOD_RCTL');
					if (field & 0b00100000) active.push('MOD_RSFT');
					if (field & 0b01000000) active.push('MOD_RALT');
					if (field & 0b10000000) active.push('MOD_RGUI');
					if (active.length === 0) active.push(0);
					fields.push(active.join(' | '));
					break;
				}
				case 'LAYER': {
					fields.push(field);
					break;
				}
				case 'MACRO': {
					fields.push(field);
					break;
				}
			}
		}
		return this.template.getCode(fields);
	}

	/*
	 * Get the display name.
	 *
	 * @return {String} The display name.
	 */
	getName() {
		const fields = [];
		for (let i = 0; i < this.fields.length; i ++) {
			const field = this.fields[i];
			const templateField = this.template.fields[i];
			switch(templateField) {
				case 'KEY': {
					fields.push(field.getName());
					break;
				}
				case 'MOD': {
					// Get active mods.
					const active = [];
					if (field & 0b00000001) active.push('LCTRL');
					if (field & 0b00000010) active.push('LSHIFT');
					if (field & 0b00000100) active.push('LALT');
					if (field & 0b00001000) active.push('LGUI');
					if (field & 0b00010000) active.push('RCTRL');
					if (field & 0b00100000) active.push('RSHIFT');
					if (field & 0b01000000) active.push('RALT');
					if (field & 0b10000000) active.push('RGUI');
					if (active.length === 0) active.push('NONE');
					fields.push(active.join(' | '));
					break;
				}
				case 'LAYER': {
					fields.push(field);
					break;
				}
				case 'MACRO': {
					fields.push(field);
					break;
				}
			}
		}
		return this.template.getName(fields);
	}

	/*
	 * Get the default Keycode for some id.
	 *
	 * @param {String} code The id of the keycode.
	 *
	 * @return {Keycode} The default keycode.
	 */
	static getDefault(code) {
		const keycode = C.KEYCODES[code];
		const template = keycode.template;

		// Get the fields.
		const fields = [];
		for (const field of template.fields) {
			switch (field) {
				case 'KEY': {
					fields.push(new Keycode('KC_NO', []));
					break;
				}
				case 'MOD': {
					fields.push(0);
					break;
				}
				case 'LAYER': {
					fields.push(0);
					break;
				}
				case 'MACRO': {
					fields.push(0);
					break;
				}
			}
		}

		// Return the new Keycode.
		return new Keycode(code, fields);
	}

	/*
	 * Serialize the keycode.
	 *
	 * @return {String} The serialized keycode.
	 */
	serialize() {
		// Serialize the subfields.
		const id = this.id;
		const fields = this.fields.map(field => {
			if (typeof(field) === 'number' || field instanceof Number) {
				return field;
			} else {
				return field.serialize();
			}
		});

		// Return JSON representation.
		const json = {
			id: id,
			fields: fields
		};

		return json;
	}

	/*
	 * Deserialize a keycode.
	 *
	 * @param {String} serialized The serialized keycode.
	 *
	 * @return {Keycode} The deserialized keycode.
	 */
	static deserialize(serialized) {
		// Get the subfields.
		const id = serialized.id;
		const fields = serialized.fields.map(field => {
			if (typeof(field) === 'number' || field instanceof Number) {
				return field;
			} else {
				return Keycode.deserialize(field);
			}
		});

		// Build the new object.
		const keycode = new Keycode(id, fields);
		return keycode;
	}

}

module.exports = Keycode;
