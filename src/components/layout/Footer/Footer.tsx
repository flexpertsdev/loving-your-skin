import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="bg-white border-t border-border-gray mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-light tracking-wider text-deep-charcoal mb-3">
              LOVING YOUR SKIN
            </h3>
            <p className="text-sm text-text-secondary">
              Korean Beauty, Simplified. Connecting verified brands with international retailers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium text-deep-charcoal mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/how-it-works" className="text-sm text-text-secondary hover:text-rose-gold transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/for-retailers" className="text-sm text-text-secondary hover:text-rose-gold transition-colors">
                  For Retailers
                </Link>
              </li>
              <li>
                <Link to="/for-brands" className="text-sm text-text-secondary hover:text-rose-gold transition-colors">
                  For Brands
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-medium text-deep-charcoal mb-3">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-sm text-text-secondary hover:text-rose-gold transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-text-secondary hover:text-rose-gold transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-text-secondary hover:text-rose-gold transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-medium text-deep-charcoal mb-3">Contact</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>Email: hello@lovingyourskin.com</li>
              <li>WhatsApp: +44 20 1234 5678</li>
              <li>Mon-Fri: 9AM-6PM GMT</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border-gray mt-8 pt-8 text-center">
          <p className="text-sm text-text-secondary">
            © {new Date().getFullYear()} Loving Your Skin. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}