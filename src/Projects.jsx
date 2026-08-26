function Projects(){
    return(
        <div className="min-h-screen flex items-center justify-between px-40 m-1">
            <div className="w-1/2">
                <h2 className="text-4xl font-bold">
                    Skills + Projects
                </h2>

                <h3 className="text-2xl font-bold">
                    Programming Languages:
                </h3>
                <ol>
                    <li>Python: PyTorch, OpenCV, Ursina, Pandas</li>
                    <li>Arduino-C++: Arduino, ESP32, ESP8266</li>
                    <li>Web Development: HTML, CSS, ReactJS</li>
                    <li>Java: FTC Robotics</li>
                </ol>
                <div className="absolute flex items-center gap-8 p-4 z-50 m-5">
                    <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition"></a>
                    <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition"></a>
                    <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition"></a>
                    <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition"></a>
                </div>

                <h3 className="text-2xl font-bold">
                    Other Skills:
                </h3>
                <ol>
                    <li>CAD: Fusion 360, TinkerCAD</li>
                    <li>PCB Design: KiCad</li>
                    <li>Linux: Proficient working with linux terminal, filesystems, and multiple distributions</li>
                </ol>

                <h3 className="text-2xl font-bold">
                    Projects:
                </h3>
                <ol>
                    <li>
                        
                    </li>
                </ol>
            </div>
        </div>  
    );
}

export default Projects