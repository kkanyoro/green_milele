import Image from "next/image";
import Link from "next/link";
import { client, urlFor } from "@/lib/sanity.client";
import Button from "@/components/ui/Button";
import { FiCalendar, FiMapPin, FiArrowLeft } from "react-icons/fi";

// params automatically grabs the [id] from URL
export default async function SingleEventPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    // Fetch specific event details
    const EVENT_QUERY = `*[_type == "event" && _id == $id][0]`;

    // Fetch gallery images for the specific event ID
    const PHOTOS_QUERY = `*[_type == "galleryImage" && references($id)] | order(_createdAt desc) {
    _id,
    image,
    alt
  }`;

    // Fetch both concurrently
    const [event, photos] = await Promise.all([
        client.fetch(EVENT_QUERY, { id }),
        client.fetch(PHOTOS_QUERY, { id })
    ]);

    if (!event) {
        return (
            <div className="flex min-h-[50vh] flex-col items-center justify-center text-center px-6">
                <h1 className="text-3xl font-bold text-primary mb-4">Event not found</h1>
                <Link href="/events"><Button variant="outline">Back to Events</Button></Link>
            </div>
        );
    }

    return (
        <div className="flex w-full flex-col pb-12 pt-8">

            {/* Hero Section */}
            <section className="mx-auto w-full max-w-5xl px-6 mb-12">
                <Link href="/events" className="inline-flex items-center gap-2 text-sm font-medium text-primary/70 hover:text-primary mb-8 transition-colors">
                    <FiArrowLeft /> Back to all events
                </Link>

                {event.coverImage && (
                    <div className="relative aspect-video w-full overflow-hidden rounded-3xl glass-panel mb-8">
                        <Image
                            src={urlFor(event.coverImage).url()}
                            alt={event.title}
                            fill
                            priority
                            sizes="(max-width: 1024px) 100vw, 1024px"
                            className="object-cover"
                        />
                    </div>
                )}

                <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                    <div className="flex w-full flex-col md:w-2/3">
                        <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-primary sm:text-5xl">{event.title}</h1>
                        <div className="flex flex-col gap-3 sm:flex-row sm:gap-6 mb-6">
                            <div className="flex items-center gap-2 text-sm font-medium text-primary/80">
                                <FiCalendar className="text-lg text-primary" />
                                <span>{new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', hour: 'numeric', minute: '2-digit' })}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm font-medium text-primary/80">
                                <FiMapPin className="text-lg text-primary" />
                                <span>{event.location}</span>
                            </div>
                        </div>
                        <p className="text-lg leading-relaxed text-primary/80 whitespace-pre-line">
                            {event.description}
                        </p>
                    </div>

                    {event.rsvpLink && (
                        <div className="md:w-1/3 flex md:justify-end">
                            <Link href={event.rsvpLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                                <Button size="lg" className="w-full">RSVP to Event</Button>
                            </Link>
                        </div>
                    )}
                </div>
            </section>

            {/* Event-Specific Gallery */}
            <section className="mx-auto flex w-full max-w-7xl flex-col px-6">
                <h2 className="text-3xl font-bold tracking-tight text-primary border-b border-primary/10 pb-4 mb-8">
                    Event Photos
                </h2>

                {photos.length === 0 ? (
                    <div className="text-center py-12 glass-panel rounded-2xl">
                        <p className="text-primary/70 italic">No photos have been uploaded for this event yet.</p>
                    </div>
                ) : (
                    <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                        {photos.map((photo: any) => (
                            <div key={photo._id} className="break-inside-avoid relative overflow-hidden rounded-xl glass-panel group">
                                <Image
                                    src={urlFor(photo.image).width(800).url()}
                                    alt={photo.alt || `Photo from ${event.title}`}
                                    width={800}
                                    height={800}
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