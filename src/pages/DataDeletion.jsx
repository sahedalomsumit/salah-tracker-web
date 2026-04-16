import React from 'react'
import { Link } from 'react-router-dom'
import RevealOnScroll from '../components/RevealOnScroll'

import { useSEO } from '../hooks/useSEO'

export default function DataDeletion() {
  useSEO({
    title: 'Salah Tracker Data Deletion',
    description: 'Instructions and request form for deleting your Salah Tracker account and associated data.',
    canonical: '/data-deletion',
  })
  return (
    <>
      <section className="pt-32 pb-20 px-4 max-w-4xl mx-auto min-h-screen">
        <RevealOnScroll>
          <header className="mb-16 text-left">
            <nav aria-label="breadcrumb" className="text-[10px] font-mono uppercase tracking-widest text-gray-500 mb-8 flex items-center justify-start gap-2">
              <Link to="/" className="hover:text-emerald-500 transition">HOME</Link>
              <span>/</span>
              <span className="text-white uppercase tracking-wider">Data Deletion</span>
            </nav>
            <div className="font-mono text-red-500 text-xs tracking-[0.4em] font-bold uppercase mb-4 text-left">Account & Data Removal</div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase leading-none">
              Data <span className="text-violet-500">Deletion</span>
            </h1>
            <p className="mt-6 text-gray-400 text-lg font-light">
              Last updated April 06, 2026
            </p>
          </header>
        </RevealOnScroll>

        <RevealOnScroll>
          <article className="bg-[#0a0a0a] border border-white/5 p-8 md:p-12 rounded-3xl shadow-2xl overflow-hidden text-gray-300 space-y-12 leading-relaxed font-light">
            
            <section className="border-b border-white/5 pb-8">
              <p className="text-lg">
                This page outlines the data deletion policy and process for the <span className="text-emerald-500 font-medium">Salah Tracker App</span> developed by <span className="text-white font-medium">Sahed Alom Sumit</span>. We respect your privacy and provide a straightforward way for you to request the complete removal of your account and associated data.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-black text-white mb-8 flex items-center gap-4 group">
                <span className="text-emerald-500 font-mono text-xl">01.</span>
                HOW TO REQUEST DELETION
              </h2>
              <p className="mb-6">To request the deletion of your account and all associated data, please follow these steps:</p>
              
              <div className="bg-white/5 border border-white/10 p-8 rounded-2xl space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-[40px]"></div>
                
                <div className="flex gap-4 relative z-10">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center font-bold font-mono text-sm shrink-0">1</div>
                  <div>
                    <h3 className="text-white font-bold mb-1">Send an Email</h3>
                    <p className="text-gray-400 text-sm">Send an email to our support address: <a href="mailto:sahedalomsumit@gmail.com?subject=Data%20Deletion%20Request%20-%20Salah%20Tracker" className="text-emerald-500 hover:underline font-bold">sahedalomsumit@gmail.com</a>.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 relative z-10">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center font-bold font-mono text-sm shrink-0">2</div>
                  <div>
                    <h3 className="text-white font-bold mb-1">Use the Correct Subject Line</h3>
                    <p className="text-gray-400 text-sm">Use <strong className="text-gray-300 font-mono text-[11px] bg-black/50 px-2 py-1 rounded">Data Deletion Request - Salah Tracker</strong> as your email subject.</p>
                  </div>
                </div>

                <div className="flex gap-4 relative z-10">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center font-bold font-mono text-sm shrink-0">3</div>
                  <div>
                    <h3 className="text-white font-bold mb-1">Include Your Account Details</h3>
                    <p className="text-gray-400 text-sm">In the body of the email, clearly state the <strong className="text-violet-400">Google Email Address</strong> you used to sign into the Salah Tracker App.</p>
                  </div>
                </div>
              </div>
              <p className="mt-6 text-sm text-gray-500 italic">
                * We will process your request and permanently delete your data within 7 business days of verifying your request.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-black text-white mb-8 flex items-center gap-4 group">
                <span className="text-emerald-500 font-mono text-xl">02.</span>
                TYPES OF DATA DELETED
              </h2>
              <p className="mb-6">When your deletion process is completed, the following data is permanently purged directly from our Supabase database:</p>
              
              <ul className="grid gap-4">
                <li className="bg-[#111] border border-red-500/20 p-5 rounded-xl flex gap-4">
                  <span className="text-red-500 text-2xl">👤</span>
                  <div>
                    <strong className="text-white block mb-1">Cloud Authentication Data</strong>
                    <span className="text-sm text-gray-400">Your Google Sign-In associations, user ID (UID), and synced email address are permanently removed from our authentication tables.</span>
                  </div>
                </li>
                <li className="bg-[#111] border border-red-500/20 p-5 rounded-xl flex gap-4">
                  <span className="text-red-500 text-2xl">📅</span>
                  <div>
                    <strong className="text-white block mb-1">Prayer Logs & History (prayers table)</strong>
                    <span className="text-sm text-gray-400">All of your synchronized daily prayer entries, timestamps, and calculated statuses (On Time, Qaza, Missed) are permanently erased from the `prayers` database table.</span>
                  </div>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-black text-white mb-8 flex items-center gap-4 group">
                <span className="text-emerald-500 font-mono text-xl">03.</span>
                DATA RETENTION & BACKUPS
              </h2>
              <p className="mb-4">
                <strong className="text-white block mb-2">We do not retain any of your operational data.</strong> Once a deletion request is processed, your records are completely eradicated from the active database.
              </p>
              <p className="text-sm text-gray-400 mt-4 border-l-2 border-emerald-500/50 pl-4 py-2 bg-emerald-500/5 rounded-r-lg">
                <strong className="text-gray-300">Note on Backups:</strong> As part of our standard data security practices, our hosting provider (Supabase) maintains encrypted, automated backups of the database for up to 30 days. Your deleted data may remain in these encrypted offline backups for a maximum of 30 days before being automatically overwritten.
              </p>
            </section>

            <footer className="mt-32 pt-16 border-t border-white/5 text-center">
              <div className="text-emerald-500 font-mono text-[10px] tracking-[0.5em] uppercase mb-8">Generated_for_Salah_Tracker</div>
              <Link to="/" className="group inline-flex items-center gap-3 bg-white/5 px-8 py-4 rounded-full border border-white/10 hover:bg-emerald-500/10 hover:border-emerald-500/30 transition-all">
                <span className="text-gray-400 group-hover:text-emerald-500 transition-colors">&larr;</span>
                <span className="text-xs font-bold uppercase tracking-widest text-white group-hover:text-emerald-500 transition-colors">Back to Home</span>
              </Link>
            </footer>
          </article>
        </RevealOnScroll>
      </section>

    </>
  )
}
