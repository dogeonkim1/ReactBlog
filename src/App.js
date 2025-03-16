import React from 'react';
import './App.css';

function App() {

let posts = { color : 'blue', fontSize : '30px'}
    let content = '강남 고기 맛집'
  return (
    <div className="App">
          <div className="black-nav">
              <div style={posts}>개발 Blog</div>
          </div>
          <h4> { content } </h4>
    </div>
  );
}

export default App;
