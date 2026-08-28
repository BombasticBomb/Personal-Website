import ProjectCard from "./ProjectCard";
import Parts from "./assets/drone.png";
import Parts2 from "./assets/parts.JPG";

function Projects() {
    return (
        <>
            {/* Skills */}
            <div className="min-h-screen w-full flex items-center justify-center px-10 py-20">
                <div className="
                    w-[90%]
                    p-12
                    rounded-3xl
                    bg-slate-950
                    border border-slate-800
                    shadow-[15px_20px_60px_rgba(0,15,40,0.8)]
                    transition-all duration-500
                    hover:-translate-y-2
                    hover:shadow-[20px_30px_80px_rgba(10,50,130,0.7)]
                ">
                    <h2 className="text-4xl font-bold text-slate-100 mb-10">
                        Skills + Experience
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                        {/* Programming Languages */}
                        <div>
                            <h3 className="text-2xl font-bold text-blue-300 mb-4">
                                Programming Languages
                            </h3>

                            <ul className="space-y-2 text-lg text-slate-300">
                                <li>
                                    <span className="text-slate-100 font-medium">
                                        Python:
                                    </span>{" "}
                                    PyTorch, OpenCV, Ursina, Pandas
                                </li>

                                <li>
                                    <span className="text-slate-100 font-medium">
                                        Arduino-C++:
                                    </span>{" "}
                                    Arduino, ESP32, ESP8266
                                </li>

                                <li>
                                    <span className="text-slate-100 font-medium">
                                        Web Development:
                                    </span>{" "}
                                    HTML, CSS, ReactJS
                                </li>

                                <li>
                                    <span className="text-slate-100 font-medium">
                                        Java:
                                    </span>{" "}
                                    FTC Robotics
                                </li>
                            </ul>
                        </div>

                        {/* Other Skills */}
                        <div>
                            <h3 className="text-2xl font-bold text-blue-300 mb-4">
                                Other Skills
                            </h3>

                            <ul className="space-y-2 text-lg text-slate-300">
                                <li>
                                    <span className="text-slate-100 font-medium">
                                        CAD:
                                    </span>{" "}
                                    Fusion 360, TinkerCAD
                                </li>

                                <li>
                                    <span className="text-slate-100 font-medium">
                                        PCB Design:
                                    </span>{" "}
                                    KiCad
                                </li>

                                <li>
                                    <span className="text-slate-100 font-medium">
                                        Linux:
                                    </span>{" "}
                                    Proficient with Linux terminals,
                                    filesystems, and multiple distributions
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

            {/* Projects */}
            <div className="w-full pb-20">
                <h2 className="text-4xl font-bold text-slate-100 text-center mb-10">
                    Projects
                </h2>

                <ProjectCard
                    title="Custom Flight Controller Quadcopter"
                    description="This is my Hack Club project to build a drone from scratch. The drone will have a custom flight controller built with Arduino and an MPU9250 sensor along with the BMP280 sensor for altitude, and it'll have custom PID tuning and stabilization. It'll also have a custom video transmission system made from a Raspberry Pi and USB Camera."
                    github="https://github.com/BombasticBomb/Custom-Flight-Controller-Quadcopter-With-RaspberryPI-Cam"
                    image1={Parts}
                    image2={Parts2}
                    imageOnRight={false}
                />
                
            </div>
        </>
    );
}

export default Projects;