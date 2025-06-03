import React from 'react';
import { UserProvider } from './contexts/UserContext';
import { DocumentProvider } from './contexts/DocumentContext';
import Editor from './components/Editor';
import Presence from './components/Presence';

function App() {
  return (
    <UserProvider>
      <DocumentProvider>
        <div style={{ maxWidth: '800px', margin: '2rem auto', fontFamily: 'Arial' }}>
          <h1>Collaborative Document Editor</h1>
          <Presence />
          <Editor />
        </div>
      </DocumentProvider>
    </UserProvider>
  );
}

export default App;
