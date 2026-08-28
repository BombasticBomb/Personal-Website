function ProjectCard({
    title,
    description,
    github,
    image1,
    image2,
    imageOnRight
}) {
    return (
        <div
            className={`w-[90%] mx-auto flex items-center justify-center gap-12 p-8
            rounded-2xl
            bg-slate-950
            border border-slate-800
            shadow-[15px_20px_40px_rgba(0,0,0,0.9)]
            transition-all duration-500
            hover:-translate-y-3
            hover:shadow-[20px_30px_60px_rgba(0,0,0,0.95)]
            ${
                imageOnRight ? "flex-row" : "flex-row-reverse"
            }`}
        >
            <div className="w-[35%]">
                <h2 className="text-3xl font-bold mb-4">
                    {title}
                </h2>

                <p className="text-lg leading-relaxed mb-4 text-slate-300">
                    {description}
                </p>

                <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 hover:underline transition-colors"
                >
                    Github Repository
                </a>
            </div>

            <div className="flex flex-col gap-6">
                <img
                    src={image1}
                    alt={`${title} Image 1`}
                    className="w-[40vw] h-[35vh] rounded-xl object-cover"
                />

                <img
                    src={image2}
                    alt={`${title} Image 2`}
                    className="w-[40vw] h-[35vh] rounded-xl object-cover"
                />
            </div>
        </div>
    );
}

export default ProjectCard;