import './App.css';
import CreateMeme from './CreateMeme';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Meme Generator</h1>
        <h5>
          <CreateMeme />
        </h5>
      </header>
    </div>
  );
}

export default App;
