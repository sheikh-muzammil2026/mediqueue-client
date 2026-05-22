"use client";

import React, { use } from "react";
import Image from "next/image";


const BookedSessionContent = ({ sessionPromise }) => {
  
    const sessionData = use(sessionPromise) || [];
    console.log(sessionData);
  

  return (
    <div className="min-h-screen bg-slate-50/50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">My Booked Sessions</h1>
          <p className="text-slate-500 mt-2 text-sm">
            Manage your booked tutors, schedules, and review your learning progress.
          </p>
        </div>

        {/* Conditional Rendering */}
        {sessionData.length === 0 ? (
          <div className="bg-white rounded-3xl border border-slate-200/60 p-12 text-center shadow-sm max-w-md mx-auto mt-12">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📅</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900">No Booked Sessions</h3>
            <p className="text-slate-500 text-sm mt-1 mb-6">
              You havent booked any tutoring sessions yet. Find a tutor to start learning!
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold px-6 py-3 rounded-xl shadow-md hover:opacity-90 transition-all cursor-pointer">
              Explore Tutors
            </button>
          </div>
        ) : (
          /* Bookings Table Container */
          <div className="bg-white rounded-3xl border border-slate-200/60 shadow-xl shadow-slate-100/50 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200/60 text-slate-600 text-xs font-bold uppercase tracking-wider">
                    <th className="py-4 px-6">Tutor Info</th>
                    <th className="py-4 px-6">Student</th>
                    <th className="py-4 px-6">Student Email</th>
                    <th className="py-4 px-6">Session Started Date</th>
                    <th className="py-4 px-6">Status</th>
                    <th className="py-4 px-6 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm">
                  {sessionData.map((session) => (
                    <tr key={session?._id} className="hover:bg-slate-50/50 transition-colors">
                      
                      {/* Tutor Image & Name */}
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <div className="relative w-11 h-11 rounded-xl overflow-hidden border border-slate-200 flex-shrink-0">
                            <Image 
                              src={session?.tutorImage || "https://i.ibb.co.com/XrH9m4Zt/avatar.png"} 
                              alt={session?.tutorName || "Tutor"}
                              fill
                              sizes="44px"
                              className="object-cover"
                            />
                          </div>
                          <div className="flex flex-col">
                            <span className="font-bold text-slate-900">{session?.tutorName}</span>
                          <span className=" text-slate-400">{session?.subject || "N/A"}</span>
                          </div>
                        </div>
                      </td>

                      {/* Subject */}
                      <td className="py-4 px-6 text-slate-600 font-medium">
                        {session?.userName || "N/A"}
                      </td>

                      {/* Price */}
                      <td className="py-4 px-6 font-bold text-slate-900">
                        {session?.userEmail || 0}
                      </td>

                      {/* Booking Date */}
                      <td className="py-4 px-6 text-slate-500">
                        {session?.sessionStartedDate ? new Date(session?.sessionStartedDate).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        }) : "N/A"}
                      </td>

                      {/* Status Badge */}
                      <td className="py-4 px-6">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold border ${
                          session?.status === "Confirmed"
                            ? "bg-emerald-50 text-emerald-700 border-emerald-100"
                            : "bg-amber-50 text-amber-700 border-amber-100"
                        }`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${session?.status === "Confirmed" ? "bg-emerald-500" : "bg-amber-500"}`} />
                          {session?.status || "Pending"}
                        </span>
                      </td>

                      {/* Action Button */}
                      <td className="py-4 px-6 text-right">
                        <button 
                          onClick={() => alert(`Review modal for ${session?.tutorName} coming soon!`)}
                          className="text-xs font-bold bg-white text-red-500 border border-slate-200 px-3 py-2 rounded-xl shadow-sm hover:bg-slate-50 hover:text-blue-600 active:scale-95 transition-all cursor-pointer"
                        >
                          Cancel
                        </button>
                        
                      </td>

                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default BookedSessionContent;