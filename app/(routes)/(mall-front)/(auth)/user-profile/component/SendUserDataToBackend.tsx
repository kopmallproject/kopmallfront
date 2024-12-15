import { useSession } from 'next-auth/react';
import axios from 'axios';

const SendUserDataToBackend = () => {
  const { data: session } = useSession();

  const sendData = async () => {
    if (!session || !session.user) {
      console.log('User not logged in');
      return;
    }

    const { id, email, name, picture } = session.user;

    try {
      const response = await axios.post('/api/save-user', {
        id,
        email,
        name,
        picture
      });
      console.log(response);
      console.log('Data sent to backend successfully:', response.data);
    } catch (error) {
      console.error('Error sending data to backend:', error);
    }
  };

  return <button onClick={sendData}>Send User Data to Backend</button>;
};

export default SendUserDataToBackend;
