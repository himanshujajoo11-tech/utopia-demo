"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Instagram, Send } from "lucide-react";
import LeadCaptureForm from "./LeadCaptureForm";

export default function Contact() {
    const phoneNumber = "+919175270853";

    return (
        <section id="contact" className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                    {/* Contact Info Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col"
                    >
                        <h2 className="text-sm font-heading font-bold tracking-widest text-primary mb-2">GET IN TOUCH</h2>
                        <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-8">
                            Ready to Forge<br />
                            <span className="text-primary">Your Strength?</span>
                        </h3>

                        <div className="space-y-8 mb-12">
                            <div className="flex gap-4">
                                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                    <MapPin className="text-primary h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-lg mb-1">Location</h4>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Shilpkala Colony, Shegaon - Rahatgaon Rd<br />
                                        Amravati, Maharashtra 444604
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                    <Phone className="text-primary h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-lg mb-1">Call Us</h4>
                                    <p className="text-muted-foreground leading-relaxed">
                                        <a href={`tel:${phoneNumber}`} className="hover:text-primary transition-colors">+91 91752 70853</a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Google Maps Iframe */}
                        <div className="w-full h-[300px] bg-zinc-900 rounded-xl overflow-hidden border border-border">
                            {/* Note: This is a placeholder map link to Amravati region loosely, a real GMAPS embed code for the specific coordinate is recommended. We use a general Amravati embed here as fallback. */}
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119159.43572856003!2d77.67487227443657!3d20.93202970591147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd6a4a6777cdbad%3A0xe212bebf2b4cd2w2!2sAmravati%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(100%)" }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                        {/* Note on map filter: The CSS filter invert maps Google Maps to a dark theme. */}

                    </motion.div>

                    {/* Form Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="h-full"
                    >
                        <LeadCaptureForm />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
