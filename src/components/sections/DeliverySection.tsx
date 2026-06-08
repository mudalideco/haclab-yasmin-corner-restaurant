'use client';

import { motion } from 'framer-motion';
import { Package, Clock, MapPin, CreditCard } from 'lucide-react';

const steps = [
  {
    icon: Package,
    title: 'Choose Your Meal',
    description: 'Browse our menu and pick your favorite dishes from Ugandan & Swahili cuisine.',
  },
  {
    icon: MapPin,
    title: 'Tell Us Where',
    description: 'Provide your delivery address anywhere in Kampala — we deliver city-wide!',
  },
  {
    icon: CreditCard,
    title: 'Order & Pay',
    description: 'Pay on delivery or mobile money. Easy, fast, and secure.',
  },
  {
    icon: Clock,
    title: 'Enjoy Fresh!',
    description: 'Your hot, freshly-prepared meal arrives at your doorstep within 45-60 minutes.',
  },
];

export function DeliverySection() {
  return (
    <section id="delivery" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium text-sm tracking-widest uppercase">Delivery</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mt-3">
            Delivered Hot &{' '}
            <span className="text-primary">Fresh</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
            Can&apos;t make it to the restaurant? We&apos;ll bring Yasmin Corner to you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="relative inline-flex mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  {/* Step number */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-lg font-heading font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center p-8 bg-muted/30 rounded-2xl"
        >
          <p className="text-foreground font-heading text-xl font-bold">
            📞 Order by Phone: <a href="tel:+256794099205" className="text-primary hover:underline">+256 794 099 205</a>
          </p>
          <p className="text-muted-foreground mt-2">Delivery within Kampala — call, WhatsApp, or order via our social media</p>
        </motion.div>
      </div>
    </section>
  );
}
