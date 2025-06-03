import React from 'react';
import { usePresence } from '../hooks/userPresence';

const Presence = () => {
  const users = usePresence();

  return (
    <div style={{ backgroundColor: '#eee', padding: '1rem', marginBottom: '1rem' }}>
      <strong>Active Users:</strong> {users.map((u) => u.name).join(', ')}
    </div>
  );
};

export default Presence;
