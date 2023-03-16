import React, { Component } from 'react';
import data from '../../data/color.json';
import ColorPicker from '../ColorPicker/ColorPicker';
import ColorPickerHooks from '../ColorPikerHooks/ColorPikerHooks';
import SignupForm from '../SignupForm/SignupForm';

class App extends Component {
  state = {};

  render() {
    return (
      <>
        <ColorPicker options={data} />
        <ColorPickerHooks options={data} />
        <SignupForm />
      </>
    );
  }
}
export default App;
