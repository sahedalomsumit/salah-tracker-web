import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-black relative overflow-hidden">
      {/* Bottom Copyright */}
      <div className="max-w-7xl mx-auto items-center">
        <p className="font-mono text-[9px] text-gray-400 uppercase tracking-widest text-center">
          © {currentYear} Sahed Alom Sumit // Built with precision and clean
          code
        </p>
      </div>
    </footer>
  );
}
