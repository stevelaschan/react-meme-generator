// Bot Text for custom meme
import './App.css';
// 1. Import useState
import React, { useState } from 'react';

export default function MemeBotText() {
  // 2. Create state variable (with a starting value in parentheses)
  const [botText, setBotText] = useState('');
  return (
    <div>
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
