import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import './App.css';

// 認証フォームのカスタマイズ
const formFields = {
  signUp: {
    email: {
      label: 'メールアドレス',
      placeholder: 'メールアドレスを入力してください',
      isRequired: true,
    },
    password: {
      label: 'パスワード',
      placeholder: 'パスワードを入力してください',
      isRequired: true,
    },
    confirm_password: {
      label: 'パスワード確認',
      placeholder: 'パスワードを再入力してください',
      isRequired: true,
    }
  },
  signIn: {
    email: {
      label: 'メールアドレス',
      placeholder: 'メールアドレスを入力してください',
    },
    password: {
      label: 'パスワード',
      placeholder: 'パスワードを入力してください',
    }
  }
};

// カスタムコンポーネント
const components = {
  Header() {
    return (
      <div className="auth-header">
        <h1>🔄 TOWA Exchange</h1>
        <p>安全なファイル交換システム</p>
      </div>
    );
  },
};

function App() {
  return (
    <div className="App">
      {/* 一時的にAuthenticatorを無効化（バックエンド設定前） */}
      <div className="app-container">
        <header className="app-header">
          <h1>🔄 TOWA Exchange</h1>
          <p>ファイル交換システム</p>
        </header>
        
        <main className="main-content">
          <div className="setup-status">
            <h2>🛠️ セットアップ状況</h2>
            <div className="status-list">
              <div className="status-item completed">
                <span className="status-icon">✅</span>
                <span>Reactアプリケーション デプロイ完了</span>
              </div>
              <div className="status-item completed">
                <span className="status-icon">✅</span>
                <span>AWS Amplify ホスティング設定完了</span>
              </div>
              <div className="status-item pending">
                <span className="status-icon">⏳</span>
                <span>AWS Cognito 認証設定 待機中</span>
              </div>
              <div className="status-item pending">
                <span className="status-icon">⏳</span>
                <span>AWS S3 ストレージ設定 待機中</span>
              </div>
            </div>
          </div>
          
          <div className="preview-section">
            <h2>🎯 完成予定の機能</h2>
            <div className="feature-list">
              <div className="feature-card">
                <h3>🔐 ユーザー認証</h3>
                <p>メールアドレスによる安全なユーザー登録・ログイン</p>
              </div>
              <div className="feature-card">
                <h3>📁 ファイルアップロード</h3>
                <p>ドラッグ&ドロップでファイルを簡単アップロード</p>
              </div>
              <div className="feature-card">
                <h3>🔗 ファイル共有</h3>
                <p>時限付きURLで社外ユーザーとファイル共有</p>
              </div>
              <div className="feature-card">
                <h3>📊 管理機能</h3>
                <p>アップロード済みファイルの一覧・削除・ダウンロード</p>
              </div>
            </div>
          </div>
        </main>
      </div>
      
      {/* 
      認証機能（バックエンド設定後に有効化）
      <Authenticator 
        formFields={formFields} 
        components={components}
        signUpAttributes={['email']}
        loginMechanisms={['email']}
      >
        {({ signOut, user }) => (
          <AuthenticatedApp signOut={signOut} user={user} />
        )}
      </Authenticator>
      */}
    </div>
  );
}

// 認証後のメインアプリ（後で使用）
function AuthenticatedApp({ signOut, user }) {
  return (
    <div className="authenticated-app">
      <header className="app-header">
        <h1>🔄 TOWA Exchange</h1>
        <div className="user-section">
          <span>👤 {user.attributes?.email || user.username}</span>
          <button onClick={signOut} className="signout-button">
            🚪 ログアウト
          </button>
        </div>
      </header>
      <main className="main-content">
        <div className="welcome-message">
          <h2>🎉 ログイン成功！</h2>
          <p>ファイル管理機能は現在開発中です。</p>
        </div>
      </main>
    </div>
  );
}

export default App;