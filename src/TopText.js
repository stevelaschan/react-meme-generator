// Top Text for custom meme
import './App.css';
import React, { useState } from 'react';

export default function TopText() {
  const [topText, setTopText] = useState('');

  return (
    <div>
      <label>
        Meme Top Text
        <input type="text" id="topText" value="topText" />
      </label>
    </div>
  );
}
