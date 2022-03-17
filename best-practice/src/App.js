import './App.css';
import GrandFather from './components/context';
import Father from './components/raw-context';
function App() {
  return (
    <div className="App">
     <GrandFather></GrandFather>
     <Father></Father>
    </div>
  );
}

export default App;
