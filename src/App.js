import './App.css';
import MemeBotText from './BottomText';
import MemeTopText from './TopText';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src="https://i.kym-cdn.com/entries/icons/original/000/027/475/Screen_Shot_2018-10-25_at_11.02.15_AM.png"
          className="App-logo"
          alt="logo"
        />
        <h1>Meme Generator</h1>
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
