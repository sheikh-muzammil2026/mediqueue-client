import React from 'react';

const LearningJourneySection = () => {
    return (
        <section className="px-4 py-12 md:px-6 md:pb-24">
            <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-cyan-400/10 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 p-6 backdrop-blur-3xl sm:rounded-[40px] sm:p-10 md:p-16">
                <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
                    {/* Left Content Column */}
                    <div className="text-center lg:text-left">
                        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300 sm:text-sm sm:tracking-[0.4em]">
                            Learning Journey
                        </p>

                        <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl">
                            Personalized Learning
                            <br className="hidden sm:inline" /> Starts Here
                        </h2>

                        <p className="mt-4 text-base leading-relaxed text-slate-300 sm:mt-8 sm:text-lg sm:leading-8">
                            Connect with expert tutors, book personalized sessions, and grow
                            your skills through a beautifully organized learning platform.
                        </p>
                    </div>

                    {/* Right Stats Grid Column */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
                        <div className="rounded-2xl border border-white/10 bg-[#07111f]/60 p-6 text-center backdrop-blur-2xl sm:rounded-[30px] sm:p-8">
                            <h3 className="text-4xl font-black text-cyan-300 sm:text-5xl">500+</h3>
                            <p className="mt-2 text-sm text-slate-400 sm:mt-4 sm:text-base">Verified Tutors</p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-[#07111f]/60 p-6 text-center backdrop-blur-2xl sm:rounded-[30px] sm:p-8">
                            <h3 className="text-4xl font-black text-cyan-300 sm:text-5xl">12K+</h3>
                            <p className="mt-2 text-sm text-slate-400 sm:mt-4 sm:text-base">Booked Sessions</p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-[#07111f]/60 p-6 text-center backdrop-blur-2xl sm:rounded-[30px] sm:p-8">
                            <h3 className="text-4xl font-black text-cyan-300 sm:text-5xl">98%</h3>
                            <p className="mt-2 text-sm text-slate-400 sm:mt-4 sm:text-base">Student Satisfaction</p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-[#07111f]/60 p-6 text-center backdrop-blur-2xl sm:rounded-[30px] sm:p-8">
                            <h3 className="text-4xl font-black text-cyan-300 sm:text-5xl">24/7</h3>
                            <p className="mt-2 text-sm text-slate-400 sm:mt-4 sm:text-base">Support System</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LearningJourneySection;