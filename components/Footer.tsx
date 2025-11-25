'use client'

import { Heart, Instagram, Twitter, Facebook, Youtube, Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  const footerLinks = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#features" },
        { name: "How It Works", href: "#how-it-works" },
        { name: "Pricing", href: "#pricing" },
        { name: "Testimonials", href: "#testimonials" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Contact", href: "#contact" },
        { name: "Careers", href: "#contact" },
        { name: "Press Kit", href: "#contact" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "#contact" },
        { name: "Community", href: "#testimonials" },
        { name: "Support", href: "#contact" },
        { name: "FAQ", href: "#contact" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#contact" },
        { name: "Terms of Service", href: "#contact" },
        { name: "Cookie Policy", href: "#contact" },
        { name: "Guidelines", href: "#contact" }
      ]
    }
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram", color: "hover:text-pink-600" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-pink-600" },
    { icon: Facebook, href: "#", label: "Facebook", color: "hover:text-pink-600" },
    { icon: Youtube, href: "#", label: "Youtube", color: "hover:text-pink-600" }
  ];

  const contactInfo = [
    { icon: Mail, text: "hello@hotornot.com", color: "text-teal-500" },
    { icon: Phone, text: "+1 (555) HOT-VOTE", color: "text-pink-600" },
    { icon: MapPin, text: "San Francisco, CA", color: "text-slate-400" }
  ];

  return (
    <footer className="bg-slate-950 text-white relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-600/10 via-transparent to-teal-500/10 pointer-events-none"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main Footer Content */}
        <div className="py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Brand Column */}
            <div className="lg:col-span-4">
              <Link href="/" className="inline-flex items-center gap-2 mb-6 group">
                <div className="bg-gradient-to-br from-pink-600 to-pink-700 p-3 rounded-2xl shadow-lg group-hover:shadow-pink-600/50 transition-all duration-300">
                  <Heart className="w-8 h-8 text-white fill-white" />
                </div>
                <span className="text-3xl font-bold tracking-tight bg-gradient-to-r from-pink-600 via-pink-500 to-teal-500 bg-clip-text text-transparent">
                  HotOrNot
                </span>
              </Link>
              
              <p className="text-slate-400 leading-relaxed mb-8 text-lg">
                Where instant attraction meets social connection. Rate, match, and discover the hottest profiles in your area.
              </p>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 group">
                    <item.icon className={`w-5 h-5 ${item.color} transition-all duration-300`} />
                    <span className="text-slate-300 group-hover:text-white transition-colors duration-300">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className={`bg-slate-900 p-3 rounded-xl ${social.color} text-slate-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-pink-600/30`}
                  >
                    <social.icon className="w-5 h-5" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Links Grid */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                {footerLinks.map((column, index) => (
                  <div key={index}>
                    <h3 className="font-bold text-white text-lg mb-6 tracking-tight">
                      {column.title}
                    </h3>
                    <ul className="space-y-4">
                      {column.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <Link
                            href={link.href}
                            className="text-slate-400 hover:text-pink-600 transition-colors duration-300 inline-flex items-center gap-2 group"
                          >
                            <span className="w-0 h-0.5 bg-pink-600 group-hover:w-4 transition-all duration-300"></span>
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-slate-800 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold tracking-tight mb-2">
                Stay in the loop
              </h3>
              <p className="text-slate-400">
                Get the latest trends, matches, and exclusive features delivered to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-xl border-2 border-slate-800 bg-slate-900 focus:border-pink-600 focus:ring-2 focus:ring-pink-600/20 py-4 px-5 text-white placeholder:text-slate-500 transition-all duration-300 outline-none"
              />
              <button className="bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 shadow-lg hover:shadow-pink-600/50 hover:scale-105 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-center md:text-left">
              © {new Date().getFullYear()} <span className="text-pink-600 font-semibold">HotOrNot</span>. All rights reserved. Made with{' '}
              <Heart className="w-4 h-4 inline text-pink-600 fill-pink-600 animate-pulse" />{' '}
              for instant connections.
            </p>
            <div className="flex items-center gap-6">
              <Link href="#contact" className="text-slate-500 hover:text-pink-600 transition-colors duration-300 text-sm">
                Privacy
              </Link>
              <Link href="#contact" className="text-slate-500 hover:text-pink-600 transition-colors duration-300 text-sm">
                Terms
              </Link>
              <Link href="#contact" className="text-slate-500 hover:text-pink-600 transition-colors duration-300 text-sm">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-600 via-teal-500 to-pink-600"></div>
    </footer>
  )
}
