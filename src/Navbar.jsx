import './index.css'

function Navbar() {
    return (
        <div className="fixed top-5 right-10 z-50">
            <nav className="
                flex items-center gap-2
                px-3 py-2
                rounded-2xl
                bg-slate-950/90
                border border-slate-800
                shadow-[0_8px_30px_rgba(0,15,40,0.8)]
                backdrop-blur-md
            ">
                <a
                    href="#home"
                    className="
                        px-5 py-2
                        rounded-xl
                        text-slate-300
                        font-medium
                        transition-all duration-300
                        hover:bg-blue-950/50
                        hover:text-blue-300
                        hover:shadow-[0_0_15px_rgba(30,80,160,0.25)]
                    "
                >
                    Home
                </a>

                <a
                    href="#about"
                    className="
                        px-5 py-2
                        rounded-xl
                        text-slate-300
                        font-medium
                        transition-all duration-300
                        hover:bg-blue-950/50
                        hover:text-blue-300
                        hover:shadow-[0_0_15px_rgba(30,80,160,0.25)]
                    "
                >
                    Projects
                </a>

                <a
                    href="#services"
                    className="
                        px-5 py-2
                        rounded-xl
                        text-slate-300
                        font-medium
                        transition-all duration-300
                        hover:bg-blue-950/50
                        hover:text-blue-300
                        hover:shadow-[0_0_15px_rgba(30,80,160,0.25)]
                    "
                >
                    Education
                </a>

                <a
                    href="#contact"
                    className="
                        px-5 py-2
                        rounded-xl
                        text-slate-300
                        font-medium
                        transition-all duration-300
                        hover:bg-blue-950/50
                        hover:text-blue-300
                        hover:shadow-[0_0_15px_rgba(30,80,160,0.25)]
                    "
                >
                    Contact
                </a>
            </nav>
        </div>
    );
}

export default Navbar
