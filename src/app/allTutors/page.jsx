import { getAllTutorsPromise } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AllTutorsPage = async (props) => {
   
    const searchParams = await props.searchParams; 
    
    const search = searchParams?.search || '';
    const startDate = searchParams?.startDate || '';
    const endDate = searchParams?.endDate || '';

   
    const tutors = await getAllTutorsPromise({ search, startDate, endDate });

    return (
        <section className="px-6 py-24 bg-[#07111f] text-white overflow-hidden">
            <div className="mx-auto max-w-7xl">
                
                <div className="mb-16 text-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.4em] text-cyan-300">
                        All Tutors Directory
                    </p>

                    <h2 className="text-4xl font-black text-white md:text-5xl">
                        Find & Book Expert Tutors
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-sm md:text-base text-slate-300">
                        Browse through our verified tutors, compare subjects, fees, and experience,
                        and book the perfect session that matches your learning needs.
                    </p>

                    <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-slate-300">
                        Total Tutors Available:
                        <span className="font-bold text-cyan-300">{tutors.length}</span>
                    </div>
                </div>

               
                <form method="GET" className="mb-12 p-6 rounded-[24px] border border-white/10 bg-white/5 backdrop-blur-xl flex flex-col md:flex-row gap-4 items-end">
                    
                   
                    <div className="w-full flex-1">
                        <label className="block mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">Search by Name</label>
                        <input 
                            type="text" 
                            name="search"
                            defaultValue={search}
                            placeholder="Enter tutor name..."
                            className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition"
                        />
                    </div>

                   
                    <div className="w-full md:w-auto">
                        <label className="block mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">Start Date</label>
                        <input 
                            type="date" 
                            name="startDate"
                            defaultValue={startDate}
                            className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white focus:outline-none focus:border-cyan-400 transition"
                        />
                    </div>

                    
                    <div className="w-full md:w-auto">
                        <label className="block mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">End Date</label>
                        <input 
                            type="date" 
                            name="endDate"
                            defaultValue={endDate}
                            className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white focus:outline-none focus:border-cyan-400 transition"
                        />
                    </div>

                    
                    <div className="w-full md:w-auto flex gap-2">
                        <button 
                            type="submit" 
                            className="flex-1 md:flex-none cursor-pointer px-6 py-3 font-bold bg-cyan-400 text-slate-950 rounded-xl hover:bg-cyan-300 transition duration-300"
                        >
                            Filter
                        </button>
                        
                        {(search || startDate || endDate) && (
                            <Link 
                                href="/allTutors" 
                                className="px-4 py-3 font-semibold bg-white/10 text-white rounded-xl hover:bg-white/20 transition duration-300 text-center flex items-center justify-center"
                            >
                                Clear
                            </Link>
                        )}
                    </div>
                </form>
                {/* ------------------------------- */}

               
                {tutors.length === 0 ? (
                    <div className="text-center py-12 border border-dashed border-white/10 rounded-[32px]">
                        <p className="text-slate-400 text-lg">No tutors found matching your criteria.</p>
                    </div>
                ) : (
                    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                        {tutors.map((tutor) => (
                            <div
                                key={tutor?._id}
                                className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/30"
                            >
                                <div className="relative aspect-[4/5] overflow-hidden">
                                    <Image
                                        fill
                                        sizes="(max-width: 768px) 100vw, 150px"
                                        src={tutor?.image}
                                        alt={tutor?.name || "Tutor Image"}
                                        className="object-cover object-center transition duration-700 group-hover:scale-110"
                                    />
                                </div>

                                <div className="p-7">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="text-2xl font-bold text-white">
                                                {tutor?.name}
                                            </h3>
                                            <p className="mt-2 text-cyan-300">{tutor?.subject}</p>
                                        </div>

                                        <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
                                            ${tutor?.fee}/hr
                                        </div>
                                    </div>

                                    <Link href={`/allTutors/${tutor._id}`}>
                                        <button className="mt-8 w-full cursor-pointer rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-4 font-bold text-slate-950 transition-all duration-300 hover:scale-[1.02]">
                                            Book Session
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default AllTutorsPage;