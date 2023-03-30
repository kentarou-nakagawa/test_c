// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';

function App() {
  const [leftField, setLeftField] = useState(['apple', 'ぶどう', 'いちご', 'さくらんぼ', 'うめ']);
  const [rightField, setRightField] = useState(['Watermelon', 'すいか', 'ばなな', 'メロン']);

  function handleMoveRight() {
    setRightField([...rightField, leftField.pop()]);
    setLeftField([...leftField]);
  }

  function handleMoveLeft() {
    setLeftField([...leftField, rightField.pop()]);
    setRightField([...rightField]);
  }

  function handleWordClick(word, fromList) {
    if (fromList === 'left') {
      setLeftField(leftField.filter((w) => w !== word));
      setRightField([...rightField, word]);
    } else if (fromList === 'right') {
      setRightField(rightField.filter((w) => w !== word));
      setLeftField([...leftField, word]);
    }
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ marginRight: '10px' }}>
        <h2>Left Field</h2>
        <ul>
          {leftField.map((word, index) => (
            <li key={index} onClick={() => handleWordClick(word, 'left')} style={{ cursor: 'pointer' }}>{word}</li>
          ))}
        </ul>
        <button onClick={handleMoveRight}>右へ移動</button>
      </div>
      <div style={{ marginLeft: '10px' }}>
        <h2>Right Field</h2>
        <ul>
          {rightField.map((word, index) => (
            <li key={index} onClick={() => handleWordClick(word, 'right')} style={{ cursor: 'pointer' }}>{word}</li>
          ))}
        </ul>
        <button onClick={handleMoveLeft}>左へ移動</button>
      </div>
    </div>
  );
}

export default App;








