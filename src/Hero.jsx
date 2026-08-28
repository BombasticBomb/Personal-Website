import './index.css'
import profilePic from './assets/hero.JPEG'

function Hero() {
    return (
        <div className="min-h-screen w-full flex items-center justify-center px-10">
            
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
                        computer-aided design.
                    </p>

                    <p className="mt-4 text-lg leading-relaxed text-slate-300">
                        Whether I'm programming microcontrollers for robotics,
                        working with computer vision, or building web apps,
                        I love turning complex ideas into functional code.
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