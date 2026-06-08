'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'What type of cuisine do you serve?',
    a: 'We serve both Ugandan and Swahili cuisine. Our menu features classics like matoke, luwombo, Ugandan Rolex, Swahili biryani, pilau, samosas, and much more. We also offer fresh juices and traditional African chai.',
  },
  {
    q: 'Do you offer vegetarian or vegan options?',
    a: 'Absolutely! Many of our dishes can be prepared vegetarian or vegan. Our matoke with peanut sauce, vegetable samosas, and fresh vegetable sides are naturally plant-based. Just let us know your preferences.',
  },
  {
    q: 'How do I place a delivery order?',
    a: 'You can order by calling us at +256 794 099 205, sending a WhatsApp message to the same number, or sending us a direct message on Instagram @chezyasmine_kgl. We deliver across Kampala.',
  },
  {
    q: 'What is the delivery time and cost?',
    a: 'Delivery within Kampala typically takes 45-60 minutes. Delivery costs vary by location — please call for a quote. Minimum order of UGX 20,000 for delivery.',
  },
  {
    q: 'Do you take reservations?',
    a: 'Yes! We highly recommend reservations for dinner and weekends. You can use the form on our website, call us, or send a WhatsApp message to reserve your table.',
  },
  {
    q: 'Can you cater for large events?',
    a: 'Definitely! We cater for corporate events, weddings, parties, and all special occasions. Our team can handle events of any size. Contact us for a personalized quote.',
  },
  {
    q: 'Do you have parking available?',
    a: 'Yes, there is ample parking available for our guests. We are located on Clement Hill Road, opposite Capital Shoppers, with convenient access.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept cash, mobile money (MTN & Airtel), and bank transfers for large orders. For in-restaurant dining, we accept cash and mobile money.',
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 md:py-28 bg-muted/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-accent font-medium text-sm tracking-widest uppercase">FAQ</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mt-3">
            Got{' '}
            <span className="text-primary">Questions?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
            Everything you need to know before visiting Yasmin Corner.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
              className="bg-surface rounded-xl overflow-hidden shadow-sm border border-border/50"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left"
                aria-expanded={openIndex === index}
              >
                <span className="font-medium text-foreground pr-4">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-muted-foreground leading-relaxed border-t border-border/50 pt-4">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
