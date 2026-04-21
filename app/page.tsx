import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { FiArrowRight, FiCalendar, FiMapPin } from "react-icons/fi";

export default function Home() {
  return (
    <div className="flex flex-col gap-24 pb-12 w-full">

      {/* 1. Hero Section (Full Width, No Background) */}
      <section className="flex min-h-[60vh] w-full flex-col items-center justify-center px-6 text-center">
        <div className="mx-auto flex max-w-4xl flex-col items-center">
          <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-primary sm:text-6xl md:leading-tight">
            Empowering the community for a <span className="text-secondary">Greener</span> Tomorrow
          </h1>
          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-primary/80 sm:text-xl">
            Join the movement to protect our environment. Through community action, education, and sustainable initiatives, we are building a world that thrives.
          </p>
          <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
            <Link href="/join" className="w-full sm:w-auto">
              {/* Using the default primary variant for high visibility */}
              <Button size="lg" className="w-full">
                Join us Now
              </Button>
            </Link>
            <Link href="/about" className="w-full sm:w-auto">
              {/* Using outline variant since there is no dark background anymore */}
              <Button variant="outline" size="lg" className="w-full">
                Our Story
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Mission / Footprint Section (Constrained for readability) */}
      <section className="mx-auto flex w-full max-w-7xl flex-col items-center px-6 text-center">
        <div className="mb-12 max-w-3xl">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-primary">Our Footprint</h2>
          <p className="text-primary/80 leading-relaxed">
            We don't just talk about change; we build it. Here is a look at how our youth-led community is actively restoring our natural ecosystems.
          </p>
        </div>

        {/* Bento Grid Container */}
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:grid-rows-2 md:gap-6">

          {/* Large Feature Card (Spans 2 columns) */}
          <div className="relative flex min-h-[100px] flex-col justify-end overflow-hidden p-6 text-left glass-panel sm:col-span-2 group">
            <div className="absolute inset-0 -z-10 bg-secondary/20 mix-blend-multiply transition-transform duration-700 group-hover:scale-105"></div>
            <h3 className="mb-1 text-3xl font-bold text-primary">100+</h3>
            <p className="font-medium text-primary/90">Indigenous trees planted in the past year</p>
          </div>

          {/* Standard Square Card */}
          <div className="flex flex-col items-start justify-center p-6 text-left glass-panel">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-background">
              <FiMapPin />
            </div>
            <h3 className="mb-2 text-xl font-bold text-primary">Local Action</h3>
            <p className="text-sm text-primary/80">Leading clean-ups in our immediate neighborhoods and rivers.</p>
          </div>

          {/* Tall Card */}
          <div className="flex flex-col items-start justify-between p-6 text-left glass-panel md:col-start-3 md:row-span-2 md:row-start-1">
            <div>
              <h3 className="mb-2 text-xl font-bold text-primary">Youth Advocacy</h3>
              <p className="text-sm text-primary/80 leading-relaxed">
                Empowering the next generation with the knowledge and tools to advocate for sustainable environmental policies in their schools and communities.
              </p>
            </div>
            <div className="mt-6 w-full rounded-xl bg-primary/10 p-4">
              <p className="text-center font-bold text-primary">50+ Active Members</p>
            </div>
          </div>

          {/* Wide Card */}
          <div className="flex flex-col items-start justify-center p-6 text-left glass-panel sm:col-span-2">
            <h3 className="mb-2 text-xl font-bold text-primary">Green Education</h3>
            <p className="text-sm text-primary/80">
              Hosting workshops on sustainable waste management, recycling, and climate resilience.
            </p>
          </div>

        </div>
      </section>

      {/* 3. Featured Event Teaser Section (Constrained for readability) */}
      <section className="mx-auto flex w-full max-w-7xl flex-col px-6">
        {/* Section Header */}
        <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="mb-2 text-3xl font-bold tracking-tight text-primary">Upcoming Event</h2>
            <p className="text-primary/80">Get involved and make a direct impact.</p>
          </div>
          <Link href="/events" className="group flex items-center gap-2 font-medium text-primary transition-colors hover:text-primary/80">
            View all events <FiArrowRight className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Featured Event Card */}
        <div className="flex flex-col items-center gap-8 p-6 glass-panel md:flex-row md:p-8">

          {/* Image Container */}
          <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-primary/5 md:aspect-square md:w-1/3 md:min-h-[250px]">
            <Image
              src="/event1.jpeg"
              alt="Donation Drive"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Event Details */}
          <div className="flex w-full flex-col md:w-2/3">
            <div className="mb-3 inline-block w-fit rounded-full bg-secondary/30 px-3 py-1 text-xs font-bold text-primary border border-secondary/50">
              Featured Campaign
            </div>
            <h3 className="mb-3 text-2xl font-bold text-primary">Donation Drive</h3>
            <p className="mb-6 text-sm leading-relaxed text-primary/80 sm:text-base">
              We are opening a donation drive in partnership with the Kenya Redcross team to support those who were affected by the recent flood crisis.
            </p>

            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:gap-6">
              <div className="flex items-center gap-2 text-sm font-medium text-primary/80">
                <FiCalendar className="text-lg text-primary" />
                <span>Sat, May 02 • 11:00 AM</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-primary/80">
                <FiMapPin className="text-lg text-primary" />
                <span>Parklands, Nairobi</span>
              </div>
            </div>

            <div className="mt-auto flex">
              <Link href="https://tuqo.live/event/14/green-milele-donation-drive" target="_blank" rel="noopener noreferrer">
                <Button>RSVP to Event</Button>
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}