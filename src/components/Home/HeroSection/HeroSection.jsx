import Link from 'next/link';
import React from 'react';

const HeroSection = () => {
    return (
        <section className="relative z-10 flex min-h-[85vh] items-center justify-center px-6 py-24">
      <div className="max-w-4xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-sm text-cyan-300 backdrop-blur-xl">
          AI Powered Tutor Booking Platform
        </div>

        <h1 className="bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-5xl font-black leading-tight text-transparent md:text-7xl">
          Learn Smarter.
          <br />
          Book Better.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Discover verified tutors, schedule flexible learning sessions, and
          manage your educational journey with an elegant booking experience.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
          <Link href={'/allTutors'}>
          <button className="rounded-2xl cursor-pointer bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-4 font-semibold text-slate-950 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]">
            Explore Tutors
          </button></Link>

          <button className="rounded-2xl cursor-pointer border border-white/15 bg-white/5 px-8 py-4 font-semibold backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10">
            Become a Tutor
          </button>
        </div>
      </div>
    </section>
    );
};

export default HeroSection;