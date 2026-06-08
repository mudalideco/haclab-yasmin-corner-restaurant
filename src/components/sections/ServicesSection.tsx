'use client';

import { motion } from 'framer-motion';
import { ChefHat, Truck, PartyPopper } from 'lucide-react';

const services = [
  {
    icon: ChefHat,
    title: 'Outside Catering',
    description: 'Let us bring the feast to you. Perfect for family gatherings, office parties, and celebrations. Fresh, flavorful, and beautifully presented.',
  },
  {
    icon: PartyPopper,
    title: 'Events Management',
    description: 'From corporate galas to intimate weddings — our professional team flawlessly plans and executes events of every scale with precision and flair.',
  },
  {
    icon: Truck,
    title: 'Home & Office Delivery',
    description: 'Craving Yasmin Corner at home or work? We deliver fresh, hot meals straight to your door anywhere in Kampala.',
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium text-sm tracking-widest uppercase">Beyond Dining</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mt-3">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
            More than just a restaurant — we bring the Yasmin Corner experience to you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-surface rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
