"use client";

import { useState } from "react";
import BookSessionModal from "./BookSessionModal"; 
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";


const BookSessionBtn = ({ tutor }) => {
  const [isOpen, setIsOpen] = useState(false);
  const route = useRouter();

  const { data: session } = authClient.useSession() 
  const user = session?.user;


  const isSlotEmpty = tutor?.totalSlots === 0;
  const isBeforeStartDate = new Date() < new Date(tutor?.sessionStartDate);
  const isDisabled = isSlotEmpty || isBeforeStartDate;
  const bookingStartDate = new Date(tutor?.sessionStartDate).toLocaleDateString("en-GB", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            });


  const handleBookNowButton = () => {
      if (user) {
        if (!isDisabled) {
          setIsOpen(true);
        }
      } else {
        route.push('/auth/login');
      }
    };

  return (
    <>
     
      <button 
        onClick={handleBookNowButton}
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
            ? `Bookings start on ${bookingStartDate}`
            : "Book Now"
        }
      </button>
      

     
      <BookSessionModal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
        tutorData={tutor} 
      />
    </>
  );
};

export default BookSessionBtn;