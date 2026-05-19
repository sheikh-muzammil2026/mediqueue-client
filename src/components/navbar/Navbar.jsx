import Link from 'next/link';
import React from 'react';

const Navbar = () => {

      const navLinks = [
    'Home',
    'Tutors',
    'Add Tutor',
    'My Tutors',
    'Booked Sessions',
  ]

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
          {navLinks.map((link) => (
            <button
              key={link}
              className="rounded-full px-5 py-2 text-sm font-medium text-slate-300 transition-all duration-300 hover:bg-cyan-400/10 hover:text-cyan-300"
            >
              {link}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link href={"/auth/login"}><button className="hidden rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm font-medium text-cyan-300 transition-all duration-300 hover:bg-cyan-400/20 md:block">
            Login
          </button></Link>

          <Link href={'/auth/register'}><button className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 text-sm font-bold text-slate-950 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(34,211,238,0.45)]">
            Register
          </button></Link>
        </div>
      </div>
    </header>
    );
};

export default Navbar;