// Top Text for custom meme
import './App.css';
import React, { useState } from 'react';

export default function BotText() {
  const [botText, setBopText] = useState('');
  return (
    <div>
      <label>
        Meme Bottom Text
        <input type="text" id="botText" value="topText" />
      </label>
    </div>
  );
}
