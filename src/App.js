import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>🔄 TOWA Exchange</h1>
        <p>バックエンド設定調整中...</p>
        <div className="status">
          <h3>📋 進捗</h3>
          <ul>
            <li>✅ React アプリケーション</li>
            <li>✅ AWS Cognito 準備完了</li>
            <li>✅ S3 バケット準備完了</li>
            <li>🔧 統合作業中</li>
          </ul>
        </div>
        <div className="credentials">
          <h3>🔧 設定情報</h3>
          <p><strong>Cognito Pool:</strong> ap-northeast-1_P1vtQonbW</p>
          <p><strong>Client ID:</strong> 7i9ut1bd0d4jqncn5kbf98skfk</p>
          <p><strong>S3 Bucket:</strong> towa-exchange-files-2025</p>
        </div>
      </header>
    </div>
  );
}

export default App;