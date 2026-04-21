"use client";

import { useState } from "react";
import Button from "./ui/Button";

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    async function handleSubmit(event: React.SyntheticEvent<HTMLFormElement, SubmitEvent>) {
        event.preventDefault();
        setIsSubmitting(true);
        setErrorMessage("");

        const formData = new FormData(event.currentTarget);
        formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "b2c91d38-b930-4330-bba2-51b2af224821");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                setIsSuccess(true);
                // Reset form after success
                event.currentTarget.reset();
            } else {
                setErrorMessage("Something went wrong. Please try again later.");
            }
        } catch (error) {
            setErrorMessage("Network error. Please check your connection and try again.");
        } finally {
            setIsSubmitting(false);
        }
    }

    if (isSuccess) {
        return (
            <div className="flex h-full min-h-[300px] flex-col items-center justify-center rounded-2xl border border-secondary/30 bg-secondary/10 p-8 text-center text-primary">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl text-background">
                    ✓
                </div>
                <h3 className="mb-2 text-2xl font-bold">Message Sent!</h3>
                <p className="text-primary/80">Thank you for reaching out. Our team will get back to you shortly.</p>
                <button
                    onClick={() => setIsSuccess(false)}
                    className="mt-6 text-sm font-medium underline transition-colors hover:text-primary/70"
                >
                    Send another message
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Hidden honeypot field to prevent spam */}
            <input type="checkbox" name="username" className="hidden" style={{ display: "none" }} />

            <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-sm font-medium text-primary">Full Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-xl border border-primary/20 bg-background/50 px-4 py-3 text-primary transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Justus Kang'ethe"
                />
            </div>

            <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-sm font-medium text-primary">Email Address</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full rounded-xl border border-primary/20 bg-background/50 px-4 py-3 text-primary transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="mike@example.com"
                />
            </div>

            <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-sm font-medium text-primary">Your Message</label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full resize-none rounded-xl border border-primary/20 bg-background/50 px-4 py-3 text-primary transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="How would you like to get involved?"
                ></textarea>
            </div>

            {errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}

            <Button type="submit" disabled={isSubmitting} className="mt-2 w-full sm:w-auto">
                {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
        </form>
    );
}