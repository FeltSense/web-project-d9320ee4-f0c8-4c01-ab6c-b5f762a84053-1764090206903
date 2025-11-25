'use client';

import Image from 'next/image';

export default function Hero() {
  const stats = [
    { value: '10M+', label: 'Active Users' },
    { value: '500M+', label: 'Ratings Made' },
    { value: '2M+', label: 'Daily Matches' },

  
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920&q=80"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-600/95 via-pink-700/90 to-slate-900/95"></div>
        
        {/* Animated gradient orbs for depth */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 md:py-32 text-center">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8 shadow-xl">
          <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
          <span className="text-white font-semibold text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
            Join millions making instant attraction decisions
          </span>
        </div>

        {/* Main Headline */}
        <h1 
          className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          Rate. Match. Connect.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-pink-300">
            Instantly.
          </span>
        </h1>

        {/* Subheadline */}
        <p 
          className="text-xl md:text-2xl text-white/90 font-normal leading-relaxed max-w-3xl mx-auto mb-12"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          The most addictive way to discover attraction. Swipe, rate, and find your perfect match with our revolutionary instant-feedback platform.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
          <a
            href="#contact"
            className="bg-white text-pink-600 hover:bg-slate-50 font-semibold rounded-xl px-10 py-5 transition-all duration-300 shadow-2xl hover:shadow-white/20 hover:scale-105 text-lg"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Start Rating Now
          </a>
          <a
            href="#services"
            className="border-2 border-white text-white hover:bg-white hover:text-pink-600 font-semibold rounded-xl px-10 py-5 transition-all duration-300 backdrop-blur-sm text-lg"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            See How It Works
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="relative group"
            >
              <div className="absolute inset-0 bg-white/5 backdrop-blur-md rounded-2xl transform group-hover:scale-105 transition-all duration-500"></div>
              <div className="relative p-8 border border-white/10 rounded-2xl">
                <div 
                  className="text-4xl md:text-5xl font-bold text-white mb-2"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  {stat.value}
                </div>
                <div 
                  className="text-white/80 font-medium"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg 
            className="w-6 h-6 text-white/60" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
}
