"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export default function LeadCaptureForm() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
        }, 1500);
    };

    if (isSubmitted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-primary/20 border border-primary/50 p-8 rounded-2xl flex flex-col items-center justify-center text-center h-full min-h-[400px]"
            >
                <CheckCircle2 size={64} className="text-primary mb-6" />
                <h4 className="text-2xl font-black uppercase text-white mb-2">Request Received!</h4>
                <p className="text-muted-foreground">We will contact you shortly to schedule your free trial session. Get ready to forge your strength.</p>
                <Button
                    variant="outline"
                    className="mt-8 border-primary text-primary hover:bg-primary hover:text-white"
                    onClick={() => setIsSubmitted(false)}
                >
                    Submit Another Request
                </Button>
            </motion.div>
        );
    }

    return (
        <div className="bg-card/50 backdrop-blur-md border border-border/50 p-8 md:p-10 rounded-2xl shadow-xl h-full">
            <div className="mb-8">
                <h3 className="text-3xl font-black uppercase tracking-tight text-white mb-2">Book Free Trial</h3>
                <p className="text-muted-foreground">Start your transformation today. Fill out the form and we'll be in touch.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                    <Label htmlFor="name" className="text-white">Full Name</Label>
                    <Input id="name" required placeholder="John Doe" className="bg-background/50 border-border h-12 text-base" />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="phone" className="text-white">Phone Number</Label>
                    <Input id="phone" type="tel" required placeholder="+91 98765 43210" className="bg-background/50 border-border h-12 text-base" />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="goal" className="text-white">Primary Fitness Goal</Label>
                    <select
                        id="goal"
                        required
                        className="flex h-12 w-full items-center justify-between rounded-md border border-input bg-background/50 px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        <option value="" disabled selected hidden>Select your goal</option>
                        <option value="weight-loss" className="bg-background text-white">Weight Loss</option>
                        <option value="muscle-building" className="bg-background text-white">Muscle Building</option>
                        <option value="strength" className="bg-background text-white">Strength Training</option>
                        <option value="general-fitness" className="bg-background text-white">General Fitness</option>
                    </select>
                </div>

                <Button type="submit" size="lg" className="w-full h-14 text-lg font-heading uppercase tracking-wide mt-4" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Book Free Trial"}
                </Button>
            </form>
        </div>
    );
}
