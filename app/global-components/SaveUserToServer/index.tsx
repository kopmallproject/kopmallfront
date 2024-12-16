'use client';

import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import axios from 'axios';

// Custom hook for sending user data
const useSendUserData = () => {
  const { data: session, status } = useSession();

  useEffect(() => {
    const sendData = async () => {
      if (!session || !session.user || status !== 'authenticated') return;

      const { id, email, name, picture } = session.user;

      try {
        const response = await axios.post('/api/save-user', {
          id,
          email,
          name,
          picture
        });
        console.log('Data sent successfully:', response.data);
      } catch (err) {
        console.error('Error sending data to backend:', err);
      }
    };

    sendData();
  }, [session, status]);
};

// Component
const SyncUserToBackend = () => {
  useSendUserData(); // Call the custom hook
  return null; // No visible UI
};

export default SyncUserToBackend;
