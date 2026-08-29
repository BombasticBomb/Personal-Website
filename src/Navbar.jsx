import './index.css'


function Navbar() {
    return (
            <div className="fixed top-5 right-10 z-50">
                <nav className="
                    flex items-center gap-2
                    px-3 py-2
                    rounded-2xl
                    bg-[#020b24]/80
                    backdrop-blur-xl
                    shadow-[0_10px_30px_rgba(0, 0, 30, 0.45)]
                    
                ">
                    <a
                        href="#Home"
                        className="
                            border-3
                            px-5 py-2
                            rounded-xl
                            hover:scale-105
                            text-white-400
                            font-medium
                            bg-white/[0.06]
                            backdrop-blue-md
                            border border-white/[0.12]
                            shadow-[inset_0_1px_0_rgba(255,255,255,0.55),inset_0_-1px_0_rgba(255,255,255,0.12),0_0_25px_rgba(50,80,255,0.5)]
                            hover:border-[rgba(0, 226, 226, 0.67)]
                            hover:-translate-y-1
                            transition-all duration-500
                            ease-out
                        "
                    >
                        Home
                    </a>
                    <a
                        href="#Projects"
                        className="
                            border-3
                            px-5 py-2
                            rounded-xl
                            hover:scale-105
                            text-white-400
                            font-medium
                            bg-white/[0.06]
                            backdrop-blue-md
                            border border-white/[0.12]
                            shadow-[inset_0_1px_0_rgba(255,255,255,0.55),inset_0_-1px_0_rgba(255,255,255,0.12),0_0_25px_rgba(50,80,255,0.5)]
                            hover:border-[rgba(0, 226, 226, 0.67)]
                            hover:-translate-y-1
                            transition-all duration-500
                            ease-out
                        "
                    >
                        Projects
                    </a>
                    <a
                        href="#Skills"
                        className="
                            border-3
                            px-5 py-2
                            rounded-xl
                            hover:scale-105
                            text-white-400
                            font-medium
                            bg-white/[0.06]
                            backdrop-blue-md
                            border border-white/[0.12]
                            shadow-[inset_0_1px_0_rgba(255,255,255,0.55),inset_0_-1px_0_rgba(255,255,255,0.12),0_0_25px_rgba(50,80,255,0.5)]
                            hover:border-[rgba(0, 226, 226, 0.67)]
                            hover:-translate-y-1
                            transition-all duration-500
                            ease-out
                        "
                    >
                        Skills
                    </a>
                    <a
                        href="#Education"
                        className="
                            border-3
                            px-5 py-2
                            rounded-xl
                            hover:scale-105
                            text-white-400
                            font-medium
                            bg-white/[0.06]
                            backdrop-blue-md
                            border border-white/[0.12]
                            shadow-[inset_0_1px_0_rgba(255,255,255,0.55),inset_0_-1px_0_rgba(255,255,255,0.12),0_0_25px_rgba(50,80,255,0.5)]
                            hover:border-[rgba(0, 226, 226, 0.67)]
                            hover:-translate-y-1
                            transition-all duration-500
                            ease-out
                        "
                    >
                        Education
                    </a>
                    <a
                        href="#Contact"
                        className="
                            border-3
                            px-5 py-2
                            rounded-xl
                            hover:scale-105
                            text-white-400
                            font-medium
                            bg-white/[0.06]
                            backdrop-blue-md
                            border border-white/[0.12]
                            shadow-[inset_0_1px_0_rgba(255,255,255,0.55),inset_0_-1px_0_rgba(255,255,255,0.12),0_0_25px_rgba(50,80,255,0.5)]
                            hover:border-[rgba(0, 226, 226, 0.67)]
                            hover:-translate-y-1
                            transition-all duration-100
                            ease-out
                        "
                    >
                        Contact
                    </a>

            </nav>
        </div>
    );
}

export default Navbar
