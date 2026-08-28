import educationImage from './assets/education.jpeg'

function Education() {
    return (
        <div className="min-h-screen w-full flex items-center justify-center px-10">
            
            <div className="
                w-[90%]
                flex items-center justify-center gap-16
                p-12
                rounded-3xl
                bg-slate-950
                border border-slate-800
                shadow-[15px_20px_60px_rgba(0,15,40,0.8)]
                transition-all duration-500
                hover:-translate-y-2
                hover:shadow-[20px_30px_80px_rgba(10,50,130,0.7)]
            ">

                {/* Education Information */}
                <div className="w-[50%]">
                    <h2 className="text-4xl font-bold text-slate-100 mb-8">
                        Education
                    </h2>

                    <div className="space-y-3">
                        <h3 className="text-2xl font-bold text-blue-300">
                            Plano East Senior High
                        </h3>

                        <h3 className="text-xl font-semibold text-slate-300">
                            International Baccalaureate Diploma Program
                        </h3>

                        <p className="text-lg text-slate-400">
                            Expected Graduation: May 2029
                        </p>

                        <p className="text-lg text-slate-400">
                            Weighted GPA: 4.28
                        </p>
                    </div>

                    <div className="space-y-6 mt-8">
                        
                        <div>
                            <h3 className="text-2xl font-bold text-blue-300 mb-2">
                                Relevant Coursework
                            </h3>

                            <ul className="list-disc list-inside text-slate-300 space-y-1">
                                <li>AP Computer Science Principles</li>
                                <li>AP PreCalculus</li>
                                <li>PLTW Engineering Science</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-blue-300 mb-2">
                                Extracurriculars
                            </h3>

                            <ul className="list-disc list-inside text-slate-300 space-y-1">
                                <li>President of Hack Club @ PESH</li>
                                <li>CyberSecurity Club Member</li>
                                <li>LASER Science & Engineering Fair</li>
                            </ul>
                        </div>

                    </div>
                </div>

                {/* Image */}
                <div className="w-[40%] flex justify-center">
                    <img
                        src={educationImage}
                        alt="Education"
                        className="
                            w-[35vw]
                            h-[45vh]
                            rounded-2xl
                            object-cover
                            border border-blue-900/40
                            shadow-[0_15px_40px_rgba(5,30,80,0.7)]
                            transition-all duration-500
                            hover:scale-[1.03]
                            hover:shadow-[0_20px_60px_rgba(20,70,150,0.7)]
                        "
                    />
                </div>

            </div>
        </div>
    );
}

export default Education