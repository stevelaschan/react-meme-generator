import './App.css';
import React, { useState } from 'react';

export default function SearchForMeme() {
  const [template, setTemplate] = useState('');
  const [botText, setBotText] = useState('');
  const [topText, setTopText] = useState('');

  return (
    <div>
      <div>
        <img
          src={`https://api.memegen.link/images/${template}/${topText}/${botText}.png`}
          alt=""
          className="memetemplate"
        />
      </div>
      <br />
      <br />
      <br />
      <form action="/" method="get">
        <label>
          {' '}
          Template
          <input
            value={template}
            onInput={(e) => setTemplate(e.target.value)}
            style={{ marginLeft: '3.8rem' }}
          />
        </label>
      </form>
      <div>
        <label>
          {' '}
          Top Text
          <input
            // Connect state variable to input value
            value={topText}
            // Update state variable with new value (text user types in)
            onInput={(e) => setTopText(e.target.value)}
            style={{ marginLeft: '4.3rem' }}
          />
        </label>
      </div>
      <div>
        <label>
          {' '}
          Bottom Text
          <input
            // Connect state variable to input value
            value={botText}
            // Update state variable with new value (text user types in)
            onChange={(e) => setBotText(e.target.value)}
            style={{ marginLeft: '1.9rem' }}
          />
        </label>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div>
        <a
          href={`https://api.memegen.link/images/${template}/${topText}/${botText}.png`}
          download
          className="download"
        >
          Click to download
        </a>
      </div>
    </div>
  );
}
