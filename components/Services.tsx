'use client';

import { Flame, Heart, Zap, Users } from 'lucide-react';

export default function Services() {
  const features = [
    {
      icon: Flame,
      title: "Instant Attraction Ratings",
      description: "Get real-time feedback on your photos from our vibrant community. See your hotness score rise with every vote.",
      gradient: "from-pink-600 to-pink-700",
      size: "large"
    },
    {
      icon: Heart,
      title: "Match & Connect",
      description: "Turn high ratings into real connections. Meet people who find you irresistible.",
      gradient: "from-teal-500 to-teal-600",
      size: "small"
    },
    {
      icon: Zap,
      title: "Trending Profiles",
      description: "Climb the leaderboard and become the most desired profile of the day.",
      gradient: "from-pink-600 to-pink-700",
      size: "small"
    },
    {
      icon: Users,
      title: "Social Validation",
      description: "Build your confidence with honest feedback from millions of active voters worldwide.",
      gradient: "from-slate-800 to-slate-900",
      size: "small"
    }
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Why Everyone's Addicted to <span className="text-pink-600">HotOrNot</span>
          </h2>
          <p className="text-lg leading-relaxed text-slate-600 max-w-2xl mx-auto">
            Experience the thrill of instant validation and discover your true appeal in the most exciting social rating platform.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Large Feature Card */}
          <div className={`md:col-span-2 rounded-2xl bg-gradient-to-br ${features[0].gradient} p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100`}>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <features[0].icon className="w-8 h-8 text-white" strokeWidth={2} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
                  {features[0].title}
                </h3>
                <p className="text-pink-50 leading-relaxed text-lg mb-6">
                  {features[0].description}
                </p>
                <a 
                  href="#contact" 
                  className="inline-block bg-white text-pink-600 font-semibold rounded-xl px-8 py-4 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>

          {/* Smaller Feature Cards */}
          {features.slice(1).map((feature, index) => (
            <div
              key={index}
              className={`rounded-2xl bg-gradient-to-br ${feature.gradient} p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100`}
            >
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-white/90 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
