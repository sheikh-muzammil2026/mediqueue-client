// app/error.jsx
'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { AlertTriangle, RefreshCw, Home, HelpCircle } from 'lucide-react';

export default function Error({ error, reset }) {
  useEffect(() => {
   
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 via-white to-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full text-center space-y-8 py-12">
        
        
        <div className="relative justify-center flex">
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-red-100 rounded-full blur-3xl opacity-40"></div>
          
          <div className="relative bg-white p-5 rounded-3xl shadow-xl border border-red-100 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
            <AlertTriangle className="w-16 h-16 text-red-500 animate-pulse"/>
          </div>
        </div>

        
        <div className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Classroom Connection Interrupted
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-md mx-auto">
            Something went wrong on our end while loading this page. Dont worry, your progress is safe.
          </p>
        </div>

        
        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm max-w-md mx-auto flex items-center space-x-3 text-left">
          <div className="bg-red-50 p-2 rounded-lg">
            <HelpCircle className="w-5 h-5 text-red-500"/>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-800">Quick tip from IT support</h4>
            <p className="text-xs text-gray-500">
              This usually happens due to a temporary network hiccup. Try clicking the Try Again button below.
            </p>
          </div>
        </div>

        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-md hover:shadow-lg transition duration-150"
          >
            <RefreshCw className="w-5 h-5 mr-2 animate-spin-slow"/>
            Try Again
          </button>

          
          <Link href="/" className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-gray-200 text-base font-medium rounded-xl text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-sm transition duration-150">
            <Home className="w-5 h-5 mr-2 text-gray-500"/>
            Back to Home
          </Link>
        </div>

        
        <p className="text-xs text-gray-400 pt-8">
          If the issue persists, feel free to report it to our technical helpdesk.
        </p>
      </div>
    </div>
  );
}