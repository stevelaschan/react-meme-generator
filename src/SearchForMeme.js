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
          id="memetemplate"
        />
      </div>
      <br />
      <br />
      <br />
      <form action="/" method="get">
        <label>
          {' '}
          Search
          <input
            value={template}
            onInput={(e) => setTemplate(e.target.value)}
            style={{ marginLeft: '5.4rem' }}
          />
        </label>
      </form>
      <div>
        <label>
          {' '}
          Top Text
          <input
            // 3. Connect state variable to input value
            value={topText}
            // 4. Update state variable with new value (text user types in)
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
            // 3. Connect state variable to input value
            value={botText}
            // 4. Update state variable with new value (text user types in)
            onChange={(e) => setBotText(e.target.value)}
            style={{ marginLeft: '2rem' }}
          />
        </label>
      </div>
    </div>
  );
}
