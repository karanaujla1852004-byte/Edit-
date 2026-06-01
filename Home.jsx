import React, { useState } from 'react';
import { 
  Video, 
  Smartphone, 
  Briefcase, 
  PlayCircle, 
  Music, 
  Palette,
  Mail,
  MessageCircle,
  Star,
  Clock,
  ArrowRight,
  Check,
  Menu,
  X
} from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { services, portfolioItems, testimonials, stats } from '../mock';

const iconMap = {
  video: Video,
  smartphone: Smartphone,
  briefcase: Briefcase,
  'play-circle': PlayCircle,
  music: Music,
  palette: Palette
};

const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(portfolioItems.map(item => item.category))];
  const filteredPortfolio = selectedCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-rose-500 rounded-lg flex items-center justify-center">
                <Video className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-900">LuxCut Media</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('services')} className="text-slate-600 hover:text-slate-900 transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="text-slate-600 hover:text-slate-900 transition-colors">
                Portfolio
              </button>
              <button onClick={() => scrollToSection('about')} className="text-slate-600 hover:text-slate-900 transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-slate-600 hover:text-slate-900 transition-colors">
                Contact
              </button>
            </nav>

            <Button 
              onClick={() => scrollToSection('contact')} 
              className="hidden md:flex bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white"
            >
              Get Started
            </Button>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-slate-900"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200">
            <div className="px-4 py-4 space-y-3">
              <button onClick={() => scrollToSection('services')} className="block w-full text-left text-slate-600 hover:text-slate-900">
                Services
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="block w-full text-left text-slate-600 hover:text-slate-900">
                Portfolio
              </button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left text-slate-600 hover:text-slate-900">
                About
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-slate-600 hover:text-slate-900">
                Contact
              </button>
              <Button 
                onClick={() => scrollToSection('contact')} 
                className="w-full bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white"
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100 border-orange-200">
                  Professional Video Editing Services
                </Badge>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Transform Your Vision Into 
                <span className="bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent"> Stunning Videos</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Professional video editing that brings your stories to life. From commercials to social media content, I deliver high-quality edits that captivate your audience.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  onClick={() => scrollToSection('portfolio')}
                  className="bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white px-8"
                >
                  View Portfolio
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => scrollToSection('contact')}
                  className="border-slate-300 hover:bg-slate-50"
                >
                  Get in Touch
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="space-y-1">
                    <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
                    <div className="text-sm text-slate-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=600&fit=crop" 
                  alt="Video editing workspace"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-rose-500 rounded-lg flex items-center justify-center">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Fast Delivery</div>
                    <div className="text-sm text-slate-600">24-48 hours turnaround</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100 border-orange-200">
              What I Offer
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">My Services</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive video editing solutions tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = iconMap[service.icon];
              return (
                <Card key={service.id} className="border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-rose-500 rounded-xl flex items-center justify-center">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100 border-orange-200">
              My Work
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">Portfolio</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              A showcase of recent projects and creative work
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category 
                  ? "bg-gradient-to-r from-orange-500 to-rose-500 text-white" 
                  : "border-slate-300 hover:bg-slate-50"}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPortfolio.map((item) => (
              <Card key={item.id} className="group overflow-hidden border-slate-200 hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={item.thumbnail} 
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/90 text-slate-900">{item.category}</Badge>
                  </div>
                  <div className="absolute bottom-4 right-4 flex items-center space-x-1 bg-black/60 px-2 py-1 rounded">
                    <Clock className="w-3 h-3 text-white" />
                    <span className="text-xs text-white">{item.duration}</span>
                  </div>
                </div>
                <CardContent className="p-6 space-y-2">
                  <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100 border-orange-200">
              Client Feedback
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">What Clients Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border-slate-200 hover:shadow-xl transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
                    ))}
                  </div>
                  <p className="text-slate-700 leading-relaxed italic">"{testimonial.text}"</p>
                  <div className="pt-4 border-t border-slate-200">
                    <div className="font-bold text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-slate-600">{testimonial.role} at {testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?w=800&h=600&fit=crop" 
                alt="About me"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
            <div className="space-y-6">
              <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100 border-orange-200">
                About Me
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">Crafting Stories Through Video</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  With over 5 years of experience in video editing, I've had the privilege of working with brands, content creators, and businesses across various industries. My passion lies in transforming raw footage into compelling narratives that resonate with audiences.
                </p>
                <p>
                  I specialize in creating high-quality video content that not only looks stunning but also drives results. Whether it's a commercial campaign, social media content, or a music video, I bring creativity, technical expertise, and attention to detail to every project.
                </p>
                <p>
                  My approach combines the latest editing techniques with a deep understanding of storytelling, ensuring your message is delivered powerfully and memorably.
                </p>
              </div>
              <div className="space-y-3 pt-4">
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-orange-500" />
                  <span className="text-slate-700">5+ years of professional experience</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-orange-500" />
                  <span className="text-slate-700">500+ successful projects delivered</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-orange-500" />
                  <span className="text-slate-700">Fast turnaround time (24-48 hours)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-orange-500" />
                  <span className="text-slate-700">Unlimited revisions until you're satisfied</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100 border-orange-200">
              Get in Touch
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">Let's Work Together</h2>
            <p className="text-xl text-slate-600">
              Ready to bring your video project to life? Contact me today!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-rose-500 rounded-xl flex items-center justify-center">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Email Me</h3>
                <p className="text-slate-600">Send me an email and I'll get back to you within 24 hours.</p>
                <a 
                  href="mailto:editor@example.com" 
                  className="inline-flex items-center space-x-2 text-orange-600 hover:text-orange-700 font-medium transition-colors"
                >
                  <span>editor@example.com</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </CardContent>
            </Card>

            <Card className="border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-rose-500 rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">WhatsApp</h3>
                <p className="text-slate-600">Message me on WhatsApp for quick responses and discussions.</p>
                <a 
                  href="https://wa.me/919815235805" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-orange-600 hover:text-orange-700 font-medium transition-colors"
                >
                  <span>+91 98152 35805</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </CardContent>
            </Card>
          </div>

          {/* CTA Card */}
          <Card className="mt-12 border-0 bg-gradient-to-br from-orange-500 to-rose-500 text-white">
            <CardContent className="p-12 text-center space-y-6">
              <h3 className="text-3xl font-bold">Ready to Get Started?</h3>
              <p className="text-lg text-white/90 max-w-2xl mx-auto">
                Let's discuss your project and create something amazing together. Professional video editing that exceeds expectations.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  size="lg"
                  className="bg-white text-orange-600 hover:bg-slate-50 px-8"
                  onClick={() => window.location.href = 'mailto:editor@example.com'}
                >
                  Send Email
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 px-8"
                  onClick={() => window.open('https://wa.me/919815235805', '_blank')}
                >
                  Message on WhatsApp
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-rose-500 rounded-lg flex items-center justify-center">
                  <Video className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">LuxCut Media</span>
              </div>
              <p className="text-slate-400">
                Professional video editing services that transform your vision into reality.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-bold">Quick Links</h4>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('services')} className="block text-slate-400 hover:text-white transition-colors">
                  Services
                </button>
                <button onClick={() => scrollToSection('portfolio')} className="block text-slate-400 hover:text-white transition-colors">
                  Portfolio
                </button>
                <button onClick={() => scrollToSection('about')} className="block text-slate-400 hover:text-white transition-colors">
                  About
                </button>
                <button onClick={() => scrollToSection('contact')} className="block text-slate-400 hover:text-white transition-colors">
                  Contact
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-bold">Contact</h4>
              <div className="space-y-3">
                <a href="mailto:editor@example.com" className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                  <span>editor@example.com</span>
                </a>
                <a href="https://wa.me/919815235805" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors">
                  <MessageCircle className="w-5 h-5" />
                  <span>+91 98152 35805</span>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p>&copy; {new Date().getFullYear()} LuxCut Media. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
