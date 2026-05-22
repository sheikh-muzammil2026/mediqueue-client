'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { authClient } from "@/lib/auth-client"
import { useRouter } from "next/navigation";
import MyNavLinks from './MyNavLinks';
import DropdownFunc from './DropdownFunc';
import ThemeToggle from '../theme/ThemeToggle';



const Navbar =  () => { 

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const { data: session} = authClient.useSession() 
  const user = session?.user;
  // console.log(user)

  const router = useRouter();

  const handleLogoutButton = async () =>{
      setDropdownOpen(false)
      await authClient.signOut({
  fetchOptions: {
    onSuccess: () => {
      router.push("/auth/login"); // redirect to login page
    },
  },
});

      
  }


    return (
          <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07111f]/70 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-4">
          <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 shadow-[0_0_35px_rgba(34,211,238,0.35)]">
            <span className="text-2xl font-black text-slate-950">M</span>

            <div className="absolute inset-0 rounded-2xl border border-white/20"></div>
          </div>

          <div>
            <h1 className="text-2xl font-black tracking-tight text-white">
              MediQueue
            </h1>

            <p className="text-xs tracking-[0.3em] text-cyan-300 uppercase">
              Smart Tutor Booking
            </p>
          </div>
        </div>

        <nav className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-2xl lg:flex">

          < MyNavLinks user={user} />
        </nav>

          <ThemeToggle />

        <div className="flex items-center gap-4">

          {
            user ? 
            <>
            <DropdownFunc handleLogoutButton={handleLogoutButton} user={user} />
           
            </>

            :

            <>
            <Link href={"/auth/login"}><button className="hidden cursor-pointer rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm font-medium text-cyan-300 transition-all duration-300 hover:bg-cyan-400/20 md:block">
            Login
          </button></Link>

          <Link href={'/auth/register'}><button className="rounded-full cursor-pointer bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 text-sm font-bold text-slate-950 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(34,211,238,0.45)]">
            Register
          </button></Link>
            </>
          }
          
      
      
        </div>
      </div>
    </header>
    );
};

export default Navbar;