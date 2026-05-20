"use client"; // useState ব্যবহারের জন্য ক্লায়েন্ট কম্পোনেন্ট আবশ্যক

import { useState } from "react";
import BookSessionModal from "./BookSessionModal"; // মডালের সঠিক পাথ দিন

const BookSessionBtn = ({ tutor }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* মডাল ওপেন করার বাটন */}
      <button 
        onClick={() => setIsOpen(true)}
        className="mt-8 w-full cursor-pointer rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-4 font-bold text-slate-950 transition-all duration-300 hover:scale-[1.02]"
      >
        Book Now 
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