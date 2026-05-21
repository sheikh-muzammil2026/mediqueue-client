'use client'
import React, { Suspense, useMemo } from 'react';
import { authClient } from "@/lib/auth-client";
import { getBookedSessionPromise } from "@/lib/data";
import BookedSessionContent from '@/components/bookSessionModal/ BookedSessionContent';

const BookedSessionPage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const userId = user?.id;

  // ১. প্রমিসটি তৈরি হবে এখানে (Suspense এর বাইরে)
  const sessionPromise = useMemo(() => {
    if (!userId) return Promise.resolve([]); // userId না থাকলে ফাঁকা প্রমিস
    return getBookedSessionPromise(userId);
  }, [userId]);

  return (
    // ২. এখন এই Suspense লোডিং সঠিকভাবে কাজ করবে
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <p className="text-lg font-semibold text-slate-600 animate-pulse">Loading your booked sessions...</p>
      </div>
    }>
      {/* ৩. প্রমিসটি চাইল্ড কম্পোনেন্টে প্রপস হিসেবে পাঠানো হলো */}
      <BookedSessionContent sessionPromise={sessionPromise}/>
    </Suspense>
  );
};

export default BookedSessionPage;