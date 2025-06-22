import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Button from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { ChevronRight, Globe, Shield, Users, TrendingUp, Package, HeartHandshake } from 'lucide-react'

const Landing = () => {
  const { t } = useTranslation()
  
  const features = [
    {
      icon: Globe,
      title: t('landing.features.globalReach.title'),
      description: t('landing.features.globalReach.description')
    },
    {
      icon: Shield,
      title: t('landing.features.verifiedPartners.title'),
      description: t('landing.features.verifiedPartners.description')
    },
    {
      icon: Users,
      title: t('landing.features.directConnection.title'),
      description: t('landing.features.directConnection.description')
    },
    {
      icon: TrendingUp,
      title: t('landing.features.marketInsights.title'),
      description: t('landing.features.marketInsights.description')
    },
    {
      icon: Package,
      title: t('landing.features.smartLogistics.title'),
      description: t('landing.features.smartLogistics.description')
    },
    {
      icon: HeartHandshake,
      title: t('landing.features.dedicatedSupport.title'),
      description: t('landing.features.dedicatedSupport.description')
    }
  ]

  const testimonials = [
    {
      quote: "LYS transformed how we source K-beauty. The quality and authenticity are unmatched.",
      author: "Sarah Chen",
      company: "Beauty Boutique London",
      location: "UK"
    },
    {
      quote: "Finally, a platform that understands both Korean brands and international retail needs.",
      author: "Marie Dubois",
      company: "Belle Cosmétiques",
      location: "France"
    },
    {
      quote: "The consolidated shipping saves us thousands. Plus, the brands are amazing!",
      author: "Elena Müller",
      company: "Skin Paradise",
      location: "Switzerland"
    }
  ]

  const stats = [
    { number: '150+', label: t('landing.stats.brands') },
    { number: '5000+', label: t('landing.stats.products') },
    { number: '500+', label: t('landing.stats.retailers') },
    { number: '25', label: t('landing.stats.countries') }
  ]

  return (
    <div className="min-h-screen bg-soft-pink/10">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-soft-pink to-white pt-20 pb-32">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-light text-deep-charcoal mb-6 tracking-tight">
              {t('landing.hero.title')}
              <span className="block text-rose-gold font-normal">{t('landing.hero.titleHighlight')}</span>
            </h1>
            <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
              {t('landing.hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button size="lg">{t('landing.hero.ctaPrimary')}</Button>
              </Link>
              <Link to="/how-it-works">
                <Button variant="outline" size="lg">{t('landing.hero.ctaSecondary')}</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-y border-border-gray">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-light text-rose-gold mb-2">{stat.number}</div>
                <div className="text-sm text-text-secondary uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-deep-charcoal mb-4">
              {t('landing.features.title')}
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              {t('landing.features.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-rose-gold/10 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-rose-gold" />
                  </div>
                  <h3 className="text-xl font-medium text-deep-charcoal mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-soft-pink/20 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-deep-charcoal mb-4">
              {t('landing.testimonials.title')}
            </h2>
            <p className="text-lg text-text-secondary">
              {t('landing.testimonials.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 bg-white">
                <div className="text-6xl text-rose-gold/20 mb-4">"</div>
                <p className="text-text-secondary mb-6 italic">
                  {testimonial.quote}
                </p>
                <div>
                  <p className="font-medium text-deep-charcoal">{testimonial.author}</p>
                  <p className="text-sm text-text-secondary">
                    {testimonial.company} • {testimonial.location}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-rose-gold text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-light mb-6">
            {t('landing.cta.title')}
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t('landing.cta.subtitle')}
          </p>
          <Link to="/register">
            <Button size="lg" variant="secondary">
              {t('landing.cta.button')}
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-light text-deep-charcoal mb-4">
                {t('landing.contact.title')}
              </h2>
              <p className="text-lg text-text-secondary">
                {t('landing.contact.subtitle')}
              </p>
            </div>
            
            <Card className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                      {t('landing.contact.form.name')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-border-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-gold/20 focus:border-rose-gold"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-text-primary mb-2">
                      {t('landing.contact.form.company')}
                    </label>
                    <input
                      type="text"
                      id="company"
                      className="w-full px-4 py-3 border border-border-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-gold/20 focus:border-rose-gold"
                      placeholder="Beauty Store Ltd."
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                    {t('landing.contact.form.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-border-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-gold/20 focus:border-rose-gold"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-text-primary mb-2">
                    {t('landing.contact.form.country')}
                  </label>
                  <select
                    id="country"
                    className="w-full px-4 py-3 border border-border-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-gold/20 focus:border-rose-gold"
                  >
                    <option>{t('landing.contact.form.selectCountry')}</option>
                    <option>United Kingdom</option>
                    <option>France</option>
                    <option>Germany</option>
                    <option>Switzerland</option>
                    <option>Netherlands</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                    {t('landing.contact.form.message')}
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-border-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-gold/20 focus:border-rose-gold"
                    placeholder={t('landing.contact.form.messagePlaceholder')}
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full">
                  {t('landing.contact.form.submit')}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Landing