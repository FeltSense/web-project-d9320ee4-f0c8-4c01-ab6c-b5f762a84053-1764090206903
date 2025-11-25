'use client';

import { Check, Zap, Star, Crown } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-slate-900 relative overflow-hidden">
      {/* Ambient glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 bg-pink-600/10 text-pink-400 px-4 py-2 rounded-full mb-6">
            <Crown className="w-4 h-4" />
            <span className="text-sm font-semibold">Limited Time Offer</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-teal-400">Early</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Pre-order HotOrNot and be part of the most addictive social experience. Limited spots available.
          </p>
        </div>

        {/* Pricing Card - Single Featured */}
        <div className="max-w-lg mx-auto">
          <div className="relative">
            {/* Popular Badge */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20">
              <div className="bg-gradient-to-r from-pink-600 to-pink-700 text-white px-6 py-2 rounded-full shadow-xl flex items-center gap-2">
                <Star className="w-4 h-4 fill-current" />
                <span className="font-bold text-sm">FOUNDER ACCESS</span>
              </div>
            </div>

            {/* Main Card */}
            <div className="relative rounded-3xl bg-gradient-to-br from-pink-600 via-pink-700 to-slate-900 p-1 shadow-2xl hover:shadow-pink-500/50 transition-all duration-500 hover:scale-105">
              <div className="rounded-3xl bg-slate-900 p-8 md:p-10 h-full">
                {/* Plan Name */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-3">
                    Pre-Order Edition
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    Lifetime access + exclusive perks
                  </p>
                </div>

                {/* Price */}
                <div className="text-center mb-10">
                  <div className="flex items-start justify-center gap-1 mb-2">
                    <span className="text-2xl text-pink-400 font-bold mt-2">$</span>
                    <span className="text-7xl font-bold tracking-tight text-white">29</span>
                  </div>
                  <p className="text-slate-400">
                    <span className="line-through text-slate-600">$99</span> one-time payment
                  </p>
                  <div className="inline-flex items-center gap-2 bg-teal-500/10 text-teal-400 px-4 py-2 rounded-full mt-3">
                    <Zap className="w-4 h-4" />
                    <span className="text-sm font-semibold">Save $70 • 70% OFF</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-10">
                  {[
                    'Lifetime Premium Access',
                    'Unlimited Hot or Not Votes',
                    'Advanced Match Algorithm',
                    'Exclusive Founder Badge',
                    'Priority Support',
                    'Early Feature Access',
                    'No Ads Ever',
                    'VIP Profile Boost'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="rounded-full bg-pink-600/20 p-1 mt-0.5">
                        <Check className="w-4 h-4 text-pink-400" />
                      </div>
                      <span className="text-slate-300 leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => window.location.href = 'https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00'}
                  className="w-full py-4 bg-pink-600 hover:bg-pink-700 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2 group"
                >
                  <span>Pre-Order Now - $29</span>
                  <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                </button>

                {/* Trust Elements */}
                <div className="mt-6 pt-6 border-t border-slate-800">
                  <div className="flex items-center justify-center gap-6 text-sm text-slate-400">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-teal-400" />
                      <span>Secure Payment</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-teal-400" />
                      <span>Instant Access</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Note */}
          <div className="text-center mt-8">
            <p className="text-slate-400 text-sm">
              🔥 <span className="text-pink-400 font-semibold">127 spots left</span> at this price • Offer ends soon
            </p>
          </div>
        </div>

        {/* FAQ Tease */}
        <div className="mt-20 text-center">
          <p className="text-slate-400 mb-4">Questions about pre-ordering?</p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 font-semibold transition-colors duration-300"
          >
            Contact our team
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
