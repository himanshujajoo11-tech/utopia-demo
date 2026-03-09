"use client";

import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-20">
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-black/70 z-10" />

            {/* Background Image Placeholder or Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black z-0">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-overlay" />
            </div>

            <div className="container relative z-20 px-4 md:px-6 mx-auto flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl"
                >
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 uppercase tracking-tighter leading-[1.1]">
                        Forge Your <span className="text-primary inline-block">Strength</span> <br />
                        at Utopia
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="mt-4 text-lg md:text-2xl text-zinc-300 max-w-2xl font-light mb-10"
                >
                    Train harder, build strength, and transform your body in the most motivating gym environment in Amravati.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                >
                    <Link href="#contact" className={cn(buttonVariants({ size: "lg", className: "h-14 px-8 text-lg font-heading uppercase group" }))}>
                        Join Now <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link href="#contact" className={cn(buttonVariants({ size: "lg", variant: "outline", className: "h-14 px-8 text-lg font-heading uppercase bg-transparent text-white border-white hover:bg-white hover:text-black transition-colors" }))}>
                        Book Free Trial
                    </Link>
                </motion.div>
            </div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
        </section>
    );
}
