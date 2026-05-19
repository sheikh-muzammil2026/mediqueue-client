import { getAvailableTutorsPromise } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AvailableTutorsSection = async() => {

  const tutors = await getAvailableTutorsPromise();
 
    return (
         <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.4em] text-cyan-300">
            Featured Tutors
          </p>

          <h2 className="text-4xl font-black text-white md:text-5xl">
            Learn From Top Rated Experts
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {tutors.map((tutor) => (
            <div
              key={tutor._id}
              className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/30"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                    
                     fill
                     sizes="(max-w-768px) 100vw, 150px"
                      src={tutor.image}
                      alt={tutor.name}
                      className="object-cover object-center transition duration-700 group-hover:scale-110"
                       />
                     </div>

              <div className="p-7">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {tutor.name}
                    </h3>

                    <p className="mt-2 text-cyan-300">{tutor.subject}</p>
                  </div>

                  <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
                    {tutor.fee}
                  </div>
                </div>

               <Link href={`/allTutors/${tutor._id}`}>
                <button className="mt-8 w-full cursor-pointer rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-4 font-bold text-slate-950 transition-all duration-300 hover:scale-[1.02]">
                  Book Session
                </button></Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    );
};

export default AvailableTutorsSection;