'use client'

import Link from 'next/link';
import React, { useState } from 'react';
import { authClient } from "@/lib/auth-client"
import { useRouter } from "next/navigation";
import MyNavLinks from './MyNavLinks';
import DropdownFunc from './DropdownFunc';
import ThemeToggle from '../theme/ThemeToggle';
import { Menu, X } from 'lucide-react';

const Navbar = () => {

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { data: session } = authClient.useSession()
  const user = session?.user;

  const router = useRouter();

  const handleLogoutButton = async () => {

    setDropdownOpen(false)

    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/auth/login");
        },
      },
    });
  }

  return (

    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07111f]/70 backdrop-blur-2xl">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6 lg:px-8">

        {/* logo */}
        <div className="flex items-center gap-3">

          <div className="relative flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 shadow-[0_0_35px_rgba(34,211,238,0.35)]">

            <span className="text-xl md:text-2xl font-black text-slate-950">
              M
            </span>

            <div className="absolute inset-0 rounded-2xl border border-white/20"></div>
          </div>

          <div>

            <h1 className="text-xl md:text-2xl font-black tracking-tight text-white">
              MediQueue
            </h1>

            <p className="hidden sm:block text-[10px] md:text-xs tracking-[0.3em] text-cyan-300 uppercase">
              Smart Tutor Booking
            </p>

          </div>
        </div>

        {/* desktop nav */}
        <nav className="hidden lg:flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-2xl">

          <MyNavLinks user={user} />

        </nav>

        {/* right side */}
        <div className="flex items-center gap-2 md:gap-4">

          <ThemeToggle />

          {
            user ?

              <>
                <DropdownFunc
                  handleLogoutButton={handleLogoutButton}
                  user={user}
                />
              </>

              :

              <>
                <Link href={"/auth/login"}>

                  <button className="hidden md:block cursor-pointer rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm font-medium text-cyan-300 transition-all duration-300 hover:bg-cyan-400/20">

                    Login

                  </button>

                </Link>

                <Link href={'/auth/register'}>

                  <button className="rounded-full cursor-pointer bg-gradient-to-r from-cyan-400 to-blue-500 px-4 py-2 md:px-6 md:py-3 text-xs md:text-sm font-bold text-slate-950 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(34,211,238,0.45)]">

                    Register

                  </button>

                </Link>
              </>
          }

          {/* mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white"
          >

            {
              mobileMenuOpen
                ? <X size={28} />
                : <Menu size={28} />
            }

          </button>

        </div>
      </div>

      {/* mobile menu */}
      {
        mobileMenuOpen && (

          <div className="lg:hidden border-t border-white/10 bg-[#07111f]/95 px-4 py-5">

            <div className="flex flex-col gap-4">

              <MyNavLinks user={user} />

              {
                !user && (
                  <div className="flex flex-col gap-3 pt-4">

                    <Link href={"/auth/login"}>

                      <button className="w-full rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-3 text-sm font-medium text-cyan-300">

                        Login

                      </button>

                    </Link>

                    <Link href={"/auth/register"}>

                      <button className="w-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-3 text-sm font-bold text-slate-950">

                        Register

                      </button>

                    </Link>

                  </div>
                )
              }

            </div>

          </div>
        )
      }

    </header>
  );
};

export default Navbar;
