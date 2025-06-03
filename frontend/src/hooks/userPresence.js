import { useEffect, useState } from 'react';

export const usePresence = () => {
  const [users, setUsers] = useState([{ id: 'user-2', name: 'Bob' }]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate presence change
      setUsers((prev) => [...prev]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return users;
};
