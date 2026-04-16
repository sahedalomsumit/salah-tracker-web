import React, { useState } from "react";
import { Link } from "react-router-dom";
import RevealOnScroll from "../components/RevealOnScroll";

import { useSEO } from "../hooks/useSEO";

export default function Home() {
  const [showDarkMode, setShowDarkMode] = useState(true);

  useSEO({
    title: "Salah Tracker App",
    description:
      "Salah Tracker – A mindful prayer companion for the modern Muslim. Track your prayers, build consistency, and stay mindful with this 100% ad-free app.",
    canonical: "/",
  });

  const darkScreenshots = [
    `${import.meta.env.BASE_URL}img/salah tracker app - screenshot (1).webp`,
    `${import.meta.env.BASE_URL}img/salah tracker app - screenshot (2).webp`,
    `${import.meta.env.BASE_URL}img/salah tracker app - screenshot (3).webp`,
    `${import.meta.env.BASE_URL}img/salah tracker app - screenshot (4).webp`,
    `${import.meta.env.BASE_URL}img/salah tracker app - screenshot (5).webp`,
  ];

  const lightScreenshots = [
    `${import.meta.env.BASE_URL}img/salah tracker app - light - screenshot (1).webp`,
    `${import.meta.env.BASE_URL}img/salah tracker app - light - screenshot (2).webp`,
    `${import.meta.env.BASE_URL}img/salah tracker app - light - screenshot (3).webp`,
    `${import.meta.env.BASE_URL}img/salah tracker app - light - screenshot (4).webp`,
    `${import.meta.env.BASE_URL}img/salah tracker app - light - screenshot (5).webp`,
  ];

  const currentScreenshots = showDarkMode ? darkScreenshots : lightScreenshots;

  return (
    <>
      <section className="pt-32 pb-20 px-4 max-w-7xl mx-auto min-h-screen">
        {/* Hero Section */}
        <RevealOnScroll>
          <header className="mb-20 text-center flex flex-col items-center justify-center">


            <div className="font-mono text-emerald-500 text-xs tracking-[0.4em] font-bold uppercase mb-6">
              APP_MODULE // SALAH_TRACKER
            </div>

            <div className="flex justify-center mb-8">
              <img
                src={`${import.meta.env.BASE_URL}img/app_icon.png`}
                alt="Salah Tracker Icon"
                className="w-20 h-20 md:w-28 md:h-28 shadow-[0_0_50px_rgba(16,185,129,0.3)] rounded-[1.5rem]"
              />
            </div>

            <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white leading-none mb-6 uppercase">
              Salah <span className="text-emerald-500">Tracker App</span>
            </h1>
            <p className="max-w-3xl text-gray-400 text-xl font-light leading-relaxed">
              We believe your spiritual journey should be sacred and free from
              distractions.{" "}
              <strong className="text-white">Salah Tracker App</strong> is the
              ultimate{" "}
              <strong className="text-emerald-500 border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 rounded uppercase tracking-wider text-sm mx-1">
                100% Ad-Free
              </strong>{" "}
              solution for tracking daily prayers, building consistent habits,
              and achieving personal growth.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <button className="bg-emerald-500 hover:bg-emerald-400 text-gray-900 px-8 py-4 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]">
                Coming Soon to Android
              </button>
              <a
                href="https://github.com/sahedalomsumit/salah-tracker-app"
                target="_blank"
                rel="noreferrer"
                className="bg-transparent border border-white/20 hover:border-emerald-500 hover:bg-emerald-500/5 text-white px-8 py-4 rounded-full font-bold transition-all"
              >
                View on GitHub
              </a>
            </div>
          </header>
        </RevealOnScroll>

        {/* Feature Graphic */}
        <RevealOnScroll>
          <div className="w-full bg-[#0a0a0a] border border-emerald-500/10 rounded-[2rem] md:rounded-[3rem] overflow-hidden relative mb-24 shadow-[0_0_60px_rgba(16,185,129,0.08)] group">
            <img
              src={`${import.meta.env.BASE_URL}img/salah_tracker_feature_graphic.webp`}
              className="w-full h-auto opacity-95 group-hover:scale-[1.02] group-hover:opacity-100 transition-all duration-[1.5s] ease-out"
              alt="Feature Graphic"
            />
          </div>
        </RevealOnScroll>

        {/* App Motivation */}
        <RevealOnScroll>
          <div className="mb-24 text-center max-w-4xl mx-auto bg-gradient-to-br from-white/5 to-[#0a0a0a] border border-white/10 p-10 md:p-16 rounded-[3rem] shadow-2xl">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-8">
              Why Salah Tracker App?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="space-y-4">
                <div className="text-red-500/80 bg-red-500/10 border border-red-500/20 w-12 h-12 rounded-2xl flex items-center justify-center text-xl">
                  🚫
                </div>
                <h3 className="text-xl font-bold text-white">100% Ad-Free</h3>
                <p className="text-gray-400 leading-relaxed font-light">
                  Zero interruptions. No pop-ups, no banners, and no video
                  ads—just you and your spiritual goals.
                </p>
              </div>
              <div className="space-y-4">
                <div className="text-violet-400 bg-violet-500/10 border border-violet-500/20 w-12 h-12 rounded-2xl flex items-center justify-center text-xl">
                  💎
                </div>
                <h3 className="text-xl font-bold text-white">Premium UI</h3>
                <p className="text-gray-400 leading-relaxed font-light">
                  Experience a stunning interface with translucent
                  "glassmorphism" effects, smooth blurs, and premium animations.
                </p>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Screenshots Showcase (Interactive Theme Toggle) */}
        <RevealOnScroll>
          <div className="mb-32">
            <div className="flex flex-col items-center mb-16 gap-6">
              <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter text-center">
                A Beautiful View
              </h2>

              {/* Theme Switcher Toggle */}
              <div className="bg-white/5 border border-white/10 p-1 rounded-full flex items-center gap-2 relative">
                <div
                  className={`absolute inset-y-1 w-[calc(50%-4px)] bg-white/10 border border-white/20 rounded-full transition-all duration-300 ${
                    showDarkMode ? "left-1" : "left-[calc(50%+2px)]"
                  }`}
                ></div>
                <button
                  onClick={() => setShowDarkMode(true)}
                  className={`relative px-6 py-2 rounded-full font-bold text-sm tracking-wide transition-colors ${
                    showDarkMode
                      ? "text-white"
                      : "text-gray-500 hover:text-white"
                  }`}
                >
                  DARK MODE
                </button>
                <button
                  onClick={() => setShowDarkMode(false)}
                  className={`relative px-6 py-2 rounded-full font-bold text-sm tracking-wide transition-colors ${
                    !showDarkMode
                      ? "text-white"
                      : "text-gray-500 hover:text-white"
                  }`}
                >
                  LIGHT MODE
                </button>
              </div>
              <p className="text-gray-400 text-sm font-light italic">
                Click to toggle interface theme
              </p>
            </div>

            {/* 5-Column Grid for Screenshots */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
              {currentScreenshots.map((img, i) => (
                <div
                  key={`${img}-${showDarkMode}`}
                  className={`aspect-[9/19] bg-[#0a0a0a] border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl group transition-all duration-500 animate-[fadeIn_0.5s_ease-out_forwards] delay-[${i * 100}ms]`}
                >
                  <img
                    src={img}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    alt={`App View ${i + 1}`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* Key Features List */}
        <RevealOnScroll>
          <div className="mb-32">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">
                Key Features
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#0a0a0a] border border-white/5 p-8 md:p-10 rounded-3xl hover:border-emerald-500/30 transition-all">
                <h3 className="text-2xl font-bold text-emerald-500 mb-4 flex items-center gap-3">
                  <span className="text-xl">🔹</span> Effortless Daily Logging
                </h3>
                <ul className="text-gray-400 space-y-3 font-light list-disc pl-5">
                  <li>
                    Log Fajr, Dhuhr, Asr, Maghrib, and Isha with a single tap.
                  </li>
                  <li>
                    Quickly classify prayers as On Time, Qaza (late/made up), or
                    Missed.
                  </li>
                  <li>
                    <strong className="text-white">Historical Editing:</strong>{" "}
                    Forgot to log yesterday? Easily go back and update your
                    records.
                  </li>
                </ul>
              </div>

              <div className="bg-[#0a0a0a] border border-white/5 p-8 md:p-10 rounded-3xl hover:border-violet-500/30 transition-all">
                <h3 className="text-2xl font-bold text-violet-400 mb-4 flex items-center gap-3">
                  <span className="text-xl">📊</span> Advanced Analytics
                </h3>
                <ul className="text-gray-400 space-y-3 font-light list-disc pl-5">
                  <li>
                    <strong className="text-white">Dynamic Dashboard:</strong>{" "}
                    Instantly see completion rates for today, this week, and
                    this month.
                  </li>
                  <li>
                    <strong className="text-white">7-Day Overview:</strong> A
                    beautiful stacked bar chart visualizing your habit over the
                    past week.
                  </li>
                  <li>
                    <strong className="text-white">Weekly Distribution:</strong>{" "}
                    Comprehensive pie chart breakdowns of your consistency.
                  </li>
                </ul>
              </div>

              <div className="bg-[#0a0a0a] border border-white/5 p-8 md:p-10 rounded-3xl hover:border-emerald-500/30 transition-all">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-emerald-500 text-xl">🔥</span> Build
                  Your Streak
                </h3>
                <p className="text-gray-400 font-light leading-relaxed">
                  Keep the fire burning! Stay motivated with a Current Streak
                  counter that tracks your consecutive days of perfect prayer
                  logs.
                </p>
              </div>

              <div className="bg-[#0a0a0a] border border-white/5 p-8 md:p-10 rounded-3xl hover:border-violet-500/30 transition-all">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-violet-400 text-xl">🔒</span> Secure
                  Cloud Sync
                </h3>
                <p className="text-gray-400 font-light leading-relaxed">
                  Sign in with Google to securely back up your data to the
                  cloud. Access your logs across all your devices instantly.
                </p>
              </div>

              <div className="bg-[#0a0a0a] border border-white/5 p-8 md:p-10 rounded-3xl hover:border-emerald-500/30 transition-all col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="text-emerald-500 text-xl">🌍</span>{" "}
                    Multilingual & Flexible
                  </h3>
                  <ul className="text-gray-400 space-y-3 font-light list-disc pl-5">
                    <li>Fully localized in English and Bangla (বাংলা).</li>
                    <li>
                      Features Light, Dark, and System theme modes to suit any
                      preference.
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="text-emerald-500 text-xl">🔔</span> Daily
                    Log Reminders
                  </h3>
                  <p className="text-gray-400 font-light">
                    Get a gentle, automated, local notification each night to
                    ensure you never forget to log your daily progress.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Mission & Support (Sadaqah) */}
        <RevealOnScroll>
          <div className="mb-32 bg-gradient-to-br from-emerald-500/10 to-violet-500/5 border border-white/10 p-8 md:p-12 rounded-[3rem] shadow-2xl">
            <div className="text-center mb-10">
              <h2 className="text-4xl font-black text-white mb-4">
                Support Our Mission
              </h2>
              <p className="text-gray-400 font-light leading-relaxed max-w-2xl mx-auto">
                If you benefit from this ad-free app, you may give Sadaqah to
                support it for maintenance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              {/* Stripe Option */}
              <div className="bg-[#0a0a0a] border border-white/5 p-8 rounded-3xl flex flex-col items-center text-center group hover:border-[#635BFF]/50 transition-all">
                <div className="w-16 h-16 bg-[#635BFF]/10 rounded-full flex items-center justify-center mb-6 text-[#635BFF]">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  International (Stripe)
                </h3>
                <p className="text-gray-400 font-light mb-8 flex-grow">
                  Fast and secure international donations via Stripe.
                </p>
                <a
                  href="https://donate.stripe.com/3cI8wO6bWcqd7F46az8AE01"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-[#635BFF] hover:bg-[#524BFF] text-white px-6 py-4 rounded-xl font-bold transition-all flex justify-center items-center gap-2"
                >
                  Donate via Stripe
                </a>
              </div>

              {/* bKash Option */}
              <div className="bg-[#0a0a0a] border border-white/5 p-8 rounded-3xl flex flex-col items-center text-center group hover:border-[#E2136E]/50 transition-all">
                <div className="w-16 h-16 bg-[#E2136E]/10 rounded-full flex items-center justify-center mb-6 text-[#E2136E]">
                  <span className="font-bold text-2xl">b</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Bangladesh (bKash)
                </h3>
                <p className="text-gray-400 font-light mb-6 flex-grow">
                  For Bangladeshi people, you can send Sadaqah via bKash Send
                  Money to the following number:
                </p>
                <div className="w-full bg-white/5 border border-[#E2136E]/30 rounded-xl p-4 flex flex-col items-center justify-center">
                  <span className="text-2xl font-black text-[#E2136E] tracking-widest mb-1">
                    01773615582
                  </span>
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest font-mono">
                    Personal Account
                  </span>
                </div>
              </div>
            </div>

            <p className="text-emerald-500 font-bold italic text-center mt-12 bg-emerald-500/10 py-4 px-6 rounded-2xl mx-auto max-w-xl">
              Take control of your spiritual life today. Download Salah Tracker
              App—the distraction-free, ad-free path to a consistent prayer
              habit.
            </p>
          </div>
        </RevealOnScroll>

        {/* Legal Links */}
        <RevealOnScroll>
          <div className="bg-[#0a0a0a] border border-white/5 p-8 text-center rounded-3xl shadow-[inset_0_0_50px_rgba(16,185,129,0.05)] flex flex-col md:flex-row items-center justify-center gap-6">
            <Link
              to="/privacy-policy"
              className="inline-flex items-center gap-3 text-gray-500 font-mono text-sm hover:text-emerald-500 transition-colors uppercase tracking-widest group"
            >
              <span>Privacy Policy</span>
              <span className="group-hover:translate-x-1 transition-transform">
                &rarr;
              </span>
            </Link>
            <span className="text-white/10 hidden md:inline">|</span>
            <Link
              to="/data-deletion"
              className="inline-flex items-center gap-3 text-gray-500 font-mono text-sm hover:text-red-500 transition-colors uppercase tracking-widest group"
            >
              <span>Data Deletion Request</span>
              <span className="group-hover:translate-x-1 transition-transform">
                &rarr;
              </span>
            </Link>
          </div>
        </RevealOnScroll>
      </section>
    </>
  );
}
