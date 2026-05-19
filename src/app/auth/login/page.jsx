'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';
import { toast } from 'react-toastify';

const LoginPage = () => {

  const onSubmit = async(e)=> {
     e.preventDefault();
    const formData = new FormData(e.currentTarget)
    const user = Object.fromEntries(formData.entries());
    // console.log(user)

    const { data, error } = await authClient.signIn.email({
        email: user.email, 
        password: user.password 
       
    }, );

    if(data){
      toast.success("login succesfull")
      redirect("/")
    }
    if(error){
      toast.error("Error")
    }

  }


    return (
          <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#020817] px-6 py-20">
      <div className="absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-cyan-500/20 blur-3xl"></div>

      <div className="relative z-10 w-full max-w-md overflow-hidden rounded-[36px] border border-white/10 bg-white/5 p-8 backdrop-blur-3xl md:p-10">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
            Welcome Back
          </div>

          <h1 className="mt-6 text-4xl font-black leading-tight text-white md:text-5xl">
            Login To
            <br />
            MediQueue
          </h1>

          <p className="mt-5 leading-8 text-slate-400">
            Access your booked sessions, tutors, and personalized learning
            dashboard.
          </p>
        </div>

        <form onSubmit={onSubmit} className="space-y-6">
          <div>
            <label className="mb-3 block text-sm font-medium text-slate-300">
              Email Address
            </label>

            <input
              type="email"
              name='email'
              placeholder="Enter your email"
              className="w-full rounded-2xl border border-white/10 bg-[#091524] px-5 py-4 text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-cyan-400/40 focus:bg-cyan-400/5"
            />
          </div>

          <div>
            <div className="mb-3 flex items-center justify-between">
              <label className="text-sm font-medium text-slate-300">
                Password
              </label>

              <button
                type="button"
                className="text-sm text-cyan-300 transition hover:text-cyan-200"
              >
                Forgot Password?
              </button>
            </div>

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full rounded-2xl border border-white/10 bg-[#091524] px-5 py-4 text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-cyan-400/40 focus:bg-cyan-400/5"
            />
          </div>

          <button type='submit' className="w-full rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-4 text-lg font-bold text-slate-950 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]">
            Login Now
          </button>
        </form>

        <div className="my-8 flex items-center gap-4">
          <div className="h-px flex-1 bg-white/10"></div>
          <p className="text-sm text-slate-500">OR CONTINUE WITH</p>
          <div className="h-px flex-1 bg-white/10"></div>
        </div>

        <button className="flex w-full items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 font-semibold text-white transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            className="h-6 w-6"
          >
            <path
              fill="#FFC107"
              d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.7 1.1 7.8 3l5.7-5.7C34.1 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.3-.4-3.5z"
            />
          </svg>

          Continue with Google
        </button>

        <p className="mt-8 text-center text-slate-400">
          Don’t have an account?
         <Link href={"/auth/register"}> <button className="ml-2 font-semibold text-cyan-300 transition hover:text-cyan-200">
            Register
          </button></Link>
        </p>
      </div>
    </section>
    );
};

export default LoginPage;