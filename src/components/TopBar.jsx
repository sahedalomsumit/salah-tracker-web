export default function TopBar() {
  return (
    <div className="w-full bg-[#080808] py-2.5 px-4 flex flex-col md:flex-row justify-center items-center text-[10px] font-mono tracking-[0.2em] border-b border-white/5 z-[60] relative">
      <div className="flex items-center gap-2 text-emerald-500">
        <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
        <span className="text-white">SYSTEM_STATUS:</span>
        OPEN FOR COLLABORATIONS
      </div>
      <span className="text-white/10 mx-6 hidden md:block">|</span>
      <div className="flex gap-6 mt-2 md:mt-0">
        <a
          href="https://wa.me/+358415765539"
          className="text-gray-400 hover:text-white transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          MESSAGE_WHATSAPP »
        </a>
        <span className="text-white/10 hidden md:block">|</span>
        <a
          href="/img/vibe-web-designer-and-developer-sahed-alom-sumit.pdf"
          className="text-white font-bold hover:text-violet-400 transition underline underline-offset-4 decoration-violet-500/50"
        >
          DOWNLOAD_RESUME.PDF
        </a>
      </div>
    </div>
  )
}
