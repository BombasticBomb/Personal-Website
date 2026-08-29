import ProjectCard from "./ProjectCard";
import drone1 from "./assets/drone1.png";
import drone2 from "./assets/drone2.JPG";
import ender3pro1 from "./assets/ender3pro1.JPG";
import ender3pro2 from "./assets/ender3pro2.JPG";
import arduinocar1 from "./assets/arduinocar1.JPG";
import arduinocar2 from "./assets/arduinocar2.JPG";
import arduinoboat1 from "./assets/arduinoboat1.jpeg";
import arduinoboat2 from "./assets/arduinoboat2.jpeg";
import weatherstation1 from "./assets/weatherstation1.jpeg";
import weatherstation2 from "./assets/weatherstation2.jpeg";

function Projects() {
    return (
        <>
            {/* Skills */}
            <div id="Skills" className="min-h-screen w-full flex items-center justify-center px-10 py-20">
                <div className="
                    w-[90%]
                    p-12
                    rounded-3xl
                    bg-slate-950
                    border
                    transition-all duration-500
                    hover:scale-[1.03]
                    transition-shadow
                    duration-500
                    ease-out
                    border-1
                    hover:shadow-[8px_12px_30px_rgba(255,140,0,0.35),0_20px_45px_rgba(255,100,0,0.2),0_0_15px_rgba(255,255,255,0.4)]
                    hover:border-white/[0.25]
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
            <div id="Projects" className="w-full pb-20 space-y-12">
                <h2 className="text-4xl font-bold text-slate-100 text-center mb-10">
                    Projects
                </h2>

                <ProjectCard
                    title="Custom Flight Controller Quadcopter (Ongoing)"
                    description="This is my Hack Club project to build a drone from scratch. The drone will have a custom flight controller built with Arduino and an MPU9250 sensor along with the BMP280 sensor for altitude, and it'll have custom PID tuning and stabilization. It'll also have a custom video transmission system made from a Raspberry Pi and USB Camera."
                    github="https://github.com/BombasticBomb/Custom-Flight-Controller-Quadcopter-With-RaspberryPI-Cam"
                    image1={drone1}
                    image2={drone2}
                    imageOnRight={false}
                    repo={true}

                />
                <ProjectCard
                    title="Ender 3 Pro Restoration"
                    description="When me and my family just moved to the United States in 2023, my dad was already here, having moved a year earlier. My dad, before
                    we arrived, found a broken 3D printer near the trash, which he brought home thinking maybe I could fix it. After we came, he showed me the 3D printer,
                    which I surprisingly found the main mechanism to be working. The only thing that wasn't working was the extruder system, which was badly broken.
                    However, after a few months of research and work, I managed to fix the 3D printer, and it has since aided me in many of my projects, including prototyping
                    for the drone and the pillars in the Europa Rover."
                    github="#"
                    image1={ender3pro1}
                    image2={ender3pro2}
                    imageOnRight={true}
                    repo={false}
                />
                <ProjectCard
                    title="Arduino Bluetooth Car (Obstacle Detection + Solar Power)"
                    description="This project of mine is an extension of the basic Arduino Bluetooth Car found on YouTube tutorials, and I used that project as my base
                    and expanded it to add various capabilities and improvements to the robot. This was my first Arduino robot project, so it is a little simple in code and design.
                    Firstly, I added obstacle detection capabilites in the front by using a 20KHZ Ultrasonic sensor in the front, which could detect objects up to 15-30 cm, allowing it
                    to stop before crashing into the wall. Then, I also added a solar power bank on the top to add extended range and for it to be able to charge in the sun. Both
                    of these projects were presented at my middle school science fairs. The robot was controlled with the Android Arduino Bluetooth Controller App."
                    github="#"
                    image1={arduinocar1}
                    image2={arduinocar2}
                    imageOnRight={false}
                    repo={false}
                />
                <ProjectCard
                    title="Arduino Boat (Bluetooth Controlled)"
                    description="Modified from the Arduino Bluetooth Controlled Car project, I used a small lunchbox and added 2 3D printed cubes at the bottom, using my
                    Ender 3 Pro, to mount the 2 DC motors. Then, I used 2 mini yellow drone propellers, as that's what I had in hand, and mounted it on the DC motors. Modifying
                    the Arduino car code to use 2 motors instead of 4 according to the boat logic allowed me to use the boat with the same app, and it was a fun experience."
                    github="#"
                    image1={arduinoboat1}
                    image2={arduinoboat2}
                    imageOnRight={true}
                    repo={false}
                />
                <ProjectCard
                    title="NodeMCU ESP8266 Weather Station"
                    description="After my weather station was giving me data about how the temperature outside was 79F, I went outside and got instantly sun-burned
                    by a 105F (estimated) sun. That is when I decided I wanted to make my own Weather Station outside my house running 24/7 that'll give me live data
                    about the air outside my house, wherever I am in the world. I used a NodeMCU ESP8266 thanks to its wifi capabilities, and after making the web dashboard
                    that run on localhost, I could access it from the Raspberry PI, and through Raspberry PI's rustdesk capabilities, I could access the data from anywhere in the
                    world!"
                    github="#"
                    image1={weatherstation1}
                    image2={weatherstation2}
                    imageOnRight={false}
                    repo={false}
                />
                
            </div>
        </>
    );
}

export default Projects;