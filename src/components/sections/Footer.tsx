'use client';

import { Globe, Camera, MessageCircle, Mail, Phone, MapPin, ChevronUp } from 'lucide-react';

const footerLinks = {
  explore: [
    { label: 'Our Story', href: '#story' },
    { label: 'Menu', href: '#menu' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Location', href: '#location' },
  ],
  services: [
    { label: 'Dine In', href: '#reservation' },
    { label: 'Takeaway', href: '#delivery' },
    { label: 'Delivery', href: '#delivery' },
    { label: 'Catering', href: '#services' },
    { label: 'Events', href: '#services' },
  ],
  contact: [
    { label: 'Plot 27, Clement Hill Road, Kampala', href: '#location', icon: MapPin },
    { label: '+256 794 099 205', href: 'tel:+256794099205', icon: Phone },
    { label: 'info@yasmincorner.ug', href: 'mailto:info@yasmincorner.ug', icon: Mail },
  ],
};

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-background">
      {/* Top decorative border */}
      <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-heading font-bold">
              Yasmin <span className="text-primary">Corner</span>
            </h3>
            <p className="text-background/60 text-sm leading-relaxed">
              Authentic Ugandan & Swahili cuisine in the heart of Kampala. 
              Where every meal tells a story of East African heritage.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/chezyasmine_kgl"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-background/10 hover:bg-background/20 rounded-full flex items-center justify-center transition-all"
                aria-label="Follow us on Instagram"
              >
                <Camera className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-background/10 hover:bg-background/20 rounded-full flex items-center justify-center transition-all"
                aria-label="Follow us on Facebook"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-background/10 hover:bg-background/20 rounded-full flex items-center justify-center transition-all"
                aria-label="Message us on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-background/80 mb-4 uppercase text-sm tracking-wider">Explore</h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/60 hover:text-background transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-background/80 mb-4 uppercase text-sm tracking-wider">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/60 hover:text-background transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-background/80 mb-4 uppercase text-sm tracking-wider">Contact</h4>
            <ul className="space-y-4">
              {footerLinks.contact.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="flex items-start gap-3 text-background/60 hover:text-background transition-colors text-sm group"
                    >
                      {Icon && <Icon className="w-4 h-4 mt-0.5 shrink-0 group-hover:text-primary transition-colors" />}
                      <span>{item.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-background/50 text-xs">
            © {new Date().getFullYear()} Yasmin Corner Restaurant. All rights reserved.
          </p>
          <p className="text-background/50 text-xs">
            Powered by{' '}
            <a
              href="https://haclab.net"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline font-medium text-background/70 hover:text-background"
            >
              Haclab Co Ltd
            </a>
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-background/50 hover:text-background transition-colors text-xs"
            aria-label="Scroll to top"
          >
            Back to top
            <ChevronUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
}
