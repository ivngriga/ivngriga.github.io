import './scss/app.scss';

import {useState} from 'react';

import {Navmenu} from './components/navbar';
import {TitleCard} from './components/titlecards'
import {OneByOne, TwoByOne, TwoByTwo1} from './components/gridlayout';
import {CoolDiv} from './components/cooldiv';
import { Prefooter } from './components/prefooter';
import { Newsletter } from './components/newsletter';
import { Footer} from './components/footer';

function App() {
  return (
    <div className="App">
      <div className="section-one">
        <Navmenu/>
        <TitleCard/>
      </div>
      <div className="section-two">
        <OneByOne/>
        <TwoByOne/>
        <TwoByTwo1/>
      </div>
      <div className="section-three">
        <CoolDiv/>
        <Prefooter/>
        <Newsletter/>
      </div>
      <div className='section-four'>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
