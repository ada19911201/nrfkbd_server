const React = require('react')

const C = require('const')

class Keymap extends React.Component {
  render() {
    const state = this.props.state
    const selectType = this.props.selectType
    const keyboard = state.keyboard
    const flipped = state.ui.get('display-flip', false)

    const keySize = state.ui.get('keySize', C.KEY_SIZE)

    const layer = state.ui.get('keymap-layer', 0)

    // Create a list of keycode boxes.
    const keys = keyboard.keys.map((key, index) => {
      const style = {
        top: key.pos.y * keySize,
        left:
          (flipped
            ? state.keyboard.bounds.max.x - key.pos.x - key.size.w
            : key.pos.x) * keySize
      }

      // Only apply rotation if needed.
      if (key.angle != 0) {
        const rotateString = 'rotate(' + key.angle + 'deg)'
        style.WebkitTransform = rotateString
        style.MozTransform = rotateString
        style.msTransform = rotateString
        style.transform = rotateString
      }

      const blockStyle = {
        width: key.size.w * keySize - 20,
        height: key.size.h * keySize - 12,
        lineHeight: key.size.h * keySize - 9 + 'px'
      }
      if (key.state.st == 1) {
        // 大键字体颜色1
        return (
          <div className="display-keycode2" key={index} style={style}>
            <div className="display-keycode2-block" style={blockStyle}>
              {selectType === 'settings' ? key.size.w : key.keycodes[layer].getName()}
            </div>
          </div>
        )
      } else if (key.state.st == 2) {
        // 大键字体颜色2
        return (
          <div className="display-keycode3" key={index} style={style}>
            <div className="display-keycode3-block" style={blockStyle}>
              {selectType === 'settings' ? key.size.w : key.keycodes[layer].getName()}
            </div>
          </div>
        )
      } else {
        return (
          // 普通键字体颜色
          <div className="display-keycode" key={index} style={style}>
            <div className="display-keycode-block" style={blockStyle}>
              {selectType === 'settings' ? key.size.w : key.keycodes[layer].getName()}
            </div>
          </div>
        )
      }
    })

    return <div className="display-inner">{keys}</div>
  }
}

module.exports = Keymap
