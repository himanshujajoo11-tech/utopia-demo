"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
    {
        name: "Member",
        quote: "One of the best gyms in Amravati. The environment is very motivating and the trainers are supportive.",
    },
    {
        name: "Member",
        quote: "Perfect place for serious fitness training. Great equipment and strong gym culture.",
    },
    {
        name: "Member",
        quote: "I joined for weight loss and the results have been amazing.",
    },
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-24 bg-zinc-950 border-t border-border relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-sm font-heading font-bold tracking-widest text-primary mb-2"
                    >
                        MEMBER FEEDBACK
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black uppercase tracking-tight"
                    >
                        Testimonials
                    </motion.h3>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.15 }}
                        >
                            <Card className="h-full bg-background/50 border-border/50 hover:border-primary/50 transition-colors pt-6">
                                <CardContent className="flex flex-col h-full relative">
                                    <div className="absolute -top-4 right-6 text-primary/20">
                                        <Quote size={48} />
                                    </div>
                                    <div className="flex gap-1 mb-6 mt-2">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star key={star} size={18} className="fill-primary text-primary" />
                                        ))}
                                    </div>
                                    <p className="text-muted-foreground text-lg leading-relaxed flex-grow italic mb-6">
                                        "{t.quote}"
                                    </p>
                                    <p className="font-heading font-bold uppercase tracking-wider text-white">
                                        - {t.name}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
