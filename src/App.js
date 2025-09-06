import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>🔄 TOWA Exchange</h1>
        <p>クリーンな状態でのテスト</p>
        <div style={{
          background: 'white',
          color: 'black',
          padding: '20px',
          borderRadius: '10px',
          margin: '20px',
          textAlign: 'left'
        }}>
          <h3>準備完了リソース:</h3>
          <ul>
            <li>✅ Cognito User Pool: ap-northeast-1_P1vtQonbW</li>
            <li>✅ Cognito Client ID: 7i9ut1bd0d4jqncn5kbf98skfk</li>
            <li>✅ S3 Bucket: towa-exchange-files-2025</li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;