'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    const formData = new FormData(e.currentTarget);
    const formObject: any = {};
    formData.forEach((value, key) => { formObject[key] = value; });
    try {
      const response = await fetch('https://deep-api-server-2moiw.kinsta.app/api/form_submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          form_data: formObject,
          form_id: 'contact_form',
          project_id: 'd9320ee4-f0c8-4c01-ab6c-b5f762a84053',
          founder_id: '',
          submitted_at: new Date().toISOString()
        })
      });
      if (!response.ok) throw new Error('Failed');
      setStatus('success');
    } catch (error) { setStatus('error'); }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-gradient-to-br from-pink-600 via-pink-700 to-slate-900 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-teal-400 font-semibold text-sm uppercase tracking-wider bg-white/10 px-4 py-2 rounded-full">
              Get In Touch
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Ready to Find Your Match?
          </h2>
          <p className="text-xl text-pink-100 max-w-2xl mx-auto leading-relaxed">
            Join the HotOrNot community and start making instant attraction decisions today
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            {/* Main Contact Card */}
            <div className="rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 p-8 md:p-10 hover:bg-white/15 transition-all duration-500">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-pink-100 leading-relaxed mb-8">
                Whether you're looking to join our platform, partner with us, or just want to say hi—we'd love to hear from you.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-teal-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-pink-200 mb-1">Email Us</div>
                    <a href="mailto:hello@hotornot.com" className="text-white font-semibold hover:text-teal-400 transition-colors duration-300">
                      hello@hotornot.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-teal-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-pink-200 mb-1">Call Us</div>
                    <a href="tel:+1234567890" className="text-white font-semibold hover:text-teal-400 transition-colors duration-300">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-teal-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-pink-200 mb-1">Visit Us</div>
                    <p className="text-white font-semibold">
                      San Francisco, CA
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Card */}
            <div className="rounded-2xl bg-gradient-to-br from-teal-500 to-teal-600 p-8 md:p-10 shadow-2xl">
              <h4 className="text-2xl font-bold text-white mb-6">Join the Movement</h4>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-white mb-2">10M+</div>
                  <div className="text-teal-100 text-sm">Active Users</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-2">500M+</div>
                  <div className="text-teal-100 text-sm">Ratings Made</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-2">24/7</div>
                  <div className="text-teal-100 text-sm">Support</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-2">150+</div>
                  <div className="text-teal-100 text-sm">Countries</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl bg-white shadow-2xl p-8 md:p-10 border border-slate-100">
            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-4">
                  Message Sent! 🎉
                </h3>
                <p className="text-slate-600 leading-relaxed mb-8">
                  Thanks for reaching out! We'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-2">
                  Send Us a Message
                </h3>
                <p className="text-slate-600 leading-relaxed mb-8">
                  Fill out the form below and we'll respond as soon as possible
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full rounded-xl border-2 border-slate-200 focus:border-pink-500 focus:ring-pink-500 py-4 px-5 text-slate-900 transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full rounded-xl border-2 border-slate-200 focus:border-pink-500 focus:ring-pink-500 py-4 px-5 text-slate-900 transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-slate-900 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full rounded-xl border-2 border-slate-200 focus:border-pink-500 focus:ring-pink-500 py-4 px-5 text-slate-900 transition-all duration-300"
                      placeholder="+1 (234) 567-890"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full rounded-xl border-2 border-slate-200 focus:border-pink-500 focus:ring-pink-500 py-4 px-5 text-slate-900 transition-all duration-300 resize-none"
                      placeholder="Tell us what's on your mind..."
                    ></textarea>
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-xl">
                      <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                      <p className="text-sm text-red-600">
                        Something went wrong. Please try again.
                      </p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 group"
                  >
                    {status === 'loading' ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
