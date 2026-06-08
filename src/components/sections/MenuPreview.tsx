'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UtensilsCrossed, Coffee, Wine } from 'lucide-react';

const categories = [
  { id: 'ugandan', label: 'Ugandan Cuisine', icon: UtensilsCrossed },
  { id: 'swahili', label: 'Swahili Cuisine', icon: Coffee },
  { id: 'beverages', label: 'Beverages', icon: Wine },
];

const menuItems: Record<string, { name: string; price: string; description: string }[]> = {
  ugandan: [
    { name: 'Matoke with Peanut Sauce', price: 'UGX 15,000', description: 'Steamed green bananas in rich groundnut sauce' },
    { name: 'Luwombo (Chicken)', price: 'UGX 25,000', description: 'Chicken steamed in banana leaves with spices' },
    { name: 'Luwombo (Beef)', price: 'UGX 22,000', description: 'Tender beef slow-cooked in banana leaves' },
    { name: 'Ugandan Rolex', price: 'UGX 8,000', description: 'Chapati rolled with eggs, cabbage, and tomatoes' },
    { name: 'Katogo (Mixed)', price: 'UGX 18,000', description: 'Green bananas cooked with beef or offal' },
    { name: 'Posho & Beans', price: 'UGX 10,000', description: 'Cornmeal served with seasoned beans' },
  ],
  swahili: [
    { name: 'Swahili Biryani (Chicken)', price: 'UGX 28,000', description: 'Fragrant spiced rice with tender chicken' },
    { name: 'Swahili Biryani (Beef)', price: 'UGX 25,000', description: 'Aromatic basmati with spiced beef' },
    { name: 'Samosa (Beef, 3 pcs)', price: 'UGX 6,000', description: 'Crispy pastry filled with spiced minced beef' },
    { name: 'Samosa (Vegetable, 3 pcs)', price: 'UGX 5,000', description: 'Crispy pastry with seasoned vegetables' },
    { name: 'Pilau (Chicken)', price: 'UGX 22,000', description: 'Spiced rice cooked in chicken broth' },
    { name: 'Mishkaki (Beef Skewers)', price: 'UGX 20,000', description: 'Grilled marinated beef skewers' },
  ],
  beverages: [
    { name: 'Fresh Passion Juice', price: 'UGX 5,000', description: 'Freshly squeezed passion fruit juice' },
    { name: 'Fresh Mango Juice', price: 'UGX 5,000', description: 'Sweet ripe mango blended to perfection' },
    { name: 'Rolex Special Smoothie', price: 'UGX 7,000', description: 'Tropical fruit medley smoothie' },
    { name: 'Soda (Coca-Cola, Fanta, Sprite)', price: 'UGX 3,000', description: 'Chilled bottled sodas' },
    { name: 'Mineral Water (1L)', price: 'UGX 3,000', description: 'Pure bottled water' },
    { name: 'African Tea (Chai)', price: 'UGX 4,000', description: 'Traditional spiced East African tea' },
  ],
};

export function MenuPreview() {
  const [activeCategory, setActiveCategory] = useState('ugandan');

  return (
    <section id="menu" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-accent font-medium text-sm tracking-widest uppercase">Our Menu</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mt-3">
            Flavors That{' '}
            <span className="text-primary">Tell a Story</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
            From Ugandan classics to Swahili coastal specialties — every dish is crafted with love.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                <Icon className="w-4 h-4" />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Menu Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="max-w-3xl mx-auto"
          >
            <div className="space-y-4">
              {menuItems[activeCategory].map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start justify-between p-4 rounded-xl hover:bg-muted/50 transition-colors group"
                >
                  <div className="flex-1 pr-4">
                    <h3 className="text-lg font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                  </div>
                  <span className="text-base font-bold text-accent whitespace-nowrap mt-1">{item.price}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
