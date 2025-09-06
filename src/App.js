import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>🔄 TOWA Exchange</h1>
        <p>ファイル交換システム</p>
        <div className="status">
          <p>✅ アプリケーション起動中</p>
          <p>⏳ サービス設定待機中</p>
        </div>
      </header>
    </div>
  );
}

export default App;