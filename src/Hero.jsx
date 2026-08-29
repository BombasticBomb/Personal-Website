import './index.css'
import profilePic from './assets/gym.JPG'

function Hero() {
    return (
        <div id="Home" className="min-h-screen w-full flex items-center justify-center px-10">
            
            <div className="
                w-[90%]
                flex items-center justify-between
                gap-16
                p-12
                rounded-3xl
                bg-slate-950
                border border-slate-800
                shadow-[15px_20px_60px_rgba(0,15,40,0.8)]
                transition-all duration-500
                hover:-translate-y-2
                hover:shadow-[20px_30px_80px_rgba(10,50,130,0.65)]
            ">

                {/* Bio */}
                <div className="w-[55%]">
                    <h2 className="text-2xl font-medium text-blue-400 mb-2">
                        Hi,
                    </h2>

                    <h1 className="text-5xl font-bold text-slate-100">
                        I am Ahmad Farzad Taquee
                    </h1>

                    <p className="mt-6 text-lg leading-relaxed text-slate-300">
                        I'm a high school student and developer building things
                        related to software, hardware engineering, and
                        computer-aided design. I love making things with complex mechanical designs and low-level programming
                        that combines sensors, motors, and interactive UI. I am excited to explore more about this topics in high school
                        and in the projects I do in the future.
                    </p>

                    <p className="mt-4 text-lg leading-relaxed text-slate-300">
                        My research interest primarily focuses on astronomical aerodynamics and orbital mechanics, particularly
                        trajectory optimization for deep-space probes as well as extra-terrestrial flight. I am also interested the integration
                        of machine learning models for autonomous surface rovers as well as satellites in the atmospheres of other planets in the 
                        solar system.
                    </p>
                </div>

                {/* Image */}
                <div className="w-[40%] flex justify-center">
                    <img
                        src={profilePic}
                        alt="Profile"
                        className="
                            w-[25vw]
                            h-[25vw]
                            max-w-[400px]
                            max-h-[400px]
                            rounded-full
                            object-cover
                            border-2
                            border-blue-900/50
                            shadow-[0_0_40px_rgba(20,60,130,0.4)]
                            transition-all duration-500
                            hover:scale-105
                            hover:shadow-[0_0_60px_rgba(30,90,180,0.6)]
                        "
                    />
                </div>

            </div>
        </div>
    );
}

export default Hero