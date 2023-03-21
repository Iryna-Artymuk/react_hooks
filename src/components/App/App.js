import React, { Component } from 'react';

import data from '../../data/color.json';
// import ColorPicker from '../ColorPicker/ColorPicker';

import ColorPickerHooks from '../ColorPikerHooks/ColorPikerHooks';
import SignupForm from '../SignupForm/SignupForm';
import Counter from '../Fetch Pokemon/Counter/Counter';
import Clock from '../Clock/Clock';
import Section from '../Section/Section';
import Friends from '../FriendsFiler/Friends';

import Counter2 from '../Counter2/Counter';
import PokemonView from '../Fetch Pokemon/PokemonView';
import UserMenu from '../UserMenu/UserMenu';
import { SelectDogs } from '../SelectDogs/SelectDogs';
class App extends Component {
  render() {
    return (
      <>
        <Section title="  Hooks react select">
          <SelectDogs />
        </Section>
        <Section title="Сounter   Hooks UseContext">
          <UserMenu />
        </Section>
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

        <Section title=" Filter friends Hooks UseMemo">
          <Friends />
        </Section>
      </>
    );
  }
}
export default App;
