import React, { Component } from 'react';
import data from '../../data/color.json';
// import ColorPicker from '../ColorPicker/ColorPicker';
import ColorPickerHooks from '../ColorPikerHooks/ColorPikerHooks';
import SignupForm from '../SignupForm/SignupForm';
import Counter from '../Counter/Counter';
import Section from '../Section/Section';

class App extends Component {
  state = {};

  render() {
    return (
      <>
        {/* <ColorPicker options={data} /> */}
        {/* <Section title="Color Picker Hooks useState">
          <ColorPickerHooks options={data} />
        </Section>
        <Section title="Form Hooks useState">
          <SignupForm />
        </Section> */}
        <Section title="counter   Hooks effect">
          <Counter />
        </Section>
      </>
    );
  }
}
export default App;
