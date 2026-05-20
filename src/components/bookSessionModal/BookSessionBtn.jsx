"use client";

import { useState } from "react";
import BookSessionModal from "./BookSessionModal"; // মডালের সঠিক পাথ দিন

const BookSessionBtn = ({ tutor }) => {
  const [isOpen, setIsOpen] = useState(false);


  const isSlotEmpty = tutor?.totalSlots === 0;
  const isBeforeStartDate = new Date() < new Date(tutor?.sessionStartDate);
  const isDisabled = isSlotEmpty || isBeforeStartDate;

  return (
    <>
      {/* মডাল ওপেন করার বাটন */}
      <button 
        onClick={() => !isDisabled && setIsOpen(true)}
        disabled={isDisabled}
        className={`w-full px-5 py-4 font-bold rounded-2xl transition-all duration-300 ${
          isDisabled 
            ? "bg-slate-200 text-slate-400 cursor-not-allowed opacity-80" 
            : "bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 cursor-pointer hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-400/20 active:scale-[0.98]"
        }`}
      >
        {isSlotEmpty 
          ? "No Slots Left" 
          : isBeforeStartDate 
            ? "Booking Not Started" 
            : "Book Now"
        }
      </button>

      {/* মডাল কম্পোনেন্ট */}
      <BookSessionModal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
        tutorData={tutor} 
      />
    </>
  );
};

export default BookSessionBtn;