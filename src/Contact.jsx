function Contact() {
    return (
        <div id="Contact" className="w-full flex items-center justify-center py-8">
            <div className="
                flex items-center gap-5
                px-5 py-3
                rounded-2xl
                bg-slate-950/90
                border border-slate-800
                shadow-[0_10px_40px_rgba(0,15,40,0.8)]
                backdrop-blur-md
            ">

                {/* Instagram */}
                <a
                    href="#"
                    aria-label="Instagram"
                    className="
                        text-slate-400
                        transition-all duration-300
                        hover:text-pink-400
                        hover:scale-125
                        hover:drop-shadow-[0_0_10px_rgba(236,72,153,0.5)]
                    "
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <rect width="20" height="20" x="2" y="2" rx="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                </a>

                {/* Discord */}
                <a
                    href="#"
                    aria-label="Discord"
                    className="
                        text-slate-400
                        transition-all duration-300
                        hover:text-indigo-400
                        hover:scale-125
                        hover:drop-shadow-[0_0_10px_rgba(99,102,241,0.5)]
                    "
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M19.54 5.21A16.87 16.87 0 0 0 15.35 4l-.51 1.04a15.37 15.37 0 0 0-5.68 0L8.65 4a16.87 16.87 0 0 0-4.19 1.21C1.8 9.42 1.07 13.52 1.43 17.56a16.95 16.95 0 0 0 5.14 2.61l1.25-1.7a10.92 10.92 0 0 1-1.97-.95l.48-.37c3.8 1.77 7.93 1.77 11.69 0l.49.37c-.63.37-1.29.69-1.97.95l1.25 1.7a16.95 16.95 0 0 0 5.14-2.61c.43-4.69-.74-8.75-3.39-12.35zM8.68 15.35c-1.14 0-2.08-1.05-2.08-2.34s.92-2.34 2.08-2.34 2.1 1.05 2.08 2.34c0 1.29-.92 2.34-2.08 2.34zm6.64 0c-1.14 0-2.08-1.05-2.08-2.34s.92-2.34 2.08-2.34 2.1 1.05 2.08 2.34c0 1.29-.92 2.34-2.08 2.34z" />
                    </svg>
                </a>

                {/* Gmail */}
                <a
                    href="https://mail.google.com/mail/?view=cm&to=ahmadfarzadtaquee@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Gmail"
                    className="
                        text-slate-400
                        transition-all duration-300
                        hover:text-red-400
                        hover:scale-125
                        hover:drop-shadow-[0_0_10px_rgba(248,113,113,0.5)]
                    "
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <polyline points="3,7 12,13 21,7" />
                    </svg>
                </a>

                {/* Github */}
                <a
                    href="https://github.com/BombasticBomb"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Github"
                    className="
                        text-slate-400
                        transition-all duration-300
                        hover:text-blue-300
                        hover:scale-125
                        hover:drop-shadow-[0_0_10px_rgba(96,165,250,0.5)]
                    "
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.08 1.84 1.23 1.84 1.23 1.07 1.83 2.8 1.3 3.48.99.11-.77.42-1.3.76-1.6-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.29-1.23 3.29-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.47 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .5z" />
                    </svg>
                </a>

            </div>
        </div>
    );
}

export default Contact;
