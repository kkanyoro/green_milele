"use client";

import { useState } from "react";
import { FiHeart, FiX } from "react-icons/fi";

export default function DonateButton({ className = "" }: { className?: string }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const mchangaLink = "https://www.mchanga.africa/fundraiser/101784";
    const mpesaPaybill = "891300";
    const mpesaAccount = "101784";

    return (
        <>
            <button
                onClick={() => setIsModalOpen(true)}
                className={`flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-2.5 font-medium text-background shadow-md transition-all hover:bg-primary/90 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/50 ${className}`}
            >
                <FiHeart className="text-lg" />
                Donate
            </button>

            {isModalOpen && (
                <div className="fixed inset-0 z-[100] flex h-[100dvh] w-screen items-center justify-center bg-black/40 p-4 backdrop-blur-sm transition-opacity">
                    <div className="relative w-full max-w-md animate-in zoom-in-95 fade-in glass-panel p-6 pt-12 duration-200 sm:p-8 sm:pt-14">
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute right-4 top-4 z-50 flex h-8 w-8 items-center justify-center rounded-full text-primary/60 transition-colors hover:bg-primary/10 hover:text-primary focus:outline-none"
                            aria-label="Close modal"
                        >
                            <FiX className="text-xl" />
                        </button>

                        <h3 className="mb-2 text-2xl font-bold text-primary">Support Our Cause</h3>
                        <p className="mb-6 text-sm text-primary/80">
                            Your contribution helps us protect the environment for future generations. Choose a way to give below.
                        </p>

                        <div className="relative z-10 flex flex-col gap-4">
                            <a
                                href={mchangaLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex w-full items-center justify-center rounded-xl bg-primary py-3 font-medium text-background transition-all hover:bg-primary/90"
                            >
                                Donate via M-Changa
                            </a>

                            <span className="text-center text-sm text-primary/80">OR</span>

                            <div className="rounded-xl border border-primary/20 bg-background/50 p-4">
                                <h4 className="mb-2 font-semibold text-primary">M-Pesa Paybill</h4>
                                <div className="mb-1 flex justify-between text-sm text-primary/80">
                                    <span>Business No:</span>
                                    <span className="font-mono font-bold text-primary">{mpesaPaybill}</span>
                                </div>
                                <div className="flex justify-between text-sm text-primary/80">
                                    <span>Account No:</span>
                                    <span className="font-mono font-bold text-primary">{mpesaAccount}</span>
                                </div>
                            </div>

                            {/* FUTURE OPTION: Bank Details (Currently commented out) */}
                            {/* <div className="rounded-xl border border-primary/20 bg-background/50 p-4">
                            <h4 className="mb-2 font-semibold text-primary">Direct Bank Transfer</h4>
                            <div className="flex justify-between text-sm text-primary/80 mb-1">
                            <span>Bank Name:</span>
                            <span className="font-medium text-primary">Equity Bank</span>
                            </div>
                            <div className="flex justify-between text-sm text-primary/80 mb-1">
                            <span>Account Name:</span>
                            <span className="font-medium text-primary">Green Milele</span>
                            </div>
                            <div className="flex justify-between text-sm text-primary/80">
                            <span>Account No:</span>
                            <span className="font-mono font-bold text-primary">0000000000000</span>
                            </div>
                        </div>
                        */}

                        </div>
                    </div>
                </div>
            )}
        </>
    );
}