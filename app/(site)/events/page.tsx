import Image from "next/image";
import Link from "next/link";
import { client, urlFor } from "@/lib/sanity.client";
import Button from "@/components/ui/Button";
import { FiCalendar, FiMapPin } from "react-icons/fi";

// GROQ Queries to fetch data from Sanity
const EVENTS_QUERY = `*[_type == "event"] | order(date asc) {
  _id,
  title,
  date,
  location,
  description,
  rsvpLink,
  coverImage
}`;

const GALLERY_QUERY = `*[_type == "galleryImage"] | order(_createdAt desc) {
  _id,
  image,
  alt
}`;

export default async function EventsPage() {
    // Fetch both datasets concurrently
    const [events, galleryImages] = await Promise.all([
        client.fetch(EVENTS_QUERY),
        client.fetch(GALLERY_QUERY)
    ]);

    return (
        <div className="flex w-full flex-col pb-12 pt-8">

            {/* Page Header */}
            <section className="mx-auto mb-16 flex w-full max-w-3xl flex-col items-center px-6 text-center">
                <div className="mb-4 inline-block w-fit rounded-full bg-secondary/30 px-3 py-1 text-xs font-bold text-primary border border-secondary/50">
                    Action & Impact
                </div>
                <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-primary sm:text-5xl">
                    Events & Gallery
                </h1>
                <p className="text-lg leading-relaxed text-primary/80">
                    Join us at our upcoming initiatives and explore the impact we've made together in our communities.
                </p>
            </section>

            {/* Upcoming Events */}
            <section className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 mb-24">
                <h2 className="text-3xl font-bold tracking-tight text-primary border-b border-primary/10 pb-4">
                    Upcoming Events
                </h2>

                {events.length === 0 ? (
                    <p className="text-primary/70 italic">No upcoming events scheduled at the moment. Check back soon!</p>
                ) : (
                    <div className="flex flex-col gap-8">
                        {events.map((event: any) => (
                            <div key={event._id} className="flex flex-col gap-6 p-6 glass-panel md:flex-row md:p-8 transition-transform hover:-translate-y-1">

                                {/* Event Image */}
                                {event.coverImage && (
                                    <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-primary/5 md:w-1/3 md:min-h-[200px]">
                                        <Image
                                            src={urlFor(event.coverImage).url()}
                                            alt={event.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                            className="object-cover"
                                        />
                                    </div>
                                )}

                                {/* Event Details */}
                                <div className="flex w-full flex-col md:w-2/3">
                                    <h3 className="mb-3 text-2xl font-bold text-primary">{event.title}</h3>
                                    <p className="mb-6 text-sm leading-relaxed text-primary/80 line-clamp-3">
                                        {event.description}
                                    </p>

                                    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:gap-6">
                                        <div className="flex items-center gap-2 text-sm font-medium text-primary/80">
                                            <FiCalendar className="text-lg text-primary" />
                                            <span>{new Date(event.date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' })}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm font-medium text-primary/80">
                                            <FiMapPin className="text-lg text-primary" />
                                            <span>{event.location}</span>
                                        </div>
                                    </div>

                                    <div className="mt-auto flex flex-wrap gap-4">
                                        {event.rsvpLink && (
                                            <Link href={event.rsvpLink} target="_blank" rel="noopener noreferrer">
                                                <Button>RSVP to Event</Button>
                                            </Link>
                                        )}

                                        <Link href={`/events/${event._id}`}>
                                            <Button variant="outline">View Details & Photos</Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>

            {/* Photo Gallery (Masonry Grid) */}
            <section className="mx-auto flex w-full max-w-7xl flex-col px-6">
                <h2 className="text-3xl font-bold tracking-tight text-primary border-b border-primary/10 pb-4 mb-8">
                    Our Impact in Pictures
                </h2>

                {galleryImages.length === 0 ? (
                    <p className="text-primary/70 italic text-center py-12">Stay tuned for updates in our gallery</p>
                ) : (
                    /* Masonry Layout via Tailwind Columns */
                    <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                        {galleryImages.map((photo: any) => (
                            <div key={photo._id} className="break-inside-avoid relative overflow-hidden rounded-xl glass-panel group">
                                <Image
                                    src={urlFor(photo.image).width(800).url()} // Optimize width for grid
                                    alt={photo.alt || "Green Milele Gallery Image"}
                                    width={800}
                                    height={800} // This is just a placeholder ratio, the CSS layout auto-adjusts height
                                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                />
                            </div>
                        ))}
                    </div>
                )}
            </section>

        </div>
    );
}