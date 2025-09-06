import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import './App.css';

// Amplify設定を読み込み（S3関連を除外）
const config = {
  Auth: {
    region: awsExports.aws_cognito_region,
    userPoolId: awsExports.aws_user_pools_id,
    userPoolWebClientId: awsExports.aws_user_pools_web_client_id,
    authenticationFlowType: 'USER_SRV_AUTH'
  }
};

Amplify.configure(config);

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
      placeholder: 'パスワードを入力してください（8文字以上）',
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
  Footer() {
    return (
      <div className="auth-footer">
        <p>© 2025 TOWA Exchange. 認証テスト中</p>
      </div>
    );
  }
};

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

// 認証後のメインアプリ（ファイル機能は一時的に無効）
function AuthenticatedApp({ signOut, user }) {
  const userEmail = user.attributes?.email || user.username;

  return (
    <div className="authenticated-app">
      <header className="app-header">
        <div className="header-left">
          <h1>🔄 TOWA Exchange</h1>
          <p>認証テスト完了！</p>
        </div>
        <div className="user-section">
          <div className="user-info">
            <span className="user-label">👤 ログイン中:</span>
            <span className="user-email">{userEmail}</span>
          </div>
          <button onClick={signOut} className="signout-button">
            🚪 ログアウト
          </button>
        </div>
      </header>
      
      <main className="main-content">
        <div className="welcome-section">
          <h2>🎉 認証テスト成功！</h2>
          <p>ようこそ、{userEmail} さん</p>
        </div>
        
        <div className="status-section">
          <h3>📋 現在の状況</h3>
          <div className="status-grid">
            <div className="status-card completed">
              <span className="status-icon">✅</span>
              <h4>Cognito認証</h4>
              <p>ユーザープール設定完了</p>
            </div>
            <div className="status-card completed">
              <span className="status-icon">✅</span>
              <h4>S3バケット</h4>
              <p>ストレージ準備完了</p>
            </div>
            <div className="status-card pending">
              <span className="status-icon">⏳</span>
              <h4>Identity Pool</h4>
              <p>作成・設定が必要</p>
            </div>
            <div className="status-card pending">
              <span className="status-icon">⏳</span>
              <h4>ファイル機能</h4>
              <p>統合待機中</p>
            </div>
          </div>
        </div>
        
        <div className="next-steps-section">
          <h3>🎯 次のステップ</h3>
          <ol className="steps-list">
            <li>Cognito Identity Pool の作成</li>
            <li>IAM権限の設定</li>
            <li>ファイルアップロード機能の統合</li>
            <li>ファイル共有機能の実装</li>
          </ol>
        </div>
      </main>
    </div>
  );
}

export default App;