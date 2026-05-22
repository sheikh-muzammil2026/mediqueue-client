"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";

const RegisterPage = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // স্পিনার বা ডিজেবল স্টেটের জন্য

  // ================= REGISTER SUBMIT =================
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());
    const password = user.password;

    // ================= PASSWORD VALIDATION =================
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasMinLength = password.length >= 6;

    if (!hasUppercase || !hasLowercase || !hasMinLength) {
      const msg =
        "Password must have uppercase, lowercase and be at least 6 characters";
      setError(msg);
      toast.error(msg);
      return;
    }

    setError("");
    setLoading(true);

    // ================= SIGN UP WITH TRY-CATCH =================
    try {
      const response = await authClient.signUp.email({
        email: user.email,
        password: user.password,
        name: user.name,
        image: user.image || "", // ইমেজ না দিলে যেন ক্র্যাশ না করে ফাঁকা স্ট্রিং পাঠানো
      });

      // Better-Auth সফল হলে response-এর ভেতর data বা ব্যবহারকারীর তথ্য থাকে
      if (response) {
        toast.success("Registration successful");
        router.push("/auth/login"); // রিকোয়ারমেন্ট অনুযায়ী লগইন পেজে রিডাইরেক্ট
      }
    } catch (err) {
      // কোনো এরর আসলে তা টোস্টে দেখানো হচ্ছে
      toast.error(err?.message || "Something went wrong during registration");
    } finally {
      setLoading(false);
    }
  };

  // ================= GOOGLE LOGIN =================
  const handleGoogleLogin = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/", // রিকোয়ারমেন্ট অনুযায়ী গুগলে লগইন শেষে সরাসরি হোম পেজে যাবে
      });
    } catch (err) {
      toast.error(err?.message || "Google login failed");
    }
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#020817] px-6 py-20">
      <div className="absolute bottom-[-120px] right-[-120px] h-[320px] w-[320px] rounded-full bg-blue-500/20 blur-3xl"></div>

      <div className="relative z-10 w-full max-w-md overflow-hidden rounded-[36px] border border-white/10 bg-white/5 p-8 backdrop-blur-3xl md:p-10">
        
        {/* HEADER */}
        <div className="mb-8">
          <h1 className="text-4xl font-black text-white">Join MediQueue</h1>
          <p className="mt-4 text-slate-400">
            Create your account and start booking tutors.
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={onSubmit} className="space-y-5">

          {/* Name */}
          <div>
            <label className="mb-3 block text-sm font-medium text-slate-300">
              Full Name
            </label>
            <input
              required
              name="name"
              type="text"
              placeholder="Enter your full name"
              className="w-full rounded-2xl border border-white/10 bg-[#091524] px-5 py-4 text-white outline-none focus:border-cyan-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="mb-3 block text-sm font-medium text-slate-300">
              Email Address
            </label>
            <input
              required
              name="email"
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-2xl border border-white/10 bg-[#091524] px-5 py-4 text-white outline-none focus:border-cyan-500"
            />
          </div>

          {/* Photo */}
          <div>
            <label className="mb-3 block text-sm font-medium text-slate-300">
              Photo URL
            </label>
            <input
              name="image"
              type="url"
              placeholder="Paste your photo url"
              className="w-full rounded-2xl border border-white/10 bg-[#091524] px-5 py-4 text-white outline-none focus:border-cyan-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="mb-3 block text-sm font-medium text-slate-300">
              Password
            </label>
            <input
              required
              name="password"
              type="password"
              placeholder="Create strong password"
              className="w-full rounded-2xl border border-white/10 bg-[#091524] px-5 py-4 text-white outline-none focus:border-cyan-500"
            />

            {/* Error */}
            {error && (
              <p className="mt-2 text-sm font-medium text-red-400">
                {error}
              </p>
            )}
          </div>

          {/* Submit Button with Loading State */}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-2xl cursor-pointer bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-4 text-lg font-bold text-slate-950 transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        {/* Divider */}
        <div className="my-8 flex items-center gap-4">
          <div className="h-px flex-1 bg-white/10"></div>
          <p className="text-sm text-slate-500">OR</p>
          <div className="h-px flex-1 bg-white/10"></div>
        </div>

        {/* GOOGLE LOGIN */}
        <button
          onClick={handleGoogleLogin}
          disabled={loading}
          className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 font-semibold text-white transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-50"
        >
         <FcGoogle /> Continue with Google
        </button>
      </div>
    </section>
  );
};

export default RegisterPage;