import Image from 'next/image';
import React from 'react';

const AvailableTutorsSection = () => {
const tutors = [
  {
    id: 1,
    name: 'Ariana Rahman',
    subject: 'Mathematics',
    fee: '$20/hr',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Nafis Ahmed',
    subject: 'Physics',
    fee: '$18/hr',
    image:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Mehjabin Noor',
    subject: 'English',
    fee: '$16/hr',
    image:
      'https://images.unsplash.com/photo-1504257432389-52343af06ae3?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Siam Hossain',
    subject: 'Chemistry',
    fee: '$22/hr',
    image:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 5,
    name: 'Tasnuba Islam',
    subject: 'Biology',
    fee: '$19/hr',
    image:
      'https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 6,
    name: 'Rayhan Kabir',
    subject: 'Programming',
    fee: '$25/hr',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop',
  },
]

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
              key={tutor.id}
              className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/30"
            >
              <div className="relative overflow-hidden">
                <Image
                  width={400}
                  height={320}
                  src={tutor.image}
                  alt={tutor.name}
                  className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-110"
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

                <button className="mt-8 w-full rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-4 font-bold text-slate-950 transition-all duration-300 hover:scale-[1.02]">
                  Book Session
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    );
};

export default AvailableTutorsSection;