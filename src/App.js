import './App.css'
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';

function App() {
  

  
  return (
    <div className="App">
      <div className='App-header'>
        <HoverCounter />
        <ClickCounter />
      </div>
    </div>
  );
}

export default App;
