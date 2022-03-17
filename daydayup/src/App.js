import List from './List.js';
import Increase from './Increase.js'
import ToDos from './ToDos.js';
import Field1 from './hooks.js';
import Field2 from './hooks.js'
import React from 'react';
const fieldDom =React.createRef()
function App() {
  return (
    <div className="App" style={{color:'green'}}>
    <h1>hello! Hooks</h1>
  <Field2></Field2>
    </div>
  );
}

export default App;
