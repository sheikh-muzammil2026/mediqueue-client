import React from 'react';

const MyNavLinks = ({user}) => {
    console.log(user)

          const navLinks = [
        {
          path: '/',
          text: 'Home'
        },

         {
          path: '/tutors',
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
             <button  
             key={index}
         className="rounded-full px-5 py-2 text-sm font-medium text-slate-300 transition-all duration-300 hover:bg-cyan-400/10 hover:text-cyan-300"
         >  
         {link.text}
         </button>
           ))
            
            : 
           
            navLinks.slice(0,2).map((link, index) => (
             <button  
             key={index}
         className="rounded-full px-5 py-2 text-sm font-medium text-slate-300 transition-all duration-300 hover:bg-cyan-400/10 hover:text-cyan-300"
         >  
         {link.text}
         </button>
           ))
           
        }

        </div>
        
    );
};

export default MyNavLinks;