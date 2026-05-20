"use client"; 

const BookSessionModal = ({ isOpen, onClose, tutorData }) => {
  // If the modal is not open, it will render nothing
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop Overlay (With Blur Effect) */}
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity"
        onClick={onClose} // Modal will close when clicking outside
      />

      {/* Modal Box */}
      <div className="relative w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-8 shadow-2xl transition-all z-10">
        
        {/* Close Button */}
        <button 
          onClick={onClose} // Modal will close when clicking the cross button
          className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-xl text-slate-500 hover:bg-red-50 hover:text-red-500 transition-colors"
        >
          &times;
        </button>

        {/* Modal Header */}
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-slate-800">Confirm Booking</h2>
          <p className="text-sm text-slate-500 mt-1">Please verify your information to book the session</p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          
          {/* Student Name (Readonly) */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Student Name</label>
            <input 
              type="text" 
              className="w-full rounded-xl border border-slate-200 bg-slate-100 px-4 py-3 text-slate-600 font-medium cursor-not-allowed outline-none"
              value="Demo Student" // Logged-in user data will go here later
              readOnly 
            />
          </div>

          {/* Student Email (Readonly) */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Student Email</label>
            <input 
              type="email" 
              className="w-full rounded-xl border border-slate-200 bg-slate-100 px-4 py-3 text-slate-600 font-medium cursor-not-allowed outline-none"
              value="student@example.com" // Demo email
              readOnly 
            />
          </div>

          {/* Tutor ID & Name (Grid Layout - Readonly) */}
          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-1">
              <label className="block text-sm font-semibold text-slate-700 mb-2">Tutor ID</label>
              <input 
                type="text" 
                className="w-full rounded-xl border border-slate-200 bg-slate-100 px-4 py-3 text-slate-600 font-medium cursor-not-allowed outline-none text-center"
                value={tutorData?._id || tutorData?.id || ""} // Dynamic ID
                readOnly 
              />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-semibold text-slate-700 mb-2">Tutor Name</label>
              <input 
                type="text" 
                className="w-full rounded-xl border border-slate-200 bg-slate-100 px-4 py-3 text-slate-600 font-medium cursor-not-allowed outline-none"
                value={tutorData?.name || ""} // Dynamic Name
                readOnly 
              />
            </div>
          </div>

          {/* Phone Number (User Input) */}
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input 
              type="tel" 
              id="phone"
              required
              placeholder="01XXXXXXXXX"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 placeholder-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 transition-all outline-none"
            />
          </div>

          {/* Submit Button */}
          <button 
            type="submit"
            className="w-full mt-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 py-3.5 font-semibold text-white shadow-lg shadow-indigo-600/30 hover:opacity-95 active:scale-[0.98] transition-all"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookSessionModal;