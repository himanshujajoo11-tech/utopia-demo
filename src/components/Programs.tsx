"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, BicepsFlexed, Timer, TrendingDown, Users, FlameKindling } from "lucide-react";

const programs = [
    {
        title: "Weight Loss Training",
        description: "High-intensity metabolic workouts designed to burn fat and improve cardiovascular endurance rapidly.",
        icon: TrendingDown,
    },
    {
        title: "Muscle Building",
        description: "Hypertrophy-focused routines targeting specific muscle groups for maximum growth and definition.",
        icon: BicepsFlexed,
    },
    {
        title: "Strength Training",
        description: "Powerlifting and heavy compound movements to build raw physical power and structural integrity.",
        icon: FlameKindling,
    },
    {
        title: "Cardio Training",
        description: "Dedicated stamina building exercises utilizing top-tier cardiovascular equipment.",
        icon: Activity,
    },
    {
        title: "Personal Training",
        description: "1-on-1 coaching with expert trainers focusing entirely on your personalized fitness goals.",
        icon: Users,
    },
    {
        title: "Beginner Fitness",
        description: "Foundational instruction ensuring proper form and building confidence for gym newcomers.",
        icon: Timer,
    },
];

export default function Programs() {
    return (
        <section id="programs" className="py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
                >
                    <div className="max-w-2xl">
                        <h2 className="text-sm font-heading font-bold tracking-widest text-primary mb-2">OUR SERVICES</h2>
                        <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tight">Training Programs</h3>
                    </div>
                    <p className="text-muted-foreground text-lg max-w-md text-left md:text-right">
                        Designed for different goals, each program focuses on helping members achieve real fitness progress.
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {programs.map((program, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, type: "spring", stiffness: 100 }}
                        >
                            <Card className="bg-card/50 border-border/50 hover:bg-card hover:border-primary/50 transition-all h-full">
                                <CardHeader>
                                    <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4 text-primary">
                                        <program.icon size={24} />
                                    </div>
                                    <CardTitle className="text-xl font-bold uppercase tracking-wide">{program.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base text-muted-foreground">
                                        {program.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
