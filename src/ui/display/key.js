const React = require('react')
const classNames = require('classnames')

const C = require('const')

class Key extends React.Component {
	render() {
		const state = this.props.state
		const data = this.props.data
		const flipped = state.ui.get('display-flip', false)

		const keySize = state.ui.get('keySize', C.KEY_SIZE)

		const className1 = classNames('display-key', {
			select1: data.selected == 1,
			select2: data.selected == 2
		})

		const className2 = classNames('display-key2', {
			select1: data.selected == 1,
			select2: data.selected == 2
		})

		const className3 = classNames('display-key3', {
			select1: data.selected == 1,
			select2: data.selected == 2
		})
		const className4 = classNames('display-key4', {
			select1: data.selected == 1,
			select2: data.selected == 2
		})
		const className5 = classNames('display-key5', {
			select1: data.selected == 1,
			select2: data.selected == 2
		})

		const style = {
			top: data.pos.y * keySize,
			left:
				(flipped
					? state.keyboard.bounds.max.x - data.pos.x - data.size.w
					: data.pos.x) * keySize
		}

		// Only apply rotation if needed.
		if (data.angle != 0) {
			const rotateString = 'rotate(' + data.angle + 'deg)'
			style.WebkitTransform = rotateString
			style.MozTransform = rotateString
			style.msTransform = rotateString
			style.transform = rotateString
		}

		const block1Style = {
			width: data.size.w * keySize,
			height: data.size.h * keySize
		}
		const block2Style = {
			width: data.size2.w * keySize,
			height: data.size2.h * keySize,
			top: data.offset.y * keySize,
			left:
				(flipped
					? data.size.w - data.size2.w - data.offset.x
					: data.offset.x) * keySize
		}
		if (data.state.st == 1) {
			// 大键样式1
			return (
				<div
					className={className2}
					style={style}
					onClick={this.props.onClick}
					onMouseEnter={this.props.onMouseEnter}
					onMouseLeave={this.props.onMouseLeave}
				>
					<div className="display-key2-block" style={block1Style}>
						<div className="display-key2-block-inner-background" />
						<div className="display-key2-block-inner" />
					</div>
					<div className="display-key2-block" style={block2Style}>
						<div className="display-key2-block-inner-background" />
						<div className="display-key2-block-inner" />
					</div>
				</div>
			)
		} else if (data.state.st == 2) {
			// 大键样式2
			return (
				<div
					className={className3}
					style={style}
					onClick={this.props.onClick}
					onMouseEnter={this.props.onMouseEnter}
					onMouseLeave={this.props.onMouseLeave}
				>
					<div className="display-key3-block" style={block1Style}>
						<div className="display-key3-block-inner-background" />
						<div className="display-key3-block-inner" />
					</div>
					<div className="display-key3-block" style={block2Style}>
						<div className="display-key3-block-inner-background" />
						<div className="display-key3-block-inner" />
					</div>
				</div>
			)
		} else if (data.state.st == 3) {
			// 大键样式2S
			return (
				<div
					className={className4}
					style={style}
					onClick={this.props.onClick}
					onMouseEnter={this.props.onMouseEnter}
					onMouseLeave={this.props.onMouseLeave}
				>
					<div className="display-key4-block" style={block1Style}>
						<div className="display-key4-block-inner-background" />
						<div className="display-key4-block-inner" />
					</div>
					<div className="display-key4-block" style={block2Style}>
						<div className="display-key4-block-inner-background" />
						<div className="display-key4-block-inner" />
					</div>
				</div>
			)
		} else if (data.state.st == 4) {
			// 大键样式2
			return (
				<div
					className={className5}
					style={style}
					onClick={this.props.onClick}
					onMouseEnter={this.props.onMouseEnter}
					onMouseLeave={this.props.onMouseLeave}
				>
					<div className="display-key5-block" style={block1Style}>
						<div className="display-key5-block-inner-background" />
						<div className="display-key5-block-inner" />
					</div>
					<div className="display-key5-block" style={block2Style}>
						<div className="display-key5-block-inner-background" />
						<div className="display-key5-block-inner" />
					</div>
				</div>
			)
		} else {
			//普通按键
			return (
				<div
					className={className1}
					style={style}
					onClick={this.props.onClick}
					onMouseEnter={this.props.onMouseEnter}
					onMouseLeave={this.props.onMouseLeave}
				>
					<div className="display-key-block" style={block1Style}>
						<div className="display-key-block-inner-background" />
						<div className="display-key-block-inner" />
					</div>
					<div className="display-key-block" style={block2Style}>
						<div className="display-key-block-inner-background" />
						<div className="display-key-block-inner" />
					</div>
				</div>
			)
		}
	}
}

module.exports = Key
