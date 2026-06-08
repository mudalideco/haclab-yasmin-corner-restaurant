'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const dishes = [
  {
    name: 'Matoke',
    description: 'Steamed green bananas in rich peanut sauce — a Ugandan classic that warms the soul.',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80',
    rating: 4.9,
    tags: ['Traditional', 'Vegan option'],
  },
  {
    name: 'Luwombo',
    description: 'Traditional steamed stew cooked in banana leaves, locking in all the rich flavors.',
    image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?w=600&q=80',
    rating: 4.8,
    tags: ['Signature', 'Slow-cooked'],
  },
  {
    name: 'Swahili Biryani',
    description: 'Fragrant spiced rice layered with tender meat, saffron, and authentic coastal spices.',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&q=80',
    rating: 4.9,
    tags: ['Coastal', 'Aromatic'],
  },
  {
    name: 'Ugandan Rolex',
    description: 'The iconic rolled chapati filled with eggs, veggies, and a hint of spice — Kampala\'s favorite street food.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80',
    rating: 4.7,
    tags: ['Street food', 'Popular'],
  },
];

export function SignatureDishes() {
  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium text-sm tracking-widest uppercase">Signature Flavors</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mt-3">
            Our <span className="text-primary">Signature</span> Dishes
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
            Handpicked dishes that define our culinary identity — each one a celebration of East African flavor.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {dishes.map((dish, index) => (
            <motion.div
              key={dish.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-surface rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 flex flex-col md:flex-row"
            >
              <div className="relative w-full md:w-48 h-48 md:h-auto overflow-hidden shrink-0">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 flex items-center gap-1 bg-white/90 backdrop-blur-sm rounded-full px-2.5 py-1 text-xs font-medium">
                  <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                  {dish.rating}
                </div>
              </div>
              <div className="flex-1 p-6 flex flex-col justify-center">
                <h3 className="text-xl font-heading font-bold text-foreground">{dish.name}</h3>
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{dish.description}</p>
                <div className="flex gap-2 mt-3">
                  {dish.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2.5 py-1 bg-primary/10 text-primary rounded-full font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
