import './ColorPickerHooks.css';

import classNames from 'classnames/bind';
function makeClassList(index) {
  return classNames('button', {
    // activeButton: index === this.state.activeButtonIndex,
  });
}
function setActiveIndexToState(iidex) {}
export default function ColorPickerHooks({ options }) {
  // const { activeButtonIndex } = this.state;
  // const activeButton = options[activeButtonIndex];

  // const activeBackground = activeButton.color;

  return (
    <div
      className="colorContainer"
      style={
        {
          // backgroundColor: activeBackground,
        }
      }
    >
      <h2 className="title"> Color Picker Hooks</h2>
      <div className="colorBox">
        {options.map(({ lable, color }, index) => (
          <button
            key={lable}
            className={makeClassList(index)}
            style={{
              backgroundColor: color,
            }}
            onClick={() => setActiveIndexToState(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}
