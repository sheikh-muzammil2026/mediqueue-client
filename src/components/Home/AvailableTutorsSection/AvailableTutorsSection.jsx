import { getAvailableTutorsPromise } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AvailableTutorsSection = async() => {

  const tutors = await getAvailableTutorsPromise();
 
    return (
        <section className="px-4 py-16 sm:px-6 sm:py-24">
            <div className="mx-auto max-w-7xl">
                
                {/* Heading Section */}
                <div className="mb-10 text-center sm:mb-16">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300 sm:text-sm sm:tracking-[0.4em]">
                        Featured Tutors
                    </p>
                    <h2 className="text-3xl font-black text-white sm:text-4xl md:text-5xl">
                        Learn From Top Rated Experts
                    </h2>
                </div>

                {/* Responsive Grid Layout */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8">
                    {tutors.map((tutor) => (
                        <div
                            key={tutor._id}
                            className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/30"
                        >
                            {/* Responsive Image Aspect Ratio */}
                            <div className="relative aspect-[4/3] sm:aspect-[4/5] overflow-hidden">
                                <Image
                                    fill
                                    sizes="(max-w-640px) 100vw, (max-w-1024px) 50vw, 33vw"
                                    src={tutor.image}
                                    alt={tutor.name}
                                    className="object-cover object-center transition duration-700 group-hover:scale-110"
                                    priority={false}
                                />
                            </div>

                            {/* Card Content */}
                            <div className="p-6 sm:p-7">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="min-w-0"> {/* text truncation বা ভাঙা রোধ করতে */}
                                        <h3 className="truncate text-xl font-bold text-white sm:text-2xl">
                                            {tutor.name}
                                        </h3>
                                        <p className="mt-1 truncate text-sm text-cyan-300 sm:mt-2 sm:text-base">
                                            {tutor.subject}
                                        </p>
                                    </div>

                                    <div className="shrink-0 rounded-xl border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-xs font-semibold text-cyan-300 sm:rounded-2xl sm:px-4 sm:py-2 sm:text-sm">
                                        ${tutor.fee}/hr
                                    </div>
                                </div>

                                <Link href={`/allTutors/${tutor._id}`} className="block mt-6 sm:mt-8">
                                    <button className="w-full cursor-pointer rounded-xl sm:rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-3 sm:py-4 text-sm sm:text-base font-bold text-slate-950 transition-all duration-300 hover:scale-[1.02] active:scale-95">
                                        Book Session
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AvailableTutorsSection;