import Link from "next/link";
import { SiInstagram, SiTiktok, SiWhatsapp } from "react-icons/si";
import { FiMail } from "react-icons/fi";
import Image from "next/image";
import DonateButton from "./DonateButton";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full border-t border-primary/10 bg-background/80 backdrop-blur-md pt-16 pb-8 mt-auto transition-colors duration-300">
            <div className="mx-auto w-full px-6">

                {/* Grid Layout */}
                <div className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-8">

                    {/* Brand Column */}
                    <div className="flex flex-col gap-4 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2">
                            <Image src="/logo.jpeg" width={60} height={60} alt="GM" className="rounded-full bg-secondary p-0" />
                        </Link>
                        <p className="text-sm text-primary/80 leading-relaxed">
                            A youth-led environmental initiative dedicated to protecting our planet for future generations through action, community, and education.
                        </p>
                    </div>

                    {/* Quick Links Column */}
                    <div className="flex flex-col gap-4">
                        <h3 className="font-semibold text-primary">Quick Links</h3>
                        <ul className="flex flex-col gap-2 text-sm text-primary/80">
                            <li><Link href="/about" className="transition-colors hover:text-primary">About Us</Link></li>
                            <li><Link href="/events" className="transition-colors hover:text-primary">Events & Gallery</Link></li>
                            <li><Link href="/join" className="transition-colors hover:text-primary">Become a Member</Link></li>
                            <li><DonateButton /></li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className="flex flex-col gap-4">
                        <h3 className="font-semibold text-primary">Contact Us</h3>
                        <ul className="flex flex-col gap-3 text-sm text-primary/80">
                            <li>
                                <a href="mailto:greenmilele@gmail.com" className="flex items-center gap-3 transition-colors hover:text-primary">
                                    <FiMail className="text-lg" />
                                    greenmilele@gmail.com
                                </a>
                            </li>
                            <li>
                                <a href="https://wa.me/254718173902" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 transition-colors hover:text-primary">
                                    <SiWhatsapp className="text-lg" />
                                    +254 718173902
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Socials Column */}
                    <div className="flex flex-col gap-4">
                        <h3 className="font-semibold text-primary">Follow Us</h3>
                        <div className="flex items-center gap-5 text-primary/80">
                            <a href="https://www.instagram.com/green_milele/" className="transition-colors hover:text-primary" aria-label="Instagram">
                                <SiInstagram className="text-xl" />
                            </a>
                            <a href="http://tiktok.com/@green.milele" className="transition-colors hover:text-primary" aria-label="Tiktok">
                                <SiTiktok className="text-xl" />
                            </a>
                        </div>
                    </div>

                </div>

                {/* Bottom Section: Copyright */}
                <div className="mt-12 flex flex-col items-center justify-between border-t border-primary/10 pt-8 text-center text-xs text-primary/60 md:flex-row md:text-left">
                    <p>&copy; {currentYear} Green Milele. All rights reserved.</p>
                    <div className="mt-4 flex gap-4 md:mt-0">
                        <Link href="#" className="hover:text-primary">Privacy Policy</Link>
                        <Link href="#" className="hover:text-primary">Terms of Service</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}