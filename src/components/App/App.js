import React, { Component } from 'react';

import data from '../../data/color.json';
// import ColorPicker from '../ColorPicker/ColorPicker';

import ColorPickerHooks from '../ColorPikerHooks/ColorPikerHooks';
import SignupForm from '../SignupForm/SignupForm';
import Counter from '../Counter/Counter';
import Clock from '../Clock/Clock';
import Section from '../Section/Section';
import Counter2 from '../Counter2/Counter';

import PokemonView from '../Fetch Pokemon/PokemonView';

class App extends Component {
  render() {
    return (
      <>
        <Section title="Сounter   Hooks UseReduser">
          <Counter2 startValue={0} />
        </Section>
        <Section title="  Hooks  useState, useEffect serch pokemon ">
          <PokemonView />
        </Section>
        <Section title="Clock  Hooks useRef">
          <Clock />
          {/* <Clock /> */}
        </Section>
        <Section title="Color Picker Hooks useState">
          <ColorPickerHooks options={data} />
        </Section>
        <Section title="Form Hooks useState">
          <SignupForm />
        </Section>
        <Section title="Сounter   Hooks UseEffect">
          <Counter />
        </Section>
      </>
    );
  }
}
export default App;
