'use client';

import { BookOpen, GraduationCap } from 'lucide-react';

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-6">
        
        {/* Animated Loading Icon Section */}
        <div className="relative justify-center flex">
          {/* Glowing Background Effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-200 rounded-full blur-3xl opacity-40 animate-pulse"></div>
          
          {/* Central Animated Icon */}
          <div className="relative bg-white p-6 rounded-3xl shadow-xl border border-gray-100 animate-bounce duration-1000">
            <GraduationCap className="w-16 h-16 text-blue-600 animate-pulse" />
          </div>

          {/* Secondary Orbiting/Floating Icon */}
          <div className="absolute top-0 right-12 bg-blue-500 p-2 rounded-xl shadow-md animate-spin duration-3000 hidden sm:block">
            <BookOpen className="w-5 h-5 text-white" />
          </div>
        </div>

        {/* Loading Text and Skeleton Bar */}
        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight animate-pulse">
            Preparing Your Classroom...
          </h2>
          <p className="text-sm text-gray-500 max-w-xs mx-auto">
            Please wait a moment while we find the best tutor resources for you.
          </p>
        </div>

        {/* Tailored Progress Bar Animation */}
        <div className="w-48 h-1.5 bg-gray-100 rounded-full mx-auto overflow-hidden border border-gray-200/50">
          <div className="h-full bg-blue-600 rounded-full animate-progress w-full transform origin-left"></div>
        </div>

      </div>
    </div>
  );
}