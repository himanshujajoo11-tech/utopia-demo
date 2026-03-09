"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-24 bg-background border-t border-border/50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 border border-border"
                    >
                        {/* Using a placeholder for gym image with an overlay */}
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center" />
                        <div className="absolute inset-0 bg-background/20" />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-black/40 to-transparent" />
                    </motion.div>

                    {/* Text Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col justify-center"
                    >
                        <h2 className="text-sm font-heading font-bold tracking-widest text-primary mb-2">ABOUT UTOPIA</h2>
                        <h3 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight">
                            Real Training for Real Results
                        </h3>
                        <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                            <p>
                                Utopia Fitness Garage is a dedicated training space designed for people who want real fitness results.
                            </p>
                            <p>
                                With high-quality equipment, a motivating environment, and a strong fitness culture, the gym helps members push their limits and achieve their specific fitness goals.
                            </p>
                            <p>
                                Located in Amravati, Utopia focuses heavily on discipline, strength, and actual physical transformation. We don't just provide a space; we provide the culture to succeed.
                            </p>
                        </div>

                        <div className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-8">
                            <div>
                                <h4 className="text-3xl font-black text-white">100%</h4>
                                <p className="text-sm text-muted-foreground uppercase tracking-widest mt-1">Dedication</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-black text-white">Top</h4>
                                <p className="text-sm text-muted-foreground uppercase tracking-widest mt-1">Equipment</p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
