import React, { Component } from 'react';
import './App.css';
import 'tachyons'
import {AddList} from './add-list'
import { Lists } from './list';

class App extends Component {
  render() {
    return (
      <div className="App w-100 h-100 pa2 white flex flex-wrap">
      <AddList/>
      <Lists/>
      </div>
    )
  }
}

export default App;
