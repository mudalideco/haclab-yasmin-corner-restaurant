'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, Users, Clock, Send } from 'lucide-react';

export function ReservationSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="reservation" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium text-sm tracking-widest uppercase">Reservation</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mt-3">
            Book Your{' '}
            <span className="text-primary">Table</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
            Reserve your spot at Yasmin Corner. We&apos;re ready to welcome you.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <CalendarDays className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Call to Reserve</h3>
                  <p className="text-muted-foreground text-sm">+256 794 099 205</p>
                  <p className="text-muted-foreground text-sm mt-1">Available during business hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Groups & Events</h3>
                  <p className="text-muted-foreground text-sm">For parties of 8 or more, please call us directly so we can prepare the best experience for your group.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Walk-ins Welcome</h3>
                  <p className="text-muted-foreground text-sm">No reservation? No problem! We always welcome walk-in guests. Reserve only if you want to guarantee your table.</p>
                </div>
              </div>

              <div className="bg-muted/30 rounded-2xl p-6">
                <p className="text-sm text-muted-foreground italic">
                  &ldquo;The warmest welcome in Kampala. Come hungry, leave happy.&rdquo;
                </p>
                <p className="text-sm font-medium text-foreground mt-2">— Yasmin Corner Team</p>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {submitted ? (
                <div className="bg-primary/5 rounded-2xl p-8 text-center flex flex-col items-center justify-center h-full min-h-[300px]">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Send className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-2">Reservation Request Sent!</h3>
                  <p className="text-muted-foreground">We&apos;ll confirm your booking within 30 minutes. See you soon at Yasmin Corner!</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-sm text-primary hover:underline"
                  >
                    Make another reservation
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-surface rounded-2xl p-8 shadow-sm space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2 sm:col-span-1">
                      <label htmlFor="res-name" className="block text-sm font-medium text-foreground mb-1.5">
                        Your Name
                      </label>
                      <input
                        id="res-name"
                        type="text"
                        required
                        placeholder="e.g. John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                      />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <label htmlFor="res-phone" className="block text-sm font-medium text-foreground mb-1.5">
                        Phone Number
                      </label>
                      <input
                        id="res-phone"
                        type="tel"
                        required
                        placeholder="e.g. +256 712 345 678"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="res-date" className="block text-sm font-medium text-foreground mb-1.5">
                        Date
                      </label>
                      <input
                        id="res-date"
                        type="date"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="res-time" className="block text-sm font-medium text-foreground mb-1.5">
                        Time
                      </label>
                      <input
                        id="res-time"
                        type="time"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="res-guests" className="block text-sm font-medium text-foreground mb-1.5">
                      Number of Guests
                    </label>
                    <select
                      id="res-guests"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, '8+'].map((n) => (
                        <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="res-notes" className="block text-sm font-medium text-foreground mb-1.5">
                      Special Requests (Optional)
                    </label>
                    <textarea
                      id="res-notes"
                      rows={3}
                      placeholder="Allergies, celebrations, seating preferences..."
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-xl hover:bg-primary/90 transition-all shadow-md"
                  >
                    <Send className="w-4 h-4" />
                    Request Reservation
                  </button>

                  <p className="text-xs text-center text-muted-foreground">
                    We&apos;ll confirm your reservation within 30 minutes via phone or WhatsApp.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
