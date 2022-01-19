import './App.css';
import botText from './BottomText';
import topText from './TopText';

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
        <div>
          <h5>Enter your Top Text here:</h5>
          <topText />

          <h5>Enter your Bot Text here:</h5>
          <botText />
        </div>
      </header>
    </div>
  );
}

export default App;
