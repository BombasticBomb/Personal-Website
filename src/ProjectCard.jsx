function ProjectCard({
    title,
    description,
    github,
    image1,
    image2,
    imageOnRight,
    repo
}) {
    return (
        <div
            className={`relative w-[90%] mx-auto flex items-center justify-center gap-12 p-8
            rounded-2xl
            bg-slate-950
            border border-slate-800

            shadow-[15px_20px_40px_rgba(0,0,0,0.9)]

            transition-all duration-500
            hover:scale-[1.03]
            transition-shadow
            duration-500
            ease-out
            hover:shadow-[8px_12px_30px_rgba(255,140,0,0.35),0_20px_45px_rgba(255,100,0,0.2),0_0_15px_rgba(255,255,255,0.4)]


            ${
                imageOnRight ? "flex-row" : "flex-row-reverse"
            }`}
        >
            <div className="w-[35%]">
                <h2 className="text-3xl font-bold mb-4 text-white-100">
                    {title}
                </h2>

                <p className="text-lg leading-relaxed mb-4 text-white-300">
                    {description}
                </p>

                <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                        text-blue-400
                        hover:text-blue-300
                        hover:underline
                        transition-colors
                    "
                >
                    {(repo == true ? "Check Out Project" : "")}
                </a>
            </div>

            <div className="flex flex-col gap-6">
                <img
                    src={image1}
                    alt={`${title} Image 1`}
                    className="
                        w-[45vw]
                        h-[40vh]
                        rounded-xl
                        object-cover
                        border border-slate-800
                        shadow-[0_10px_30px_rgba(0,10,30,0.7)]
                    "
                />

                <img
                    src={image2}
                    alt={`${title} Image 2`}
                    className="
                        w-[45vw]
                        h-[40vh]
                        rounded-xl
                        object-cover
                        border border-slate-800
                        shadow-[0_10px_30px_rgba(0,10,30,0.7)]
                    "
                />
            </div>
        </div>
    );
}

export default ProjectCard;
