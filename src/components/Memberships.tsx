"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const plans = [
    {
        name: "Basic",
        price: "₹999",
        period: "/month",
        description: "Access to gym equipment and workout area.",
        features: [
            "Full Gym Access",
            "Free Weights Area",
            "Cardio Machines",
            "Locker Room Access",
        ],
        popular: false,
    },
    {
        name: "Premium",
        price: "₹1999",
        period: "/month",
        description: "Includes advanced equipment access and trainer guidance.",
        features: [
            "Everything in Basic",
            "Advanced Equipment Access",
            "General Trainer Guidance",
            "Diet Plan Consultation",
        ],
        popular: true,
    },
    {
        name: "Personal",
        price: "₹4999",
        period: "/month",
        description: "Dedicated personal trainer and customized workout program.",
        features: [
            "Everything in Premium",
            "Dedicated Personal Trainer",
            "Customized Workout Program",
            "Weekly Progress Tracking",
            "Advanced Nutrition Plan",
        ],
        popular: false,
    },
];

export default function Memberships() {
    return (
        <section id="memberships" className="py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-sm font-heading font-bold tracking-widest text-primary mb-2">PRICING</h2>
                    <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-6">Membership Plans</h3>
                    <p className="text-muted-foreground text-lg">
                        Choose the plan that fits your fitness goals. Final pricing can be updated at the gym.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
                    {plans.map((plan, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, type: "spring", stiffness: 100 }}
                            className="h-full"
                        >
                            <Card className={`relative h-full flex flex-col bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-colors ${plan.popular ? "border-primary shadow-2xl shadow-primary/10 lg:-translate-y-4" : ""}`}>
                                {plan.popular && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                                        Most Popular
                                    </div>
                                )}
                                <CardHeader className="text-center pb-2">
                                    <CardTitle className="text-2xl font-bold uppercase tracking-wide mb-2">{plan.name}</CardTitle>
                                    <p className="text-muted-foreground text-sm h-10">{plan.description}</p>
                                    <div className="mt-4 flex items-baseline justify-center gap-1">
                                        <span className="text-4xl font-black text-white">{plan.price}</span>
                                        <span className="text-muted-foreground">{plan.period}</span>
                                    </div>
                                </CardHeader>
                                <CardContent className="flex-grow pt-6">
                                    <ul className="space-y-4">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <div className="mt-1 bg-primary/20 p-1 rounded-full text-primary">
                                                    <Check size={14} strokeWidth={3} />
                                                </div>
                                                <span className="text-sm text-zinc-300">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardFooter className="pt-6">
                                    <Link href="#contact" className={cn(buttonVariants({ variant: plan.popular ? "default" : "outline", className: "w-full text-lg h-12 font-heading uppercase tracking-wide" }))}>
                                        Choose Plan
                                    </Link>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
