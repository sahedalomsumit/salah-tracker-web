import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react'
import gsap from 'gsap'

export default function Header() {
    const location = useLocation()
    const [scrolled, setScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const menuRef = useRef(null)
    const linkRef = useRef([])

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden'
            const tl = gsap.timeline()
            tl.set(menuRef.current, { display: 'flex' })
            tl.to(menuRef.current, { x: 0, opacity: 1, duration: 0.6, ease: 'power4.out' })
            tl.fromTo(linkRef.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power3.out' },
                "-=0.3"
            )
        } else {
            document.body.style.overflow = 'unset'
            const tl = gsap.timeline()
            // Animate links out أولاً (first)
            tl.to(linkRef.current, {
                y: 30,
                opacity: 0,
                duration: 0.3,
                stagger: 0.05,
                ease: 'power2.in'
            })
            // Then slide the menu overlay out
            tl.to(menuRef.current, {
                x: '100%',
                opacity: 0,
                duration: 0.5,
                ease: 'power4.in'
            }, "-=0.2")
            tl.set(menuRef.current, { display: 'none' })
        }
    }, [isMenuOpen])

    const navLinks = [
        { to: '/', label: 'HOME', num: '01' },
        { to: '/privacy-policy', label: 'PRIVACY POLICY', num: '02' },
        { to: '/data-deletion', label: 'DATA DELETION', num: '03' },
    ]

    const closeMenu = () => setIsMenuOpen(false)



    return (
        <>
            <header
                className={`sticky top-0 w-full z-[70] sticky-header transition-all ${scrolled || isMenuOpen ? 'bg-[#0a0a0a]/80 backdrop-blur-md' : ''}`}
                id="main-header"
            >
                <div className={`px-4 max-w-7xl mx-auto flex items-center justify-between transition-all ${scrolled || isMenuOpen ? 'py-3' : 'py-4'}`}>
                    <Link to="/" onClick={closeMenu} className="flex items-center group cursor-pointer z-[60]">
                        <img
                            className="sas-logo transition-transform group-hover:scale-105 w-32"
                            src="/img/logo-sahed-alom-sumit.png"
                            alt="Sahed Alom Sumit Official Logo"
                        />
                        <div className="hidden md:block h-6 w-[1px] bg-white/10 mx-4" />
                        <div className="hidden lg:block text-[9px] font-mono text-gray-500 uppercase tracking-tighter">
                            Designer & Developer<br />
                            <span className="text-emerald-500 italic">Availability: High</span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8 lg:gap-12">
                        {navLinks.map((link) => {
                            const isExternal = link.to.startsWith('http')
                            const Comp = isExternal ? 'a' : Link
                            const props = isExternal ? { href: link.to, target: '_blank', rel: 'noopener noreferrer' } : { to: link.to }
                            
                            return (
                                <Comp
                                    key={link.to}
                                    {...props}
                                    className={`text-[10px] font-mono font-bold tracking-widest hover:text-violet-400 transition-all border-b pb-1 ${location.pathname === link.to
                                        ? 'border-violet-500 text-violet-400'
                                        : 'border-transparent hover:border-violet-500/50'
                                        }`}
                                >
                                    ./{link.label}
                                </Comp>
                            )
                        })}

                    </nav>

                    {/* Mobile Hamburger Button */}
                    <button
                        className="md:hidden z-[80] relative w-10 h-10 flex items-center justify-center focus:outline-none"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        <div className="w-6 flex flex-col items-end gap-1.5">
                            <span className={`block h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'w-6 translate-y-2 rotate-45' : 'w-6'}`}></span>
                            <span className={`block h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0 translate-x-3' : 'w-4'}`}></span>
                            <span className={`block h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'w-6 -translate-y-2 -rotate-45' : 'w-5'}`}></span>
                        </div>
                    </button>
                </div>
            </header>

            {/* Fullscreen Mobile Overlay */}
            <div
                ref={menuRef}
                className="fixed inset-0 bg-[#0a0a0a] z-[55] flex-col items-center justify-center md:hidden hidden opacity-0 translate-x-full"
            >
                <div className="flex flex-col items-center gap-8">
                    {navLinks.map((link, i) => {
                        const isExternal = link.to.startsWith('http')
                        const Comp = isExternal ? 'a' : Link
                        const props = isExternal ? { href: link.to, target: '_blank', rel: 'noopener noreferrer' } : { to: link.to }

                        return (
                            <Comp
                                key={link.to}
                                {...props}
                                onClick={closeMenu}
                                ref={el => linkRef.current[i] = el}
                                className="group flex items-baseline gap-4"
                            >
                                <span className="font-mono text-violet-500 text-xs">{link.num}_</span>
                                <span className={`text-4xl sm:text-5xl font-black tracking-tighter uppercase transition-colors ${location.pathname === link.to ? 'text-white' : 'text-white/40 group-hover:text-white'}`}>
                                    {link.label}
                                </span>
                            </Comp>
                        )
                    })}


                </div>
            </div>
        </>
    )
}
