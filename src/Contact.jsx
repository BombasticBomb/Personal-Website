function Contact() {
    return (
        <div className="
            w-full
            flex items-center justify-center
            py-8
        ">
            <div className="
                flex items-center gap-2
                px-3 py-2
                rounded-2xl
                bg-slate-950/90
                border border-slate-800
                shadow-[0_10px_40px_rgba(0,15,40,0.8)]
                backdrop-blur-md
            ">
                <a
                    href="#"
                    className="px-5 py-2 rounded-xl text-slate-300 font-medium transition-all duration-300 hover:bg-blue-950/50 hover:text-blue-300 hover:shadow-[0_0_15px_rgba(30,80,160,0.3)]"
                >
                    Instagram
                </a>

                <a
                    href="#"
                    className="px-5 py-2 rounded-xl text-slate-300 font-medium transition-all duration-300 hover:bg-blue-950/50 hover:text-blue-300 hover:shadow-[0_0_15px_rgba(30,80,160,0.3)]"
                >
                    Discord
                </a>

                <a
                    href="https://mail.google.com/mail/?view=cm&to=ahmadfarzadtaquee@gmail.com"
                    className="px-5 py-2 rounded-xl text-slate-300 font-medium transition-all duration-300 hover:bg-blue-950/50 hover:text-blue-300 hover:shadow-[0_0_15px_rgba(30,80,160,0.3)]"
                >
                    Gmail
                </a>

                <a
                    href="#"
                    className="px-5 py-2 rounded-xl text-slate-300 font-medium transition-all duration-300 hover:bg-blue-950/50 hover:text-blue-300 hover:shadow-[0_0_15px_rgba(30,80,160,0.3)]"
                >
                    Github
                </a>
            </div>
        </div>
    );
}

export default Contact;