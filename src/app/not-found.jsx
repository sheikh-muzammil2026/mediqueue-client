// app/not-found.jsx
'use client'; 

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Home, Search, BookOpen } from 'lucide-react';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full text-center space-y-8 py-12">
        
        {/* Glowing Background & Animation Section */}
        <div className="relative justify-center flex">
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
          
          {/* Creative 404 Layout */}
          <div className="relative flex items-center justify-center space-x-4 select-none">
            <span className="text-9xl font-extrabold text-blue-600 tracking-tighter drop-shadow-sm">4</span>
            
            {/* Tutor Themed Book Icon */}
            <div className="bg-white p-5 rounded-3xl shadow-xl border border-gray-100 rotate-12 transform hover:rotate-0 transition-transform duration-300">
              <BookOpen className="w-16 h-16 text-blue-500 animate-bounce" />
            </div>
            
            <span className="text-9xl font-extrabold text-blue-600 tracking-tighter drop-shadow-sm">4</span>
          </div>
        </div>

        {/* Text Message */}
        <div className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Oops! This Classroom is Empty
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-md mx-auto">
            The tutor or page you are looking for is not available right now. The link might be broken or the page has been moved.
          </p>
        </div>

        {/* Suggested Box */}
        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm max-w-md mx-auto flex items-center space-x-3 text-left">
          <div className="bg-blue-50 p-2 rounded-lg">
            <Search className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-800">Looking for the best tutors?</h4>
            <p className="text-xs text-gray-500">Go to our homepage and filter by categories to find your perfect match.</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          {/* Go Back Button */}
          <button
            onClick={() => router.back()}
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-gray-200 text-base font-medium rounded-xl text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-sm transition duration-150"
          >
            <ArrowLeft className="w-5 h-5 mr-2 text-gray-500" />
            Go Back
          </button>

          {/* Back to Home Button */}
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-md hover:shadow-lg transition duration-150"
          >
            <Home className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </div>

        {/* Footer Note */}
        <p className="text-xs text-gray-400 pt-8">
          If you believe this is a technical error, please contact our support team.
        </p>
      </div>
    </div>
  );
}