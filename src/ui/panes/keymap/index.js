const React = require('react')

const NumberBox = require('ui/elements/numberbox')

const Configure = require('./configure')

const C = require('const')

class Keymap extends React.Component {
  render() {
    const state = this.props.state
    const keyboard = state.keyboard
    const selected = keyboard.selected

    const layer = state.ui.get('keymap-layer', 0)

    return (
      <div className="pane-keymap">
        选择一个层进行更改.
        <div style={{ height: '0.5rem' }} />
        <NumberBox
          style={{ width: '3rem' }}
          value={layer}
          min="0"
          max={C.KEYMAP_MAX_LAYERS - 1}
          minus="chevron-down"
          plus="chevron-up"
          onChange={v => state.ui.set('keymap-layer', v)}
        />
        <div style={{ height: '1.5rem' }} />
        配置选择的按键.
        <div style={{ height: '0.5rem' }} />
        {(() => {
          if (selected) {
            return (
              <div>
                <div className="pane-keymap-key">
                  <Configure
                    keycode={selected.keycodes[layer]}
                    onChange={code => {
                      selected.keycodes[layer] = code
                      keyboard.verify()
                      state.update()
                    }}
                    key={selected.id}
                  />
                </div>
                <br />
                <br />
                阅读{' '}
                <a
                  href="https://docs.qmk.fm/#/keycodes"
                  target="_blank"
                >
                  帮助文档
                </a>{' '}
                了解各个按键的按键键码.
              </div>
            )
          } else {
            return <h5>没有按键被选择</h5>
          }
        })()}
      </div>
    )
  }
}

module.exports = Keymap
