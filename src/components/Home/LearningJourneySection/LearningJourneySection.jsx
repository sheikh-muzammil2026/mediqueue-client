import React from 'react';

const LearningJourneySection = () => {
    return (
        <section className="px-6 pb-24">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px] border border-cyan-400/10 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 p-10 backdrop-blur-3xl md:p-16">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.4em] text-cyan-300">
              Learning Journey
            </p>

            <h2 className="text-4xl font-black leading-tight text-white md:text-5xl">
              Personalized Learning
              <br />
              Starts Here
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-300">
              Connect with expert tutors, book personalized sessions, and grow
              your skills through a beautifully organized learning platform.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="rounded-[30px] border border-white/10 bg-[#07111f]/60 p-8 text-center backdrop-blur-2xl">
              <h3 className="text-5xl font-black text-cyan-300">500+</h3>
              <p className="mt-4 text-slate-400">Verified Tutors</p>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-[#07111f]/60 p-8 text-center backdrop-blur-2xl">
              <h3 className="text-5xl font-black text-cyan-300">12K+</h3>
              <p className="mt-4 text-slate-400">Booked Sessions</p>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-[#07111f]/60 p-8 text-center backdrop-blur-2xl">
              <h3 className="text-5xl font-black text-cyan-300">98%</h3>
              <p className="mt-4 text-slate-400">Student Satisfaction</p>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-[#07111f]/60 p-8 text-center backdrop-blur-2xl">
              <h3 className="text-5xl font-black text-cyan-300">24/7</h3>
              <p className="mt-4 text-slate-400">Support System</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
};

export default LearningJourneySection;