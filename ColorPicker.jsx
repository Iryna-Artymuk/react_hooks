import React, { Component } from 'react';
import './ColorPicker.css';

import classNames from 'classnames/bind';
class ColorPicker extends Component {
  state = {
    activeButtonIndex: 0,
  };

  // шоб попередити повторний рендер уже активного компоненту шоб

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.activeButtonIndex !== this.state.activeButtonIndex;

    // або як алтернатива ехпортуват pureComponent
    //import React, { PureComponent } from 'react';
    // class ColorPicker extends Component
    // в ньому автоматично прівнюється попередній стейт і наступний
  }

  setActiveIndexToState = index => {
    return this.setState({
      activeButtonIndex: index,
    });
  };
  makeClassList = index => {
    // const cx = classNames.bind(styles);
    // let className = cx({
    //   activeButtonIndx: index,
    // });

    // return className;
    return classNames('button', {
      activeButton: index === this.state.activeButtonIndex,
    });
    // const classes = ['button'];
    // if (index === this.state.activeButtonIndx) {
    //   classes.push('activeButton');
    // }
    // return classes.join(' ');
  };

  render() {
    const { options } = this.props;
    const { activeButtonIndex } = this.state;
    const activeButton = options[activeButtonIndex];

    const activeBackground = activeButton.color;
    return (
      <div
        className="colorContainer"
        style={{
          backgroundColor: activeBackground,
        }}
      >
        <h2 className="title"> Color Picker Class </h2>
        <div className="colorBox">
          {this.props.options.map(({ lable, color }, index) => (
            <button
              key={lable}
              className={this.makeClassList(index)}
              style={{
                backgroundColor: color,
              }}
              onClick={() => this.setActiveIndexToState(index)}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
