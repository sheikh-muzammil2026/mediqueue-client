
import BookSessionBtn from '@/components/bookSessionModal/BookSessionBtn';
import { getSingleTutorPromise } from '@/lib/data';
import Image from 'next/image';

const TutorDetailsPage = async({params}) => {
    const {id} = await params;
    const tutor = await getSingleTutorPromise(id)
    // console.log(tutor, "from tutor details page")

    return (
       <div className="w-full max-w-5xl mx-auto my-8 bg-slate-50/50 rounded-3xl border border-slate-200/60 p-4 sm:p-6 lg:p-8 backdrop-blur-sm">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
      
      {/* LEFT & CENTER: Primary Tutor Analytics & Profile */}
      <div className="lg:col-span-2 space-y-6">
        
        {/* Badges & Meta Info */}
        <div className="flex flex-wrap gap-2 items-center">
          <span className="bg-blue-600 text-white text-xs uppercase tracking-widest px-3 py-1 rounded-md font-bold shadow-sm shadow-blue-200">
            Verified Tutor
          </span>
          <span className="bg-slate-200 text-slate-800 text-xs font-semibold px-2.5 py-1 rounded-md">
            {tutor?.teachingMode || "Online"}
          </span>
        </div>

        {/* Tutor Identity */}
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {tutor?.name}
          </h1>
          <p className="text-xl font-bold bg-gradient-to-r Birds from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            {tutor?.subject}
          </p>
        </div>

        {/* Institution & Credentials */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-slate-600 text-sm border-b border-slate-200 pb-6">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-800 bg-white border border-slate-200 px-3 py-1 rounded-lg shadow-sm">
              🏢 {tutor?.institution}
            </span>
          </div>
          <span className="hidden sm:inline text-slate-300">|</span>
          <div className="flex items-center gap-1.5 text-slate-500 font-medium">
            💼 {tutor?.experience || "Professional Educator"}
          </div>
        </div>

        {/* Dynamic Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          
          {/* Schedule Component */}
          <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm transition-all hover:shadow-md">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-amber-50 rounded-xl text-amber-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider">Availability</h3>
            </div>
            <p className="text-slate-900 font-extrabold text-base">{tutor?.availableDays || "12-05-26"}</p>
            <p className="text-slate-500 text-xs mt-1 font-medium">{tutor?.availableTime || "3:52 am"}</p>
          </div>

          {/* Location details */}
          <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm transition-all hover:shadow-md">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-indigo-50 rounded-xl text-indigo-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
              </div>
              <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider">Location Status</h3>
            </div>
            <p className="text-slate-900 font-extrabold text-base truncate">{tutor?.location}</p>
            <p className="text-slate-500 text-xs mt-1 font-medium">Global Support Available</p>
          </div>

         

        </div>
      </div>

      {/* RIGHT COLUMN: Premium Photo & Pricing Showcase Card */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xl shadow-slate-100/70 sticky top-6">
        
        {/* Immersive Photo Frame */}
        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-inner border border-slate-100 mb-5 group">
          <Image
            src={tutor?.image || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600"} 
            alt={tutor?.name || "Premium Tutor"}
            fill
            sizes="(max-w-1024px) 100vw, 350px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
        </div>

        {/* Pricing Matrix */}
        <div className="space-y-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
          <div className="flex justify-between items-baseline">
            <span className="text-slate-500 text-sm font-medium">Tuition Rate</span>
            <div className="text-right">
              <span className="text-2xl font-black text-slate-900">BDT {tutor?.hourlyFee}</span>
              <span className="text-xs text-slate-500 font-medium block">per hour</span>
            </div>
          </div>
          
          <div className="h-px bg-slate-200 w-full"></div>

          {/* Value Prop Icons */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
              <span className="text-emerald-500">✓</span> 1-on-1 Interactive Live Sessions
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
              <span className="text-emerald-500">✓</span> Flexible Rescheduling Dashboard
            </div>
          </div>
        </div>
        
              <BookSessionBtn tutor={tutor} />
      </div>

    </div>
  </div>
    );
};

export default TutorDetailsPage;


/**
 * 1. book session btn theke click kora hobe. 
 * dynamic route e ID soho hajir hoye zabe. 
 * details page theke params ID diye API call kora hobe. 
 * server theke API res send korbe . 
 * database server er res onusare single data send korbe
 * */ 