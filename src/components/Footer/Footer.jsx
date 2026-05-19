import React from 'react';

const Footer = () => {
    return (
       <footer className="relative border-t border-white/10 bg-[#040b14] px-6 py-20">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 text-2xl font-black text-slate-950">
              M
            </div>

            <div>
              <h2 className="text-2xl font-black text-white">MediQueue</h2>
              <p className="text-sm text-cyan-300">
                Next Generation Learning Platform
              </p>
            </div>
          </div>

          <p className="mt-6 leading-8 text-slate-400">
            MediQueue helps students discover expert tutors and manage learning
            sessions with a seamless and modern booking experience.
          </p>

          <div className="mt-8 flex gap-4">
            {['Fb', 'In', 'X', 'Yt'].map((icon) => (
              <button
                key={icon}
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 font-semibold text-slate-300 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300"
              >
                {icon}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white">Learning Services</h3>

          <ul className="mt-6 space-y-4 text-slate-400">
            <li className="transition hover:text-cyan-300">
              One-to-One Tutoring
            </li>
            <li className="transition hover:text-cyan-300">
              Online Live Sessions
            </li>
            <li className="transition hover:text-cyan-300">
              Exam Preparation
            </li>
            <li className="transition hover:text-cyan-300">
              Academic Mentorship
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white">Quick Links</h3>

          <ul className="mt-6 space-y-4 text-slate-400">
            <li className="transition hover:text-cyan-300">Home</li>
            <li className="transition hover:text-cyan-300">Tutors</li>
            <li className="transition hover:text-cyan-300">Add Tutor</li>
            <li className="transition hover:text-cyan-300">
              Booked Sessions
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white">Contact</h3>

          <div className="mt-6 space-y-5 text-slate-400">
            <p>Sylhet, Bangladesh</p>
            <p>support@mediqueue.dev</p>
            <p>+880 1700-000000</p>
          </div>

          <div className="mt-8 rounded-3xl border border-cyan-400/10 bg-cyan-400/5 p-6 backdrop-blur-2xl">
            <p className="text-sm leading-7 text-slate-300">
              Join thousands of students learning with verified tutors every
              day.
            </p>

            <button className="mt-5 w-full rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-3 font-bold text-slate-950 transition-all duration-300 hover:scale-[1.02]">
              Start Learning
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-slate-500 md:flex-row">
        <p>© 2026 MediQueue. All rights reserved.</p>

        <div className="flex items-center gap-6">
          <p className="transition hover:text-cyan-300">Privacy Policy</p>
          <p className="transition hover:text-cyan-300">Terms & Conditions</p>
        </div>
      </div>
    </footer>
    );
};

export default Footer;