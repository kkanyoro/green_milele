import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { SiWhatsapp } from "react-icons/si";
import { FiUsers, FiMail } from "react-icons/fi";
import Button from "@/components/ui/Button";

export default function JoinPage() {
    return (
        <div className="flex w-full flex-col pb-12 pt-8">

            {/* Header */}
            <section className="mx-auto mb-16 flex w-full max-w-7xl flex-col items-center px-6 text-center">
                <div className="mb-4 inline-block w-fit rounded-full bg-secondary/30 px-3 py-1 text-xs font-bold text-primary border border-secondary/50">
                    Get Involved
                </div>
                <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-primary sm:text-5xl">
                    Join the Movement
                </h1>
                <p className="text-lg leading-relaxed text-primary/80">
                    Whether you want to become an official member, join our community chats, or simply ask a question, we are excited to connect with you.
                </p>
            </section>

            {/* Main Content Grid */}
            <section className="mx-auto flex w-full max-w-8xl flex-col gap-8 px-6 lg:flex-row lg:items-start lg:gap-12">

                {/* Left Column: Action Cards */}
                <div className="flex w-full flex-col gap-6 lg:w-5/12">

                    {/* Become a Member Card */}
                    <div className="flex flex-col items-start p-8 glass-panel transition-transform hover:-translate-y-1">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <FiUsers className="text-2xl" />
                        </div>
                        <h2 className="mb-2 text-2xl font-bold text-primary">Become a Member</h2>
                        <p className="mb-6 text-sm leading-relaxed text-primary/80">
                            Take the next step in your environmental journey. As an official member, you'll get priority RSVPs to our events, voting rights on new initiatives, and discounts on select events.
                        </p>
                        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeZZjefVhyBKIxHErQTZHZadWvx1ADJWGJ9o3bH1kdsWVWpjA/viewform" target="_blank" rel="noopener noreferrer" className="mt-auto w-full">
                            <Button className="w-full">Membership Form</Button>
                        </Link>
                    </div>

                    {/* Join WhatsApp Community Card */}
                    <div className="flex flex-col items-start p-8 glass-panel transition-transform hover:-translate-y-1">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366]/20 text-[#25D366]">
                            <SiWhatsapp className="text-2xl" />
                        </div>
                        <h2 className="mb-2 text-2xl font-bold text-primary">Join our Community</h2>
                        <p className="mb-6 text-sm leading-relaxed text-primary/80">
                            Connect with fellow environmentalists. Our WhatsApp group is the best place to get instant updates, share ideas, and get in touch with the team for quick questions.
                        </p>
                        <Link href="https://chat.whatsapp.com/FJNTM3eXB4a2Yvfv1lzUHp" target="_blank" rel="noopener noreferrer" className="mt-auto w-full">
                            <Button variant="outline" className="w-full border-[#25D366] text-primary hover:bg-[#25D366]/10">
                                Join WhatsApp Community
                            </Button>
                        </Link>
                    </div>

                </div>

                {/* Right Column: Contact Form */}
                <div className="w-full rounded-3xl p-1 lg:w-7/12">
                    <div className="h-full w-full rounded-2xl glass-panel p-6 sm:p-8 md:p-10">
                        <div className="mb-8">
                            <h2 className="flex items-center gap-2 text-2xl font-bold text-primary">
                                <FiMail className="text-xl" /> Drop us a Line
                            </h2>
                            <p className="mt-2 text-sm text-primary/80">
                                Have a specific question, partnership proposal, or want to sponsor an event? Fill out the form below and we will get back to you directly.
                            </p>
                        </div>

                        <ContactForm />
                    </div>
                </div>

            </section>
        </div>
    );
}