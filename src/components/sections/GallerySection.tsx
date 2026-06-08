'use client';

import { motion } from 'framer-motion';

const images = [
  { src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80', alt: 'Warm restaurant interior with elegant lighting' },
  { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80', alt: 'Beautifully plated dish at Yasmin Corner' },
  { src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80', alt: 'Cozy dining area with African decor' },
  { src: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&q=80', alt: 'Fresh ingredients being prepared in the kitchen' },
  { src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80', alt: 'Restaurant ambiance with warm candlelight' },
  { src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80', alt: 'Signature dish presentation' },
  { src: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=600&q=80', alt: 'Outdoor dining area at Yasmin Corner' },
  { src: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80', alt: 'Fresh salads and appetizers' },
];

export function GallerySection() {
  return (
    <section id="gallery" className="py-20 md:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium text-sm tracking-widest uppercase">Gallery</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mt-3">
            A Visual{' '}
            <span className="text-primary">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
            Step inside Yasmin Corner — where every corner tells a story.
          </p>
        </motion.div>

        {/* Masonry-like grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {images.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="break-inside-avoid overflow-hidden rounded-2xl group relative"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
