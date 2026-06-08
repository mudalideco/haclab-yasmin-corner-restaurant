'use client';

import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Calendar } from 'lucide-react';

const hours = [
  { day: 'Monday - Thursday', hours: '8:00 AM - 10:00 PM' },
  { day: 'Friday', hours: '8:00 AM - 11:00 PM' },
  { day: 'Saturday', hours: '9:00 AM - 11:00 PM' },
  { day: 'Sunday', hours: '10:00 AM - 9:00 PM' },
];

export function LocationHoursSection() {
  return (
    <section id="location" className="py-20 md:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium text-sm tracking-widest uppercase">Visit Us</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mt-3">
            Find Us in{' '}
            <span className="text-primary">Kampala</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
            We&apos;re conveniently located on Clement Hill Road. Stop by for an unforgettable meal.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-md h-[400px] bg-surface"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.757!2d32.582!3d0.313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMTgnNDYuOCJOIDMywrAzNCc1NS4yIkU!5e0!3m2!1sen!2sug!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Yasmin Corner Restaurant location on Clement Hill Road, Kampala"
            />

          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-surface rounded-2xl p-6 shadow-sm space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Address</h3>
                  <p className="text-muted-foreground">Plot 27, Clement Hill Road</p>
                  <p className="text-muted-foreground">Kampala, Uganda</p>
                  <p className="text-sm text-primary mt-1">Opposite Capital Shoppers</p>
                </div>
              </div>

              <div className="w-full h-px bg-border" />

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-2">Opening Hours</h3>
                  <div className="space-y-1.5">
                    {hours.map((item) => (
                      <div key={item.day} className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{item.day}</span>
                        <span className="text-foreground font-medium">{item.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="w-full h-px bg-border" />

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Contact</h3>
                  <p className="text-muted-foreground">+256 794 099 205</p>
                  <p className="text-sm text-muted-foreground">Instagram: @chezyasmine_kgl</p>
                </div>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Yasmin+Corner+Restaurant+Clement+Hill+Road+Kampala"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 transition-all shadow-md"
            >
              <Calendar className="w-4 h-4" />
              Get Directions
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
