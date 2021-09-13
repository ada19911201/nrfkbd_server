const React = require('react');

const Editor = require('./editor');

const NumberBox = require('ui/elements/numberbox');

const C = require('const');

class Macros extends React.Component {

	render() {
		const state = this.props.state;
		const keyboard = state.keyboard;

		const current = state.ui.get('macros-current', 0);

		return <div className='pane-keymap'>
			选择一个宏编号进行修改.
			<div style={{ height: '0.5rem' }}/>
			<NumberBox
				style={{ width: '3rem' }}
				value={ current }
				min='0'
        max='15'
				minus='chevron-down'
				plus='chevron-up'
				onChange={ v => state.ui.set('macros-current', v) }/>
			<div style={{ height: '1.5rem' }}/>
			编辑这个宏.
			<div style={{ height: '0.5rem' }}/>
			<Editor
				key={ current }
				state={ state }/>
		</div>;
	}

}

module.exports = Macros;
