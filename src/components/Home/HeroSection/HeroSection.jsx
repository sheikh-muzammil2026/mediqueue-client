import Link from 'next/link';
import React from 'react';

const HeroSection = () => {
    return (
        <section className="relative z-10 flex min-h-[80vh] items-center justify-center px-4 py-16 sm:px-6 sm:py-24">
            <div className="max-w-4xl text-center">
                
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-xs text-cyan-300 backdrop-blur-xl sm:px-5 sm:py-2 sm:text-sm">
                    AI Powered Tutor Booking Platform
                </div>

                
                <h1 className="bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-4xl font-black leading-tight text-transparent sm:text-5xl md:text-7xl">
                    Learn Smarter.
                    <br className="hidden sm:inline" /> Book Better.
                </h1>

                
                <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-300 sm:mt-6 sm:text-lg sm:leading-8">
                    Discover verified tutors, schedule flexible learning sessions, and
                    manage your educational journey with an elegant booking experience.
                </p>

               
                <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:mt-10 sm:flex-row sm:gap-5">
                    <Link href={'/allTutors'} className="w-full sm:w-auto">
                        <button className="w-full sm:w-auto rounded-xl sm:rounded-2xl cursor-pointer bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3.5 sm:px-8 sm:py-4 font-semibold text-slate-950 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] active:scale-95">
                            Explore Tutors
                        </button>
                    </Link>

                    <Link href={'/addTutor'} className="w-full sm:w-auto">
                        <button className="w-full sm:w-auto rounded-xl sm:rounded-2xl cursor-pointer border border-white/15 bg-white/5 px-6 py-3.5 sm:px-8 sm:py-4 font-semibold backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300 active:scale-95">
                            Become a Tutor
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;