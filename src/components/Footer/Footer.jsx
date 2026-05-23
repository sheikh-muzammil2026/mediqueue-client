import React from 'react';

const Footer = () => {
    return (
        <footer className="relative border-t border-white/10 bg-[#040b14] px-4 py-12 sm:px-6 sm:py-20">
           
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-16">
                
                {/* Brand Section */}
                <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
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

                    <p className="mt-6 text-base leading-relaxed text-slate-400 sm:text-lg sm:leading-8">
                        MediQueue helps students discover expert tutors and manage learning
                        sessions with a seamless and modern booking experience.
                    </p>

                    <div className="mt-6 flex gap-4">
                        {['Fb', 'In', 'X', 'Yt'].map((icon) => (
                            <button
                                key={icon}
                                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sm font-semibold text-slate-300 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300 sm:h-12 sm:w-12 sm:rounded-2xl sm:text-base"
                            >
                                {icon}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Services Section */}
                <div className="text-center sm:text-left">
                    <h3 className="text-lg font-bold text-white">Learning Services</h3>
                    <ul className="mt-4 space-y-3 text-slate-400 sm:mt-6 sm:space-y-4">
                        <li className="cursor-pointer transition hover:text-cyan-300">One-to-One Tutoring</li>
                        <li className="cursor-pointer transition hover:text-cyan-300">Online Live Sessions</li>
                        <li className="cursor-pointer transition hover:text-cyan-300">Exam Preparation</li>
                        <li className="cursor-pointer transition hover:text-cyan-300">Academic Mentorship</li>
                    </ul>
                </div>

                {/* Quick Links Section */}
                <div className="text-center sm:text-left">
                    <h3 className="text-lg font-bold text-white">Quick Links</h3>
                    <ul className="mt-4 space-y-3 text-slate-400 sm:mt-6 sm:space-y-4">
                        <li className="cursor-pointer transition hover:text-cyan-300">Home</li>
                        <li className="cursor-pointer transition hover:text-cyan-300">Tutors</li>
                        <li className="cursor-pointer transition hover:text-cyan-300">Add Tutor</li>
                        <li className="cursor-pointer transition hover:text-cyan-300">Booked Sessions</li>
                    </ul>
                </div>

                {/* Contact & CTA Section */}
                <div className="text-center sm:text-left">
                    <h3 className="text-lg font-bold text-white">Contact</h3>
                    <div className="mt-4 space-y-3 text-slate-400 sm:mt-6 sm:space-y-5">
                        <p>Sylhet, Bangladesh</p>
                        <p>support@mediqueue.dev</p>
                        <p>+880 1700-000000</p>
                    </div>

                    <div className="mt-6 rounded-2xl border border-cyan-400/10 bg-cyan-400/5 p-5 backdrop-blur-2xl sm:mt-8 sm:rounded-3xl sm:p-6 text-center sm:text-left">
                        <p className="text-sm leading-relaxed text-slate-300 sm:leading-7">
                            Join thousands of students learning with verified tutors every day.
                        </p>
                        <button className="mt-4 w-full rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-2.5 font-bold text-slate-950 transition-all duration-300 hover:scale-[1.02] sm:mt-5 sm:rounded-2xl sm:py-3">
                            Start Learning
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Footer Section */}
            <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-slate-500 sm:mt-16 sm:pt-8 md:flex-row">
                <p className="text-center md:text-left">© 2026 MediQueue. All rights reserved.</p>
                <div className="flex items-center gap-6">
                    <p className="cursor-pointer transition hover:text-cyan-300">Privacy Policy</p>
                    <p className="cursor-pointer transition hover:text-cyan-300">Terms & Conditions</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;