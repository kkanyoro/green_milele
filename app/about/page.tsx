import Image from "next/image";

export default function AboutPage() {
    const directors = [
        { name: "John Doe", title: "Executive Director", image: "/director.jpeg" },
        { name: "Jane Smith", title: "Operations Director", image: "/director.jpeg" },
        { name: "Alex Johnson", title: "Director of Outreach", image: "/director.jpeg" },
        { name: "Sam Lee", title: "Finance Director", image: "/director.jpeg" },
        { name: "Chris Evans", title: "Programs Director", image: "/director.jpeg" },
        { name: "Mia Wong", title: "Communications Director", image: "/director.jpeg" },
        { name: "David Kim", title: "Director of Education", image: "/director.jpeg" },
        { name: "Sarah Connor", title: "Partnerships Director", image: "/director.jpeg" },
        { name: "Tom Hardy", title: "Logistics Director", image: "/director.jpeg" },
        { name: "Emma Stone", title: "Creative Director", image: "/director.jpeg" },
    ];

    return (
        <div className="flex w-full flex-col gap-16 pb-12 pt-8 md:gap-24">

            {/* Page Header & Our Story */}
            <section className="mx-auto flex w-full max-w-7xl flex-col items-center px-6 md:flex-row md:items-start md:gap-12">

                {/* Text Content */}
                <div className="flex w-full flex-col md:w-1/2">
                    <div className="mb-4 inline-block w-fit rounded-full bg-secondary/30 px-3 py-1 text-xs font-bold text-primary border border-secondary/50">
                        About Us
                    </div>
                    <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-primary sm:text-5xl">
                        Our Story
                    </h1>
                    <div className="flex flex-col gap-4 text-primary/80 leading-relaxed sm:text-lg">
                        <p>
                            Green Milele began with a simple realization: the youth inherit the earth, but we cannot afford to wait until tomorrow to protect it. What started as a small group of friends organizing local neighborhood clean-ups has rapidly grown into a dedicated environmental initiative.
                        </p>
                        <p>
                            We realized that while many people care about the environment, they often lack an accessible platform to take direct, meaningful action. We built Green Milele to be that platform.
                        </p>
                        <p>
                            Today, we are proudly youth-led and community-driven. From planting thousands of indigenous trees to educating the next generation in schools, our mission is to make environmental stewardship an everyday habit rather than an occasional afterthought.
                        </p>
                    </div>
                </div>

                {/* Supporting Image */}
                <div className="mt-10 relative aspect-[4/3] w-full overflow-hidden rounded-2xl glass-panel md:mt-0 md:w-1/2">
                    <Image
                        src="/sample.jpg"
                        alt="The Green Milele founding team planting trees"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                    />
                </div>

            </section>

            {/* Our Team */}
            <section className="mx-auto flex w-full max-w-8xl flex-col items-center px-6">

                {/* Section Header */}
                <div className="mb-10 text-center max-w-2xl">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-primary">Meet the Directors</h2>
                    <p className="text-primary/80 leading-relaxed text-sm sm:text-base">
                        Our initiative is guided by a passionate board of youth leaders dedicated to driving systemic change and community impact.
                    </p>
                </div>

                {/* Director Grid */}
                <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 md:gap-6">

                    {directors.map((director, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center p-4 text-center glass-panel transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-6"
                        >
                            {/* Circular Profile Image */}
                            <div className="relative mb-3 h-20 w-20 sm:h-24 sm:w-24 overflow-hidden rounded-full border-2 border-primary/10 shadow-sm">
                                <Image
                                    src={director.image}
                                    alt={`Photo of ${director.name}`}
                                    fill
                                    sizes="(max-width: 640px) 80px, 96px"
                                    className="object-cover"
                                />
                            </div>

                            {/* Name & Title */}
                            <h3 className="text-sm font-bold text-primary sm:text-base line-clamp-1 w-full">
                                {director.name}
                            </h3>
                            <p className="mt-1 text-xs font-medium text-primary/70 line-clamp-2">
                                {director.title}
                            </p>
                        </div>
                    ))}

                </div>
            </section>

        </div>
    );
}