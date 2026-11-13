import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

const JoinGroup = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const { groupId } = router.query;

  useEffect(() => {
    if (status === 'loading') return;

    if (!session) {
      router.replace(`/auth/signin?callbackUrl=${encodeURIComponent(router.asPath)}`);
    } else if (!groupId) {
      router.replace('/groups');
    }
    // joinGroup logic would go here with API call
  }, [status, session, groupId, router]);

  return <div />;
};

export default JoinGroup;
