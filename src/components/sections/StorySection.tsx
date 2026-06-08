'use client';

import { motion } from 'framer-motion';

export function StorySection() {
  return (
    <section id="story" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80"
                alt="Yasmin Corner Restaurant interior - warm dining atmosphere"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-primary/10" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-accent/30 rounded-2xl -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="space-y-6"
          >
            <span className="text-accent font-medium text-sm tracking-widest uppercase">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
              A Taste of{' '}
              <span className="text-primary">East Africa</span>
            </h2>
            <div className="w-20 h-1 bg-accent rounded-full" />
            <p className="text-muted-foreground text-lg leading-relaxed">
              Nestled on Clement Hill Road in the heart of Kampala, Yasmin Corner Restaurant was born from a love for East Africa&apos;s rich culinary heritage. We serve both local Ugandan favorites and vibrant Swahili dishes — because we believe great food brings people together.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Whether you&apos;re craving a comforting plate of matoke, a fragrant Swahili biryani, or a lively gathering with friends, our doors are open and our kitchen is ready to welcome you.
            </p>
            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <img
                    key={i}
                    src={`https://images.unsplash.com/photo-${i === 1 ? '1507003211169-0a1dd7228f2d' : i === 2 ? '1496345875659-11f7dd282d1d' : '1438761681033-6461ffad8d80'}?w=64&h=64&fit=crop&crop=face&q=80`}
                    alt="Happy customer"
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>
              <div>
                <p className="font-semibold text-foreground">Loved by Kampala</p>
                <p className="text-sm text-muted-foreground">Join hundreds of happy diners</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
