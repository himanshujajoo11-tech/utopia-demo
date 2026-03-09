"use client";

import { motion } from "framer-motion";
import { Dumbbell, ShieldCheck, Flame, Zap, Target } from "lucide-react";

const features = [
    {
        title: "Hardcore Garage Gym",
        description: "An authentic, gritty environment perfect for serious training.",
        icon: Flame,
    },
    {
        title: "High Quality Equipment",
        description: "Top-of-the-line machinery and free weights for all muscle groups.",
        icon: Dumbbell,
    },
    {
        title: "Motivating Culture",
        description: "Surround yourself with people who push you to be your absolute best.",
        icon: Zap,
    },
    {
        title: "Real Transformations",
        description: "Proven methods and guidance focused on changing bodies.",
        icon: Target,
    },
    {
        title: "Disciplined Space",
        description: "Clean, organized, and focused heavily on the workout.",
        icon: ShieldCheck,
    },
];

export default function WhyChooseUs() {
    return (
        <section className="py-24 bg-zinc-950 relative overflow-hidden">
            {/* Decorative red glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-sm font-heading font-bold tracking-widest text-primary mb-2">WHY CHOOSE UTOPIA</h2>
                    <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-6">Built For Success</h3>
                    <p className="text-lg text-muted-foreground">
                        We are not a standard commercial gym. We provide the hardcore atmosphere and tools needed to break plateaus and achieve your maximum potential.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-background border border-border p-8 rounded-xl hover:border-primary/50 transition-colors group relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-1 h-0 bg-primary group-hover:h-full transition-all duration-300" />
                            <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <feature.icon className="h-7 w-7 text-primary" />
                            </div>
                            <h4 className="text-xl font-bold mb-3 uppercase tracking-wide">{feature.title}</h4>
                            <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
