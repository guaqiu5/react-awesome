import List from './List.js';
import Increase from './Increase.js'

function App() {
  return (
    <div className="App" style={{color:'green'}}>
    <h1>hello! JSX</h1>
   <List list={[`杂鱼`,`土鸡`,`傻鸟`]}/>
   <Increase></Increase>
    </div>
  );
}

export default App;
