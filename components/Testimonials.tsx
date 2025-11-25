'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "HotOrNot completely changed how I connect with people. The instant feedback is addictive and the community is incredibly vibrant. I've met so many amazing people!",
      name: "Sarah Mitchell",
      role: "Content Creator",
      avatar: "https://i.pravatar.cc/150?img=5",
      rating: 5
    },
    {
      quote: "The most exciting social platform I've used in years. The bold design and instant attraction feature makes every interaction feel electric. Can't stop using it!",
      name: "Marcus Chen",
      role: "Digital Marketer",
      avatar: "https://i.pravatar.cc/150?img=12",
      rating: 5
    },
    {
      quote: "Finally, a social app that's honest and fun. The voting system is genius and the energy is unmatched. HotOrNot brings back the excitement of social media.",
      name: "Emma Rodriguez",
      role: "Influencer",
      avatar: "https://i.pravatar.cc/150?img=9",
      rating: 5
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            What Our Community Says
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Join thousands who are experiencing the most addictive social platform
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-pink-600 to-pink-700 rounded-2xl p-12 md:p-16 shadow-2xl">
            <div className="flex flex-col items-center text-center">
              <div className="mb-6">
                <Image
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  width={80}
                  height={80}
                  className="rounded-full border-4 border-white shadow-xl"
                />
              </div>
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-xl md:text-2xl text-white font-normal leading-relaxed mb-8 transition-all duration-500">
                "{testimonials[currentIndex].quote}"
              </blockquote>

              <div className="text-white">
                <p className="font-bold text-lg mb-1">{testimonials[currentIndex].name}</p>
                <p className="text-pink-100">{testimonials[currentIndex].role}</p>
              </div>
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white hover:bg-pink-600 text-slate-900 hover:text-white rounded-full p-3 shadow-xl transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white hover:bg-pink-600 text-slate-900 hover:text-white rounded-full p-3 shadow-xl transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'w-8 bg-pink-600' : 'w-2 bg-slate-700'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
