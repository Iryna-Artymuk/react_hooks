import './ColorPickerHooks.css';
import { useState } from 'react';
import classNames from 'classnames/bind';

export default function ColorPickerHooks({ options }) {
  const [activeButtonIndex, SetActiveIndex] = useState(0);

  const activeButtonObject = options[activeButtonIndex];

  const activeBackground = activeButtonObject.color;
  const setActiveIndex = newIndex => {
    SetActiveIndex(newIndex);
  };
  const makeClassList = index => {
    return classNames('button', {
      ' activeButton': index === activeButtonIndex,
    });
  };
  return (
    <div
      className="colorContainer"
      style={{
        backgroundColor: activeBackground,
      }}
    >
      <div className="colorBox">
        {options.map(({ lable, color }, index, array) => {
          // console.log(array); // вихідний масив
          return (
            <button
              key={lable}
              className={makeClassList(index)}
              style={{
                backgroundColor: color,
              }}
              onClick={() => setActiveIndex(index)}
            ></button>
          );
        })}
      </div>
    </div>
  );
}
