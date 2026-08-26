import './index.css'
import profilePic from './assets/hero.JPEG'

function Hero() {
    return (
        <div className="min-h-screen flex items-center justify-between px-40 m-1">
            
            {/* Bio */}
            <div className="w-1/2">
                <h2 className="text-2xl font-bold">
                    Hi, 
                </h2>
                <h1 className="text-5xl font-bold">
                    I am Ahmad Farzad Taquee 
                </h1>

                <p className="mt-4 text-lg">
                    I'm a high school student and developer building things at the related to software, hardware engineering, and computer-aided designs.
                    Whether I'm programming microcontrollers for robotics, working with computer vision, or building web apps, 
                    I love turning complex ideas into functional code.
                </p>
            </div>

            {/* Image */}
            <div className="w-1/2 flex justify-end">
                <img
                    src={profilePic}
                    alt="ProfilePic"
                    className="w-150 h-150 rounded-full object-cover"
                />
            </div>

        </div>
    );
}

export default Hero
