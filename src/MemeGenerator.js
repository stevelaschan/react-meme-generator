import './App.css';
import React, { useState } from 'react';

// const imgData = data.map((imgUrl) => {
//   return imgUrl.blank;
// })

export default function MemeGenerator() {
  const [template, setTemplate] = useState('');
  // async function for fetching the img URLs

  // async function fetchUrl() {
  //   const response = await fetch('https://api.memegen.link/templates/');

  //   const imgData = await response.json();
  //   setData(imgData);
  // }

  return (
    <div>
      <div>
        <img src={`https://api.memegen.link/images/${template}.png`} alt="" />
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
