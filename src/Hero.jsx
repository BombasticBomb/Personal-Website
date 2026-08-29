import './index.css'
import profilePic from './assets/hero.JPEG'

function Hero() {
    return (<>
        <div id="Home" className="
        min-h-screen 
        w-full 
        flex 
        items-center 
        justify-center 
        px-10 
        ">
            
            <div className="
                w-[90%]
                flex items-center justify-between
                gap-16
                p-12
                rounded-3xl
                bg-[rgba(0,15,30,0.97)]
                hover:shadow-[8px_12px_30px_rgba(255,140,0,0.35),0_20px_45px_rgba(255,100,0,0.2)]
                border
                hover:border-white/[0.25]
                transition-all
                duration-500
                ease-out
                hover:-translate-y-2
            ">

                {/* Bio */}
                <div className="w-[55%]">
                    <h2 className="text-2xl font-medium text-blue-400 mb-2">
                        Hi,
                    </h2>

                    <h1 className="text-5xl font-bold text-slate-100">
                        I am Ahmad Farzad Taquee
                    </h1>

                    <p className="mt-6 text-lg leading-relaxed text-white-300">
                        I'm a high school student and developer building things
                        related to software, hardware engineering, and
                        computer-aided design. I love making things with complex mechanical designs and low-level programming
                        that combines sensors, motors, and interactive UI. I am excited to explore more about this topics in high school
                        and in the projects I do in the future.
                    </p>

                    <p className="mt-4 text-lg leading-relaxed text-white-300">
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
                            border-purple-400
                            transition-all duration-500
                            hover:scale-[1.03]
                            transition-shadow
                            duration-500
                            ease-out
                            hover:shadow-[8px_12px_30px_rgba(255,140,0,0.35),0_20px_45px_rgba(255,100,0,0.2),0_0_15px_rgba(255,255,255,0.4)]
                        "
                    />
                </div>

            </div>

        </div>
    </>);
}

export default Hero