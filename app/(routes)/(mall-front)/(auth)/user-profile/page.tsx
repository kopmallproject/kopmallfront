'use client'; // This directive ensures the component is a client component

import { useSession } from 'next-auth/react';
import Image from 'next/image';
import SendUserDataToBackend from './component/SendUserDataToBackend';

const UserProfile = () => {
  const { data: session, status } = useSession();

  if (status === 'loading') return <p>Loading...</p>; // Optional: Handle loading state
  if (!session) return <p>Please log in</p>;

  return (
    <div>
      <h1>Welcome, {session.user.name}</h1>
      <p>ID: {session.user.id}</p>
      <p>Email: {session.user.email}</p>
      {/* <Image
        src={session.user.picture || '/default-avatar.png'} // Use a default image if picture is null
        alt="user-icon"
        className="bg-cover w-5 h-5"
        width={96} // You can adjust the size as needed
        height={96}
      /> */}
      <SendUserDataToBackend />
    </div>
  );
};

export default UserProfile;
