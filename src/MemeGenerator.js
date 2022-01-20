import './App.css';
import React, { useEffect, useState } from 'react';

export default function MemeGenerator() {
  const [data, setData] = useState([]);
  // async function for fetching the img URLs

  async function fetchUrl() {
    const response = await fetch('https://api.memegen.link/templates/');

    const imgData = await response.json();
    setData(imgData);
  }

  const imgData = data.map((imgUrl) => {
    return imgUrl.blank;
  });

  return (
    <div>
      <div>
        <img src={imgData} alt="meme" />
      </div>
      <br />
      <br />
      <br />
      <label>
        {' '}
        Search
        <input
          value=""
          onChange={(event) => setData(event.target.value)}
          style={{ marginLeft: '30px' }}
        />
        <button type="sumbit">Search</button>
      </label>
    </div>
  );
}

//   const [fetchUrls, setFetchUrls] = useState([]);

//   async function fetchUrls() {
//     const response = await fetch('https://api.memegen.link/templates/');
//     const data = await response.json;
//   }
//   return (
//     <div>
//       fetchUrls.map(fetchUrl => (
//       <input key={fetchUrls.name} />
//       ))
//     </div>
//   );
// }
