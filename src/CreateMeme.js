import './App.css';
import { saveAs } from 'file-saver';
import { useState } from 'react';

export default function SearchForMeme() {
  const [template, setTemplate] = useState('');
  const [botText, setBotText] = useState('');
  const [topText, setTopText] = useState('');
  const url = `https://api.memegen.link/images/${template}/${topText}/${botText}.png`;
  const saveFile = () => {
    saveAs(url);
  };

  return (
    <div>
      <div>
        <img
          src={url}
          alt=""
          className="memetemplate"
          data-test-id="meme-image"
        />
      </div>
      <br />
      <br />
      <br />
      {/* SEARCH BAR */}
      <form action="/" method="get">
        <label for="Meme template">
          {' '}
          Meme template
          <input
            // Connect state variable to input value
            value={template}
            // Update state variable with new value (text user types in)
            onInput={(e) => setTemplate(e.target.value)}
            style={{ marginLeft: '1.6rem' }}
          />
        </label>
      </form>
      {/* TOP TEXT */}
      <div>
        <label for="Top text">
          {' '}
          Top text
          <input
            // Connect state variable to input value
            value={topText}
            // Update state variable with new value (text user types in)
            onInput={(e) => setTopText(e.target.value)}
            style={{ marginLeft: '6.5rem' }}
          />
        </label>
      </div>
      {/* BOTTOM TEXT */}
      <div>
        <label for="Bottom text">
          {' '}
          Bottom text
          <input
            // Connect state variable to input value
            value={botText}
            // Update state variable with new value (text user types in)
            onChange={(e) => setBotText(e.target.value)}
            style={{ marginLeft: '4rem' }}
          />
        </label>
      </div>
      <br />
      <br />
      <br />
      <div>
        <button className="download" onClick={saveFile}>
          Download
        </button>
      </div>
    </div>
  );
}
