import { useState, useEffect } from 'react';

interface User {
  name?: string;
  email?: string;
  avatar?: string;
}

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Implement actual authentication logic
    // For now, we'll just set a mock user
    setUser({
      name: 'Jordan Hughes',
      email: 'jordan@example.com',
      avatar: 'https://i.pravatar.cc/150?u=1'
    });
    setLoading(false);
  }, []);

  return { user, loading };
}; 