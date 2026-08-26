function Contact(){
    return(
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-8 p-4 z-50 m-5">
            <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition">Instagram</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition">Discord</a>
            <a href="https://mail.google.com/mail/?view=cm&to=ahmadfarzadtaquee@gmail.com" className="text-gray-700 hover:text-blue-600 font-medium transition">Gmail</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition">Github</a>
        </div>
    );
}

export default Contact