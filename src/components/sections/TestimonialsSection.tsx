'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "The best Ugandan food in Kampala! Their luwombo is out of this world. I've been coming here for years and the quality never drops.",
    author: 'Sarah M.',
    role: 'Regular Diner',
    rating: 5,
  },
  {
    quote: "We hired Yasmin Corner for our corporate event and the catering was exceptional. Professional, punctual, and the food was a hit with everyone!",
    author: 'James K.',
    role: 'Corporate Client',
    rating: 5,
  },
  {
    quote: "A hidden gem on Clement Hill Road. The Swahili biryani reminds me of home. The ambiance is warm and the service is always welcoming.",
    author: 'Amina H.',
    role: 'Food Enthusiast',
    rating: 5,
  },
  {
    quote: "Their home delivery service is a lifesaver! Fresh, hot, and delicious. Tastes just like dining in. Highly recommend the matoke!",
    author: 'David O.',
    role: 'Delivery Customer',
    rating: 4,
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium text-sm tracking-widest uppercase">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mt-3">
            What Our{' '}
            <span className="text-primary">Guests Say</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
            Don&apos;t take our word for it — hear from the people who&apos;ve dined with us.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-surface rounded-2xl p-8 shadow-sm border border-border/50 hover:shadow-md transition-all"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating
                        ? 'text-yellow-500 fill-yellow-500'
                        : 'text-muted'
                    }`}
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground/80 leading-relaxed mb-6 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-heading font-bold text-sm">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{testimonial.author}</p>
                  <p className="text-muted-foreground text-xs">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
