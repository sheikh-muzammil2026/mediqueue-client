import React from 'react';

const WhyChooseUsSection = () => {
      const features = [
    {
      title: 'Verified Tutors',
      description:
        'Every tutor is carefully verified to ensure high-quality learning experiences for students.',
    },
    {
      title: 'Flexible Scheduling',
      description:
        'Book sessions according to your preferred time without complicated scheduling conflicts.',
    },
    {
      title: 'Smart Learning Experience',
      description:
        'Enjoy a smooth and organized tutor booking platform designed for modern learners.',
    },
  ]
    return (
          <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl rounded-[40px] border border-white/10 bg-white/5 p-10 backdrop-blur-3xl md:p-16">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.4em] text-cyan-300">
              Why Choose Us
            </p>

            <h2 className="text-4xl font-black leading-tight text-white md:text-5xl">
              Designed For Modern
              <br />
              Learning Experiences
            </h2>
          </div>

          <div className="space-y-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-[28px] border border-white/10 bg-[#07111f]/70 p-8"
              >
                <h3 className="text-2xl font-bold text-white">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    );
};

export default WhyChooseUsSection;