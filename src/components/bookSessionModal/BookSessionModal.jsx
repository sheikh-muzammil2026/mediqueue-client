"use client";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";

 

const BookSessionModal = ({ isOpen, onClose, tutorData }) => {
  // If the modal is not open, it will render nothing
  if (!isOpen) return null;
      const { data: session, } = authClient.useSession();
      const user = session?.user;
      

  const handleBooking = async (e) =>{
     e.preventDefault();
    const phone = e.target.phone.value;
     

      const bookingData = {
        userName: user?.name,
        userEmail: user?.email,
        userPhone: phone,
        userId: user?.id,
        tutorId: tutorData?._id,
        tutorImage: tutorData.image,
        tutorName: tutorData?.name,
        tutorEmail: tutorData?.email,
        tutorFee: tutorData.fee,
        subject: tutorData.subject,
        sessionStartedDate: tutorData?.sessionStartDate,
        bookedAt: new Date()
      }
      const res = await fetch("http://localhost:5000/bookedSession", {
            method: "POST",
            headers: {
              'content-type' : 'application/json'
            },
            body: JSON.stringify(bookingData)
            
      })
      toast.success("You booked successfully.")
      onClose();
     
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
  
  <div 
    className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity"
    onClick={onClose} 
  />

  {/* Modal Box */}
  <div className="relative w-full max-w-md max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-5 sm:p-6 shadow-2xl z-10 border border-slate-100 transition-all">
    
    {/* Compact Close Button */}
    <button 
      onClick={onClose} 
      className="absolute cursor-pointer right-4 top-4 flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-slate-400 hover:bg-red-50 hover:text-red-500 border border-slate-200/60 transition-colors active:scale-90"
      aria-label="Close modal"
    >
      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>

    {/* Modal Header */}
    <div className="mb-4 text-center mt-2">
      <h2 className="text-xl font-bold text-slate-900 tracking-tight">Confirm Booking</h2>
      <p className="text-xs text-slate-500 mt-0.5">Please verify your information to book the session</p>
    </div>

    {/* Form */}
    <form onSubmit={handleBooking} className="space-y-3.5">
      
      
      <div>
        <label className="block text-xs font-semibold text-slate-600 mb-1">Student Name</label>
        <input 
          type="text" 
          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2 text-sm text-slate-500 font-medium cursor-not-allowed outline-none"
          value="Demo Student" 
          readOnly 
        />
      </div>

     
      <div>
        <label className="block text-xs font-semibold text-slate-600 mb-1">Student Email</label>
        <input 
          type="email" 
          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2 text-sm text-slate-500 font-medium cursor-not-allowed outline-none"
          value="student@example.com" 
          readOnly 
        />
      </div>

      {/* Tutor ID & Name (Grid Layout - Readonly as requested for assignment) */}
      <div className="grid grid-cols-3 gap-3">
        <div className="col-span-1">
          <label className="block text-xs font-semibold text-slate-600 mb-1">Tutor ID</label>
          <input 
            type="text" 
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-2 py-2 text-sm text-slate-500 font-medium cursor-not-allowed outline-none text-center truncate"
            value={tutorData?._id || tutorData?.id || ""} 
            readOnly 
          />
        </div>
        <div className="col-span-2">
          <label className="block text-xs font-semibold text-slate-600 mb-1">Tutor Name</label>
          <input 
            type="text" 
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2 text-sm text-slate-500 font-medium cursor-not-allowed outline-none truncate"
            value={tutorData?.name || ""} 
            readOnly 
          />
        </div>
      </div>

      {/* Phone Number (User Input) */}
      <div>
        <label htmlFor="phone" className="block text-xs font-semibold text-slate-700 mb-1">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input 
          type="text" 
          id="phone"
          name="phone"
          required
          placeholder="01XXXXXXXXX"
          className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-sm text-slate-800 placeholder-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/5 transition-all outline-none font-medium"
        />
      </div>

      {/* Submit Button */}
      <div className="pt-1">
        <button 
         
          type="submit"
          className="w-full rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 py-2.5 text-sm font-semibold text-white shadow-md shadow-indigo-600/10 hover:opacity-95 active:scale-[0.99] transition-all cursor-pointer"
        >
          Confirm Booking
        </button>
      </div>
    </form>
  </div>
</div>
  );
};

export default BookSessionModal;



/**
 * 1. confirm booking e click korle 3 dhoroner data dabase e store korte cai 
 * * user data
 * * tutor data
 * * booktin time
 * 
 * 2. ejonno ->>>
 * * 3 dhoroner data ke age dhorte hobe. erpore data gulu client side er data.js e send korte hobe. props diye
 * * client side e API POST method banate hobe. 
 **  express diye database e store korte hobe.
 * */ 