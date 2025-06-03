import { createContext, useContext, useState } from 'react';

const DocumentContext = createContext();

export const DocumentProvider = ({ children }) => {
  const [content, setContent] = useState('Welcome to the collaborative editor!');

  return (
    <DocumentContext.Provider value={{ content, setContent }}>
      {children}
    </DocumentContext.Provider>
  );
};

export const useDocument = () => useContext(DocumentContext);
