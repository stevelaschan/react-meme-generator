import './App.css';
import MemeBotText from './BottomText';
import MemeGenerator from './MemeGenerator';
import MemeTopText from './TopText';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Meme Generator</h1>
        <h5>
          <MemeGenerator />
        </h5>
        <h5>
          <MemeTopText />
        </h5>
        <h5>
          <MemeBotText />
        </h5>
      </header>
    </div>
  );
}

export default App;
