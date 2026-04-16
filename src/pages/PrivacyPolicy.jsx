import React from "react";
import { Link } from "react-router-dom";
import RevealOnScroll from "../components/RevealOnScroll";

import { useSEO } from "../hooks/useSEO";

export default function PrivacyPolicy() {
  useSEO({
    title: "Salah Tracker Privacy Policy",
    description:
      "Privacy policy for the Salah Tracker application, outlining how we handle your data with respect and transparency.",
    canonical: "/privacy-policy",
  });
  return (
    <>
      <section className="pt-32 pb-20 px-4 max-w-4xl mx-auto min-h-screen">
        <RevealOnScroll>
          <header className="mb-16 text-left">
            <nav
              aria-label="breadcrumb"
              className="text-[10px] font-mono uppercase tracking-widest text-gray-500 mb-8 flex items-center justify-start gap-2"
            >
              <Link to="/" className="hover:text-emerald-500 transition">
                HOME
              </Link>
              <span>/</span>
              <span className="text-white uppercase tracking-wider">
                Privacy Policy
              </span>
            </nav>
            <div className="font-mono text-emerald-500 text-xs tracking-[0.4em] font-bold uppercase mb-4 text-left">
              Legal_Document
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase leading-none">
              Privacy <span className="text-violet-500">Policy</span>
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
                This Privacy Notice for{" "}
                <span className="text-white font-medium">Sahed Alom Sumit</span>{" "}
                ("we," "us," or "our"), describes how and why we might access,
                collect, store, use, and/or share ("process") your personal
                information when you use our services ("Services"), including
                when you:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-400">
                <li>
                  Download and use our mobile application{" "}
                  <span className="text-emerald-500 font-medium">
                    (Salah Tracker App)
                  </span>
                  , or any other application of ours that links to this Privacy
                  Notice
                </li>
                <li>
                  Engage with us in other related ways, including any marketing
                  or events
                </li>
              </ul>
              <p className="mt-6 italic border-l-2 border-emerald-500/30 pl-4 py-2 bg-emerald-500/5 rounded-r-lg">
                Questions or concerns? Reading this Privacy Notice will help you
                understand your privacy rights and choices. We are responsible
                for making decisions about how your personal information is
                processed. If you do not agree with our policies and practices,
                please do not use our Services. If you still have any questions
                or concerns, please contact us at{" "}
                <a
                  href="mailto:sahedalomsumit@gmail.com"
                  className="text-emerald-500 hover:underline"
                >
                  sahedalomsumit@gmail.com
                </a>
                .
              </p>
            </section>

            <section className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight flex items-center gap-3">
                <span className="w-2 h-8 bg-violet-500 rounded-full inline-block"></span>
                Summary of Key Points
              </h2>
              <div className="space-y-6 text-sm md:text-base leading-loose">
                <p>
                  <strong className="text-violet-400 font-mono uppercase text-xs">
                    Personal Info:
                  </strong>{" "}
                  When you visit, use, or navigate our Services, we may process
                  personal information depending on how you interact with us and
                  the Services, the choices you make, and the products and
                  features you use.
                </p>
                <p>
                  <strong className="text-violet-400 font-mono uppercase text-xs">
                    Sensitive Info:
                  </strong>{" "}
                  Some of the information may be considered "special" or
                  "sensitive" in certain jurisdictions. We do not process
                  sensitive personal information.
                </p>
                <p>
                  <strong className="text-violet-400 font-mono uppercase text-xs">
                    Third Parties:
                  </strong>{" "}
                  We may collect information from public databases, marketing
                  partners, social media platforms, and other outside sources.
                </p>
                <p>
                  <strong className="text-violet-400 font-mono uppercase text-xs">
                    How we process:
                  </strong>{" "}
                  We process your information to provide, improve, and
                  administer our Services, communicate with you, for security
                  and fraud prevention, and to comply with law. We process your
                  information only when we have a valid legal reason to do so.
                </p>
                <p>
                  <strong className="text-violet-400 font-mono uppercase text-xs">
                    Sharing:
                  </strong>{" "}
                  We may share information in specific situations and with
                  specific third parties.
                </p>
                <p>
                  <strong className="text-violet-400 font-mono uppercase text-xs">
                    Security:
                  </strong>{" "}
                  We have adequate organizational and technical processes and
                  procedures in place to protect your personal information.
                  However, no electronic transmission can be guaranteed to be
                  100% secure.
                </p>
                <p>
                  <strong className="text-violet-400 font-mono uppercase text-xs">
                    Your Rights:
                  </strong>{" "}
                  Depending on where you are located geographically, the
                  applicable privacy law may mean you have certain rights
                  regarding your personal information.
                </p>
              </div>
            </section>

            <nav className="border-y border-white/5 py-10">
              <h2 className="text-xl font-bold mb-8 uppercase tracking-[0.2em] text-emerald-500 flex items-center gap-2">
                Table of Contents
              </h2>
              <ol className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 text-[11px] text-gray-400 font-mono uppercase">
                {[
                  "What information do we collect?",
                  "How do we process your information?",
                  "Legal bases for processing",
                  "When/With whom we share info",
                  "Cookies and tracking tech",
                  "How we handle social logins",
                  "How long we keep your info",
                  "How we keep your info safe",
                  "What are your privacy rights?",
                  "Controls for do-not-track",
                  "US state specific rights",
                  "Other regions specific rights",
                  "Updates to this notice",
                  "How can you contact us?",
                  "Review/Update/Delete data",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="hover:text-emerald-500 transition-colors flex gap-3 border-b border-white/5 pb-2 cursor-pointer group"
                  >
                    <span className="text-emerald-500/50 group-hover:text-emerald-500 transition-colors">
                      {(idx + 1).toString().padStart(2, "0")}.
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="space-y-24">
              {/* 1. What Information */}
              <section id="section-1">
                <h2 className="text-3xl font-black text-white mb-8 flex items-center gap-4 group">
                  <span className="text-emerald-500 font-mono text-xl group-hover:translate-x-1 transition-transform inline-block">
                    01.
                  </span>
                  WHAT INFORMATION DO WE COLLECT?
                </h2>
                <div className="space-y-10">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-violet-400">
                      Personal information you disclose to us
                    </h3>
                    <p className="font-mono text-[10px] text-emerald-500 uppercase tracking-widest bg-emerald-500/5 px-3 py-1 rounded inline-block">
                      In Short: We collect personal information that you provide
                      to us.
                    </p>
                    <p>
                      We collect personal information that you voluntarily
                      provide to us when you register on the Services, express
                      an interest in obtaining information about us or our
                      products and Services, when you participate in activities
                      on the Services, or otherwise when you contact us.
                    </p>
                    <p>
                      <span className="text-white font-medium">
                        Personal Information Provided by You:
                      </span>{" "}
                      The personal information that we collect depends on the
                      context of your interactions with us and the Services, the
                      choices you make, and the products and features you use.
                      The personal information we collect may include the
                      following:
                    </p>
                    <ul className="list-disc pl-10 space-y-2 text-gray-400 italic">
                      <li>email addresses</li>
                      <li>names</li>
                    </ul>
                    <p>
                      <span className="text-white font-medium">
                        Sensitive Information:
                      </span>{" "}
                      We do not process sensitive information.
                    </p>
                    <p>
                      <span className="text-white font-medium">
                        Social Media Login Data:
                      </span>{" "}
                      We may provide you with the option to register with us
                      using your existing social media account details, like
                      your Facebook, X, or other social media account. If you
                      choose to register in this way, we will collect certain
                      profile information about you from the social media
                      provider.
                    </p>
                    <p>
                      <span className="text-white font-medium">
                        Application Data:
                      </span>{" "}
                      If you use our application(s), we also may collect
                      information if you choose to provide us with access or
                      permission for{" "}
                      <span className="text-white">Push Notifications</span>.
                      This information is primarily needed to maintain the
                      security and operation of our application(s).
                    </p>
                  </div>

                  <div className="space-y-4 border-t border-white/5 pt-8">
                    <h3 className="text-xl font-bold text-violet-400">
                      Information automatically collected
                    </h3>
                    <p className="font-mono text-[10px] text-emerald-500 uppercase tracking-widest bg-emerald-500/5 px-3 py-1 rounded inline-block">
                      In Short: Some information is collected automatically when
                      you visit our Services.
                    </p>
                    <p>
                      We automatically collect certain information when you
                      visit, use, or navigate the Services. This information
                      does not reveal your specific identity but may include
                      device and usage information, such as your IP address,
                      browser and device characteristics, operating system,
                      language preferences, referring URLs, device name,
                      country, location, and other technical information.
                    </p>
                    <div className="space-y-4 text-gray-400 bg-white/5 p-6 rounded-xl border border-white/5">
                      <p>
                        <span className="text-white font-bold uppercase text-[10px] tracking-widest">
                          Log and Usage Data:
                        </span>{" "}
                        Diagnostic, usage, and performance information our
                        servers automatically collect when you access or use our
                        Services.
                      </p>
                      <p>
                        <span className="text-white font-bold uppercase text-[10px] tracking-widest">
                          Google API:
                        </span>{" "}
                        Our use of information received from Google APIs will
                        adhere to Google API Services User Data Policy,
                        including the Limited Use requirements.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 border-t border-white/5 pt-8">
                    <h3 className="text-xl font-bold text-violet-400">
                      Information collected from other sources
                    </h3>
                    <p className="font-mono text-[10px] text-emerald-500 uppercase tracking-widest bg-emerald-500/5 px-3 py-1 rounded inline-block">
                      In Short: We may collect limited data from public
                      databases and partners.
                    </p>
                    <p>
                      We may obtain information about you from other sources,
                      such as public databases, joint marketing partners,
                      affiliate programs, and social media platforms. If you
                      interact with us on social media (Facebook/X), we receive
                      personal information like your name, email, and gender.
                    </p>
                  </div>
                </div>
              </section>

              {/* 2. How we Process */}
              <section id="section-2">
                <h2 className="text-3xl font-black text-white mb-8 flex items-center gap-4 group">
                  <span className="text-emerald-500 font-mono text-xl group-hover:translate-x-1 transition-transform inline-block">
                    02.
                  </span>
                  HOW DO WE PROCESS YOUR INFORMATION?
                </h2>
                <p className="font-mono text-[10px] text-emerald-500 uppercase tracking-widest bg-emerald-500/5 px-3 py-1 rounded inline-block mb-6">
                  In Short: To provide, improve, and administer our Services.
                </p>
                <p className="mb-4">
                  We process your personal information for a variety of reasons,
                  depending on how you interact with our Services, including:
                </p>
                <ul className="list-disc pl-10 space-y-4">
                  <li>
                    <span className="text-white font-medium">
                      To facilitate account creation and authentication and
                      otherwise manage user accounts.
                    </span>{" "}
                    We may process your information so you can create and log in
                    to your account, as well as keep your account in working
                    order.
                  </li>
                  <li>
                    <span className="text-white font-medium">
                      To save or protect an individual's vital interest.
                    </span>{" "}
                    We may process your information when necessary to save or
                    protect an individual’s vital interest, such as to prevent
                    harm.
                  </li>
                </ul>
              </section>

              {/* 3. Legal Bases */}
              <section id="section-3">
                <h2 className="text-3xl font-black text-white mb-8 flex items-center gap-4 group">
                  <span className="text-emerald-500 font-mono text-xl group-hover:translate-x-1 transition-transform inline-block">
                    03.
                  </span>
                  LEGAL BASES FOR PROCESSING
                </h2>
                <p className="font-mono text-[10px] text-emerald-500 uppercase tracking-widest bg-emerald-500/5 px-3 py-1 rounded inline-block mb-6">
                  In Short: Only when necessary and with a valid legal reason.
                </p>
                <div className="space-y-6">
                  <div className="bg-white/5 p-6 rounded-xl border-l-2 border-emerald-500">
                    <h4 className="text-white font-bold mb-2">
                      Location: EU or UK
                    </h4>
                    <p className="text-sm">
                      We rely on:{" "}
                      <span className="text-emerald-400">Consent</span>,{" "}
                      <span className="text-emerald-400">
                        Legal Obligations
                      </span>
                      , and{" "}
                      <span className="text-emerald-400">Vital Interests</span>.
                    </p>
                  </div>
                  <div className="bg-white/5 p-6 rounded-xl border-l-2 border-emerald-500">
                    <h4 className="text-white font-bold mb-2">
                      Location: Canada
                    </h4>
                    <p className="text-sm">
                      We process with express or implied consent. In exceptional
                      cases (legal investigations, business transactions), we
                      may process without consent as permitted by law.
                    </p>
                  </div>
                </div>
              </section>

              {/* 4. When and With Whom */}
              <section id="section-4">
                <h2 className="text-3xl font-black text-white mb-8 flex items-center gap-4 group">
                  <span className="text-emerald-500 font-mono text-xl group-hover:translate-x-1 transition-transform inline-block">
                    04.
                  </span>
                  WHEN AND WITH WHOM DO WE SHARE INFO?
                </h2>
                <p className="font-mono text-[10px] text-emerald-500 uppercase tracking-widest bg-emerald-500/5 px-3 py-1 rounded inline-block mb-6">
                  In Short: In specific situations described in this section.
                </p>
                <p>
                  <span className="text-white font-medium">
                    Business Transfers:
                  </span>{" "}
                  We may share or transfer your information in connection with,
                  or during negotiations of, any merger, sale of company assets,
                  financing, or acquisition of all or a portion of our business
                  to another company.
                </p>
              </section>

              {/* 5. Cookies */}
              <section id="section-5">
                <h2 className="text-3xl font-black text-white mb-8 flex items-center gap-4 group">
                  <span className="text-emerald-500 font-mono text-xl group-hover:translate-x-1 transition-transform inline-block">
                    05.
                  </span>
                  COOKIES AND TRACKING TECHNOLOGIES
                </h2>
                <p className="font-mono text-[10px] text-emerald-500 uppercase tracking-widest bg-emerald-500/5 px-3 py-1 rounded inline-block mb-6">
                  In Short: We may use cookies to collect and store your
                  information.
                </p>
                <p>
                  We use cookies and similar tracking technologies (web
                  beacons/pixels) to gather information. You can opt out via
                  your browser settings or as described in our Cookie Notice. We
                  use <span className="text-white">Google Analytics</span> to
                  track and analyze service use. Opt-out:{" "}
                  <a
                    href="https://tools.google.com/dlpage/gaoptout"
                    className="text-emerald-500 hover:underline"
                  >
                    tools.google.com/dlpage/gaoptout
                  </a>
                  .
                </p>
              </section>

              {/* 6. Social Logins */}
              <section id="section-6">
                <h2 className="text-3xl font-black text-white mb-8 flex items-center gap-4 group">
                  <span className="text-emerald-500 font-mono text-xl group-hover:translate-x-1 transition-transform inline-block">
                    06.
                  </span>
                  HOW DO WE HANDLE YOUR SOCIAL LOGINS?
                </h2>
                <p className="font-mono text-[10px] text-emerald-500 uppercase tracking-widest bg-emerald-500/5 px-3 py-1 rounded inline-block mb-6">
                  In Short: Access to certain profile details (Name, Email,
                  Friends list).
                </p>
                <p>
                  Where you choose to log in via social media (Facebook/X), we
                  will receive certain profile information about you. We will
                  use the information we receive only for the purposes that are
                  described in this Privacy Notice. We recommend reviewing the
                  third-party providers' privacy notices.
                </p>
              </section>

              {/* 7. Retention */}
              <section id="section-7">
                <h2 className="text-3xl font-black text-white mb-8 flex items-center gap-4 group">
                  <span className="text-emerald-500 font-mono text-xl group-hover:translate-x-1 transition-transform inline-block">
                    07.
                  </span>
                  HOW LONG DO WE KEEP YOUR INFORMATION?
                </h2>
                <p className="font-mono text-[10px] text-emerald-500 uppercase tracking-widest bg-emerald-500/5 px-3 py-1 rounded inline-block mb-6">
                  In Short: As long as necessary for the purposes in this
                  notice.
                </p>
                <p>
                  We keep your info for as long as you have an account or as
                  required for law/tax/accounting purposes. When no longer
                  needed, we will either delete or anonymize such information.
                </p>
              </section>

              {/* 8. Security */}
              <section id="section-8">
                <h2 className="text-3xl font-black text-white mb-8 flex items-center gap-4 group">
                  <span className="text-emerald-500 font-mono text-xl group-hover:translate-x-1 transition-transform inline-block">
                    08.
                  </span>
                  HOW DO WE KEEP YOUR INFORMATION SAFE?
                </h2>
                <p className="font-mono text-[10px] text-emerald-500 uppercase tracking-widest bg-emerald-500/5 px-3 py-1 rounded inline-block mb-6">
                  In Short: Organizational and technical security measures.
                </p>
                <p>
                  We aim to protect your personal information, but no electronic
                  transmission over the internet or information storage
                  technology can be guaranteed to be 100% secure. Although we
                  will do our best to protect your personal information,
                  transmission of personal information to and from our Services
                  is at your own risk.
                </p>
              </section>

              {/* 9. Privacy Rights */}
              <section id="section-9">
                <h2 className="text-3xl font-black text-white mb-8 flex items-center gap-4 group">
                  <span className="text-emerald-500 font-mono text-xl group-hover:translate-x-1 transition-transform inline-block">
                    09.
                  </span>
                  WHAT ARE YOUR PRIVACY RIGHTS?
                </h2>
                <p className="font-mono text-[10px] text-emerald-500 uppercase tracking-widest bg-emerald-500/5 px-3 py-1 rounded inline-block mb-6">
                  In Short: Greater access and control (EEA, UK, Switzerland,
                  Canada).
                </p>
                <p>
                  You have rights to (i) request access/copy, (ii)
                  rectification/erasure; (iii) restrict processing; (iv) data
                  portability; and (v) not be subject to automated
                  decision-making. You can withdraw consent at any time. For{" "}
                  <span className="text-white">Account Information</span>: Log
                  in to your settings or contact us to terminate/deactivate your
                  account.
                </p>
              </section>

              {/* 10. DNT */}
              <section id="section-10">
                <h2 className="text-3xl font-black text-white mb-8 flex items-center gap-4 group">
                  <span className="text-emerald-500 font-mono text-xl group-hover:translate-x-1 transition-transform inline-block">
                    10.
                  </span>
                  CONTROLS FOR DO-NOT-TRACK FEATURES
                </h2>
                <p>
                  Most web browsers include a Do-Not-Track ("DNT") feature. At
                  this stage, we do not currently respond to DNT browser signals
                  as no uniform technology standard has been finalized.
                </p>
              </section>

              {/* 11. US Residents */}
              <section id="section-11">
                <h2 className="text-3xl font-black text-white mb-8 flex items-center gap-4 group">
                  <span className="text-emerald-500 font-mono text-xl group-hover:translate-x-1 transition-transform inline-block">
                    11.
                  </span>
                  SPECIFIC US STATE PRIVACY RIGHTS
                </h2>
                <p className="mb-6">
                  Special rights for residents of California, Colorado,
                  Connecticut, Delaware, Florida, Indiana, Iowa, Kentucky,
                  Maryland, Minnesota, Montana, Nebraska, New Hampshire, New
                  Jersey, Oregon, Rhode Island, Tennessee, Texas, Utah, or
                  Virginia.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse border border-white/10 italic text-gray-400">
                    <thead>
                      <tr className="bg-white/5 text-white font-mono uppercase tracking-widest">
                        <th className="p-4 border border-white/10">Category</th>
                        <th className="p-4 border border-white/10">
                          Collected
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        "Identifiers",
                        "California Customer Records Statute",
                        "Protected classification characteristics",
                        "Commercial information",
                        "Biometric information",
                        "Internet activity",
                        "Geolocation data",
                        "Audio/Electronic info",
                        "Employment info",
                        "Education info",
                        "Inferences",
                        "Sensitive personal information",
                      ].map((cat, i) => (
                        <tr key={i}>
                          <td className="p-4 border border-white/10">{cat}</td>
                          <td className="p-4 border border-white/10">NO</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-8">
                  We have not disclosed, sold, or shared any personal
                  information to third parties in the preceding 12 months. Your
                  rights include the{" "}
                  <span className="text-emerald-500 font-mono">
                    Right to know
                  </span>
                  ,{" "}
                  <span className="text-emerald-500 font-mono">
                    Right to access
                  </span>
                  ,{" "}
                  <span className="text-emerald-500 font-mono">
                    Right to delete
                  </span>
                  , and{" "}
                  <span className="text-emerald-500 font-mono">
                    Right to non-discrimination
                  </span>
                  .
                </p>
              </section>

              {/* 12. Other Regions */}
              <section id="section-12">
                <h2 className="text-3xl font-black text-white mb-8 flex items-center gap-4 group">
                  <span className="text-emerald-500 font-mono text-xl group-hover:translate-x-1 transition-transform inline-block">
                    12.
                  </span>
                  OTHER REGIONS PRIVACY RIGHTS
                </h2>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-white font-bold mb-2">
                      Australia and New Zealand
                    </h4>
                    <p className="text-sm">
                      We process info under Australia's Privacy Act 1988 and New
                      Zealand's Privacy Act 2020. You have the right to request
                      access/correction or submit complaints to the
                      Commissioner.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-2">
                      Republic of South Africa
                    </h4>
                    <p className="text-sm">
                      You have the right to request access/correction.
                      Complaints can be submitted to the Information Regulator
                      (South Africa).
                    </p>
                  </div>
                </div>
              </section>

              {/* 13. Updates */}
              <section id="section-13">
                <h2 className="text-3xl font-black text-white mb-8 flex items-center gap-4 group">
                  <span className="text-emerald-500 font-mono text-xl group-hover:translate-x-1 transition-transform inline-block">
                    13.
                  </span>
                  DO WE MAKE UPDATES TO THIS NOTICE?
                </h2>
                <p className="font-mono text-[10px] text-emerald-500 uppercase tracking-widest bg-emerald-500/5 px-3 py-1 rounded inline-block mb-6">
                  In Short: Yes, we will update this notice as necessary.
                </p>
                <p>
                  The updated version will be indicated by an updated "Revised"
                  date. We encourage you to review this notice frequently.
                </p>
              </section>

              {/* 14. Contact section style matches theme */}
              <section
                id="section-14"
                className="bg-emerald-500/5 border border-emerald-500/20 p-10 rounded-3xl shadow-[0_0_50px_rgba(16,185,129,0.05)]"
              >
                <h2 className="text-3xl font-black text-white mb-8 flex items-center gap-4">
                  <span className="text-emerald-500 font-mono text-xl">
                    14.
                  </span>
                  CONTACT US
                </h2>
                <p className="mb-6">
                  If you have questions or comments about this notice, you may
                  email us at{" "}
                  <a
                    href="mailto:sahedalomsumit@gmail.com"
                    className="text-emerald-500 font-black hover:underline uppercase tracking-wider"
                  >
                    sahedalomsumit@gmail.com
                  </a>{" "}
                  or contact us by post at:
                </p>
                <address className="not-italic text-gray-300 font-mono text-base leading-relaxed border-l-4 border-emerald-500 pl-6 bg-white/5 py-4 rounded-r-xl">
                  <span className="text-white font-black block mb-2 uppercase text-xs tracking-[0.3em]">
                    Sahed Alom Sumit
                  </span>
                  Kitarakuja 3 A 42
                  <br />
                  Helsinki, Uusimaa 00420
                  <br />
                  Finland
                </address>
              </section>

              {/* 15. Review/Delete */}
              <section id="section-15">
                <h2 className="text-3xl font-black text-white mb-8 flex items-center gap-4 group">
                  <span className="text-emerald-500 font-mono text-xl group-hover:translate-x-1 transition-transform inline-block">
                    15.
                  </span>
                  HOW CAN YOU REVIEW OR DELETE DATA?
                </h2>
                <p>
                  Based on applicable laws, you may have the right to request
                  access to your personal information, correct inaccuracies, or
                  delete it. To request a review, please submit a data subject
                  access request.
                </p>
              </section>
            </div>

            <footer className="mt-32 pt-16 border-t border-white/5 text-center">
              <div className="text-emerald-500 font-mono text-[10px] tracking-[0.5em] uppercase mb-8">
                Generated_for_Salah_Tracker
              </div>
              <Link
                to="/"
                className="group inline-flex items-center gap-3 bg-white/5 px-8 py-4 rounded-full border border-white/10 hover:bg-emerald-500/10 hover:border-emerald-500/30 transition-all"
              >
                <span className="text-gray-400 group-hover:text-emerald-500 transition-colors">
                  &larr;
                </span>
                <span className="text-xs font-bold uppercase tracking-widest text-white group-hover:text-emerald-500 transition-colors">
                  Back to Home
                </span>
              </Link>
            </footer>
          </article>
        </RevealOnScroll>
      </section>
    </>
  );
}
