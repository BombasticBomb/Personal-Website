import educationImage from './assets/education.jpeg'

function Education(){
    return(
        <div className="min-h-screen flex items-center justify-between px-40 m-1">
            <div className="w-1/2">
                <h2 className="text-4xl font-bold">
                    Education
                </h2>

                <h3 className="text-2xl font-bold">
                    High School: Plano East Senior High
                </h3>
                <h3 className="text-2xl font-bold">
                    International Baccalaurate Diploma Program
                </h3>
                <h3 className="text-2xl font-bold">
                    Expected Graduation: May 2029
                </h3>
            
                

                <div className="space-y-6">
                    <div>
                        <h3 className="text-2xl font-bold">
                            Relevant Coursework:
                        </h3>
                        <ul>
                            <li>AP Computer Science Principles</li>
                            <li>AP PreCalculus</li>
                            <li>PLTW Engineering Science</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold">
                            Extracurriculars:
                        </h3>
                        <ul>
                            <li>President of Hack Club @ PESH</li>
                            <li>CyberSecurity Club Member</li>
                            <li>LASER Science & Engineering Fair</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Image */}
            <div className="w-1/2 flex justify-end">
                <img
                    src={educationImage}
                    alt="Education Image"
                    className="w-500 h-auto rounded-md object-cover"
                />
            </div>
            
        </div>
    );
}

export default Education