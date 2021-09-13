const React = require('react');

const Display = require('ui/display');
const Panes = require('ui/panes');

class Editor extends React.Component {

	constructor(props) {
		super(props);

		// Initialize notification for leaving page.
		window.onbeforeunload = () => {
			return '是否要退出该页？ 你可能有未保存的更改.';
		};
	}

	render() {
		return <div>
			<Display
				state={ this.props.state }/>
			<Panes
				state={ this.props.state }/>
		</div>;
	}

}

module.exports = Editor;
