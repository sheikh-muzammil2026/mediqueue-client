import BookSessionBtn from '@/components/bookSessionModal/BookSessionBtn';
import { getSingleTutorPromise } from '@/lib/data';
import Image from 'next/image';

const TutorDetailsPage = async ({ params }) => {
  const { id } = await params;
  const tutor = await getSingleTutorPromise(id);
  
  
  const totalSlots = tutor?.totalSlots || 0;
 
  const today = new Date();
  today.setHours(0, 0, 0, 0); 
  
  const sessionDate = tutor?.sessionStartDate ? new Date(tutor.sessionStartDate) : null;
  if (sessionDate) {
    sessionDate.setHours(0, 0, 0, 0);
  }

  let isBookingBlocked = false;
  let bookingMessage = "";


  if (totalSlots === 0) {
    isBookingBlocked = true;
    bookingMessage = "No available slots left.";
  } 
 
  else if (sessionDate && today < sessionDate) {
    isBookingBlocked = true;
    bookingMessage = "Booking is not available yet for this tutor";
  }
 
  return (
    <div className="w-full max-w-6xl mx-auto my-12 px-4 sm:px-6 lg:px-8">
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
       
        <div className="lg:col-span-2 space-y-8">
          
        
          <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-sm">
            <div className="flex flex-wrap gap-2 items-center mb-4">
              <span className="bg-blue-600 text-white text-[10px] uppercase tracking-widest px-3 py-1 rounded-full font-bold shadow-sm shadow-blue-200">
                Verified Tutor
              </span>
              <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full border border-slate-200">
                ✨ {tutor?.teachingMode || "Online"}
              </span>
            </div>

            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                {tutor?.name}
              </h1>
              <p className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent inline-block">
                {tutor?.subject}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-slate-600 text-sm border-t border-slate-100 mt-6 pt-6">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-slate-800 bg-slate-50 border border-slate-200/60 px-3 py-1.5 rounded-xl shadow-2v">
                  🏢 {tutor?.institution || "N/A Institution"}
                </span>
              </div>
              <span className="hidden sm:inline text-slate-300">|</span>
              <div className="flex items-center gap-1.5 text-slate-600 font-medium bg-slate-50 border border-slate-200/60 px-3 py-1.5 rounded-xl">
                💼 {tutor?.experience || "Professional Educator"}
              </div>
            </div>
          </div>

         
          <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              📝 About the Tutor
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              {tutor?.bio || `${tutor?.name} is a dedicated educator specializing in ${tutor?.subject || "their field"}.`}
            </p>
          </div>

         
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-amber-50 rounded-2xl text-amber-600 border border-amber-100">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Availability</h3>
              </div>
              <p className="text-slate-900 font-bold text-base">
                {tutor?.availableDays?.length > 0 ? tutor.availableDays.join(', ') : "Not Specified"}
              </p>
              <p className="text-slate-500 text-xs mt-1.5 font-medium bg-slate-50 inline-block px-2.5 py-1 rounded-lg border border-slate-100">
                🕒 {tutor?.availableTime || "Flexible Time"}
              </p>
            </div>

            {/* Location */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-indigo-50 rounded-2xl text-indigo-600 border border-indigo-100">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                </div>
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Location Status</h3>
              </div>
              <p className="text-slate-900 font-bold text-base truncate">{tutor?.location || "Remote / Global"}</p>
              <p className="text-slate-500 text-xs mt-1.5 font-medium bg-slate-50 inline-block px-2.5 py-1 rounded-lg border border-slate-100">
                📍 Support Available
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="lg:sticky lg:top-8 bg-white rounded-3xl border border-slate-200/90 p-6 shadow-xl shadow-slate-200/40 space-y-6">
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-slate-100">
            <Image
              src={tutor?.image || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600"} 
              alt={tutor?.name || "Premium Tutor"}
              fill
              sizes="(max-w-1024px) 100vw, 350px"
              className="object-cover"
              priority
            />
          </div>

          {/* Pricing & Slots Matrix */}
          <div className="bg-slate-50/80 p-4 rounded-2xl border border-slate-200/60">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="space-y-1 border-r border-slate-200/80 pr-2">
                <span className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Hourly Rate</span>
                <p className="text-2xl font-black text-slate-900">${tutor?.hourlyFee || 0}/hr</p>
              </div>

              <div className="space-y-1 pl-2">
                <span className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Total Slots</span>
                <p className={`text-2xl font-black ${totalSlots === 0 ? 'text-red-500' : 'text-blue-600'}`}>
                  {totalSlots}
                </p>
              </div>
            </div>
          </div>
          
         
          {isBookingBlocked && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-600 text-sm font-semibold rounded-xl text-center">
              ⚠️ {bookingMessage}
            </div>
          )}

         
          <div className="pt-2">
           
            <BookSessionBtn tutor={tutor} isBookingBlocked={isBookingBlocked} />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default TutorDetailsPage;