import React from 'react';
import { useDocument } from '../contexts/DocumentContext';

const Editor = () => {
  const { content, setContent } = useDocument();

  return (
    <textarea
      value={content}
      onChange={(e) => setContent(e.target.value)}
      rows={15}
      style={{ width: '100%', padding: '1rem', fontSize: '16px' }}
    />
  );
};

export default Editor;
