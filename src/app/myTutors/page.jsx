'use client'
import React, { Suspense, useMemo } from 'react';
import MyTutorsContent from '@/components/MyTutors/MyTutorsContent';
import { getMyTutorsPromise } from '@/lib/data';
import { authClient } from '@/lib/auth-client';

const MyTutorsPage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const userId = user?.id;
  
 
  const tutorsPromise = useMemo(() => {
    if (!userId) return Promise.resolve([]);
    return getMyTutorsPromise(userId);
  }, [userId]);

     
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <p className="text-lg font-semibold text-slate-600 animate-pulse">Loading your tutors list...</p>
      </div>
    }>
      <MyTutorsContent tutorsPromise={tutorsPromise} />
    </Suspense>
  );
};

export default MyTutorsPage;