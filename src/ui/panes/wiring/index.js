const React = require('react');

const NumberBox = require('ui/elements/numberbox');
const Help = require('ui/elements/help');

const C = require('const');

class Wiring extends React.Component {

	render() {
		const state = this.props.state;
		const keyboard = state.keyboard;
		const selected = keyboard.selected;

		return <div className='pane-wiring'>
			更改键盘矩阵的Rows和Columns针脚.
			<div style={{ height: '0.5rem' }}/>
			<h2 style={{ width: '4rem', marginRight: '0.5rem' }}>Rows</h2>
			<NumberBox
				style={{ width: '3rem' }}
				min={ 1 }
				value={ keyboard.rows }
				onChange={ v => keyboard.rows = v }/>
			<div style={{ height: '0.5rem' }}/>
			<h2 style={{ width: '4rem', marginRight: '0.5rem' }}>Columns</h2>
			<NumberBox
				style={{ width: '3rem' }}
				min={ 1 }
				value={ keyboard.cols }
				onChange={ v => keyboard.cols = v }/>
			<div style={{ height: '1.5rem' }}/>
			指定二极管方向.
			<div style={{ height: '0.5rem' }}/>
			<select
				value={ keyboard.settings.diodeDirection }
				onChange={ e => keyboard.setSetting('diodeDirection', parseInt(e.target.value)) }>
				<option value={ C.DIODE_COL2ROW }>Column to Row</option>
				<option value={ C.DIODE_ROW2COL }>Row to Column</option>
			</select>
			<Help>
				<strong>Column to Row</strong>: 二极管标记朝向Row. 大多数PCB和手工接线采用此方向 (推荐).
				<br/>
				<strong>Row to Column</strong>: 二极管标记朝向Column. 大多数PCB和手工接线采用此方向. 少数键盘才会采用.
			</Help>
			<div style={{ height: '1.5rem' }}/>
			更改选定的按键在矩阵中的位置.
			<div style={{ height: '0.5rem' }}/>

			{(() => {
				if (selected) {
					return <div>
						<h2 style={{ width: '4rem', marginRight: '0.5rem' }}>Row</h2>
						<NumberBox
							style={{ width: '3rem' }}
							minus='chevron-up'
							plus='chevron-down'
							min='0'
							max={ keyboard.rows - 1 }
							value={ selected.row }
							onChange={ v => selected.row = v }/>
						<div style={{ height: '0.5rem' }}/>
						<h2 style={{ width: '4rem', marginRight: '0.5rem' }}>Column</h2>
							<NumberBox
								style={{ width: '3rem' }}
							minus='chevron-left'
							plus='chevron-right'
							min='0'
							max={ keyboard.cols - 1 }
							value={ selected.col }
							onChange={ v => selected.col = v }/>
					</div>;
				} else {
					return <h5>没有按键被选中</h5>;
				}
			})()}
		</div>;
	}

}

module.exports = Wiring;
