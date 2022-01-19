// Top Text for custom meme
import './App.css';
// 1. Import useState
import React, { useState } from 'react';

export default function MemeTopText() {
  // 2. Create state variable (with a starting value in parentheses)
  const [topText, setTopText] = useState('');
  return (
    <div>
      <div>
        <label>
          {' '}
          Top Text
          <input
            // 3. Connect state variable to input value
            value={topText}
            // 4. Update state variable with new value (text user types in)
            onChange={(event) => setTopText(event.target.value)}
            style={{ marginLeft: '4.3rem' }}
          />
        </label>
      </div>
    </div>
  );
}
