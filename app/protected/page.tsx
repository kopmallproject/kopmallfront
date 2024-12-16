import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/utils/auth';

export default async function ProtectedPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return <p>You must be signed in to view this page.</p>;
  }

  return <p>Protected content for authenticated users only.</p>;
}
