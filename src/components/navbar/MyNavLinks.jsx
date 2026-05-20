import Link from 'next/link';
import React from 'react';

const MyNavLinks = ({user}) => {
    // console.log(user)

          const navLinks = [
        {
          path: '/',
          text: 'Home'
        },

         {
          path: '/allTutors',
          text: 'Tutors',
        },

         {
          path: '/addTutor',
          text: 'Add Tutor',
        },
         {
          path: '/myTutors',
          text: 'My Tutors'
        },
         {
          path: '/bookedSession',
          text: 'Booked Sessions'
        } 
  ]

    return (
        <div>

        {
            user ? 
           navLinks.map((link, index) => (
            <Link href={link.path}  key={index}>
             <button  
              className="rounded-full cursor-pointer px-5 py-2 text-sm font-medium text-slate-300 transition-all duration-300 hover:bg-cyan-400/10 hover:text-cyan-300"
         >  
            {link.text}
         </button>
            </Link>
           ))
            
            : 
           
            navLinks.slice(0,2).map((link, index) => (
            <Link href={link.path} key={index}>
             <button  
            
         className="rounded-full cursor-pointer px-5 py-2 text-sm font-medium text-slate-300 transition-all duration-300 hover:bg-cyan-400/10 hover:text-cyan-300"
         >  
         {link.text}
         </button></Link>
           ))
           
        }

        </div>
        
    );
};

export default MyNavLinks;